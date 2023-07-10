class Statblock
{
	printMonsterWiki(dv, file)
	{
		file ??= dv.current().file

		let data = dv.current().file.frontmatter

		let header = ""
		let text = ""
		let addenda = []

		const print = () =>
		{
			if (text)
			{
				text = text.replace(/^[; ]+/, '').replace(/[; ]+$/, '')
				dv.paragraph(text)
				text = ""
			}
		}

		if (data.Brief)
			text += `*${data.Brief}*`

		print()

		// header

		if (data.File)
			header += data.File

		if (data.CR)
			addenda.push(data.MR
				? `CR ${data.CR}/MR ${data.MR}`
				: `CR ${data.CR}`)
		else if (data.MR)
			addenda.push(`MR ${data.MR}`)

		if (addenda.length)
		{
			header += ' <span style="float:right;">'
				+ addenda.join(", ")
				+ '</span>'
			addenda = []
		}

		dv.header(1, header)
		header = ""

		if (data.Image)
			text += `<a href="${data.Image}"><img src='${data.Image}' width='38%' style='float:right;'/></a>`

		print()

		// brief

		if (data.aliases)
			text += `*a.k.a. ${data.aliases.join(', ')}*`

		print()

		if (data.XP)
			text += `**XP ${data.XP}**`

		print()

		if (data.Race)
			text += ` ${data.Race}`

		if (data.Class)
			text += ` ${data.Class}`

		print()

		if (data.Alignment)
			text += ` ${data.Alignment}`

		if (data.Size)
			text += ` ${data.Size}`

		if (data.Type)
			text += ` ${data.Type}`

		if (data.SubType)
			text += ` ${data.SubType}`

		print()

		if (data.Initiative)
			text += `**Init** ${data.Initiative};`

		if (data.Senses)
			text += ` **Senses** ${data.Senses};`

		if (data.Aura)
			text += ` **Aura** ${data.Aura};`

		print()

		// defense
		dv.header(5, "defense")

		if (data.AC)
			text += `**AC** ${data.AC}`

		if (data.ACMods)
			text += ` ${data.ACMods}`

		print()

		if (data.HP)
			text += `**HP** ${data.HP}`

		if (data.HD)
			text += ` ${data.HD}`

		if (data.HPMods)
			text += `; ${data.HPMods}`

		print()

		text += `**Fort** ${data.Fortitude ?? '-'}`
			+ ` **Ref** ${data.Reflex ?? '-'}`
			+ ` **Will** ${data.Will ?? '-'}`

		if (data.SaveMods)
			text += `; ${data.SaveMods}`

		print()

		if (data.DefensiveAbilities)
			text += `**Defensive Abilities** ${data.DefensiveAbilities};`

		if (data.DR)
			text += ` **DR** ${data.DR};`

		if (data.Immunities)
			text += ` **Immune** ${data.Immunities};`

		if (data.Resist)
			text += ` **Resist** ${data.Resist};`

		if (data.SR)
			text += ` **SR** ${data.SR};`

		print()

		if (data.Weaknesses)
			text += `**Weaknesses** ${data.Weaknesses}`

		print()

		// offense
		dv.header(5, "offense")

		if (data.Space)
			text += `**Space** ${data.Space};`

		if (data.Speed)
			text += ` **Speed** ${data.Speed};`

		if (data.MoveMods)
			text += ` ${data.MoveMods};`

		if (data.Burrow)
			text += ` **Burrow** ${data.Burrow};`

		if (data.Climb)
			text += ` **Climb** ${data.Climb};`

		if (data.Fly)
		{
			text += ` **Fly** ${data.Fly}`

			if (data.Maneuverability)
				text += ` (${data.Maneuverability})`

			text += ';'
		}

		if (data.Swim)
			text += ` **Swim** ${data.Swim};`

		print()

		if (data.Melee)
			text += ' **Melee** '
				+ data.Melee.map(m => `${m.Attack} (${m.Effect})`)
					.join(', ')
				+ ';'

		if (data.Reach)
			text += ` **Reach** ${data.Reach};`

		print()

		if (data.Ranged)
			text += ' **Ranged** '
				+ data.Ranged.map(r => `${r.Attack} (${r.Effect})`)
					.join(', ')
				+ ';'

		print()

		if (data.SpecialAttacks)
			text += `**Special Attack(s)**: ${data.SpecialAttacks}`

		print()

		// statistics
		dv.header(5, "statistics")

		if (data.STR)
			text += ` **Str** ${data.STR};`

		if (data.DEX)
			text += ` **Dex** ${data.DEX};`

		if (data.CON)
			text += ` **Con** ${data.CON};`

		if (data.INT)
			text += ` **Int** ${data.INT};`

		if (data.WIS)
			text += ` **Wis** ${data.WIS};`

		if (data.CHA)
			text += ` **Cha** ${data.CHA};`

		print()

		if (data.BAB)
			text += ` **Base Atk** ${data.BAB};`

		if (data.CMB)
			text += ` **CMB** ${data.CMB};`

		if (data.CMD)
			text += ` **CMD** ${data.CMD};`

		print()

		if (data.Feats)
			text += `**Feats** ${data.Feats}`

		print()

		if (data.Skills)
			text += ` **Skills** ${data.Skills};`

		if (data.RacialMods)
			text += ` **Racial Modifiers** ${data.RacialMods};`

		print()

		if (data.Languages)
			text += `**Languages** ${data.Languages}`

		print()

		if (data.SQ)
			text += `**SQ** ${data.SQ}`

		print()

		// special
		dv.header(5, "special")

		if (data.SpellLikeAbilities)
			text += `**Spell-Like Abilities**: ${data.SpellLikeAbilities}`

		print()

		if (data.SpellDomains)
			text += ` **Domain(s)** ${data.SpellDomains};`

		if (data.Bloodline)
			text += ` **Bloodline** ${data.Bloodline};`

		print()

		if (data.SpellsKnown)
		{
			text += ` **Spells Known** (${data.SpellsKnown._})`
			
			print()

			text += Object.keys(data.SpellsKnown)
				.filter(key => key !== '_')
				.map(key =>
					`- ${key}—` + data.SpellsKnown[key].join(', ')
				)
				.join("\n")

			print()
		}

		if (data.SpellsPrepared)
			text += ` **Spells Prepared**: ${data.SpellsPrepared};`

		print()

		if (data.SpecialAbilities)
		{
			Object.keys(data.SpecialAbilities)
				.map(key => dv.paragraph(
					`*${key}*—` + data.SpecialAbilities[key]
				))
		}

		print()

		// ecology
		dv.header(5, "ecology")

		if (data.Environment)
			text += ` **Environment** ${data.Environment};`

		if (data.Temperature)
			text += ` **Temperature** ${data.Temperature};`

		print()

		// if (data.Group)
		// 	text += ` **Group** ${data.Group};`

		if (data.Organization)
			text += ` **Organization** ${data.Organization};`

		print()

		if (data.Treasure)
			text += `**Treasure** ${data.Treasure}`

		print()

		// description
		//dv.header(5, "description")

		if (data.Description)
			text += `${data.Description}`

		print()

		// source
		// dv.header(5, "source")
		dv.span("<hr />")

		if (data.Copyright)
		{
			text += Object.keys(data.Copyright)
				.map(c => `${c} © ${data.Copyright[c]}`)
				.join("; ")

			print()
		}
	}
}
