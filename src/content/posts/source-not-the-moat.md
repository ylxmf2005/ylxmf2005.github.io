---
title: 护城河还在，水源已断：当 AI 把判断留给你
published: 2026-06-15
description: 用 AI 让我的思考变浅，但那只是表面。底下，AI 在同时做两件事：把判断的重担压到你身上，又切断练成判断力的那条路。这篇文章顺着这两道刀刃，一路走到出路。
tags: [AI, cognition, careers, human-AI collaboration]
category: Essays
lang: zh
draft: false
---

有件事困扰我很久了：**我越依赖 AI，自己的思考就越浅。**

一个念头刚冒出来，我就顺手丢给模型。它要么直接甩回一个结论，要么一步步带我走完推理。过程很顺，产出也漂亮。可回过神来，脑子里剩下的不是一条连贯的线，而是一堆散落的碎片。

一开始我以为自己只是太矫情。后来发现这件事有个名字：**认知卸载**（cognitive offloading），而且一点也不新。

早在 2011 年，Sparrow 等人在《Science》上做过一个设计很干净的实验：当人们相信某条信息之后还能查到，他们对信息本身记得更少，对「去哪儿找它」记得更多。我们很早就把记忆外包给了搜索框——留下的是路径，不是内容。Sparrow 研究的是记忆；但既然我们已经把「去哪儿找」都外包了，再把「怎么把它们连起来」也外包出去，不过一步之遥——而 AI 现在正好坐在这个位置上。

我本可以就此打住，写一个让人安心的版本：别担心，这不过是进步。但我想反过来——顺着这股不安一路往下挖，看看底下到底藏着什么。

## 先说实话：大多数「思考」，本来就该外包出去

先承认一件不太舒服的事：我那份「思考变浅了」的焦虑，至少有一半是虚荣。

有标准答案的作业、考前突击、一段模板代码、照着文档配出来的一次部署——这些任务确定性高，解法清楚。让 AI 一把做完，不是退步，只是戳破了「伪深度思考」的泡沫。过去我们总以为自己在深思熟虑，其实不过是在做一种低效的暴力遍历。那种劳动迟早会被商品化。「更省力，结果还更好」之所以让人觉得真，是因为它本就该是真的。

连我们「怎么用 AI」本身也在变，而且方向一致。到 2025 年年中，AI 工具圈里越来越多的人开始少谈 prompt engineering，多谈 **context engineering**。Karpathy 为这个说法站台——「prompt」让人以为你只是随手丢一条短指令，可真正能在生产环境里活下来的，是一门手艺：把恰好正确的材料，为下一步精确地填进 context window。

重心于是从「怎么做」滑向「做什么」：从写指令，变成供给上下文、设定目标。这其实就是整篇文章的骨架，被压成了一句话——杠杆在上移，移到你对「目标和输入」的判断上，而执行则从你脚下沉了下去。（别推得太远：那种激进版本——「现在自然语言就是程序」——并不成立；目标更重要，并不等于过程就此蒸发。）

所以，把执行交出去，我没有意见。但省力感有一种回甘。你一旦把「做」交出去，做确实变轻了；但剩下那部分，也就是判断，反而更重了。

## 早在 1983 年，Bainbridge 就看见了这个陷阱

四十多年前，就有人把这件事讲透了。

1983 年，Lisanne Bainbridge 写过一篇只有几页、却被引用上千次的论文，叫《Ironies of Automation》（自动化的反讽）。她讲的是工业控制系统，但那个模式几乎严丝合缝地套在今天的 AI 上。她的意思，说白了就是：设计者越想把操作员从系统中拿掉，最后越会把那些自己也没法自动化的任务留给操作员。结果是，自动化拿走了工作里容易的部分，反倒让剩下的难处更难了。

这是第一重：**简单的活被拿走，最难的判断留给你。**

第二重是她紧接着说的——技能不用，就会生锈。一个多年来只是旁观自动化系统运行的操作员，会慢慢退回新手状态；可真正需要他出手的那一刻，恰恰是最反常的那一刻——系统出了故障，需要一双内行的手。于是她那个至今扎人的结论是：操作员需要的是更熟练，而不是更不熟练。「最终的反讽，」她写道，「在于那些最成功、几乎用不上人的自动化系统，恰恰是最需要投资于人的训练的系统。」

一篇 1983 年的论文，一口气说出了两重挤压——一边向你的判断力要得更多，另一边却把它磨钝。

这不是陈年旧事。三十多年后，Bob Strauch——曾任美国国家运输安全委员会（NTSB）人因调查员——写了一篇续作，标题直白得很：《Ironies of Automation: Still Unresolved After All These Years》（自动化的反讽：这么多年了，依然无解）。

