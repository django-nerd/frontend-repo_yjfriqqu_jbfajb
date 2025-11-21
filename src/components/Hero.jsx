import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_70%_20%,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_20%_60%,rgba(59,130,246,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Automate property development with MacroCRM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg md:text-xl text-slate-200/80 max-w-xl"
          >
            Centralize leads, projects, contractors, and sales. Move from idea to delivery faster with AI-driven workflows tailored for real estate developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/20 hover:from-blue-600 hover:to-cyan-500 transition-colors">
              Request a demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-base font-semibold text-white/90 backdrop-blur hover:bg-white/10">
              Explore features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center gap-6 text-slate-300"
          >
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 ring-2 ring-slate-900" />
              ))}
            </div>
            <p className="text-sm">Trusted by builders, architects and marketing teams</p>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/30">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
