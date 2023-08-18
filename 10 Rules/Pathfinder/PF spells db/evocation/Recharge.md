---
File: Recharge
School: evocation
ClassList: { bard: 2, cleric: 3, oracle: 3, magus: 3, sorcerer: 3, wizard: 3 }
CastTime: 1 round
Range: touch
Targets: object touched
Duration: instantaneous
SavingThrow: Fortitude negates (object)
SR: yes (object)
Components:
  V: yes
  S: yes
  M: 500 gp of diamond dust
SLALevel: 3
GPCost: 500
Copyright:
  Content: "Technology Guide"
---
Brief:: 

```dataviewjs
customJS.Spell.printWiki(dv)
```

You restore up to 1 charge per level to a battery or half that number of charges to a technological item capable of being charged by a battery. If you recharge a battery, there is a 20% chance that the battery is destroyed by the attempt. If you restore more charges than the item can hold, the item must succeed at a Fortitude saving throw or take 1d6 points of electricity damage for each excess charge. This spell provides no knowledge of how many charges an item can safely hold, but you can choose to bestow fewer charges than the maximum allowed to reduce the risk; you must declare how many charges you are restoring before casting this spell.