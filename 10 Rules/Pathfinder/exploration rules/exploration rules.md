---
aliases:

tags:

BC-folder-note: "contains"

created: 2021-08-22
---
# exploration rules


## terrain generation

> Let players choose which direction they travel, and let each take a turn generating the next hex by rolling 1d20 twice to determine the terrain type and terrain element for that hex using the tables below.

- [ ] Add a [[Obsidian Buttons|Button]] to roll a new tile: [[#^terrain-type]], Element^[roll [[#^terrain-element]] and then grab that `^element` from the terrain], [[#^encounter]]

| dice:1d20 | Terrain Type             |
| --------- | ------------------------ |
| 1–3       | [[forest (terrain)]]     |
| 4–6       | [[hills (terrain)]]      |
| 7–8       | [[marsh (terrain)]]      |
| 9–10      | [[mountains (terrain)]]  |
| 11–13     | [[plains (terrain)]]     |
| 14        | [[settlement (terrain)]] |
| 15–16     | [[water (terrain)]]      |
| 17–20     | Repeat current           |
^terrain-type

`dice: [[exploration rules#^terrain-type]]`

| dice:1d20 | Terrain Element |
| --------- | --------------- |
| 1–3       | Difficult       |
| 4–6       | Feature         |
| 7–10      | Hunting Ground  |
| 11–12     | Resource        |
| 13–14     | Secret          |
| 15–20     | Standard        |
^terrain-element

`dice: [[exploration rules#^terrain-element]]`


| dice:1d% | Result  |
| -------- | ------- |
| 01–50    | Nothing |
| 51–60    | Hazard  |
| 61–100   | Monster |
^encounter

`dice: [[exploration rules#^encounter]]`


## movement

> Each hex is 12 miles across from corner to corner, just under 95 square miles.
>
> To determine how long it takes the PCs to travel through a hex or fully explore it, determine the group’s slowest member's speed and consult **[[#travel time]]** or **[[#exploration time]]**. Other rules can modify the amount of time it takes to travel through or fully explore a hex.
> 
> A typical wilderness hex is trackless, though no [humanoid](https://www.d20pfsrd.com/bestiary/rules-for-monsters/creature-types#TOC-Humanoid)-created roads or trails pass through it, trails by game [animals](https://www.d20pfsrd.com/bestiary/rules-for-monsters/creature-types#TOC-Animal) might. If a hex contains more than one terrain type, treat it as the most prevalent terrain for the purpose of travel times.

- [ ] move the following data into their respective files


### travel time

| Party Speed | Plains   | All Other Terrain |
| ----------- | -------- | ----------------- |
| 15 feet     | 11 hours | 16 hours          |
| 20 feet     | 8 hours  | 12 hours          |
| 30 feet     | 5 hours  | 8 hours           |
| 40 feet     | 4 hours  | 6 hours           |
| 50 feet     | 3 hours  | 5 hours           |


### exploration time

| Party Speed | Plains or Hill | Desert, Forest, or Marsh | Mountains |
| ----------- | -------------- | ------------------------ | --------- |
| 15 feet     | 3 days         | 4 days                   | 5 days    |
| 20 feet     | 2 days         | 3 days                   | 4 days    |
| 30 feet     | 1 day          | 2 days                   | 3 days    |
| 40 feet     | 1 day          | 1 day                    | 2 days    |
| 50 feet     | 1 day          | 1 day                    | 1 day     |


## sources

- [Exploration & Movement in Sandbox Campaigns](https://www.d20pfsrd.com/gamemastering/other-rules/exploration-and-movement-sandbox/)
- https://pathfinder.d20srd.org/ultimateCampaign/campaignSystems/exploration.html
