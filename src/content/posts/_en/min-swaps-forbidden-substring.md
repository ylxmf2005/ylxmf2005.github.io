---
title: "An Original Problem: Minimum Swap Distance for Pattern Elimination"
published: 2026-06-24
description: Find the minimum number of arbitrary swaps needed to remove every occurrence of a pattern T, using occurrence blocks, DAG DP, and convex optimization.
tags: [algorithms, strings, KMP, dynamic programming, optimization]
category: Problem Solving
lang: en
draft: false
ogImage: https://efgli.com/default-og.jpg
---

## Problem

Given a string $S$ and a pattern $T$, where $m=|T|$, one operation chooses any two positions in $S$ and **swaps** their characters. Find the **minimum number of operations** needed so that $S$ no longer contains $T$ as a substring.

Constraints: $|T|\ge 3$, adjacent characters in $T$ are distinct ($T_i\ne T_{i+1}$), and $S$ may contain arbitrary additional characters.

Because swapping preserves the multiset of characters, the problem is equivalent to finding, among all rearrangements of $S$ that avoid $T$, one with minimum **swap distance** from $S$ (the Cayley distance in the permutation case).

---

## Two properties

The solution repeatedly uses two facts that follow directly from the statement:

1. **One swap changes at most two positions.** Every lower bound below comes from this fact.
2. **Adjacent characters in $T$ are distinct. Therefore, any segment containing two equal adjacent characters cannot match $T$.** This lets us destroy target occurrences without creating new ones.

---

## 1. Example

$$T=\texttt{abababa}\qquad(m=7)$$

It satisfies the constraint, and its first and last characters are equal: $T_0=T_6=\texttt{a}$. This will matter later.

$$S=\texttt{ababababababazzzzzzzzzzzzzzzzzabababazzzabababazzzabababazzz}$$

The character `z` does not appear in $T$ and only separates groups of occurrences.

Use KMP to find every starting position of $T$ in $S$. There are seven:

$$a=[\,\underbrace{0,\,2,\,4,\,6}_{\text{overlapping prefix group}},\ \ \underbrace{30,\,40,\,50}_{\text{three isolated occurrences}}\,]$$

Visualized on $S$:

