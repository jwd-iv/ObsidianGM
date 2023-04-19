---
aliases:

tags:

status: 🌰
created: 2022-07-25
BC-folder-note: includes
---
# PFMIG

From [[PF Core Rulebook.pdf]]/[d20PFSRD](https://www.d20pfsrd.com/magic-items/)

```button
name Reroll Dice
type command
action Dice Roller: Re-roll Dice
```
^button-duiq

|        | Quick Roller             |
| ------ | ------------------------ |
| Minor  | `dice:[[PFMIG#^Minor]]`  |
| Medium | `dice:[[PFMIG#^Medium]]` |
| Major  | `dice:[[PFMIG#^Major]]`  |


| dice: 1d% | Item                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| 01–04     | `dice:[[PFMIG#^Armament-Size]]` `dice: [[PFMIG-A#^Minor-Armor-or-Shield]]`                                   |
| 05–09     | `dice:[[PFMIG#^Armament-Size]]` `dice: [[PFMIG-W#^Minor-Magic-Weapon]]` `dice: [[PFMIG-W#^Special-Quality]]` |
| 10–44     | `dice:[[PFPoG#^Minor-Potion-Or-Oil]]`                                                                        |
| 45–46     | `dice:[[PFMIG-Ri#^Minor]]` `dice:[[PFMIG-Ri#^Special]]`                                                      |
| 47–81     | `dice:[[PFMIG-Sc#^Minor]]`                                                                                   |
| 82–91     | `dice:[[PFMIG-Wa#^Minor]]`                                                         |
| 92–100    | `dice:[[PFMIG-Wi#^Minor]]` `dice:[[PFMIG-Wi#^Special]]` |
^Minor

| dice: 1d% | Item                                                                                                          |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| 01–10     | `dice:[[PFMIG#^Armament-Size]]` `dice: [[PFMIG-A#^Medium-Armor-or-Shield]]`                                   |
| 11–20     | `dice:[[PFMIG#^Armament-Size]]` `dice: [[PFMIG-W#^Medium-Magic-Weapon]]` `dice: [[PFMIG-W#^Special-Quality]]` |
| 21–30     | `dice:[[PFPoG#^Medium-Potion-Or-Oil]]`                                                                        |
| 31–40     | `dice:[[PFMIG-Ri#^Medium]]` `dice:[[PFMIG-Ri#^Special]]`                                                      |
| 41–50     | `dice:[[PFMIG-Ro#^Medium]]` `dice:[[PFMIG-Ro#^Special]]`                                                      |
| 51–65     | `dice:[[PFMIG-Sc#^Medium]]`                                                                                   |
| 66–68     | `dice:[[PFMIG-St#^Medium]]` `dice:[[PFMIG-St#^Special]]`                                                      |
| 69–83     | `dice:[[PFMIG-Wa#^Medium]]`                                                                                   |
| 84–100    | `dice:[[PFMIG-Wi#^Minor]]` `dice:[[PFMIG-Wi#^Special]]`                                                       |
^Medium

| dice: 1d% | Item                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| 01–10     | `dice:[[PFMIG#^Armament-Size]]` `dice: [[PFMIG-A#^Major-Armor-or-Shield]]`                                   |
| 11–20     | `dice:[[PFMIG#^Armament-Size]]` `dice: [[PFMIG-W#^Major-Magic-Weapon]]` `dice: [[PFMIG-W#^Special-Quality]]` |
| 21–25     | `dice:[[PFPoG#^Major-Potion-Or-Oil]]`                                                                        |
| 26–35     | `dice:[[PFMIG-Ri#^Major]]` `dice:[[PFMIG-Ri#^Special]]`                                                      |
| 36–45     | `dice:[[PFMIG-Ro#^Major]]` `dice:[[PFMIG-Ro#^Special]]`                                                      |
| 46–55     | `dice:[[PFMIG-Sc#^Major]]`                                                                                   |
| 56–75     | `dice:[[PFMIG-St#^Major]]` `dice:[[PFMIG-St#^Special]]`                                                      |
| 76–80     | `dice:[[PFMIG-Wa#^Major]]`                                                                                   |
| 81–100    | `dice:[[PFMIG-Wi#^Minor]]` `dice:[[PFMIG-Wi#^Special]]`                                                      |
^Major


## to-do

- [ ] Incorporate [cursed items](https://www.d20pfsrd.com/magic-items/cursed-items/)


## armament modifiers

| dice: d% | Armament Size                                 |
| -------- | --------------------------------------------- |
| 01-30    | small-sized                                   |
| 31-95    |                                               |
| 96-100   | `dice: [[PFMIG#^Armament-Exotic-Size]]`-sized |
^Armament-Size

| dice: d6 | Exotic Armament Size |
| -------- | -------------------- |
| 1        | fine                 |
| 2        | diminuitive          |
| 3        | tiny                 |
| 4        | huge                 |
| 5        | gargantuan           |
| 6        | colossal             |
^Armament-Exotic-Size

| dice: d% | Special Material |
| --- | --- |
| 01-95 |  |
| 96-100 | made of a [special material](https://www.d20pfsrd.com/equipment/special-materials) |
^Armament-Special-Material


## misc tables

| dice: 1d5 | Energy      |
| --------- | ----------- |
| 1         | acid        |
| 2         | cold        |
| 3         | electricity |
| 4         | fire        |
| 5         | sonic       |
^Energy-Type


## availability

Table: Available Magic Items

| Community Size | Base Value | Minor             | Medium            | Major             |
| -------------- | ---------- | ----------------- | ----------------- | ----------------- |
| Thorp          | 50 gp      | `dice: 1d4` items | —                 | —                 |
| Hamlet         | 200 gp     | `dice: 1d6` items | —                 | —                 |
| Village        | 500 gp     | `dice: 2d4` items | `dice: 1d4` items | —                 |
| Small town     | 1,000 gp   | `dice: 3d4` items | `dice: 1d6` items | —                 |
| Large town     | 2,000 gp   | `dice: 3d4` items | `dice: 2d4` items | `dice: 1d4` items |
| Small city     | 4,000 gp   | `dice: 4d4` items | `dice: 3d4` items | `dice: 1d6` items |
| Large city     | 8,000 gp   | `dice: 4d4` items | `dice: 3d4` items | `dice: 2d4` items |
| Metropolis     | 16,000 gp  | Almost all        | `dice: 4d4` items | `dice: 3d4` items |

See also [Table: Available Magic Items](https://www.d20pfsrd.com/gamemastering/other-rules/settlements#table-available-magic-items) per [Settlements](https://www.d20pfsrd.com/gamemastering/other-rules/settlements) rules from the Gamemastery Guide.
