<%* let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  }
  let titles =
	[...customJS.Text.getParentheticalOptions(title)]
tR += `---
File: ${title}
aliases:
${titles?.length > 1
	? titles.map(t => "- " + customJS.YAML.Escape(t))
		.join("\n")
	: ''
}` -%>
Copyright:
  Content: 

# brief
Brief      : 
CR         : 
MR         : 
Image      : 
XP         : 
Race       : 
Class      : 
Alignment  : 
Size       : 
Type       : 
SubType    : 
Initiative : 
Senses     : 
Aura       : 

# defense
AC                 : 
ACMods             : 
HP                 : 
HD                 : 
HPMods             : 
Fortitude          : 
Reflex             : 
Will               : 
SaveMods           : 
DefensiveAbilities : 
DR                 : 
Immunities         : 
Resist             : 
SR                 : 
Weaknesses         : 

# offense
Space           : 
Speed           : 
MoveMods        : 
Burrow          : 
Climb           : 
Fly             : 
Maneuverability : 
Swim            : 
Melee           : 
Reach           : 
Ranged          : 
SpecialAttacks  : 

# stats
STR        : 
DEX        : 
CON        : 
INT        : 
WIS        : 
CHA        : 
BAB        : 
CMB        : 
CMD        : 
Feats      : 
Skills     : 
RacialMods : 
Languages  : 
SQ         : 

# special
SpecialAbilities   : 
SpellLikeAbilities : 
SpellsKnown        : 
SpellsPrepared     : 
SpellDomains       : 
Bloodline          : 

# ecology
Group        : 
Environment  : 
Temperature  : 
Organization : 
Treasure     : 
---
```dataviewjs
customJS.Statblock.printMonsterWiki(dv)
```
