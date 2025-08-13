---
title: "Choosing the Right Machine Learning Model for Your Startup"
date: "2025-05-15"
tags: ["ML", "product", "models"]
excerpt: "Start with the problem and constraints, not the model. Here’s a practical decision path."
---

**Start with constraints**: latency, cost, accuracy, data size, privacy. Then pick the simplest model that can work.

- Tabular data: gradient boosting (XGBoost, LightGBM) is a strong baseline.
- Language: retrieval + LLM (few-shot or function calling) before fine-tuning.
- Vision: pre-trained backbones + light adapters.

Maintain **evals** that reflect user value, not just benchmarks.
