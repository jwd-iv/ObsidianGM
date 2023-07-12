class Spell
{
	printWiki(dv, page)
	{
		page ??= dv.current()

		const data = (key) =>
		{
			return page.file.frontmatter[key] ?? page[key]
		}

		let header = ""
		let text = ""
		let addenda = []

		const debugPrinter = (_) =>
		{
			customJS.Debug.Print(_, dv)
		}

		const paragraphPrinter = (_) =>
		{
			dv.paragraph(_)
		}

		const print = (text, printer = paragraphPrinter) =>
		{
			if (text)
				printer(text)
		}

		const items = (items, joiner = '; ') =>
		{
			if (typeof items !== typeof [])
				items = [items]

			items = items
				?.map(_ =>
					_?.toString()
						.trim()
					?? ''
				)
				.filter(_ => _)

			return items?.length
				? items.join(joiner)
				: ''
		}

		const parenthetical = (text) =>
			text ? ` (${text})` : ''

		const bracketed = (text) =>
			text ? ` [${text}]` : ''

		const braced = (text) =>
			text ? ` {${text}}` : ''

		const italics = (text) =>
			text ? `*${text}*` : ''

		const bold = (text) =>
			text ? `**${text}**` : ''

		const lineItem = (name, value) =>
			name && value
				? `${bold(name)} ${value}`
				: ''

		const joinMap = (joiner, obj) =>
			items(
				Object.keys(obj).map(_ =>
					`${_} ${obj[_]}`),
				joiner
			)

		const dataMapItem = (name, key, joiner) =>
			lineItem(name, joinMap(joiner, data(key) ?? {}))

		// header

		header += data("File")

		if (addenda.length)
		{
			header += '<span style="float:right;">'
				+ addenda.join(", ")
				+ '</span>'
		}

		print(header, (_) =>
		{
			dv.header(2, _)
		})

		print(items([
			lineItem("School", data("School"))
				+ parenthetical(data("Subschool"))
				+ bracketed(items(data("Aspects"), ', ')),
			dataMapItem("Level",     "ClassList", '/' ),
			dataMapItem("Bloodline", "Bloodline", ', '),
			dataMapItem("Domains",   "Domains",   ', '),
			dataMapItem("Mystery",   "Mystery",   ', '),
			dataMapItem("Patron",    "Patron",    ', '),
		]))

		print(items([
			lineItem("Casting Time", data("CastTime"))
		]))

		let components = data("Components")

		print(items([
			lineItem("Components", items(
				Object.keys(components).map(_ =>
				{
					let c = components[_]
					
					return !!c
						? _ + parenthetical(
							c ? c.replace(/^yes$/, '') : ''
						)
						: ''
				}),
				', '
			))
		]))

		print(items([
			lineItem("Range",   data("Range")),
			lineItem("Targets", data("Targets")),
			lineItem("Area",    data("Area")
				+ parenthetical(!!data("Shapeable") ? 'S' : '')
			)
		]))

		print(items([
			lineItem("Effect", data("Effect"))
		]))

		print(items([
			lineItem("Duration", data("Duration"))
				+ parenthetical(!!data("Dismissible") ? 'D' : '')
		]))

		print(items([
			lineItem("Saving Throw",     data("SavingThrow")),
			lineItem("Spell Resistance", data("SR"))
		]))

		dv.span("<hr />")

		if (data("Copyright"))
		{
			print(items([
				Object.keys(data("Copyright"))
				.map(c => `${c} © ${data("Copyright")[c]}`)
			]))
		}
	}
}