他举的例子让人后背发凉。大约三十年间，至少三起空难——其中包括 2013 年旧金山的韩亚 214 航班、2009 年阿姆斯特丹郊外的土耳其 1951 航班——训练有素、经过严格评估的飞行员，在把空速控制权交给自动化之后，都犯了同一个致命错误。因素当然不止一个，但其中之一是：自动化削弱了他们对空速的主动监控——他们失去了对「飞机到底飞多快」的那种手感。

这里埋着一个太多人一带而过的区分。

我们爱说，应该有个**人在环**（human in the loop，HITL）——出了岔子，有人能兜住。但那些空难说的是另一回事：光有个人在场不够，这个人还得真的知道自己在干什么——得是**专家在环**（expert in the loop，EITL）。HITL 和 EITL 之间，只差一个词：判断力。

而 Bainbridge 这个陷阱最残忍的地方正在于此——它悄悄把环里的专家，磨成「人还在环里、却早已不是专家」的空壳。名义上还是 HITL，可最值钱的那个字母——E，也就是 expert——早就不见了。

下面，两重挤压，我一重一重说。

## 第一重：判断的负担落到了你身上

跟 AI 协作的新方式现在也有了名字：**loop engineering**。Addy Osmani 概括得好——杠杆点已经移位了：有价值的不再是手写一个更好的 prompt，而是设计整个回路，让系统自己发现任务、分派任务、交叉核对、决定下一步，而你退到更高一层。Simon Willison 更进一步，把「设计 agentic loop」称作这个时代真正的新技能。听上去很美。但这套范式有一个躲不掉的代价，而它不偏不倚，正好落在那个「往后退」的人身上：

**生成变便宜了。验证没有。**

AI 一口气给你一百个选项之后，去读、去判断、去决定信不信，本身就是昂贵的脑力劳动——而且几乎没法并行。瓶颈没有消失，只是从「生成」滑到了「你判断的带宽」。

这不是假设，2026 年正在发生。Sonar 的《State of Code 2026》调查了一千多名开发者，96% 的人说他们并不完全信任 AI 写的代码，可真正在每次 commit 前都会检查的，只有 48%。这道落差有个名字：**验证缺口**（verification gap）。

Karpathy 把好的协作概括成一个「生成—验证」回路，他的结论冷静而准确：让验证又快又省事，把生成切得小、管得紧，因为**人，才是验证环节的瓶颈**。写出 Flask 的 Armin Ronacher 说得更直白：「我现在反而并行跑更少的 agent——我脑子能 review 的量，就那么多。」

这是认知瓶颈，不是机械瓶颈。你没法靠堆更多 agent 来解决，那只会更糟。连做出 Devin 的 Cognition 都发过一篇文章，主张《Don't Build Multi-Agents》（别搭多 agent 系统），因为错误会在 agent 之间一层层传递、累积放大。

有人给这种状态造了个词——**理解债**（comprehension debt）：你哗啦啦产出一大堆没人真正看懂的代码，这笔债迟早要还。我以前很爱一种算术：一个两百人的团队靠 AI 缩到五十人，给留下来的人涨薪，皆大欢喜；逻辑是中间那层执行被折叠掉了，协调开销——也就是所谓的「协调税」（orchestration tax）——也跟着一起没了。

我漏掉的是：协调税不会消失，它会**变异成一种理解税**（comprehension tax）。当系统跑得比人快，「由谁来保证人还看得懂这套系统」就成了更硬的瓶颈。

还有更隐蔽的一层：问题不只是你得验证得更多，而是你在**悄悄地验证得更少**。2025 年，微软研究院和卡内基梅隆的研究者调查了三百多名知识工作者，发现一个人越信任 AI，他动用的批判性思考就越少。也就是说，重担落到你身上的同时，你扛起它的那股本能也正在被磨掉。

当然，这只是相关性研究，不是因果证明；而且微软自己卖 Copilot，所以要打个折。但另一个独立样本也得出了同方向的结果，所以它不是孤例。

担子更重，本能更弱——这就是第一重。

## 第二重：练成判断力的路正在变窄

面对第一重，几乎所有人都伸手去抓同一个答案：人身上还值钱的，是 AI 给不了你的东西——**品味，和判断力**。

我也信这个。

Tinder 前首席产品官 Ravi Mehta 有一个干净的说法：做任何东西，从来都要两样——品味（知道该做什么）和手艺（把它做出来的本事）；AI 已经把手艺变成了廉价商品，于是判断力成了唯一的区分点。在他的框架里，天平已经从「动手做」大幅摆向了「做决定」——做这件事越来越容易，真正拉开差距的是判断。

但这个「护城河」故事有一个没人愿意去戳的窟窿：**判断力，究竟从哪儿来？**

它不是从天上掉下来的。Polanyi 那句名言——「我们知道的，比我们能说出来的更多」——讲的正是这个：判断力是一种**默会知识**（tacit knowledge），你没法把它写成规则、原样交给别人。

