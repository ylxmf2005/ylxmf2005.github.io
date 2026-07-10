---
title: About
description: About Ethan Li and his work on AI agent evaluation, infrastructure, and coding agents.
---

Hi, I'm Ethan Li. I'm a Computer Science undergraduate at The Hong Kong Polytechnic University, an undergraduate research assistant with the PolyU NLP Group, and currently an intern with Tencent PCG's Machine Learning Platform team.

## What I work on

My current work centers on AI agents: how to evaluate them beyond a single benchmark score, how agent harnesses and infrastructure shape their reliability and capability, and how coding agents can be built into genuinely useful systems.

I am particularly interested in three connected directions:

- **Agent evaluation:** Rather than producing another aggregate score, I care about the model characteristics that scores hide but real use exposes: judgment under underspecified goals, the balance between initiative and restraint, audience and channel discipline, and how these behaviors change across tasks, trajectories, and harnesses. The point of evaluation is not only to rank agents, but to turn trajectory-level evidence into signals for improving models, prompts, and agent loops.
- **Agent harnesses and infrastructure:** Context management is the center of the problem: what enters the context, what should be compressed or forgotten, what must be retrieved at the right moment, and how memory and skills participate in decisions. Around that, I study how prompts, tool interfaces, sandboxes, runtimes, feedback loops, and multi-agent orchestration turn a model into a working agent. Observability is a means to inspect, debug, and improve that loop.
- **Coding agents:** My focus is not one-shot code generation, but loop engineering for long-running software work: agents that plan, implement, review, test, and reflect inside comprehensible, controllable, and verifiable (CCV) loops. I am interested in turning failure signals into self-evolving rules and skills while keeping a human or domain expert genuinely involved in judgment, so automation compounds expertise rather than eroding it.

## Research and engineering

I tend to work where research meets engineering. I enjoy turning ideas into systems that can be run, observed, and tested, rather than leaving them as isolated prototypes.

At Tencent PCG, I currently work on Venus, Vedas/Cheso, and model API services, including data and performance monitoring, statistical analysis, and load testing.

I also build [AgentCorp](https://github.com/ylxmf2005/AgentCorp), a loop-engineering system for software delivery. Through skills and quality gates spanning requirements, design, implementation, review, testing, and acceptance, it makes agent work controllable, understandable, and verifiable across both Claude Code and Codex.

Previously, at Tencent Security Xuanwu Lab, I worked on [SecEval](https://github.com/XuanwuAI/SecEval), a benchmark for evaluating foundation models' cybersecurity knowledge with more than 2,000 questions across nine security domains.

## Writing

This blog is where I write about AI agents, coding agents, agent infrastructure, evaluation, and the practice of turning research ideas into working systems. Posts are written primarily in Chinese, with English translations added over time.

You can find me on [GitHub](https://github.com/ylxmf2005) or reach me by [email](mailto:ethanelift@gmail.com).
