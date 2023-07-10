XP Min:: 600
XP Max:: 1100

biomes:: coast, jungle, sky, forest

```dataviewjs
let biomes = dv.current()["biomes"]
let xpMin = dv.current()["XP Min"]
let xpMax = dv.current()["XP Max"]

if (typeof(biomes) == typeof(""))
	biomes = biomes.split(",").map(b => b.trim())

if (!(biomes?.length > 0))
	biomes = []

//customJS.Debug.Print(biomes, dv)

const excludeBiome = (environment) =>
  !(biomes.length
  && biomes.some(b =>
	  b.contains("any")
	  || environment.contains(b)
	  || b.contains(environment)
  ))

let critters = dv.pages('"10 Rules/Pathfinder/PF monsters db"')
	.where(p =>
		 p.file.frontmatter?.XP
		 &&
		 (!xpMin || xpMin <= p.file.frontmatter.XP)
		 &&
		 (!xpMax || p.file.frontmatter.XP <= xpMax)
	)
	.sort(p => -p.file.frontmatter.CR)

let critterFiles = {}

for (const critter of critters)
{
	for (const env of critter.file.frontmatter.Environment?.split('/') ?? [])
	{
		if (excludeBiome(env))
			continue
		critterFiles[env] ??= []
		critterFiles[env].push(critter.file)
	}
}

let last = null

for (let env of Object.keys(critterFiles).sort())
{
	let header = last && env.startsWith(last)
		? 3 : 2
	let list = critterFiles[env]
		.sort(f => f.frontmatter.CR)

	if (header == 3)
		env = env.replace(last, '').trim()
	
	dv.header(header, env)
	dv.list(list.map(critterFile =>
		`[CR:: ${critterFile.frontmatter.CR}] `
			+ critterFile.link
			+ ': ' + [
				critterFile.frontmatter.Alignment,
		 		critterFile.frontmatter.Size,
		 		critterFile.frontmatter.Type,
		 		critterFile.frontmatter.SubType
	 		].filter(f => f)
	 		.join(" ")
		).sort()
	)

	if (header == 2)
		last = env
}
```
