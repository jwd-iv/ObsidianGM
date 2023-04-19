project:: [[Obsidian Dungeonmastery]]

uses:: [[CustomJS]]

# #snippets


## [[Regex]]
For matching inline values:
```regex
(?:\()(?<name>[^\n\:\)]+?) *:: (?<value>[^\n\)]*?)(?:\))
(?:\[)(?<name>[^\n\:\]]+?) *:: (?<value>[^\n\]]*?)(?:\])
```

For matching dice formulas:
```regex
`dice *: *(?<formula>[^\n`]+?)`
```

# Terrain experiment

```dataviewjs
await customJS.Dice.TerrainExperiment(dv)
```


# Conflict experiment
```dataviewjs
let result = await customJS.Dice.ConflictExperiment()
dv.paragraph(`Conflict:: ${result.conflict}`)
dv.paragraph(`Subject:: ${result.subject}`)
dv.paragraph(`Motive:: ${result.motivation}`)
dv.paragraph(`Resolution:: ${result.resolution}`)
dv.paragraph(`Alignment:: ${result.alignment}`)
```


## [[React.js]] experiment

`jsx:<ComplexDiceRoll formula={"[[PFSG-Alignment#^Alignment-9CP]]"}/>`