Dreyfus 的技能习得模型把机制讲得更明白：从新手到专家，要爬五级台阶，而那种不假思索的直觉只在最顶上才冒出来——前提是你已经老老实实走完了下面几级：规则、分析、亲手试错。这段反馈密集的攀爬，跳不过去。（五阶段模型在学术上仍有争议，但这里真正要紧的那一点——专家直觉是练出来的，不是讲给你听就能有的——基本没什么争议。）

把这两个事实放到一起，第二重就现身了。我把它叫做**冷启动悖论**（cold-start paradox）：判断力，是在真实的约束、决策、后果和纠正面前长出来的——不是靠为劳动而劳动，而是靠做决定、交付、然后栽跟头。

这里要说清楚：不是所有「做」都有同等价值。把杂活自动化掉没问题。陷阱是把那些反馈密集的决策也一并自动化——也就是新手能亲身尝到后果、并从中学到东西的那些决策。而这恰恰是很多「AI 优先」的工作流最想直接甩给 AI 的那一块，于是新人从第一天起就不必碰它，也就永远长不出那种让他们能做判断的直觉。

这就意味着，「品味就是护城河」这句话默认只对一代人成立——那些早在 AI 之前就已经把基本功练够了的人。它不是一条能往下传的真理，而是一笔**幸存者红利**（survivor's dividend）。

而且，连这笔红利也在缩水。

到 2026 年，「品味不是护城河」这一论点又从另一个方向站稳了。Shrivu Shankar 的《Taste Is Not a Moat》认为：护城河是你挖一次、能守很多年的东西，而品味更像 alpha——一种会衰减的超额优势，只在 AI 基线不断上升时暂时有价值；平台甚至能把品味工业化。

TikTok 不需要任何单个用户有好品味。它只要收割数以百万计的滑动、停留和划走，就能在工业规模上合成品味。Facebook 前设计副总裁 Julie Zhuo 说过类似的话：好品味本质上是对一整片巨大文化语料的模式识别——这让它比我们愿意承认的要好复制得多。

而在品味的上游，入口本身也在收窄。斯坦福那篇被疯转的论文《Canaries in the Coal Mine》用美国最大的薪资数据集发现：在 AI 暴露度高的职业里，22 至 25 岁的劳动者就业相对其余人群下降了约 16%，年轻软件开发者更接近 20%，而同一批职业里有经验的人几乎没动。冲击不是平均落下来的，它精准地砸在了阶梯最底下那一级上。亚特兰大联储 2026 年的一篇工作论文说得更直接，一路追溯到 Arrow 1962 年「干中学」的想法：填满入门岗位的那些任务并不只是低价值的杂事——它们是一份**课程表**，劳动者正是通过它，一点点积累起日后让自己更有产出的人力资本。把整份课程表都自动化掉，那还有谁爬得到判断力所在的那个高度？

这里我得停下来，公平地补上另一面，否则我自己就成了只讲好听那一面的人。**因果关系远远没有定论。** 耶鲁的 Budget Lab 用更严格的方法发现，就全经济范围内的 AI 暴露职业平均而言，这个效应「接近于零，统计上与零无法区分」；a16z 的一位合伙人干脆把「AI 就业末日」称作幻想（不过他是 VC，手里有牌，打个折）。关键的调和是：耶鲁测的是全经济平均，斯坦福盯住的是一个特定年轻 cohort——口径不同，二者互补而非互相推翻。**即便总量叙事尚无定论，那条训练机制本身也已经足够清楚、严肃到值得提前打算。**

于是两边拼到一起，图景就出来了：判断力眼下极其值钱（Mehta 没说错），而它的供给正在被掐断（Shankar 也没说错）。更准确的说法不是「护城河早晚会被填平」，而是：**护城河还在——可在上游，给它供水的那口泉眼，正在被切断。**

这笔账算下来很冷峻：判断力越来越贵，而练成它的机会，可能越来越少。

## 出路：设计能训练判断力的回路，而不是把它耗空

滑进那句老掉牙的哀叹很容易——「AI 正在让我们变得没用」。我不想停在那里，也不打算劝你少用 AI。恰恰相反。

两重挤压都是真的，但它们指向同一个动作：**别再纠结要不要用 AI，去设计一种回路——让你越用，判断力越强，而不是越用越空。** 这不是警告，是路标。

怎么做？从我自己几个重度依赖 agent 的项目里，我抽出了三条规则。没有一条是反 AI 的；它们存在的意义恰恰是让你能放心地重度用 AI，同时还把判断力留在自己这一侧。