![Seven occurrences of T in S: #0-#3 overlap into one cluster, while #4-#6 are isolated](../images/fig1-occurrences.png)

Number these occurrences from left to right as `#0, #1, ..., #6`. Occurrence $i$ starts at $a_i$ and occupies $[a_i,a_i+m-1]$.

Because adjacent characters in $T$ differ, the starting positions of two occurrences differ by at least two. The prefix group starts at $0,2,4,6$, exactly two apart.

---

## 2. Shared positions and blocks

Destroying an occurrence requires changing at least one position inside it.

The first four occurrences overlap. If one position belongs to several occurrences, changing that single position destroys all of them. This suggests the following reformulation:

> Partition the occurrences from left to right into blocks such that all occurrences in each block share at least one common position. Changing one shared position destroys the entire block.

For occurrences `#i` through `#j`, their common intersection is $[a_j,a_i+m-1]$. It is nonempty exactly when

$$a_j-a_i\le m-1.$$

Its width is $m-(a_j-a_i)$. This width gives two kinds of blocks.

---

## 3. Flexible and rigid blocks

### Flexible block: common width at least 2

The condition is $a_j-a_i\le m-2$.

Consider `#0,#1,#2`, starting at $0,2,4$ with $m=7$:

![Flexible block: #0, #1, and #2 share positions 4, 5, and 6](../images/fig2-flexible.png)

Their common intersection has three positions. The formula gives $7-(4-0)=3$. Any of these shared positions can be changed, so the block is flexible.

### Rigid block: common width exactly 1

The condition is $a_j-a_i=m-1$.

Consider `#0` and `#3`, whose starts differ by $6=m-1$:

![Rigid block: #0 and #3 share only position 6](../images/fig3-rigid.png)

The only shared position is $p=6$, so it must be changed. This position is simultaneously:

- the final character of `#0`, equal to $T_{m-1}$;
- the first character of `#3`, equal to $T_0$.

Therefore a rigid block can exist only if $T_0=T_{m-1}$. Its shared character is fixed as

$$c=T_0=T_{m-1}.$$

For `abababa`, both are `a`, so rigid blocks are possible. If the endpoints of $T$ differ, the algorithm immediately takes the simpler branch with no rigid blocks.

> A flexible block offers several shared positions to change. A rigid block offers exactly one, whose original character must be $c$. All later complexity comes from this distinction.

---

## 4. The partition DAG

There are several ways to partition the occurrences. They produce different numbers of flexible and rigid blocks, and therefore different costs. We represent every valid partition in a directed acyclic graph.

### 4.1 State order

Process occurrences from left to right. A state $i$ means that occurrence `#i` is the leftmost occurrence not yet covered by a block. The next block must begin with `#i`.

- The initial state is $0$.
- After choosing a block, move to the first occurrence outside it.
- After all $r$ occurrences are covered, reach terminal state $r$.

### 4.2 Two maximal choices

At state $i$, only two maximal choices matter.

**(A) Maximum flexible block.** Starting from `#i`, include as many following occurrences as possible while the first and last starts differ by at most $m-2$. This choice always exists.

**(B) Rigid block.** If the immediately following occurrence outside the maximum flexible block starts exactly at $a_i+(m-1)$, include it as well. The common width shrinks to one, producing a rigid block.

Each choice becomes an edge in the DAG.

### 4.3 Enumerating the example

Here $m=7$, so a flexible block permits a span at most five and a rigid block requires a span of six. The occurrence starts are $a=[0,2,4,6,30,40,50]$.

| State $i$ | Maximum flexible block | Flexible destination | Rigid choice |
|---|---|---|---|
| $0$ | $\{\#0,\#1,\#2\}$ | state $3$ | $\{\#0,\#1,\#2,\#3\}\to4$ |
| $3$ | $\{\#3\}$ | state $4$ | none |
| $4$ | $\{\#4\}$ | state $5$ | none |
| $5$ | $\{\#5\}$ | state $6$ | none |
| $6$ | $\{\#6\}$ | state $7$ | none |

States $1$ and $2$ never appear as starting states because the flexible edge from state $0$ already covers them.

### 4.4 Paths

The states and choices form the following DAG, with rigid edges shown in red:

![Partition DAG: every path from state 0 to the terminal state is a complete partition](../images/fig-dag.png)

There are two paths in the example:

- **All flexible:** $0\to3\to4\to5\to6\to7$, giving five flexible blocks.
- **With one rigid edge:** $0\to4\to5\to6\to7$, giving four blocks, one of them rigid.

Define

$$g_i=\min\{j\mid a_j>a_i+m-2\}.$$

The flexible edge is $i\to g_i$. If $a_{g_i}=a_i+(m-1)$, there is also a rigid edge $i\to g_i+1$.

The next task is to compute the cost of a path.

---

## 5. Cost of a path: $C(u,f)$

Suppose a path contains $u$ flexible blocks and $f$ rigid blocks. Its minimum number of swaps is

$$C(u,f)=\max\!\Big(\Big\lceil\tfrac{u+f}{2}\Big\rceil,\ f\Big).$$

The two terms are lower bounds, and both can be achieved simultaneously.

### 5.1 Pairing lower bound

One swap changes at most two positions. Every block needs at least one changed position, and distinct blocks use distinct positions. Therefore, for $k$ swaps,

$$u+f\le2k\quad\Longrightarrow\quad k\ge\Big\lceil\tfrac{u+f}{2}\Big\rceil.$$

Equivalently, one swap can destroy at most two blocks.

### 5.2 Rigid-block lower bound

The unique shared position of every rigid block initially contains $c=T_0=T_{m-1}$ and must be changed to another character.

Let $A$ be the set of positions whose original character is $c$. Initially, no position in $A$ contains a non-$c$ character. One swap can increase that number by at most one. After $k$ swaps, at most $k$ originally-$c$ positions can contain non-$c$ characters. Since every rigid block needs one, $f\le k$.

### 5.3 Upper bound: pairing with safe swaps

We construct swaps that destroy only their target blocks and create no new occurrence of $T$. This uses the second property: two equal adjacent characters make a match impossible.

> In the common part of a flexible block, choose a position and change it to match a neighbor. For example, turn $T_{m-2}$ into $T_{m-1}$. The resulting equal adjacent pair destroys every occurrence in the block. Pair this target position with a target position in another block, and one swap destroys both blocks. A rigid block works similarly, except its unique $c$ position is forced.

Consider isolated flexible blocks `#4` and `#5`, both equal to `abababa`. Choose the penultimate character of `#4` (position 35, `b`) and the final character of `#5` (position 46, `a`) and swap them:

![Safe swap: swapping positions 35 and 46 creates aaa in #4 and bb in #5](../images/fig4-safeswap.png)

Both occurrences disappear in one swap, and no new `abababa` appears. The new `aaa` and `bb` segments cannot occur inside $T$, whose adjacent characters always differ.

Combining such swaps gives the bound: pair rigid blocks with flexible ones when possible, pair remaining flexible blocks together, and handle leftover rigid blocks individually. The result is exactly

$$\max\!\Big(\Big\lceil\tfrac{u+f}{2}\Big\rceil,f\Big).$$

Some useful construction details:

1. A flexible block has several safe candidate positions near its ends. One block can use a change $x\to y$ while another uses the complementary $y\to x$, allowing a direct swap.
2. To keep multiple swaps from interfering, order flexible blocks by position, assign one change direction to the left half and the complementary direction to the right half, then pair across the halves.
3. A rigid block simply changes its unique $c$ position. It may pair with a flexible block, while a leftover rigid or flexible block can be handled in one swap.

For path 2 in the example, $u=3$ and $f=1$:

![Path 2 pairing: one rigid block pairs with #4, while #5 pairs with #6](../images/fig-pairing.png)

### 5.4 The two example paths

| Path | Blocks | $u$ | $f$ | Cost |
|---|---|---|---|---|
| all flexible | flex`{#0,#1,#2}`, flex`{#3}`, flex`{#4}`, flex`{#5}`, flex`{#6}` | 5 | 0 | $3$ |
| one rigid | rigid`{#0..#3}`, flex`{#4}`, flex`{#5}`, flex`{#6}` | 3 | 1 | $\mathbf2$ |

The optimum is two swaps. The rigid edge merges two flexible blocks into one, reducing the total block count from five to four without making $f$ the bottleneck.

---

## 6. Minimizing $C(u,f)$

We now need to minimize

$$C(u,f)=\max\!\Big(\Big\lceil\tfrac{u+f}{2}\Big\rceil,f\Big)$$

over all paths from $0$ to $r$.

### 6.1 Reduction to $F_b$

For a fixed total number of blocks $b=u+f$, only the minimum achievable number of rigid blocks matters. Define

$$F_b=\text{minimum rigid blocks among partitions with exactly }b\text{ blocks}.$$

Then

$$\boxed{\text{answer}=\min_b\max\!\Big(\Big\lceil\tfrac b2\Big\rceil,F_b\Big).}$$

### 6.2 An $O(r^2)$ DP

Run dynamic programming on the DAG. Every edge contributes exactly one block; a rigid edge additionally contributes one rigid block.

Let `dp[i]` map a number of blocks $b$ to the minimum rigid count for a path from state $i$ to $r$.

- Base case: `dp[r] = {0 blocks: 0 rigid}`.
- Flexible edge to $g_i$: transform each $(b,f)$ in `dp[g_i]` into $(b+1,f)$.
- Rigid edge to $g_i+1$: transform each $(b,f)$ into $(b+1,f+1)$.
- For the same $b$, keep the smaller $f$.

There are $O(r)$ states and each table has size $O(r)$, for $O(r^2)$ total time.

In the example,

$$F_4=1,\qquad F_5=0,$$

so

$$\min\big(\max(\lceil4/2\rceil,1),\max(\lceil5/2\rceil,0)\big)=\min(2,3)=\mathbf2.$$

This is sufficient for moderate input sizes. The remaining sections optimize for as many as $2\times10^6$ occurrences.

### 6.3 Convexity of $F_b$

$F_b$ has two useful properties:

- It is non-increasing: using more blocks makes it easier to avoid forced rigid merges.
- It is convex: $2F_b\le F_{b-1}+F_{b+1}$.

The answer becomes visible when the two bounds are plotted together:

![The answer is the minimum over max(ceil(b/2), F_b)](../images/fig-convex.png)

- $\lceil b/2\rceil$ increases with $b$.
- $F_b$ decreases and is convex.
- Their pointwise maximum is U-shaped, and its minimum is the answer.

The figure is illustrative; it uses a sample convex sequence to show the shape.

### 6.4 Parametric optimization and slope binary search

Instead of enumerating $b$, assign cost $\lambda$ to every flexible block and $2-\lambda$ to every rigid block:

$$H(\lambda)=\min_{\text{paths}}\big(\lambda u+(2-\lambda)f\big),\qquad0\le\lambda\le1.$$

For fixed $\lambda$, this is a linear shortest-path DP on the DAG: flexible edges cost $\lambda$ and rigid edges cost $2-\lambda$. A reverse scan evaluates it in $O(r)$.

Convexity of $F_b$ gives

$$\text{answer}=\left\lceil\frac12\max_{0\le\lambda\le1}H(\lambda)\right\rceil.$$

$H$ is concave and piecewise linear. Binary-search its slope to find the maximum. To avoid floating-point errors, search a grid with denominator $2^{50}$ and compute the final intersection exactly with `__int128`.

---

## 7. Complete algorithm

1. Use **KMP** to find all occurrence starts $a_i$. If there are none, return zero.
2. Use **two pointers** to compute every $g_i$, the destination of the maximum flexible block.
3. If $T_0\ne T_{m-1}$, no rigid block exists. Greedily follow flexible edges, count the blocks $b$, and return $\lceil b/2\rceil$.
4. Otherwise maximize $H(\lambda)$, or use the $O(r^2)$ DP for smaller inputs, and return $\lceil H_{\max}/2\rceil$.

## 8. Complexity

KMP and DAG construction take $O(|S|+|T|+r)$. Each fixed-$\lambda$ DP takes $O(r)$, and the binary search uses about 54 evaluations. The total is

$$O\!\Big(\sum|S|+\sum|T|+\sum\operatorname{occ}\log|S|\Big),\qquad\text{space }O(|T|+r).$$

The proof never requires $S$ and $T$ to use the same alphabet, so arbitrary extra characters in $S$ do not affect correctness.

---

## 9. Reference implementation

The core is a linear DP on the DAG plus slope binary search. For smaller inputs, the rigid branch can be replaced with the $O(r^2)$ table DP from Section 6.2.

```cpp
#include <bits/stdc++.h>
using namespace std;
using i128 = __int128_t;

struct Line { int c; int d; }; // c = 2*rigid, d = flexible - rigid
struct Node { Line mn; Line mx; };

static inline i128 get_value(const Line& line, long long num, long long den) {
    return (i128)line.c * den + (i128)line.d * num;
}
static inline long long ceil_div(i128 a, i128 b) {
    return (long long)((a + b - 1) / b);
}

// Return every starting position where t occurs in s.
vector<int> find_occurrences(const string& s, const string& t) {
    const int n = (int)s.size(), m = (int)t.size();
    vector<int> pi(m), occ;
    for (int i = 1, j = 0; i < m; ++i) {
        while (j > 0 && t[i] != t[j]) j = pi[j - 1];
        if (t[i] == t[j]) ++j;
        pi[i] = j;
    }
    for (int i = 0, j = 0; i < n; ++i) {
        while (j > 0 && s[i] != t[j]) j = pi[j - 1];
        if (s[i] == t[j]) ++j;
        if (j == m) { occ.push_back(i - m + 1); j = pi[j - 1]; }
    }
    return occ;
}

long long solve_query(const string& s, const string& t) {
    const int m = (int)t.size();
    assert(m >= 3);

    vector<int> occ = find_occurrences(s, t);
    const int r = (int)occ.size();
    if (r == 0) return 0;

    // go[i] is the state reached after taking the maximum flexible block.
    vector<int> go(r);
    for (int i = 0, j = 0; i < r; ++i) {
        j = max(j, i + 1);
        const int limit = occ[i] + m - 2;
        while (j < r && occ[j] <= limit) ++j;
        go[i] = j;
    }

    // Different endpoints imply that rigid blocks cannot exist.
    if (t.front() != t.back()) {
        int blocks = 0;
        for (int i = 0; i < r; i = go[i]) ++blocks;
        return (blocks + 1LL) / 2;
    }

    // At each state, keep optimal lines with minimum and maximum slope.
    vector<int> c_min(r + 1), d_min(r + 1), c_max(r + 1), d_max(r + 1);

    auto evaluate = [&](long long num, long long den) -> Node {
        c_min[r] = d_min[r] = c_max[r] = d_max[r] = 0;
        for (int i = r - 1; i >= 0; --i) {
            const int j = go[i];
            Line flex_min{ c_min[j], d_min[j] + 1 };
            Line flex_max{ c_max[j], d_max[j] + 1 };
            Line result_min = flex_min, result_max = flex_max;
            i128 best = get_value(flex_min, num, den);

            // A rigid edge exists exactly when the next start is occ[i]+m-1.
            if (j < r && occ[j] == occ[i] + m - 1) {
                Line rigid_min{ c_min[j + 1] + 2, d_min[j + 1] - 1 };
                Line rigid_max{ c_max[j + 1] + 2, d_max[j + 1] - 1 };
                i128 cand = get_value(rigid_min, num, den);
                if (cand < best) {
                    best = cand;
                    result_min = rigid_min;
                    result_max = rigid_max;
                } else if (cand == best) {
                    if (rigid_min.d < result_min.d) result_min = rigid_min;
                    if (rigid_max.d > result_max.d) result_max = rigid_max;
                }
            }
            c_min[i] = result_min.c; d_min[i] = result_min.d;
            c_max[i] = result_max.c; d_max[i] = result_max.d;
        }
        return Node{ {c_min[0], d_min[0]}, {c_max[0], d_max[0]} };
    };

    constexpr long long DEN = 1LL << 50;

    Node at_zero = evaluate(0, DEN);
    if (at_zero.mn.d <= 0)
        return ceil_div(get_value(at_zero.mn, 0, DEN), (i128)2 * DEN);

    Node at_one = evaluate(DEN, DEN);
    if (at_one.mx.d >= 0)
        return ceil_div(get_value(at_one.mn, DEN, DEN), (i128)2 * DEN);

    long long left = 0, right = DEN;
    while (right - left > 1) {
        const long long mid = (left + right) >> 1;
        Node cur = evaluate(mid, DEN);
        if (cur.mn.d <= 0 && cur.mx.d >= 0)
            return ceil_div(get_value(cur.mn, mid, DEN), (i128)2 * DEN);
        if (cur.mn.d > 0) left = mid;
        else right = mid;
    }

    Node left_node = evaluate(left, DEN);
    Node right_node = evaluate(right, DEN);
    Line lhs = left_node.mn;
    Line rhs = right_node.mx;
    const long long den = lhs.d - rhs.d;
    const i128 h_num = (i128)lhs.d * rhs.c - (i128)rhs.d * lhs.c;
    return ceil_div(h_num, (i128)2 * den);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int Q; cin >> Q;
    while (Q--) {
        string S, T; cin >> S >> T;
        cout << solve_query(S, T) << '\n';
    }
    return 0;
}
```

---

## Why the restrictions matter

- **Adjacent characters in $T$ are distinct.** This keeps occurrence starts at least two positions apart and gives the clean flexible/rigid block structure. Without it, overlaps become more complicated and the DAG argument fails.
- **$|T|\ge3$.** Patterns of length two form a different problem. For example, $S=\texttt{aabb}$ and $T=\texttt{ab}$ have only one occurrence, but the answer is two, so the block cost formula no longer applies.
- The partition depends only on which positions violate the constraint, not on the distance metric. Replacing arbitrary swaps (Cayley distance) with Hamming distance or adjacent swaps (Kendall tau distance) should lead to related variants.
