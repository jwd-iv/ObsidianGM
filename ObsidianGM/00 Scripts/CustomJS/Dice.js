class Dice
{
	DiceRoller()
	{
		return app.plugins.plugins["obsidian-dice-roller"]
	}

	Roll(formula, dv)
	{
		return this.DiceRoller().parseDice(formula, "")
		.then(response =>
		{
			let result = response.result

			// customJS.Debug.Print(response.result, dv)
			
			if (result.split)
				result = result?.split('>').pop().trim()

			return result
		})
	}

	TerrainExperiment(dv)
	{
		return this.Roll("[[exploration rules#^terrain-type]]", dv)
		.then(terrain => {
			if (terrain == "Repeat current")
			{
				this.TerrainExperiment(dv)
				return
			}
		
			if (terrain.startsWith('[[') && terrain.endsWith(']]'))
				terrain = terrain.slice(2,-2)

			this.Roll("[[exploration rules#^terrain-element]]", dv)
			.then(element => {
				this.Roll("[[exploration rules#^encounter]]", dv)
				.then(encounter => {
					let combination = dv.page(terrain)[element] ?? "Nothing of note"

					dv.header(2, `[[${terrain}]]`)

					dv.paragraph(`*${element}* - ${combination}`)

					if (encounter !== "Nothing")
						dv.paragraph(`Encounter:: ${encounter}`)
				})
			})
		})
	}

	HiddenFieldRegex()
	{
		return /(?:\()([^\n\:\)]+?) *:: ([^\n\)]*?)(?:\))/g
	}

	VisibleFieldRegex()
	{
		return /(?:\[)([^\n\:\]]+?) *:: ([^\n\]]*?)(?:\])/g
	}

	ExtractData(result, data, dv)
	{
		const extractor = (preserve) => (text, name, value) =>
		{
			// customJS.Debug.Print({[typeof(data[name])] : {text, name, value}}, dv)
			
			if (data) switch (typeof(data[name]))
			{
				case 'undefined':
					data[name] = value
					break

				case 'string':
					if (isNaN(data[name]) || isNaN(value))
						data[name] = [data[name], value]
					else
						data[name] = +data[name] + +value
					break

				case 'number':
					if (isNaN(value))
						data[name] = [data[name], value]
					else
						data[name] = data[name] + +value
					break

				default:
					customJS.Debug.Print({[typeof(data[name])] : {text, name, value}}, dv)
					break
			}

			return preserve
				? `(${value} ${name})`
				: ''
		}

		return result.replace(this.VisibleFieldRegex(), extractor(true))
			.replace(this.HiddenFieldRegex(), extractor(false))

		// customJS.Debug.Print({result: data}, dv)
	}

	async ConflictExperiment()
	{
		let conflict = await this.Roll("[[PFSG-Conflict#^Conflicts]]")
		let subject = await this.Roll("[[PFSG-Conflict#^Conflict-Subject]]")
		let motivation = await this.Roll("[[PFSG-Conflict#^Motivation-Any]]")
		let resolution = await this.Roll("[[PFSG-Conflict#^Conflict-Resolution]]")

		let data = {}

		conflict = this.ExtractData(conflict, data)
		subject = this.ExtractData(subject, data)
		motivation = this.ExtractData(motivation, data)
		resolution = this.ExtractData(resolution, data)

		let alignment = "LG"

		if (data?.CP >= 16)
			alignment = "CE"
		else if (data?.CP > 4)
			alignment = `\`dice: [[PFSG-Alignment#^Alignment-${data.CP}CP]]\``

		return {
			conflict,
			subject,
			motivation,
			resolution,
			alignment
		}
	}
}