**一、握住规则，而不是握住具体的活儿。** 你真正得握在手里的，不是某一行代码、某一段文案，而是它们之上的那张图：各个部分之间的边界，什么算好，什么该被拦下。我不去写每一份产出，我写那个做决定的过滤器；我不去手动跑每一次调用，我定下什么可以放行、什么需要再看一眼。你没法把品味整个写下来——Polanyi 早就提醒过，我们所知的，远比我们能说清楚的更多——但你可以把它的边界钉成规则和检查，搭出一副脚手架，去拦下那些「背后那点品味本会否决」的东西。这么做，它就能规模化，你的判断力也就留在自己手里，而不是顺着上千次零碎操作一点点漏掉。这也是你唯一永远不外包的地盘：「我们到底在解哪个问题，目标是什么？」这一步一旦交出去，下游就没有一样东西真正属于你了。

**二、把系统建成你随时都看得懂的样子。** 对付理解债，唯一的解药是从一开始就不许它发生：让失败大声地浮上来，而不是被 fallback 糊过去；让数据里的缺口明明白白摆在表面，而不是假装完整。让验证又快又做得动，你才可能真的去做，而不是走过场地盖一个「通过」。说到底，这是用工程手段去守住 EITL 里那个「E」——把回路建成会逼着你持续理解的样子，而不是任由你滑成一个只是「在场」的人。

**三、造出新的台阶，并亲自往上爬。** 这正是前面那个问题的答案——判断力究竟从哪来。不是来自干杂活，而是来自在判断这一层亲自把车开翻：为什么一个设计是这个形状，为什么那个「看着像是能简化」的地方偏偏不能动。你之所以知道，是因为你在那儿撞过墙。旧的第一级台阶——「把一件小事做对」——正在被砍掉，至少变得远没那么可靠，而大多数团队还没造出顶替它的那一级。那就造出来：给新人划定范围、交给他们真正负责的一块，让他们的失败留在明面上，而不是被 AI 吞掉，让他们的决策可被 review，并在设计这一层放一个反馈回路——「设计 → 上线 → 撞车 → 修复」。这是把学徒制往上重建了一层，而不是放任旧的那套悄悄自行搬家。而且不管你资历多深，都要在那儿亲自吃些亏：别把 AI 当成一个只会点头的神谕，要把它当解码器——丢给它一颗低分辨率的种子，逼它展开成一套高分辨率的结构，再用你手头最怀疑的那只眼睛去挑它的刺。方向盘自始至终都在你手里。

三条规则收成一句话：**把「做」交出去，把「判断」留下来，然后亲自，在判断发生的那一层，把学费交了。**

---

### 参考文献

**自动化与认知**

1. Bainbridge, L. (1983). Ironies of Automation. *Automatica*, 19(6), 775–779. https://doi.org/10.1016/0005-1098(83)90046-8
2. Strauch, B. (2018). Ironies of Automation: Still Unresolved After All These Years. *IEEE Transactions on Human-Machine Systems*, 48(5), 419–433. https://doi.org/10.1109/THMS.2017.2732506
3. Dreyfus, S. E. (2004). The Five-Stage Model of Adult Skill Acquisition. *Bulletin of Science, Technology & Society*, 24(3), 177–181. https://doi.org/10.1177/0270467604264992
4. Polanyi, M. (1966). *The Tacit Dimension*. University of Chicago Press.
5. Sparrow, B., Liu, J., & Wegner, D. M. (2011). Google Effects on Memory: Cognitive Consequences of Having Information at Our Fingertips. *Science*, 333(6043), 776–778. https://doi.org/10.1126/science.1207745
6. Lee, H.-P., et al. (2025). The Impact of Generative AI on Critical Thinking. *CHI '25*. https://doi.org/10.1145/3706598.3713778
7. Gerlich, M. (2025). AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking. *Societies*, 15(1), 6. https://doi.org/10.3390/soc15010006

**范式与工程实践**

8. Karpathy, A. (2025). "+1 for context engineering over prompt engineering." X, 2025-06-25. https://x.com/karpathy/status/1937902205765607626
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

**就业与工作的形态**

21. Brynjolfsson, E., Chandar, B., & Chen, R. (2025). *Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence*. Stanford Digital Economy Lab. https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/
22. Afrouzi, H., Blanco, A., Drenik, A., & Hurst, E. (2026). *Automation, Learning, and Career Dynamics*. Federal Reserve Bank of Atlanta, Working Paper 2026-61. https://www.atlantafed.org/research-and-data/publications/working-papers/2026/05/14/06-automation-learning-and-career-dynamics
23. The Budget Lab at Yale (2025). *AI Is Probably Not (Yet) the Reason for Labor Market Weakening*. https://budgetlab.yale.edu/research/ai-probably-not-yet-reason-labor-market-weakening
24. World Economic Forum (2025). *The Future of Jobs Report 2025*. https://www.weforum.org/publications/the-future-of-jobs-report-2025/
25. Anthropic (2026). *Anthropic Economic Index*. https://www.anthropic.com/research/economic-index-march-2026-report
