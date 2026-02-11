# Ops — Fixing Andy memory (priority)

## Status (fixed)
`memory_search` is working again using **local embeddings** (no API keys).

## Symptom
- `memory_search` returned: **"Failed to load model"**
- In some runs it also attempted to download an invalid GGUF (404) due to an old modelPath.

## Root cause
Local embeddings were enabled, but the native dependency **`node-llama-cpp`** wasn’t built correctly in this environment, so the local model could not load.

## Final configuration
OpenClaw config (`~/.openclaw/openclaw.json`):

```json
{
  "agents": {
    "defaults": {
      "memorySearch": {
        "enabled": true,
        "provider": "local",
        "fallback": "none",
        "local": {
          "modelPath": "hf:ggml-org/embeddinggemma-300M-GGUF/embeddinggemma-300M-Q8_0.gguf"
        }
      }
    }
  }
}
```

Model cache location observed:
- `/home/andy/.node-llama-cpp/models/hf_ggml-org_embeddinggemma-300M-Q8_0.gguf`

## Fix steps (repeatable)
1) Ensure the modelPath is set to a valid HuggingFace GGUF URI (Q8 confirmed working):
   - `hf:ggml-org/embeddinggemma-300M-GGUF/embeddinggemma-300M-Q8_0.gguf`

2) Rebuild native deps for local embeddings (this is what actually unblocked it here):

```bash
cd /home/andy/.npm-global/lib/node_modules/openclaw
npm rebuild node-llama-cpp
```

3) Verify memory search:
- `memory_search("Chrome CDP")` should return hits from `memory/*.md`.

## Notes
- `openclaw gateway status` CLI currently hangs in this environment, but the gateway process is healthy (listening on `127.0.0.1:18789`) and memory tools work.

