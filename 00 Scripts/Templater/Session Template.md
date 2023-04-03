<% tp.file.include("[[New Note Template]]") %>
<%-*
let campaign = await tp.system.prompt("Which campaign?")
let number = await tp.system.prompt("What session # is this?")
let name = `${campaign}-S${String(number).padStart(2, '0')}`
await tp.file.rename(name.replace(/\[|\]/g, ''))
tR += `
#session

${(tp.file.title && tp.file.title !== "Untitled"
	? `**Name** :: ${tp.file.title}`
	: ''
)}
*number* :: ${number}
*in* :: [[${campaign}]]
*after* :: [[${campaign} Session ${number-1}]]
` -%>

**Date**:: #missing/date 

**PCs**:: #missing/links 

**Locations**:: #missing/links 

**NPCs**:: #missing/links 

## Start

%% #missing/brief  what's happening? %%

%% #missing/motive What's the initial focus of the session? %%

%% #missing/what will get us close to the action? %%

> #missing/description  Strong Start opener here


## Possible Scenes
%% About 1 scene per hour of expected gameplay %%

- %% #missing/items  What potential scene might unfold? %%
	- %% #missing/info  How might the players handle it? %%


## Secrets and Clues
%% Things the characters may discover %%

```dataviewjs
customJS.DnD.listSecrets(dv,
	dv.current().PCs
	.concat(dv.current().NPCs)
	.concat(dv.current().locations)
)
```


## Loot

```dataviewjs
customJS.DnD.listLoot(dv,
	dv.current().PCs
	.concat(dv.current().NPCs)
	.concat(dv.current().locations)
)
```


## Extras

```dataviewjs
customJS.DnD.listExtras(dv,
	dv.current().PCs
	.concat(dv.current().NPCs)
	.concat(dv.current().locations)
)
```


## happenings

%% #missing/items 
What happened?
How did it go? %%
