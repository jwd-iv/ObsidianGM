class YAML
{
	Escape(str)
	{
		let chars = ['"', '\'', ',', '-', ':', '[', ']']
			.filter(c => str.indexOf(c) + 1)

		if (chars.length && !chars.includes('"'))
			str = `"${str}"`
		else if (chars.length)
		{
			if (chars.includes("'"))
				str = str.replaceAll("'", "''")

			str = `'${str}'`
		}

		return str
	}	
}
