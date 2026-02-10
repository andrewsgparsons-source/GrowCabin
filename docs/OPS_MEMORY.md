# Ops — Fixing Andy memory (priority)

## Symptom
`memory_search` fails in this environment (provider/auth issue), so I can’t reliably recall prior work via semantic search.

## Goal
Restore working semantic memory search over:
- `MEMORY.md`
- `memory/*.md`

## Likely root causes
- Missing API keys / auth profiles for the embeddings provider(s) used by `memory_search`.
- Agent auth profile not configured for OpenAI/Google/Voyage embedding providers.

## Plan
1) Identify what provider `memory_search` is configured to use.
2) Configure embeddings provider credentials for this agent.
3) Re-test `memory_search` with a known query.
4) Document the fix steps + any required secrets handling.

## Constraints
- Don’t paste secrets into chat.
- Prefer fine-grained credentials and least privilege.

## Done criteria
- `memory_search` returns results for simple queries like: “Windows Chrome CDP” / “Grow Cabin”.

