class BCFuncs
{
	API() 
	{
		return app.plugins.plugins["breadcrumbs"].api
	}

	getNeighbors(name, direction, fields)
	{
		let neighbours = this.API()
			.getMatrixNeighbours(name)[direction]

		if (typeof(fields) !== typeof([]) && fields)
			fields = [fields]

		neighbours =
			[
				...neighbours.reals
			]
			.filter(neighbor => !fields || fields.includes(neighbor.field))
			.map(neighbor => neighbor.to)
			.filter(customJS.Util.distinct)

		return neighbours.sort()
	}

	getAllFilesDownFrom(names, fields)
	{
		if (typeof(names) !== typeof([]))
			names = [names]

		let results = []

		while (names.length > 0)
		{
			let name = names.shift()

			if (name.path)
				name = name.path.match(/[^/]+(?=\..*$)/)[0]
			else if (typeof(name) !== typeof(''))
			{
				customJS.Debug.Print({name})
				throw `Unsure how to handle name '${name}'`
			}
			
			if (results.indexOf(name) >= 0)
				continue

			results.push(name)

			names = names.concat(this.getNeighbors(name, 'down', fields))
		}

		return results
	}
}
