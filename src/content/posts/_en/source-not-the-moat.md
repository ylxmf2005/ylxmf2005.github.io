---
title: "Judgment Is Not a Moat, but a Water Source"
published: 2026-06-15
updated: 2026-07-16
description: As AI makes prediction and action cheap, what remains scarce is not a static capability but a loop that continually regenerates context, judgment, and accountability.
tags: [AI, agents, workflow, cognition]
category: Essays
lang: en
draft: false
ogImage: https://efgli.com/default-og.jpg
---

I have become increasingly wary of a certain kind of frictionless work.

I give a task to AI. It researches, writes code, runs tests, and returns a polished summary. Everything looks professional. I can read every line of the diff, yet I cannot explain why it chose this structure. The tests are green, yet I do not know whether they cover the behavior that actually matters. When I want to change the system again, I first have to ask the AI: what exactly did we just do?

The work is finished, but the understanding is gone.

This is different from forgetting a fact. Search engines outsourced the storage of facts. AI is beginning to outsource the process of connecting those facts, making tradeoffs, and forming a plan. Psychology calls the former cognitive offloading. The age of agents adds another layer: we are offloading not only memory and reasoning, but action itself.

That is not an argument for rejecting AI. Stronger models should take on harder, longer, and more complete tasks. The real question is this: once prediction and action are outsourced, how can people step away from execution without also stepping away from understanding, judgment, and responsibility?

I no longer think the phrase “human in the loop” is enough. A person can remain in the loop without controlling it. Someone whose only job is to click Accept is technically in the loop, but may no longer be participating in any meaningful sense.

What we should design instead is a loop that produces two outputs at once: completed work, and a person whose judgment is stronger than it was at the start.

## When Production Gets Cheaper, Scarcity Moves

