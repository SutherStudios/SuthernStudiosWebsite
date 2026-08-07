---
title: 'Colonists that hold a grudge'
date: 2026-05-28
build: '1162'
tag: 'AI'
accent: 'cyan'
summary: 'Mood now has memory. A colonist who watched a friend die near the east wall will avoid it for days. Tiny system, huge difference in how a colony feels alive.'
---

Mood was a number. It went up when good things happened and down when bad things
happened, and that was the whole model. It worked, but it made colonists feel like
gauges rather than people — nothing that happened to them left a mark.

Now mood has memory. Significant events get recorded against the location they
happened in, and colonists carry a decaying association with that place.

## What it looks like in play

A raider kills someone near the east wall. For the next several in-game days, the
colonists who witnessed it will path around that area when they have a choice.
They'll still work there if you order them to — this isn't a hard block — but left
to their own priorities, they avoid it.

The memory decays. After about a week it's gone, unless something else happens
there to refresh it.

## Why it matters more than it should

This is maybe forty lines of code sitting on top of the existing mood system, and
it changed the feel of a colony more than any feature I've added in months.
Players notice it before they can name it: the colony has opinions about its own
geography now.

That's the bet the whole game makes — that ten systems talking to each other beat
a hundred that don't.
