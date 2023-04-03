class Util
{
	distinct(value, index, self)
	{
		return self.indexOf(value) === index
	}

	distinctIgnoreCase(value, index, self)
	{
		return this.distinct(value, index, self)
			&& !self.some(item => item.toLowerCase() == value.toLowerCase())
	}

	Group(items, splitter)
	{
		if (typeof(splitter) !== typeof(()=>''))
			splitter = (item) => (item == splitter).toString()

		return items.reduce((groups, item) =>
		{
			const split = splitter(item)
			
			groups[split] ??= []
			groups[split].push(item)

			return groups
		}, {})
	}

	sortIgnoreCase(a, b)
	{
		return a.toLowerCase().localeCompare(b.toLowerCase())
	}

	*flatten(items)
	{
		if (!this.isIterable(items) || typeof(items) == typeof(''))
			yield items
		else for (const item of items)
			for (const subitem of [...this.flatten(item)])
				yield subitem
	}

	isIterable(obj)
	{
		return Symbol.iterator in Object(obj) && typeof(obj) !== typeof('')
		// // checks for null and undefined
		// if (obj == null)
		// 	return false;
		// return
		// 	typeof obj[Symbol.iterator] === 'function';
	}
}
