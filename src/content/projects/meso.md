---
title: MESO Optimization Module
summary: Leading development of the optimization module for MESO, a Python/Pyomo platform for capacity expansion and hourly dispatch optimization.
org: Angler Solutions
period: 2026 – Present
tags: [Python, Pyomo, MILP, Stochastic optimization, Benders decomposition]
featured: 4
order: 1
---

MESO (Model for Energy Systems Optimization) is a Python/Pyomo platform for capacity expansion planning and hourly dispatch optimization. I lead development and documentation of its optimization module.

## Hourly dispatch engine

I built the dispatch engine, which supports a growing list of generators and dynamic loads. Generators, grid imports and exports, and hydrogen/ammonia assets are dispatched against time-of-use rates using locational marginal pricing.

## Flexible modelling modes

The model architecture lets users choose how they want to model a system:

- Full-year deterministic optimization
- Stochastic optimization
- Rolling horizon dispatch
- Representative periods
- Benders decomposition

## Configurable complexity

Users can also choose:

- The temporal resolution
- Existing and candidate generators
- Integer or continuous investment decisions
- How detailed each system's model is: linearized models, ramping rates, start-up/shut-down costs, unit commitment
