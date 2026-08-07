---
title: 'Layered biomes & the radiation pass'
date: 2026-06-12
build: '1184'
tag: 'World-gen'
accent: 'ember'
summary: 'Rewrote world generation to layer climate over terrain before scattering biomes. Radiation now spreads from ruined-city seeds with falloff, so the map reads like a place that something happened to — not noise.'
---

World generation used to run in one pass. Terrain, climate, and biomes were all
decided at once, from the same noise field, and it showed — you'd get a desert
touching a tundra with nothing in between, because nothing in the system knew
those two things shouldn't be neighbours.

The rewrite splits it into ordered layers. Terrain first: elevation, then water.
Climate second, reading elevation so mountains actually cast rain shadows.
Biomes last, assigned from the climate result rather than sampled independently.

## Radiation with a source

The bigger change is radiation. It used to be scattered noise — a hazard sprinkled
across the map with no explanation. Now it spreads outward from ruined-city seeds
with distance falloff, so hot zones cluster around the places that would plausibly
still be hot decades later.

That single change did more for the map's readability than the biome work did. You
look at a generated world now and you can reconstruct what happened to it. The
ruins are the story, and the radiation is the evidence.

## What's next

Road networks currently ignore radiation entirely, which means the pathfinder will
happily route a trade route straight through a hot zone. That's the next fix.
