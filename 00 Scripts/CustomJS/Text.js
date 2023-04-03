class Text
{
	// inspired by [Dannyu NDos](https://codegolf.stackexchange.com/q/211920)
	findPair(str, pair)
	{
		pair ??= ['(', ')']

		if (!str?.length)
			return [null, str, null]

		let match = pair
			?.map(c => [c, str?.indexOf(c)])
			?.filter(find => find[1] >= 0)
			?.sort((a, b) => a[1] - b[1])
			?.shift()

		let left = -1
		let depth = 0
		let right = -1

		for (let i = 0; i < str.length; ++i)
		{
			switch (str[i])
			{
			case pair[0]: //starting new pair

				if (!depth)
				{
					if (left < 0)
					{
						customJS.Debug.Print({opening: i, depth})
						left = i
					}
				}

				++depth

				break

			case pair[1]: //closing a pair
				
				--depth

				if (!depth)
				{
					if (right < 0)
					{
						customJS.Debug.Print({ending: i, depth})
						right = i

						if (left >= 0)
							return [
								str.slice(0, left),
								str.slice(left+1, right),
								str.slice(right+1, str.length)
							]
					}
				}
				
				break
			}
		}
	}

	*getParentheticalOptions(title, dv)
	{
		if (!title?.length)
			yield title

		let result = this.findPair(title)

		if (!result)
			yield title
		else
		{
			let options = [
				(result[0]??'') + (result[2]??''),
				(result[0]??'') + (result[1]??'') + (result[2]??'')
			]

			for (const option of options)
			{
				let suboptions = [
					...this.getParentheticalOptions(
						option.trim()
							  .replace("  ", " ")
				, dv)]

				for (const suboption of suboptions)
					yield suboption
			}

			// customJS.Debug.Print({options}, dv)
		}
	}

	tokenize(str)
	{
		return [...customJS.Util.flatten(
			str?.match(/\d+|\D+/g)
			?.map(m =>
				m?.match(/[A-Za-z]+|[^A-Za-z]+/g)
				?.map(m2 =>
					m2?.match(/([A-Z]?[a-z]+)|([A-Z]+)(?=$|[A-Z])/g)
					?? m2
				)
				?? m
			)
			?? str
		)]
	}
}
