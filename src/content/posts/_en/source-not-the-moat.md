---
title: "Judgment Is Not a Moat, but a Water Source: Keeping Humans in the AI Loop"
published: 2026-06-15
updated: 2026-07-06
description: Once AI makes prediction and action cheap, what matters is not a static human advantage but a loop that continuously develops judgment.
tags: [AI, agents, workflow, cognition]
category: Essays
lang: en
draft: false
ogImage: https://efgli.com/default-og.jpg
---

Have you ever had this feeling? A thought barely appears in your mind before your hand has already sent it to AI. The model either gives you a conclusion or walks you through the reasoning step by step. The process is smooth and the output looks polished. Yet when you look back, what remains is not a coherent line of thought but a pile of disconnected fragments. I remember the conclusion, but I cannot explain how I reached it.

Psychology calls this cognitive offloading: when people believe information will remain available later, they are less likely to remember it. We handed memory to search engines long ago. Now we are also handing over the cognitive work of connecting fragments into a whole.

Cognitive offloading is not new, but its scope is expanding. We used to outsource memory. Now we outsource the reasoning process itself, even though reasoning is the muscle that keeps judgment alive.

In 1983, cognitive psychologist Lisanne Bainbridge described a paradox in _Ironies of Automation_: the more advanced automation becomes, the fewer but more difficult the situations left for human operators. Yet advanced skills depend on frequent practice. Once automation takes over routine work, operators become monitors and may be least prepared at the exact moment an emergency demands expertise. This applies not only to physical skills but to cognition. Human judgment stays sharp through feedback that is fast, frequent, and consequential.

Bainbridge worried that people would forget how to operate. The AI-era problem goes one layer deeper: people may forget how to judge and lose control of the work.

Traditional automation fails visibly and hands control back to you. At least you know when to intervene. AI does not. It continues producing answers that may be wrong but remain well formatted, calmly phrased, and apparently complete. You must keep deciding whether an answer is correct, trustworthy, or worth changing. Judgment becomes a routine operation rather than an emergency response, and because it happens every day, it is easy to stop noticing it.

Where, then, do judgment and control sit in the decision chain?

