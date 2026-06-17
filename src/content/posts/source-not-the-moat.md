---
title: 护城河还在，水源已断
published: 2026-06-15
description: 用 AI 让我的思考变浅了，但这只是表面。在它底下，AI 同时做了两件事：把判断的负担压到你身上，又让你练出判断力的那条路慢慢失效。这篇文章顺着这两件事各自往下走，看它们通向哪里，并给出一个出口。
tags: [AI, cognition, careers, human-AI collaboration]
category: Essays
lang: zh
draft: false
---

有件事困扰我很久了：我越是依赖 AI，自己的思考就越浅。

一个想法刚成形，我就把它交给模型。它要么直接给我一个结论，要么一步一步带我把推理走完。整个过程很顺，产出看着也不错。可等我退后一步，脑子里留下的并不是一条连贯的思路，而是一堆彼此不相连的碎片。

一开始我以为是自己想多了。后来才知道，这件事有个名字，叫认知卸载（cognitive offloading），而且它并不新鲜。

2011 年，Sparrow 等人在 *Science* 上发表过一个实验：当人们相信某条信息以后还能查到时，他们对信息本身记得更差，却对去哪里找它记得更牢。我们很早就把记忆外包给了搜索引擎，留下的是路径，而不是内容。Sparrow 研究的是记忆，但既然我们已经把"去哪里找"外包出去了，再把"怎么把这些碎片连起来"也外包出去，不过是再走一步而已，而 AI 现在占的正是这个位置。

我本可以写到这里就停下，写一个让人安心的版本：别担心，这只是进步而已。但我想顺着那种不舒服一直往下挖，看看底下到底是什么。

## 大部分"思考"本来就该外包

有标准答案的任务、考前突击、模板代码、照着文档部署：这类任务确定性高，解法清楚。让 AI 一遍做完不是退步，它只是戳破了深度思考的假象。我们以前以为是在仔细推理，很多时候不过是一种效率低下的暴力穷举。那种活迟早会被商品化。"花更少力气，得到更好结果"之所以让人觉得是真的，是因为在这些情况下它确实是真的。

连我们用 AI 的方式都在变，而且方向一致。到 2025 年年中，AI 工具圈里越来越多的人不再谈 prompt engineering，转而谈 context engineering。Karpathy 认同这个说法："prompt"听起来像是你随手丢出去一句短指令，但真正能在生产环境里活下来的，是一门手艺：把恰好正确的材料，放进下一步要用的 context window 里。

于是重心从"怎么做"挪到了"做什么"：从写指令，挪到提供 context、设定目标。这句话其实就是整篇文章压缩成一句的骨架：杠杆在往上移，移向你对目标和输入的判断，而执行则沉到你脚下。（别把这个推得太远：那个极端版本，说"自然语言现在就是程序"，是站不住的。目标更重要了，但过程不会凭空消失。）

所以我对交出执行没有意见。但"省力了"这种感觉是有后味的。一旦你把"做"交出去，做这件事确实变轻了；可剩下的那部分，也就是判断，反而变重了。

## Bainbridge 在 1983 年就看穿了这个陷阱

四十多年前，就有人把这种处境说清楚了。

1983 年，Lisanne Bainbridge 写了一篇只有几页、却被引用过几千次的文章："Ironies of Automation"。她写的是工业控制系统，但那个模式几乎原样套在今天的 AI 上。她的意思，说白了就是：设计者越想把人从系统里拿掉，到头来留给人的，恰恰是那些没法自动化的任务。结果是，自动化把工作里容易的部分拿走了，剩下那些难的部分反而更难了。

这是第一重压力：容易的任务被拿走，最难的判断留给你。

第二重压力紧跟着来。不练的技能会退化。一个常年只是看着自动系统运行的操作员，会慢慢退回到新手状态，可真正需要他出手的那一刻，偏偏是最反常的时刻：系统出了故障，需要一个内行来收拾。她的结论今天读来依然锋利：操作员需要的是更强的技能，而不是更弱的。"最后一个反讽,"她写道，"是那些最成功、最少需要人介入的自动系统，恰恰是最需要在人员培训上下重本的系统。"

