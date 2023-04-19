---
aliases:

tags:

created: 2021-10-05
---
# terrain generator

areas:: [[software engineering]]

project:: [[Pathfinder procgen]]

using:: [[Procedural generation]], [[exploration rules]], [[dice roller test]], [[hex coordinates]]

Use [[CustomJS]] and [[Obsidian plugin#^DiceRoller]] to write a [[QuickAdd]] macro that can run [[exploration rules]] to generate new map tiles, encounters, etc.

## to-do

- [ ] Import [[exploration rules]]


## #ideas 

- Tile notes
	- variables
		- `encounter-rate::`
			- Starts at 0
			- [ ] When rolling an encounter, keep rolling while result is too low
		- [ ] `in::` the Map this tile belongs to
		- [ ] `adjacent::` A list of bordering tiles
		- [ ] `map-coord::` array of coordinate values

- Map variables
	- `coord-style::`
		- hex - [[hex coordinates]]
		- grid - [[euclidean coordinates]]
			- 2D?
			- 3D?
		- zone?
		- simplex?
		- [[voronoi]]?

- Use [[Obsidian Dungeonmastery#^AzgaarsMapGen]] to create a map
	- Download a map via [[HTTP]] `GET` request?
	- Pick a random starting point
	- Feed that climate info to the tile generator

- Integration with [[Obsidian Dungeonmastery#^Leaflet|Leaflet maps]]?
