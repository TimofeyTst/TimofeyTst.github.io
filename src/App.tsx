import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Github, Code, Database, Server, Globe, Layers, Users, ChevronRight, Terminal, Youtube, Send } from 'lucide-react'
import { translations } from './i18n'

const t = translations.en

// ─── Utilities ────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return { ref: setRef, isInView }
}

function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  const { ref, isInView } = useInView(0.08)
  return (
    <motion.section
      id={id}
      ref={ref as (node: HTMLElement | null) => void}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`py-16 px-6 max-w-4xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-display font-bold text-foreground mb-8 flex items-center gap-3">
      <span className="w-8 h-px bg-primary block" />
      {children}
    </h2>
  )
}

// LinkedIn SVG icon
function LinkedInIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  )
}

// Telegram icon
function TelegramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

const ROTATING_ROLES = t.greetingRoles

function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_ROLES.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="text-primary"
      >
        {ROTATING_ROLES[index]}
      </motion.span>
    </AnimatePresence>
  )
}

function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 max-w-4xl mx-auto pt-24 pb-16">
      <div className="mb-8">
        <img
          src="/foto-avatar.jpg"
          alt="Timofey Starzhevsky"
          className="w-36 h-36 rounded-full object-cover border-2 border-primary/30"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-muted-foreground text-lg mb-2 font-medium tracking-wide">Hi, I'm</p>
        <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-4 leading-tight">
          Timofey<br />
          <span className="text-primary">Starzhevsky</span>
        </h1>

        <div className="text-2xl sm:text-3xl font-display font-semibold text-muted-foreground mb-6 h-10 flex items-center">
          <RotatingRole />
        </div>

        <p className="text-muted-foreground max-w-xl text-base sm:text-lg leading-relaxed mb-8">
          {t.summary.p1}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            View Experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact
          </a>
        </div>

      </motion.div>
    </section>
  )
}

// ─── Key Metrics ──────────────────────────────────────────────────────────────

function Metrics() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section
      ref={ref as (node: HTMLElement | null) => void}
      className="py-12 px-6 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {t.metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
            className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/30 transition-colors"
          >
            <div className="text-3xl font-display font-bold text-primary mb-1">{metric.value}</div>
            <div className="text-xs font-medium text-foreground mb-0.5">{metric.label}</div>
            <div className="text-xs text-muted-foreground">{metric.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────

const COMPANY_COLORS: Record<string, string> = {
  Yandex: 'bg-red-500',
  BWG: 'bg-blue-500',
  VK: 'bg-blue-700',
  'Functional Micro/Nanosystems': 'bg-violet-500',
}

function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-10">
          {t.experience.items.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="sm:pl-12 relative"
            >
              {/* Timeline dot */}
              <div className={`absolute left-2.5 top-5 w-3 h-3 rounded-full ${COMPANY_COLORS[job.company] ?? 'bg-primary'} -translate-x-1/2 hidden sm:block ring-2 ring-background`} />

              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground">{job.company}</h3>
                    <p className="text-primary font-medium text-sm">{job.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-sm">{job.period}</p>
                    <p className="text-muted-foreground text-xs">{job.location}</p>
                  </div>
                </div>

                {job.product && (
                  <p className="text-muted-foreground text-sm mb-3 italic">{job.product}</p>
                )}

                <ul className="space-y-1.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Backend: <Terminal className="w-4 h-4" />,
  Frontend: <Globe className="w-4 h-4" />,
  Databases: <Database className="w-4 h-4" />,
  'Distributed Systems': <Server className="w-4 h-4" />,
  DevOps: <Layers className="w-4 h-4" />,
  Leadership: <Users className="w-4 h-4" />,
}

function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.skills.categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-card border border-border rounded-2xl p-5 hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary">{CATEGORY_ICONS[cat.name] ?? <Code className="w-4 h-4" />}</span>
              <h3 className="font-display font-semibold text-foreground text-sm">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 bg-primary/8 text-foreground text-xs rounded-md border border-primary/15"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <Section id="education">
      <SectionTitle>Education & Certifications</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Main degree */}
        {t.education.items.map((item, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <p className="text-muted-foreground text-xs mb-1">{item.year}</p>
            <h3 className="font-display font-semibold text-foreground mb-0.5">{item.title}</h3>
            <p className="text-primary text-sm font-medium mb-2">{item.org}</p>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}

        {/* Certifications */}
        {t.education.certifications.map((cert, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <p className="text-muted-foreground text-xs mb-1">{cert.year}</p>
            <h3 className="font-display font-semibold text-foreground mb-0.5">{cert.title}</h3>
            <p className="text-primary text-sm font-medium">{cert.org}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const links = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: t.github,
      display: 'github.com/TimofeyTst',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      // TODO: confirm exact LinkedIn URL — using best-guess timofeytst
      href: t.linkedin,
      display: 'linkedin.com/in/timofeytst',
    },
    {
      icon: <TelegramIcon />,
      label: 'Telegram',
      href: t.telegram,
      display: '@timofey_tst',
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: 'YouTube',
      href: 'https://www.youtube.com/@TimofeyStarzhevsky',
      display: '@TimofeyStarzhevsky',
    },
  ]

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <div className="bg-card border border-border rounded-2xl p-8 mb-6">
        <p className="text-muted-foreground mb-6 max-w-lg">{t.contact.desc}</p>
        <a
          href={`mailto:${t.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <Send className="w-4 h-4" />
          {t.email}
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-colors group"
          >
            <span className="text-muted-foreground group-hover:text-primary transition-colors">{link.icon}</span>
            <div>
              <p className="text-xs text-muted-foreground">{link.label}</p>
              <p className="text-sm font-medium text-foreground">{link.display}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground text-sm">
      <p>
        Built with React + TypeScript + Tailwind ·{' '}
        <a
          href={t.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          View source
        </a>
      </p>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <main>
      <Hero />
      <Metrics />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
