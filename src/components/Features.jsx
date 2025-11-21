import { CheckCircle2, Blocks, Bot, Building2, LineChart, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Building2,
    title: 'Pipeline for developments',
    desc: 'From land acquisition to handover. Track every stage, approvals, and stakeholders.'
  },
  {
    icon: Workflow,
    title: 'Automated workflows',
    desc: 'Trigger tasks, emails, and approvals when milestones are reached. No manual chasing.'
  },
  {
    icon: Blocks,
    title: 'Unit & inventory management',
    desc: 'Track lots, floors, and units. Price lists, availability, holds and reservations.'
  },
  {
    icon: LineChart,
    title: 'Sales & marketing',
    desc: 'Lead capture, nurturing, bookings and contracts with real-time dashboards.'
  },
  {
    icon: Bot,
    title: 'AI assistants',
    desc: 'Extract insights from drawings, generate schedules, and answer buyer questions.'
  },
  {
    icon: CheckCircle2,
    title: 'Contractor coordination',
    desc: 'Manage vendors, bids, purchase orders and quality checks in one place.'
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(14,165,233,0.15),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Built for property developers
          </motion.h2>
          <p className="mt-4 text-slate-300">Everything you need to go from feasibility to handover—streamlined and automated.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur hover:bg-slate-900/60 transition-colors"
            >
              <f.icon className="h-10 w-10 text-cyan-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