In [*Prediction Machines*](https://www-2.rotman.utoronto.ca/insightshub/ai-analytics-big-data/prediction-machines-simple-eco), Agrawal, Gans, and Goldfarb break a task into five components: data, prediction, judgment, action, and outcome.

![Prediction Machines, Figure 7-1: Anatomy of a task, where data, prediction, judgment, action, and outcome form the decision chain {md}](../images/prediction-machines-anatomy-task.png)

*Source: Prediction Machines, Figure 7-1, Anatomy of a Task.*

The book, published in 2018, makes a clean economic argument: AI lowers the cost of prediction, and when one thing becomes cheaper, its complements become more valuable. A prediction must be paired with “what I want” before it can become a decision. The cheaper prediction becomes, the more judgment matters.

The age of agents moves one step further. Models do not merely predict. They write code, call APIs, operate browsers, deploy services, and coordinate other agents in parallel. Action is becoming cheaper too.

When both prediction and action are cheap, humans still occupy three roles that cannot easily be outsourced together:

- Providing context: what reality does this problem live in?
- Exercising judgment: which outcome is worth pursuing, and how should conflicts be ranked?
- Bearing the outcome: if the decision is wrong, who loses time, money, reputation, or opportunity?

I prefer to expand the book’s “data” into “context.” Data can be retrieved. What remains scarce is the reality around it: why users behave this way, which mistakes the team has already made, where resource limits lie, which risks are acceptable, and which ordinary-looking metric could determine whether an entire business survives.

A model can have a million-token context window and still not know what matters to you. It can receive signals such as “tests passed” or “revenue fell by 2%,” but it will not naturally know whether the latter is noise, seasonality, or an emergency that the company must address immediately.

This is not simply missing knowledge. The model does not occupy the position from which consequences are borne.

What humans cannot easily outsource, then, is not some mystical intelligence. It is a set of relationships: your relationship with the history of the problem, with the values involved in the tradeoff, and with responsibility for the outcome.

## Judgment Sets Direction; Control Keeps You in the Driver’s Seat

Two ideas that are often collapsed into one need to be separated: judgment and control.

Judgment is not saying “right” or “wrong” after AI produces an answer. It begins earlier and reaches further. It means defining the real problem behind an intention, ranking conflicting goals, deciding how much complexity the system can justify, drawing boundaries that must not be crossed, choosing what evidence is sufficient to proceed, and deciding who has the authority to say, “This is actually done.”

Prediction answers, “What is likely to happen next?” Judgment answers, “What do we want to happen, and what are we willing to pay for it?” It does not merely score an answer. It assigns value to outcomes.

Control is built on judgment, but it is not the same thing. You may know exactly what you want while being unable to understand what the agent did, redirect it when it drifts, or prove that it arrived. Judgment that never enters the system remains a wish.

I now use three conditions to check whether I truly controlled an AI collaboration:

- **Comprehensible:** I can explain the overall structure, key decisions, and supporting assumptions without leaning on the agent’s summary.
- **Controllable:** I can encode preferences and boundaries into the workflow, then pause, reject, or redirect it at the load-bearing decision points.
- **Verifiable:** I do not have to trust the model’s tone. I can confirm its claims through tests, logs, user behavior, or independent review.

All three matter. Understanding without the ability to intervene makes you an alert passenger. Intervention without understanding is random steering. Verification supplied only by the agent that performed the work may simply allow one misunderstanding to certify itself.

This is also where AI automation differs from traditional automation. When conventional machinery encounters an exception, it often sounds an alarm, stops, and explicitly hands control back to a human. Generative AI does not necessarily fail so visibly. It can continue working while wrong, producing stable, confident, well-structured output. Control is not lost at one obvious moment. It slips away quietly through a series of “continue” and “accept” clicks.

So the feeling of control cannot come from “I prompted every step,” or “I clicked Accept at the end.” Real control means knowing what matters in this problem, seeing the decision points that determine direction, being able to change the system’s behavior at those points, and accepting responsibility for what happens after approval.

Judgment determines where to go. Control keeps you capable of steering. Verification tells you whether you arrived. Responsibility keeps the whole exercise connected to reality.

## Judgment Is Not a Stockpile

It is tempting to call judgment the moat of the AI era. The metaphor is misleading because a moat is a stockpile: dig it, fill it, defend it, and assume it will remain there.

Judgment does not work that way.

In 1983, cognitive psychologist Lisanne Bainbridge described the “ironies of automation.” The more advanced automation becomes, the fewer situations remain for a human operator—but those situations are also more difficult. High-level skill, meanwhile, depends on frequent practice. Once automation takes over routine work, the operator becomes a monitor and may be least prepared at the exact moment intervention matters most.

AI extends this paradox from operational skill to judgment itself.

In the past, an engineer personally encountered misunderstood requirements, uncertain designs, failed implementations, and repairs. Every point of friction trained intuition. Once an agent takes over execution, that middle disappears and the person sees only the packaged result. Four things follow:

1. The person moves from producer to reviewer, even though evaluation often requires more experience than execution.
2. The consequences of error are diluted. You did not fall into the hole, and you may not participate in climbing out.
3. The process becomes a black box. A fluent summary creates a feeling of control without creating understanding.
4. Beginners use AI to complete work they do not yet understand, losing the practice through which judgment would otherwise develop.

The most dangerous state is not that AI occasionally makes mistakes. It is that AI continually produces things that look sufficiently correct while humans gradually lose the ability to detect what is wrong.

Judgment is therefore not a river to defend. It is a capacity that must remain metabolically active. Context expires when it is not refreshed. Rules become rigid when they are not recalibrated. Experience that is never reviewed decays into intuition that cannot explain itself.

What we can manage is not a fixed stock of judgment, but the rate at which judgment regenerates.

That is the water source.

## Humans Should Not Stay in Every Step, but at the Load-Bearing Points

It is easy to overcorrect. If judgment requires practice, perhaps humans should read every line of code, inspect every tool call, and approve every action.

That does not work either.

When several agents work in parallel, human attention immediately becomes the single bottleneck. If every agent must wait for a person to clarify requirements, review implementation, and approve the next move, parallelism merely turns one queue into several simultaneous queues. Being trapped in every detail does not create high-quality feedback. More often, it creates a tired person stamping more approvals.

A healthy exit does not mean leaving the loop or remaining in every step. It means moving the person to the points that actually carry judgment:

- Confirm the problem and boundaries before implementation instead of continuously adding requirements during it.
- Review the test plan and success criteria instead of assuming every implementation needs line-by-line review.
- Compare several genuinely viable routes instead of approving the only option presented.
- Adjudicate conflicting evidence and architectural tradeoffs instead of doing mechanical checks for the agent.
- Rebuild an understanding of the system after delivery instead of reading only a “completed” summary.

Routine execution can be delegated to the model. Value judgments should not be delegated along with it by accident.

This also explains why stronger models often benefit from leaner prompts. The goal, real-world context, non-negotiable boundaries, and evidence of completion should be explicit. Implementation details the model can competently decide do not need to be frozen in advance. Excessive prescription constrains the model and gives the person a false belief that writing more instructions means controlling the process.

Control is not the number of instructions you wrote. It is whether you can change direction at the moments that matter—and explain why.

## A Healthy Loop Must Produce Two Outputs

I now use a simpler question to evaluate an AI workflow: what did it deliver when it ended?

If it delivered only code, documents, charts, or conclusions, the loop increased production but may have consumed the person operating it.

If it also left behind inspectable decisions, failed assumptions, a deeper model of the system, and rules that will change future behavior, then the loop trained both the person and the system.

The first output is the work product. The second is judgment infrastructure.

Most teams optimize only the first: finish faster, run more agents in parallel, require less human labor. Sustainable advantage comes from the second: after every task, there are fewer unknowns, better tests, more accurate rules, and participants who understand the problem more deeply.

The water source of judgment is the conversion of every cheap unit of AI execution into a high-density human learning sample.

## The Water Cycle of Judgment

Models learn from priors and feedback. Human learning is not fundamentally different: reading, examples, and other people’s experience establish priors; action, outcomes, and reflection update strategy.

Humans have an advantage in sample efficiency. A model may need large amounts of preference data. A person who carefully examines a few important decisions may update their intuition about what “good” looks like. The problem is that most AI workflows compress the decision process into a smooth summary and discard the most valuable training samples.

What I want to preserve is the following water cycle.

![Judgment water flywheel: probe blind spots, generate options, stress judgment, inspect evidence, explain, codify rules, and compound judgment {lg}](../images/judgment-water-flywheel.png)

### 1. Make the Map Touch the Territory

Prompts, plans, and existing knowledge are maps. The codebase, user behavior, and real constraints are the territory. The gap between them is the unknown.

Before execution begins, tell the model where you stand: how familiar you are with the problem, which facts are confirmed, which are guesses, and which outcomes are unacceptable. Then ask it to scan for blind spots rather than immediately agree with your first plan.

Unknowns can be divided roughly into four kinds:

- Known knowns: goals and facts you can already articulate.
- Known unknowns: questions you know remain unresolved.
- Unknown knowns: preferences you cannot state in advance but can recognize when you see a good or bad option.
- Unknown unknowns: questions you do not know to ask and possibilities you do not know exist.

![Unknown matrix: probe blind spots into known unknowns, research gaps into known knowns, and prototype tacit knowledge into judgment {md}](../images/unknown-matrix.png)

Blind-spot probes, research, interviews, references, and prototypes are not there to let AI make your judgments. They give you the objects you need in order to judge earlier.

Every unknown discovered in advance is a cheap failure that happened early.

### 2. Generate Options That Are Actually Different

If the model offers only one plan, people easily mistake “the first complete answer” for “the correct answer.” Judgment needs objects to compare.

Ask for several routes that differ in mechanism, not merely presentation. For each route, identify what it optimizes, what it sacrifices, and under which conditions it fails. If you cannot articulate your preference, stop adding adjectives and build prototypes so you can react to concrete artifacts.

High-quality references are often more valuable than lists of attributes. Mature source code, a complete product, or a precise professional pattern can embody relationships you cannot enumerate. A reference is not there to be copied at the surface. It exposes the relationships, rhythm, and boundaries you actually care about.

The point of divergence is not to own more options. It is to force hidden standards of judgment into the open.

### 3. Turn Preferences into Testable Commitments

When choosing a route, do not record only “we chose A.” Record why A won, what was sacrificed, which assumptions support it, and what new evidence would make you switch to B.

Then translate the judgment into tests, acceptance criteria, and risk boundaries.

This step matters because taste enters a feedback loop only after it becomes an assertion that can fail. Otherwise, success appears self-evident and failure reveals nothing about which judgment was wrong.

Tests can evaluate judgment, not just code:

- Did this design actually reduce the number of user steps?
- Did this abstraction reduce complexity for its callers?
- Does this review rule catch another instance of the same defect?
- Is this evidence sufficient to support release, rather than merely sufficient to show that the system appears to run?

### 4. Make Execution Autonomous and Verification Independent

Once boundaries and acceptance criteria are set, the model should have enough tools to execute end to end: read code, run services, operate a browser, inspect logs, debug, and fix. A person does not need to watch it type.

But the executor should not monopolize the interpretation of its own work. If the same agent interprets the requirement, designs the tests, implements the change, and declares success, one misunderstanding can contaminate the entire chain.

A more reliable approach introduces independent verification. An agent with fresh context receives only the requirements, test plan, and results, then looks for failures. At high-risk points, a person adjudicates the business boundary or architectural tradeoff. The verifier’s job is not to retell the plan. It is to find evidence that could overturn it.

Progress and completion claims must also rest on evidence produced by tools. If a test failed, say it failed. If a step was skipped, say it was skipped. If something was not verified, do not describe it in the completed tense. Verifiability does not mean the model sounds certain. It means every load-bearing claim points back to a real result.

### 5. Re-enter the System Through Explanation

Understanding is not decoration after delivery, nor merely a way to check correctness. Understanding determines whether you can participate in the next round of design.

Reading every line of a diff is not the only way to understand. After long-running agent work, I want a walkthrough organized by logic: first provide the necessary background, then explain the key decisions and system changes, and finally identify the remaining assumptions and risks. File paths are an index. What must be restored is the conceptual model of the system.

I also like to end with a quiz. The rule is simple: if I cannot answer the important questions in my own words, I am not yet qualified to merge.

The quiz is a governor between execution speed and understanding speed. It is not proof that I memorized details. It checks whether I can still imagine how the system should evolve next.

### 6. Turn One Adjudication into Future Behavior

Finally, record what is actually worth keeping from this round: which assumption failed, where execution diverged from the plan, why a review finding was valid or a false positive, and which method proved effective.

Judgments that can reliably prevent the same class of error should become a rule, a test, or a Skill. Facts already present in code and documentation should not be duplicated. Lessons later shown to be wrong should be deleted. Rules that become rigid should be recalibrated.

Compounding is not the accumulation of more text. It means causing the next action to change in an observable way.

If the same error keeps appearing, the rule never entered the real workflow. If the rule begins blocking changes that are actually reasonable, the judgment itself needs revision.

Taste gains a version history only after a rule enters the repository.

## How to Tell Whether a Loop Is Healthy

[Loop Engineering](https://addyosmani.com/blog/loop-engineering/) expands the object of engineering from an individual prompt to the entire cycle: the system discovers tasks, assigns work, invokes agents, records state, checks results, and decides what to do next.

![LangChain, The Art of Loop Engineering: an agent event loop around state, tools, memory, and messages {lg}](../images/langchain-loop-engineering-event-loop.png)

*Source: LangChain, [The Art of Loop Engineering](https://www.langchain.com/blog/the-art-of-loop-engineering).*

But a loop that runs autonomously is not necessarily healthy. The same three conditions used earlier to ask whether a person retains control also apply to the workflow as a whole: is it comprehensible, controllable, and verifiable? I abbreviate them as CCV. If decisions are hidden inside a black box, boundaries cannot change when new evidence appears, and completion claims lack independent evidence, then the faster the loop runs, the faster the person loses control.

One longer-term question remains: did this loop change the next loop?

If it left behind no new test, rule, understanding, or more accurate definition of the problem, it may have been efficient outsourcing and nothing more. Efficient outsourcing is valuable. It should not be mistaken for capability accumulation.

## Parallel Agents Increase Judgment Density, Not Free Time

Once one agent can complete work autonomously, the natural next step is to run several at once. Execution throughput rises, and the human role changes with it. Instead of writing every line of code, the person continually judges whether a requirement is correct, whether a test plan is complete, how several implementations compare, and which discovery deserves escalation.

This does not automatically make work easier. It transforms a mixture of thinking and doing into concentrated thinking. Three agents producing results at once can saturate one person’s attention very quickly.

Scaling therefore cannot optimize only for agent concurrency. It must optimize the entry points for judgment:

- Align on requirements serially, then parallelize execution.
- Give independent tasks to different agents, but centralize final semantic judgment.
- Batch low-value results instead of allowing every message to interrupt immediately.
- Escalate only matters that genuinely require a value tradeoff.
- Match review intensity to risk instead of treating every artifact equally.

The metrics for a parallel system should not be limited to the number of tasks completed. They should include how often each agent interrupts a human before finishing, how many completion claims are backed by evidence, how many errors become reusable rules, and whether the person still understands the system at the end.

High throughput is not high leverage. Scale is sustainable only when output and judgment grow together.

## The Loop Can Be Copied. The Person Trained by It Cannot.

Every workflow eventually becomes text, Skills, tools, and code. Anything that can be written down can be copied. As models become stronger, they need less scaffolding. An agent loop that is scarce today may become a default capability tomorrow.

The loop itself is not a permanent moat either.

What continues to differentiate people is what the loop produces inside its participants. After years of high-density blind-spot discovery, option comparison, evidence adjudication, and consequence review, a person develops a better sense of problems, faster pattern recognition, and more accurate tradeoffs. Others can copy the rules, but they cannot instantly copy the training history behind them.

The loop will become easier to copy. The person will become harder to catch.

The durable advantage is therefore not merely a human in the loop, but an expert in the loop—or more precisely, a person who continually trains themselves into an expert while remaining inside a loop that does not take away understanding or responsibility.

What if models eventually absorb expert judgment as well? I do not have a definitive answer, but one direction seems increasingly clear: solutions will continue to depreciate; problems will not.

At its deepest level, judgment is not “how should this be solved?” but “what is worth solving, and which outcome is worth accepting responsibility for?” That is not just a capability. It is a position. Whoever owns the problem, represents the values in the tradeoff, and bears the consequences ultimately has the authority to say, “This is done.”

Perhaps the most durable advantage will not lie in any skill, but in your relationship with the problem.

Until then, build the loop—but do not let it produce only more things.

Let it keep producing a more discerning version of you as well.