Agrawal, Gans, and Goldfarb offer a useful framework in [_Prediction Machines_](https://www-2.rotman.utoronto.ca/insightshub/ai-analytics-big-data/prediction-machines-simple-eco). Any decision can be decomposed into five elements: data, prediction, judgment, action, and outcome. Their economic argument is simple: AI is fundamentally a prediction technology that lowers the cost of prediction. When something becomes cheaper, the value of its complements rises. Judgment is the complement to prediction. Every prediction needs an answer to "what do I want?" before it can become a decision. The cheaper and more abundant prediction becomes, the more valuable judgment becomes.

![Prediction Machines, Figure 7-1: Anatomy of a task, where data, prediction, judgment, action, and outcome form the decision chain {md}](../images/prediction-machines-anatomy-task.png)

_Source: Prediction Machines, Figure 7-1, "Anatomy of a Task."_

The book was published in 2018, when AI mainly acted as a prediction engine. In the agent era, another change has arrived: action is becoming cheap as well. Models do not merely predict. They write code, call APIs, deploy services, and execute entire workflows. Once both prediction and action become inexpensive, three things remain with humans: providing context, exercising judgment, and bearing the outcome.

These three are not equivalent. People can actively develop context and judgment. Outcomes are different. AI can receive feedback about an outcome: a test passed, a user complained, a metric fell. But it cannot bear the consequence. A model has no personal stake, reputation, or irreversible loss. More deeply, outcomes often acquire meaning only inside a particular business context and value system. Whether a two-percent decline is a disaster or noise depends on an understanding of business cycles and user behavior that cannot be delegated as a neutral capability. Bearing the outcome is closer to an inalienable responsibility, the final anchor keeping people in the loop.

I prefer to expand the book's "data" into context. What is scarce is not isolated information but the business reality around it: user profiles, scenario constraints, resource limits, competitive movement, tacit organizational knowledge, and the history of mistakes within a project. A model's context window is finite and temporary; human context can accumulate across time. Context anchors judgment and makes value tradeoffs concrete.

Judgment sits at the center of this framework. To me, it includes defining a problem from an intention, ordering conflicts, controlling complexity, setting boundaries, choosing a delivery form, evaluating evidence, and deciding whether a task is truly complete. Work often remains unsuitable for AI not because the model lacks capability, but because the person has not supplied enough context or has not recognized a form in which the problem can be productively shared with AI. Missing judgment is more common than missing capability.

Control is built on judgment. I divide it into understanding and intervention. Understanding means being able to explain the output as a whole, identify its key decisions, and verify and accept the evidence behind them. Intervention means being able to steer the model toward your expectations through verifiable and adjustable constraints rather than releasing an uncontrollable process. Control is not "I clicked accept." It means knowing what context you supplied, why you made a decision, and being willing to own the result.

Context, judgment, and outcomes sound like three moats. They are difficult to defend. Once prediction and action are outsourced, judgment and control can deteriorate for four reasons.

First, the role changes. Once AI takes over production, you stop being the person who does the work and become the person who reviews completed work. Evaluation requires more experience than execution and is easier to perform carelessly. You no longer experience the friction in the middle. You see only the final answer, and the training examples that once developed your judgment disappear with the process.

Second, consequences are diluted. Judgment is trained by consequences: make the wrong choice, feel the cost, remember it, and adjust. Once execution is outsourced, you personally encounter fewer failures. You did not write the code, fall into the trap, or necessarily perform the repair. The model does not retain the lesson either. When neither side accumulates the experience, the lesson is lost.

Third, the loop becomes a black box. The most dangerous part of vibe coding is not speed but the illusion of control. You feel as if you are driving while sitting in the passenger seat saying "continue." When you stop reading diffs, tracking assumptions, and demanding evidence, AI output becomes a black-box production line. It may remain useful, but it no longer trains you.

Fourth, the environment that develops judgment is disappearing. Judgment used to grow through study, practice, and failure. That path is narrowing. Experts use AI to accelerate work they already understand; beginners use AI to perform work they do not yet understand. The difference is fundamental. Experts can judge what to trust and what to change. Beginners are more likely to accept everything and accumulate code that looks plausible but collapses under pressure.

The problem, then, is not simply how capable AI is. It is that the loop between humans and AI is poorly designed.

At the first Freestyle Chess World Championship in 2005, the winners were not grandmasters equipped with the strongest AI, but two American amateurs. Kasparov's summary was that a weak human plus a machine plus a better process could beat a strong human plus a machine plus a poor process. The difference came not from the strength of the AI but from the construction of the loop.

That story is also being eroded by time. Pure AI later surpassed human-machine teams, while [loop engineering](https://addyosmani.com/blog/loop-engineering/) increasingly delegates judgment itself. The direction is clear: the human role is moving from adjudicator toward start button and fuse.

Until that day arrives, people remain in the loop. The question is what kind of loop allows AI to accelerate work while training rather than consuming human judgment and control.

Consider how models themselves improve. Pretraining learns distributions from enormous corpora and compresses knowledge into weights. During post-training, whether through RLHF or RLVR, a model acts under feedback and its policy is gradually shaped by rewards. Human learning has the same structure: capability equals prior knowledge plus feedback. Reading, studying examples, and learning from others establish priors; acting and bearing consequences update policy through the real world.

Humans have an advantage in sample efficiency. A model may need thousands of preference labels, while a person can update an intuition for good judgment after examining only a few decision processes in detail. If the loop is transparent, human judgment can become a self-accelerating flywheel.

![Judgment water flywheel: probe blind spots, generate options, stress judgment, inspect evidence, explain, codify rules, and compound judgment {lg}](../images/judgment-water-flywheel.png)

The most important parts of this diagram are not AI execution but what happens before and after it: discovering unknowns, generating alternatives, stress-testing judgment, adjudicating evidence, absorbing explanations, and codifying rules. They look like workflow stages, but their real purpose is to increase feedback density. Stronger judgment lets you recognize better output. More precise constraints improve model behavior. More nuanced model proposals give you richer material to interrogate. Judgment continues to compound.

I eventually realized that such a loop cannot depend on promising to "pay more attention next time." It needs stable actions: probe for blind spots before implementation, generate meaningfully different options, challenge decisions through reverse questioning, make the evidence explicit, and produce a structured walkthrough after delivery. These are not rituals added to a workflow. They protect the flow in the diagram so that every collaboration with AI leaves behind a small increase in judgment.

The flywheel sounds attractive, but it has two prerequisites.

First, the human must genuinely interrogate rather than become domesticated by the model's explanation. Models are skilled at making an answer sound like the answer. The better they explain, the easier it becomes to confuse fluency with understanding. The loop therefore needs adversarial pressure and falsification: someone must interrupt the smooth narrative and ask where the evidence, boundaries, and alternative explanations are.

Second, the flywheel cannot be a black box. Loop engineering changes the human role from writing each prompt to designing the cycle. A system can discover work, assign it, invoke agents, inspect results, record state, and decide what happens next.

![LangChain, The Art of Loop Engineering: an agent event loop around state, tools, memory, and messages {lg}](../images/langchain-loop-engineering-event-loop.png)

_Source: LangChain, [The Art of Loop Engineering](https://www.langchain.com/blog/the-art-of-loop-engineering)._

A loop that runs is not necessarily a healthy loop. The engineering object may no longer be code or even prompts, but the loop must remain comprehensible, controllable, and verifiable. I abbreviate these requirements as CCV.

Comprehensible means an output must be digestible, not merely correct. You should be able to explain why it took a path, which critical parts changed, and which assumptions support the solution. Controllable means preferences and boundaries can be encoded as rules rather than recreated from intuition every time. Verifiable means trusting evidence instead of the model's tone.

In practice, these principles become five actions.

First, write tests for judgment.

A rule converts a vague intuition into an executable assertion. Whenever an agent output feels wrong, do not ignore the feeling. Ask what is wrong, whether it can be intercepted, and how. Write the answer as a rule. The rule becomes a unit test for judgment.

If the rule blocks similar failures, your judgment has been encoded successfully. If it permits something that should have been stopped, the judgment has a bug and the rule needs revision. Rules that are never executed are useless. Only when a rule enters the repository does taste acquire version history. The system may capture improvement signals, but constitutional authority must remain human.

Second, train judgment through adjudication.

Judgment sometimes deteriorates not because people refuse to practice, but because they lack enough opportunities to decide. In organizations, meaningful decision rights often arrive only after promotion. AI execution can open that bottleneck. An agent can continuously produce proposals, diffs, tests, logs, and failures. The density of judgment rises: should this architecture pass? Is a review finding real or a false positive? Is the evidence sufficient to ship? Is this tradeoff a local optimum or long-term debt?

Adjudication becomes valuable when it closes a feedback loop. If a decision proves wrong, the record can identify which judgment failed and calibrate the standard. In a one-person team, agents are a tireless production line and you are the only quality inspector. If decisions are recorded, consequential, and reviewed, dense feedback will train judgment.

Third, actively discover your unknowns.

One hidden cause of declining judgment is not knowing what you do not know. The problem space can be divided into known knowns, known unknowns, unknown knowns, and unknown unknowns.

![Unknown matrix: probe blind spots into known unknowns, research gaps into known knowns, and prototype tacit knowledge into judgment {md}](../images/unknown-matrix.png)

The best agent operators are often distinguished not by elaborate prompts but by having fewer unknowns. They remain deeply synchronized with the codebase, problem domain, and model behavior. They also refuse to assume they have no blind spots. Reducing unknowns and planning for those that remain is itself a form of judgment training.

The practice is simple. Before implementation, ask the model to scan for blind spots after explaining your experience, domain familiarity, and known constraints. Then use prototypes and brainstorming to expose unknown knowns: preferences you cannot articulate but recognize immediately when shown the wrong version. Finally, have the model interview you about questions whose answers would change the architecture. Every constraint made explicit is an incremental commit to judgment.

Fourth, understanding is a prerequisite for participation, not merely a verification technique.

People often reduce understanding an agent's output to checking whether it is correct, like a thumbs-up or thumbs-down. But understanding matters primarily because it enables participation. A project is not one loop but countless loops with a model. The depth of your system understanding determines which next steps you can imagine. Without a rich conceptual model, you cannot reason fluently about how the system should evolve.

This is why reading a diff line by line is not the only path and may not be the best one. I now ask agents to generate structured walkthroughs after delivery: establish the necessary background, explain the intuition of the change, and arrange the code in logical rather than filename order. I also ask for a quiz at the end. The rule is simple: if I cannot pass the quiz, I do not merge the code.

The quiz acts as a governor on the loop. When AI execution moves much faster than human understanding, a mechanical checkpoint must ask: do I genuinely understand this? That is not bureaucracy. It prevents a creative participant from becoming a rubber stamp.

Fifth, record adjudication and make lessons explicit.

Diluted consequences are a central cause of judgment decay. The response is to record deviations explicitly: which edge cases appeared, which assumptions failed, where execution diverged from the plan, and why a review finding was accepted or rejected. The failures you would once have encountered personally become readable decision samples.

After a session, revisit those deviations. Decide which were your blind spots, which came from planning gaps, and which require a new rule. This uses cheap samples for expensive learning. A model can explore more paths on your behalf, but unless you preserve the branches and failures, they never become your experience.

It is fashionable to call taste and judgment moats in the AI era. I increasingly think the metaphor is wrong.

A moat is a stock: dig it, fill it, and defend it. Judgment does not work that way. Judgment deteriorates without practice. Context expires without updates. Rules become rigid without calibration. Experience becomes intuition without reflection.

What can be cultivated is not a static capability but the rate at which capability is generated. That is the water source. It does not live in one person's mind or one prompt. It lives in a loop that continuously connects context, action, evidence, adjudication, and reflection.

For me, then, this loop is not a collection of techniques for making AI do more work. It is a way to keep people at the center of collaboration. Probing is not asking AI to think for me, but preventing me from starting with blind spots. Generating alternatives is not collecting options, but exposing tacit preferences. Interrogation is not performative rigor, but resistance to smooth narratives. Explanations and walkthroughs are not packaging after delivery, but the means by which I regain the ability to participate in the next decision.

Loops also have a shelf life. A loop is text; if it can be written, it can be copied. Stronger models need less scaffolding, making similar loops easier for everyone to obtain. Once the loops converge, the remaining difference is what they produced: a person trained by years inside the loop cannot be copied. The loop becomes easier to imitate while the person becomes harder to catch.

The durable advantage is therefore not merely a human in the loop, but an expert in the loop.

What if models eventually absorb expert judgment as well? I have no answer, only a direction. In economics, judgment assigns value to outcomes. What you want can only be stated by you. That layer cannot be outsourced because it is not a capability but a position.

Who owns the problem and who bears responsibility for the result may prove more durable than who knows how to solve it. Solutions depreciate; problems do not. If that day arrives, the moat may lie not in any capability but in your relationship to the problem. Until then, build the loop and train yourself into its expert.
