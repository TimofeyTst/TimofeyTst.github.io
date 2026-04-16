export const seo = {
  en: {
    title: 'Timofey Starzhevsky | Backend Engineer',
    description:
      'Backend Engineer at Yandex. High-load distributed systems, AI infrastructure, event-driven architecture. Tech Lead with ~4 years building scalable backends.',
  },
};

const enContent = {
  name: 'Timofey Starzhevsky',
  headline: 'Backend Engineer at Yandex',
  location: 'Moscow, Russia · Remote-friendly',
  email: 'timofeytst@gmail.com',
  // TODO: confirm exact LinkedIn URL
  linkedin: 'https://linkedin.com/in/timofeytst',
  github: 'https://github.com/TimofeyTst',
  telegram: 'https://t.me/timofey_tst',
  // YouTube: one podcast episode so far (not a full channel page)
  youtube: 'https://www.youtube.com/watch?v=kUEC01AX0CM&t=1s',

  greetingRoles: ['Software Engineer', 'Tech Lead', 'Backend Engineer'] as string[],

  summary: {
    title: 'About Me',
    p1: 'Software Engineer with ~4 years in backend and full-stack development, specializing in scalable architectures for high-load AI systems and event-driven integrations.',
    p2: 'Tech Lead with a passion for product ownership — progressing toward Team Lead and CTO roles. I care deeply about system reliability, code quality, and developer experience.',
  },

  metrics: [
    { value: '70x', label: 'faster event processing', sub: '6 min → 5 sec' },
    { value: '1080x', label: 'fewer errors', sub: '65K → ~60 per day' },
    { value: '3–5x', label: 'conversion rate', sub: 'Yandex Smena' },
    { value: '30+', label: 'interviews led', sub: 'incl. senior positions' },
  ] as { value: string; label: string; sub: string }[],

  experience: {
    title: 'Experience',
    items: [
      {
        company: 'Yandex',
        role: 'Software Engineer / TechLead',
        period: 'Jul 2024 – Present',
        location: 'Moscow, Russia',
        product: 'Yandex Smena — shift marketplace',
        highlights: [
          'TechLead for integration with external service handling 30–40% of all shifts',
          'Event-driven architecture: 70x faster (6 min → 5 sec), 3.5x volume scaling',
          'Increased Conversion Rate 3–5x',
          'Reduced errors 1080x (65,000 → ~60 per day)',
          'Cut support requests 30x',
          'Led 30+ technical interviews including for senior positions',
        ],
      },
      {
        company: 'BWG',
        role: 'Python Engineer',
        period: 'Jan 2024 – Jun 2024',
        location: 'Remote',
        product: 'FinTech product',
        highlights: [
          'Microservice architecture: 5–20x performance improvement',
          'CI/CD with Docker Compose and Kubernetes',
          'Introduced automated testing pipeline',
        ],
      },
      {
        company: 'VK',
        role: 'Python/C++ MLOps Engineer',
        period: 'Jan 2023 – Jun 2024',
        location: 'Moscow, Russia',
        product: 'TryOn Wardrobe & Queue Analyser',
        highlights: [
          'TryOn Wardrobe: microservice backend for AI-powered clothing try-on app — virtual try-on, recommendations, background removal',
          'Queue Analyser: C++ HTTP server + PostgreSQL + React UI for real-time people counting via video streams and OpenCV',
        ],
      },
      {
        company: 'Functional Micro/Nanosystems',
        role: 'FullStack Engineer',
        period: 'Apr 2022 – Jan 2023',
        location: 'Moscow, Russia',
        product: 'Quantum computer control platform',
        highlights: [
          'Quantum computer control platform (similar to IBM Quantum)',
          'Led 10-member hackathon team, built FastAPI backend from scratch',
          'Additional projects: pharmacy service, EatPlace food app, Binance currency aggregator',
        ],
      },
    ] as { company: string; role: string; period: string; location: string; product: string; highlights: string[] }[],
  },

  skills: {
    title: 'Skills',
    categories: [
      {
        name: 'Backend',
        items: ['Python', 'FastAPI', 'aiohttp', 'Golang', 'C++', 'SQL'],
      },
      {
        name: 'Frontend',
        items: ['TypeScript', 'React'],
      },
      {
        name: 'Databases',
        items: ['PostgreSQL', 'Redis', 'AWS S3-compatible', 'Firebase', 'MongoDB'],
      },
      {
        name: 'Distributed Systems',
        items: ['RabbitMQ', 'Kafka', 'AWS SQS/STQ', 'REST/gRPC', 'WebSocket (Centrifugo)', 'Idempotency', 'Rate Limiting', 'Distributed Locks'],
      },
      {
        name: 'DevOps',
        items: ['Docker', 'Kubernetes', 'CI/CD', 'Prometheus', 'Grafana', 'Linux'],
      },
      {
        name: 'Leadership',
        items: ['Tech Lead', 'Architecture Decisions', 'Cross-Team', 'Mentoring', 'Technical Interviews'],
      },
    ] as { name: string; items: string[] }[],
  },

  education: {
    title: 'Education',
    items: [
      {
        year: '2021',
        org: 'BMSTU',
        title: 'BSc Computer Science',
        desc: 'Thesis: Event-Driven Integration Module for External Systems',
      },
    ] as { year: string; org: string; title: string; desc: string }[],
    certifications: [
      {
        year: '2024',
        org: 'VK Education',
        title: 'ML Developer Program',
      },
      {
        year: '2023',
        org: 'BMSTU',
        title: 'DevOps Specialist Course',
      },
    ] as { year: string; org: string; title: string }[],
  },

  projects: {
    title: 'Open Source',
    items: [
      {
        title: 'career-ops',
        badge: 'Open Source · Contributor',
        desc: 'AI-powered job search pipeline built on Claude Code: offer evaluation, CV generation, portal scanning, batch processing. Used it to run my own job search — evaluated 100+ offers, generated tailored CVs, tracked applications.',
        tech: ['Claude Code', 'Node.js', 'TypeScript', 'Playwright', 'YAML'],
        // TODO: confirm if Timofey has a personal fork at github.com/TimofeyTst/career-ops
        link: 'github.com/TimofeyTst/career-ops',
      },
    ] as { title: string; badge: string; desc: string; tech: string[]; link: string }[],
  },

  contact: {
    title: "Let's connect",
    desc: 'Open to remote backend and distributed systems roles. Based in Moscow, comfortable working across timezones.',
  },

  ui: {
    typingIndicator: 'timofey is typing...',
  },

  // Stub for FloatingChat compatibility (component not rendered in this portfolio)
  chat: {
    placeholder: 'Type your question...',
    title: 'timofey',
    subtitle: 'Ask me about my experience',
    greeting: "Hi! I'm **@timofeytst**. Ask me anything.",
    error: 'Error sending. Please try again.',
    offline: "Looks like you're offline. Check your connection.",
    prompts: [] as { icon: string; label: string; query: string }[],
    contactCtaTitle: 'Want to talk directly?',
    voice: {
      start: 'Talk to Timofey',
      stop: 'End',
      connecting: 'Connecting...',
      listening: 'Listening...',
      thinking: 'Thinking...',
      searching: 'Searching...',
      speaking: 'Speaking...',
      timeWarning: '15 seconds remaining',
      ended: 'Voice session ended',
      rateLimited: 'Rate limit reached',
      unsupported: 'Audio input not supported',
      micDenied: 'Microphone access needed',
      switchToText: 'Switch to text',
      connection: 'Connection error.',
    },
  },
}

// Both 'en' and 'es' map to English content (English-only portfolio)
// FloatingChat uses translations[lang] with lang: 'es' | 'en'
export const translations = {
  en: enContent,
  es: enContent,
}

export type Lang = 'es' | 'en';