一篇 1983 年的文章，在同一个论证里把两重压力都讲了出来：一边对你的判断要求更多，另一边却在削弱它。

这不是陈年旧事。三十多年后，曾在美国国家运输安全委员会做人因调查的 Bob Strauch 写了一篇续作，标题很直接："Ironies of Automation: Still Unresolved After All These Years."

他举的例子让人不安。在大约三十年里，至少三起空难，包括 2013 年旧金山的韩亚航空 214 号班机、2009 年阿姆斯特丹附近的土耳其航空 1951 号班机，都涉及受过良好训练、经过严格考核的飞行员，他们把空速控制交给自动化之后，犯了同一个致命错误。促成事故的因素有很多，但其中一条是：自动化削弱了他们对空速的主动监控，他们失去了对飞机实际飞多快的那种直觉。

这里有个区别，太多人匆匆带过。

我们常说，回路里要有人（HITL）：万一出了问题，有人能接住。但那些空难说明的是另一回事：光是有人在场还不够；这个人得真的知道自己在做什么。这需要回路里有专家（EITL）。HITL 和 EITL 之间，差的就是一样东西：判断力。

Bainbridge 这个陷阱最残忍的地方正在这里：它会一点点把回路里的专家，变成一个仍在回路里、却不再是专家的人。名义上还是 HITL，但最值钱的那一块，也就是专家的那个 E，已经悄悄不见了。

下面，我分别处理这两重压力。

## 第一重压力：判断的负担落到你身上

跟 AI 协作的这套新方式也有个名字：loop engineering。Addy Osmani 概括得不错：发力点已经变了。值钱的不再是写一个更好的 prompt，而是把整个回路设计好，让系统自己去发现任务、分配任务、相互核对、决定下一步，而你则上升到更高的一层。Simon Willison 更进一步，把设计 agentic loop 称作这个时代真正新出现的技能。这听起来很美。但这套范式有个躲不掉的代价，而它恰恰落在那个退后一步的人身上：

生成变便宜了，验证没有。

AI 一口气给你一百个选项之后，把它们读完、评估、判断该不该信，是昂贵的脑力活，而且几乎没法并行。瓶颈没有消失，它从生成挪到了你判断的带宽上。

这不是假设，2026 年就在发生。Sonar 的《State of Code 2026》报告调查了一千多名开发者。百分之九十六的人说自己并不完全信任 AI 写的代码，但只有百分之四十八的人会在每次提交前真的检查。这个落差有个名字：验证缺口（verification gap）。

Karpathy 把好的协作概括成一个生成-验证的回路，他的结论很准：让验证变快变容易，让生成保持小而受控，因为人就是验证这一步的瓶颈。Flask 的作者 Armin Ronacher 说得更直白："我现在并行跑的 agent 更少了，因为我脑子能 review 的量是有限的。"

这是一个认知上的瓶颈，不是机械上的。你没法靠多跑几个 agent 来解决它，那只会让它更糟。连做出 Devin 的 Cognition 公司都发过一篇文章，反对去搭多 agent 系统，因为错误会在 agent 之间传递并被放大。

有人给这种状态起了个名字：理解债（comprehension debt）。你飞快地产出一大堆没人真正理解的代码，而这笔债早晚得还。我以前很喜欢算一笔账：一个两百人的团队用上 AI 缩到五十人，剩下的人加薪，皆大欢喜。逻辑是中间那层执行被折叠掉了，随之消失的还有协调成本，有时也叫编排税（orchestration tax）。

我当时漏算的是：协调成本不会消失。它会变成理解成本。当系统跑得比人能跟上的速度还快，"谁来保证人还看得懂这套系统"就成了更难的那个瓶颈。

还有一层更隐蔽。问题不只是你需要验证得更多，而是你在不知不觉中验证得更少了。2025 年，来自 Microsoft Research 和卡内基梅隆的研究者调查了三百多名知识工作者，发现一个人越信任 AI，他用上的批判性思考就越少。也就是说，负担落到你身上的同时，你去扛它的那股本能正在被磨掉。

