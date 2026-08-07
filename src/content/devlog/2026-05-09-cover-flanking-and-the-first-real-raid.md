---
title: 'Cover, flanking, and the first real raid'
date: 2026-05-09
build: '1140'
tag: 'Combat'
accent: 'ember'
summary: 'Ranged combat now respects cover and line-of-sight. The first scripted raid is in — and it is, correctly, terrifying.'
---

Ranged combat shipped as a hit roll and a damage number. Distance mattered, and
nothing else did. Walls were decoration. You could stand in the open and trade
shots with a raider behind a stone barricade and the barricade did nothing.

Cover is in now, and it changes everything downstream.

## How it resolves

Every ranged attack traces a line from shooter to target. Anything solid along
that line contributes cover, weighted by how close it sits to the target —
a wall a colonist is pressed against protects far more than one halfway down the
field. Full blockers stop the shot outright.

Colonist AI reads the same data when choosing where to stand, so they'll take up
positions behind cover on their own rather than wandering into a firing line.

## The first raid

With cover working, the first scripted raid went in. Three raiders, basic gear,
approaching from a map edge.

It is, correctly, terrifying. The first attempt cost me two colonists because I'd
built a wall with a gap I never thought of as a firing lane. The raiders found it
immediately. The system didn't need to be told to do that — it fell out of cover
plus pathfinding meeting each other.

That's the tell that a system is working: it surprises the person who wrote it.
