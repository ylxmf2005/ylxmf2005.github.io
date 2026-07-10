---
title: 关于
description: 关于 Ethan Li，以及他在 AI 智能体评测、基础设施与 Coding Agent 方面的研究和实践。
---

你好，我是李易峰（Ethan Li）。我目前是香港理工大学计算机科学本科生，在 PolyU NLP Group 担任本科研究助理，同时在腾讯 PCG 机器学习平台实习。

## 我在关注什么

我目前的工作主要围绕 AI 智能体展开：如何超越单一的 benchmark 分数评估 Agent，Agent Harness 与基础设施如何影响系统的可靠性和能力，以及如何把 Coding Agent 构建成真正有用的系统。

我尤其关心三个相互关联的方向：

- **智能体评测**：比起再得到一个总分，我更关心那些被分数掩盖、却决定实际使用体验的模型特质：在目标不完整时的判断，主动与克制之间的分寸，面向不同受众的信道纪律，以及这些行为在不同任务、轨迹和 Harness 中如何变化。评测的目标不只是给 Agent 排名，而是把轨迹级证据转化为能够改进模型、Prompt 和 Agent 回路的信号。
- **Agent Harness 与基础设施**：核心是上下文管理：什么应该进入上下文，什么需要压缩、遗忘或在正确时机重新取回，以及记忆和 Skills 如何参与决策。在此基础上，我也关注 Prompt、工具接口、Sandbox、运行时、反馈回路和多 Agent 编排如何共同把模型变成能够工作的 Agent。可观测性则是理解、调试和改进这套回路的手段。
- **Coding Agent**：重点不是一次生成更多代码，而是为长期软件工作设计 Loop Engineering：让 Agent 在可理解、可干预、可验证（CCV）的回路中完成规划、实现、评审、测试和复盘，并将失败信号沉淀为能够持续演化的规则与 Skills。同时，人或领域专家需要真正参与裁决，让自动化积累判断力，而不是逐渐消磨它。

## 研究与工程

我的兴趣位于研究与工程的交界处。我喜欢把研究想法实现为能够运行、观察和评估的系统，而不只是停留在独立的原型上。

在腾讯 PCG，我目前参与 Venus、Vedas/Cheso 与模型 API 服务的建设，工作涉及数据与性能监测、统计分析和压测。

我也在开发 [AgentCorp](https://github.com/ylxmf2005/AgentCorp)，一个面向软件交付的 Loop Engineering 系统。它通过覆盖需求、设计、实现、评审、测试和验收的技能与质量门禁，让 Agent 的工作过程变得可控、可理解、可验证，并同时支持 Claude Code 与 Codex。

此前在腾讯安全玄武实验室，我参与构建了 [SecEval](https://github.com/XuanwuAI/SecEval)：一个用于评估基础模型网络安全知识的 benchmark，包含九个安全领域的 2,000 余道题目。

## 写作

这个博客主要记录我对 AI Agent、Coding Agent、智能体基础设施、评测，以及研究与工程实践的思考。文章以中文为主，并逐步提供英文版本。

你可以在 [GitHub](https://github.com/ylxmf2005) 找到我，或通过 [邮件](mailto:ethanelift@gmail.com) 联系我。