这是相关性研究，不是因果证明，而且 Microsoft 卖 Copilot，所以打个折看。但一个独立样本得出了方向一致的结果，所以它不是孤例。

负担越来越重，本能却越来越弱。这就是第一重压力。

## 第二重压力：练出判断力的路在变窄

面对第一重压力，几乎所有人都会伸手去拿同一个答案：一个人身上还值钱的，是 AI 给不了你的东西，也就是品味和判断力。

我也这么认为。

Tinder 前首席产品官 Ravi Mehta 给了一个干净的说法：做任何东西，一直都需要两样，品味（知道该做什么）和手艺（把它做出来的能力）。AI 把手艺商品化了，于是判断成了唯一的区分点。在他的框架里，天平已经大幅从"做"倒向了"决定"。做变得更容易，把人区分开来的是判断。

但这套"判断力是护城河"的说法里，有一个没人愿意去看的缺口：判断力到底从哪来？

它不会凭空冒出来。Polanyi 那句广为人知的话，"我们知道的，比我们能说出来的要多"，讲的正是这件事：判断是默会知识。你没法把它写成规则交给别人。

Dreyfus 的技能习得模型把这个机制讲得更精确：从新手到专家有五个阶段，那种和专家相连的、毫不费力的直觉，只在最顶上才出现。前提是你真的从下面那些阶段一级一级爬上来过：规则、分析、动手试错。这段反馈密集的攀爬没法跳过。（五阶段模型在学术上仍有争论，但这里真正要用的那个具体点，即专家直觉是练出来的、不是教出来的，并没有受到严肃质疑。）

把这两个事实合在一起，第二重压力就显出来了。我把它叫做冷启动悖论：判断力是在真实的约束、决策、后果和纠正中长出来的。不是靠为了干活而干活，而是靠做决定、交付，然后失败。

说清楚一点：不是所有的"做"都有同等的成长价值。把琐碎的活自动化没问题。陷阱在于，连那些反馈密集的决策也一并自动化了，也就是那些让新手亲身承受后果、并从中学习的决策。而这恰恰是许多"AI 优先"的工作流最积极地丢给 AI 的那一类，结果新人从第一天起就再也碰不到它，于是永远练不出判断所需的那种直觉。

这意味着"品味是护城河"这句话，暗地里只对一代人成立：那些在 AI 到来之前就已经把基本功练好了的人。这种真理没法往下传，它更像一笔幸存者的红利。

而就连这笔红利也在缩水。

到 2026 年，"品味不是护城河"这个论点从另一个方向也得到了支持。Shrivu Shankar 的文章"Taste Is Not a Moat"认为，护城河是你建一次、然后守上好几年的东西，而品味更像 alpha：一种会衰减的超额优势，只在 AI 的基线还在往上抬的这段时间里才有临时价值。平台甚至能把品味工业化。

TikTok 不需要任何一个用户有好品味。它只要收割几百万次的滑动、停留和划走，就能把品味按工业规模合成出来。Facebook 前产品设计副总裁 Julie Zhuo 说过类似的话：好品味说到底是在一个庞大的文化语料上做模式识别，这让它比我们愿意承认的更容易被复制。

在品味的上游，入口本身也在变窄。那篇被广泛引用的斯坦福论文"Canaries in the Coal Mine"用了美国最大的薪资数据集，发现在 AI 暴露程度高的职业里，22 到 25 岁人群的就业相对其他群体下降了大约百分之十六；对年轻软件开发者来说，这个数字接近百分之二十。在同样这些职业里，有经验的工作者几乎没受影响。冲击落得并不均匀，它正好打在阶梯最低的那一档上。亚特兰大联储 2026 年的一篇工作论文把这一点说得更直接，一路追溯到 Arrow 1962 年提出的"干中学"概念：填满入门岗位的那些任务，并不只是低价值的杂活。它们构成一套课程，工作者通过它一点点积累起人力资本，日后才更有产出。如果整套课程都被自动化了，谁还爬得到判断所在的那一层？

