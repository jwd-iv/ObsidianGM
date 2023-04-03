class Debug
{
    Print(obj, dv)
    {
        let str = JSON.stringify(this.DeconstructObject(obj), null, 2)

        if (dv)
            dv.paragraph("```json\n" + str + "\n```")
        else
            console.log(str)
    }

    DeconstructObject(obj, visited, prevDepth)
    {
        visited ??= new WeakSet()
        let depth = prevDepth ?? 0
        
        if (obj == null)
            return null
        else if (obj == undefined)
            return undefined
        // else if (typeof(obj) == "string")
        //     return obj
        else if (Array.isArray(obj))
            return this.DeconstructArray(obj, visited, depth + 1)
        else if (typeof(obj) == 'function')
            return 'function'
        else if (typeof(obj) == 'object')
        {
            if (depth >= 20)
                return "too deep"
            else if (visited.has(obj))
                return 'circular reference'

            visited.add(obj)

            let deconstruction = { }

            for (const key of Object.getOwnPropertyNames(obj)
                .filter(prop => prop !== 'app' && prop !== 'plugin' && prop !== 'vault' && prop !== 'file'))
                deconstruction[key] = this.DeconstructObject(obj[key], visited, depth + 1)

            return deconstruction
        }
        else
            return obj
    }

    DeconstructArray(array, visited, prevDepth)
    {
        let items = []

        for (let i = 0; i < array.length; ++i)
            items.push(this.DeconstructObject(array[i], visited, (prevDepth ?? 0) + 1))

        return items
    }

    Verify(name, value, expected, dv)
    {
        if (!name)
            return;

        let block = {
            [name] : value
        }

        if (value != expected)
                block["should be"] = expected

        if (dv)
            this.Print(block, dv)

        return block;
    }
}
