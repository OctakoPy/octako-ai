export interface FAQItem {
  question: string;
  answer: string;
}

export const individualFAQs: FAQItem[] = [
  {
    question: "I'm not sure if my task can be automated. How do I know?",
    answer:
      "If you do it more than once a week and it follows a pattern, it can probably be automated. Book a 15-minute call for an honest assessment.",
  },
  {
    question: "What if my process is weird/specific/complicated?",
    answer:
      "Perfect. Generic tools fail on specific problems. Custom automation succeeds. That's the specialty.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every automation is unique. A clear price is provided before starting.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most small automations: 1-2 weeks.",
  },
];

export const companyFAQs: FAQItem[] = [
  {
    question:
      "We already have Copilot/ChatGPT/other AI tool. Why do we need more?",
    answer:
      "Those are horizontal tools that help a little with everything. Custom vertical solutions transform specific workflows completely. Support is available to get more value from tools already purchased.",
  },
  {
    question: "How is this different from hiring a developer?",
    answer:
      "Developers build what you tell them to. Process expertise identifies what actually needs to be built. You get process design + technical implementation combined.",
  },
  {
    question: "What if we don't know what to automate?",
    answer:
      "That's why an audit starts the process. Workflows are observed, bottlenecks identified, and opportunities shown ranked by ROI.",
  },
  {
    question: "How do you measure success?",
    answer:
      'Real business metrics: hours saved, costs reduced, revenue generated or protected, error rates decreased. Not "adoption rates" or "engagement."',
  },
  {
    question: "What if it doesn't work?",
    answer:
      "Thorough testing before deployment and ongoing support are provided. But here's the reality: when a broken process is fixed and automated properly, it works.",
  },
  {
    question: "Do you replace our team?",
    answer:
      "No. Robot work is eliminated so your team can do human work. Companies that automate properly see higher job satisfaction, not layoffs.",
  },
];