这里我得停一下，把另一面也公平地摆出来，否则我就成了那个只讲一面的人。因果证据远谈不上定论。耶鲁的 Budget Lab 用了更严谨的方法，发现就整个经济里 AI 暴露的职业平均而言，效应"接近于零，在统计上和零无法区分"。a16z 的一位合伙人把"AI 就业末日"称作幻想，不过他是有持仓的风险投资人，所以打个折看。关键的调和点在于：耶鲁量的是全经济的平均值，斯坦福盯的是某个特定的年轻群体，两者的口径不同，是互补而非互相矛盾。即便就业总量这件事还没有定论，那个训练机制本身已经足够清楚、足够严重，值得提前做打算。

把两面拼到一起，整张图就出来了：判断力此刻极其值钱（Mehta 没说错），而它的供给正在被切断（Shankar 也没说错）。更准确的说法不是护城河终将被填平，而是护城河还在，可上游那条给它供水的源头正在被切断。

这笔账算下来很冷峻：判断力正变得越来越贵，而练出它的机会，可能正变得越来越少。

## 出口：设计能练出判断力的回路，而不是把它耗光

很容易滑进那句熟悉的哀叹：AI 正在让我们变得没用。我不想停在那儿，也不打算劝你少用 AI。恰恰相反。

两重压力都是真的，但它们指向同一个动作：别再争论该不该用 AI，去设计一个反馈回路，让你越用它判断力越强，而不是越用它人越空。这不是一句警告，是一个方向。

怎么做？从我自己几个重度依赖 agent 的项目里，我抽出了三条规则。它们没有一条是反 AI 的。它们的目的，恰恰是让你能大量用 AI，同时把判断力留在自己这边。

第一，守住规则，而不是具体的活。你真正要握在手里的，不是某一行代码或某一段文字，而是它们之上的结构：组件之间的边界、什么算好、什么该被拒掉。我不写每一份产出，我写那个做决定的过滤器。我不亲手执行每一次调用，我定义什么可以放行、什么需要再看一眼。品味你没法整个写下来，Polanyi 早就说过，我们知道的比能说出来的多。但你可以把它的边界钉成规则和检查，搭出一个框架，去拦下那些你那点隐性的质量感本会拒掉的东西。这么做，它就能规模化，你的判断力也就留在了你身上，而不是在成千上万次小操作里一点点漏掉。这也是你永远不外包的那块地盘："我们到底在解决什么问题，目标是什么？"这一步一旦交出去，下游的一切就都不真正属于你了。

第二，把系统建成你随时都看得懂的样子。理解债唯一的解法，就是一开始就别让它攒起来：让失败大声地暴露出来，而不是被各种 fallback 抹平；让数据里的缺口浮在表面，而不是藏在一副"很完整"的样子背后；让验证快到你真的会去做，而不是走个过场盖个"通过"。说到底，这是在用工程手段保住 EITL 里的那个 E：把回路建成会不断逼你去理解的样子，而不是放任你慢慢变成一个只是在场的人。

第三，在阶梯上造出新的台阶，然后自己爬上去。这是对前面那个问题的回答：判断力从哪来。它不来自做杂活，它来自你亲自在判断这一层上栽过跟头：明白一个设计为什么长成那个形状，明白一样看着可以简化的东西为什么其实动不得。你知道，是因为你自己撞过那堵墙。旧的第一级台阶，把一件小事做对，正在被拿掉，至少是变得没那么可靠了，而大多数团队还没建出替代品。那就去建一个：给新人划定范围，交给他们一块他们真正要负责的东西，让他们的失败留在明面上、而不是被 AI 吸收掉，让他们的决策可被 review，并在设计这一层放上一个反馈回路：设计、上线、出事、修复。这是在更高一层上重建师徒制，而不是任由旧系统悄悄把自己挪走。还有，不管你资历多深，也让自己经历一些这种过程：别把 AI 当成一个只会点头同意的神谕，把它当成一个解码器。给它一个低分辨率的种子，逼它展开成一个高分辨率的结构，再用你最怀疑的眼光去审视结果。方向盘自始至终都在你手里。

三条规则缩成一句：把"做"交出去，把判断留下来，然后亲自，在判断发生的那一层，把学费交掉。

---

### 参考文献

