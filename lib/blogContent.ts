export type ExtraArticleSection = {
  heading: string;
  body: string[]; // paragraphs
  bullets?: string[];
};

export type ExtraArticleContent = {
  subtitle?: string;
  heroPoints?: string[];
  sections?: ExtraArticleSection[];
  takeaways?: string[];
};

const extras: Record<string, ExtraArticleContent> = {
  'ai-solutions-for-startups': {
    subtitle: 'A practical field guide for founders shipping AI capabilities that actually move the needle.',
    heroPoints: [
      'Pick one metric and instrument before you launch',
      'Use retrieval and tools to make assistants useful',
      'Treat data quality as a product surface, not a chore'
    ],
    sections: [
      {
        heading: 'Start with a measurable workflow',
        body: [
          'Map a single user journey where AI can remove friction: onboarding, support, or sales enablement. Replace copy‑paste steps with a guided flow.',
          'Ship a narrow slice in days, not months. Use guardrails, logging, and lightweight evals to keep responses reliable.'
        ],
        bullets: ['Define success with one KPI', 'Create a tight feedback loop with users', 'Log prompts and decisions for learning']
      },
      {
        heading: 'Own your proprietary advantage',
        body: [
          'Your tickets, docs, and transcripts are your moat. Clean them, chunk them, and keep provenance so answers are explainable.',
          'When you fine‑tune, fine‑tune on tasks (classification/tools), not generic chat tone.'
        ]
      }
    ],
    takeaways: [
      'Workflow beats chatbot UI',
      'Observability is non‑negotiable',
      'Ship, learn, iterate'
    ]
  },
  'choosing-the-right-ml-model': {
    subtitle: 'A constraint‑driven playbook for model selection that stays useful as your product evolves.',
    heroPoints: [
      'Start simple; complexity is a cost',
      'Choose metrics that reflect user value',
      'Design for monitoring from day one'
    ],
    sections: [
      {
        heading: 'Frame the decision with constraints',
        body: [
          'Latency, cost per request, privacy, and expected accuracy define your feasible set. Write them down and design experiments to test trade‑offs.'
        ],
        bullets: ['Tabular → gradient boosting', 'Language → retrieval + LLM before fine‑tune', 'Vision → pre‑trained backbones + adapters']
      },
      {
        heading: 'Operational excellence matters',
        body: [
          'Create small, realistic eval sets. Automate runs in CI so regressions surface fast. Track drift and build a rollback path.'
        ]
      }
    ],
    takeaways: ['Pick the simplest model that meets constraints', 'Automate evals and monitoring', 'Focus on product impact, not leaderboard scores']
  },
  'nextjs-for-ai-products': {
    subtitle: 'Why we like Next.js for shipping AI UIs and lightweight orchestration without heavy infra.',
    heroPoints: ['Server components for fast paint', 'Edge/runtime for streaming', 'Server routes for simple orchestration'],
    sections: [
      {
        heading: 'One stack for UI and orchestration',
        body: [
          'Next.js lets you build responsive UIs and keep secrets on the server. Use API routes for lightweight tools, webhooks, and auth without over‑engineering.'
        ]
      },
      {
        heading: 'Production readiness',
        body: [
          'Incremental static regeneration, caching, and middlewares give you a toolbox to scale gradually while maintaining great UX.'
        ]
      }
    ],
    takeaways: ['Great DX with strong defaults', 'Easy to add streaming and edge compute', 'Keeps product teams unblocked']
  }
};

export function getExtraContent(slug: string): ExtraArticleContent | null{
  return extras[slug] || null;
}


