export interface FAQItem {
  question: string;
  answer: string;
}

export const individualFAQs: FAQItem[] = [
  {
    question: "I'm not sure if my task can be automated. How do I know?",
    answer:
      "If you do it more than once a week and it follows a pattern, it can probably be automated. Book a 15-minute call and we'll tell you honestly.",
  },
  {
    question: "What if my process is weird/specific/complicated?",
    answer:
      "Perfect. Generic tools fail on specific problems. Custom automation succeeds. That's our specialty.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every automation is unique. We give you a clear price before starting.",
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
      "We already have Copilot/ChatGPT/other AI tool. Why do we need you?",
    answer:
      "Those are horizontal tools that help a little with everything. We build vertical solutions that transform specific workflows completely. We can even help you get value from tools you've already bought.",
  },
  {
    question: "How is this different from hiring a developer?",
    answer:
      "Developers build what you tell them to. We figure out what actually needs to be built. You get process expertise + technical implementation.",
  },
  {
    question: "What if we don't know what to automate?",
    answer:
      "That's why we start with an audit. We observe your workflows, identify bottlenecks, and show you the opportunities ranked by ROI.",
  },
  {
    question: "How do you measure success?",
    answer:
      'Real business metrics: hours saved, costs reduced, revenue generated or protected, error rates decreased. Not "adoption rates" or "engagement."',
  },
  {
    question: "What if it doesn't work?",
    answer:
      "We test thoroughly before deployment and provide ongoing support. But here's the reality: when we fix a broken process and automate it properly, it works.",
  },
  {
    question: "Do you replace our team?",
    answer:
      "Never. We eliminate robot work so your team can do human work. Companies that automate properly see higher job satisfaction, not layoffs.",
  },
];