**自动化与认知**

1. Bainbridge, L. (1983). Ironies of Automation. *Automatica*, 19(6), 775–779. https://doi.org/10.1016/0005-1098(83)90046-8
2. Strauch, B. (2018). Ironies of Automation: Still Unresolved After All These Years. *IEEE Transactions on Human-Machine Systems*, 48(5), 419–433. https://doi.org/10.1109/THMS.2017.2732506
3. Dreyfus, S. E. (2004). The Five-Stage Model of Adult Skill Acquisition. *Bulletin of Science, Technology & Society*, 24(3), 177–181. https://doi.org/10.1177/0270467604264992
4. Polanyi, M. (1966). *The Tacit Dimension*. University of Chicago Press.
5. Sparrow, B., Liu, J., & Wegner, D. M. (2011). Google Effects on Memory. *Science*, 333(6043), 776–778. https://doi.org/10.1126/science.1207745
6. Lee, H.-P., et al. (2025). The Impact of Generative AI on Critical Thinking. *CHI '25*. https://doi.org/10.1145/3706598.3713778
7. Gerlich, M. (2025). AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking. *Societies*, 15(1), 6. https://doi.org/10.3390/soc15010006

**范式与工程实践**

8. Karpathy, A. (2025). "+1 for context engineering over prompt engineering." X post. https://x.com/karpathy/status/1937902205765607626
9. Karpathy, A. (2025). *Software Is Changing (Again)*. YC AI Startup School. https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again
10. Willison, S. (2025). *Context Engineering*. https://simonwillison.net/2025/jun/27/context-engineering/
11. Willison, S. (2025). *Designing Agentic Loops*. https://simonwillison.net/2025/Sep/30/designing-agentic-loops/
12. Osmani, A. (2025). *Loop Engineering*. https://addyosmani.com/blog/loop-engineering/
13. Osmani, A. (2024). *The 70% Problem: Hard Truths About AI-Assisted Coding*. https://addyo.substack.com/p/the-70-problem-hard-truths-about
14. Ronacher, A. (2026). *The Final Bottleneck*. https://lucumr.pocoo.org/2026/2/13/the-final-bottleneck/
15. Sonar (2026). *Data Reveals Critical Verification Gap in AI Coding*. https://www.sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/
16. O'Reilly Radar (2026). *Comprehension Debt: The Hidden Cost of AI-Generated Code*. https://www.oreilly.com/radar/comprehension-debt-the-hidden-cost-of-ai-generated-code/
17. Cognition (2025). *Don't Build Multi-Agents*. https://cognition.ai/blog/dont-build-multi-agents

**关于品味与判断力的争论**

18. Shankar, S. (2026). *Taste Is Not a Moat*. https://blog.sshh.io/p/taste-is-not-a-moat
19. Zhuo, J. (2025). *When AI Has Better Taste Than You*. https://joulee.medium.com/when-ai-has-better-taste-than-you-0dc8e870db9a
20. Mehta, R. (2025). *The Shift from Craft to Judgement in the Age of AI* (Atlassian interview). https://www.atlassian.com/blog/artificial-intelligence/shift-from-craft-to-judgement-ai

**就业与工作形态**

21. Brynjolfsson, E., Chandar, B., & Chen, R. (2025). *Canaries in the Coal Mine?* Stanford Digital Economy Lab. https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/
22. Afrouzi, H., et al. (2026). *Automation, Learning, and Career Dynamics*. Federal Reserve Bank of Atlanta, Working Paper 2026-61. https://www.atlantafed.org/research-and-data/publications/working-papers/2026/05/14/06-automation-learning-and-career-dynamics
23. The Budget Lab at Yale (2025). *AI Is Probably Not (Yet) the Reason for Labor Market Weakening*. https://budgetlab.yale.edu/research/ai-probably-not-yet-reason-labor-market-weakening
24. World Economic Forum (2025). *The Future of Jobs Report 2025*. https://www.weforum.org/publications/the-future-of-jobs-report-2025/
25. Anthropic (2026). *Anthropic Economic Index*. https://www.anthropic.com/research/economic-index-march-2026-report
