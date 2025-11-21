import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/60 p-8 md:p-12 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-4xl font-bold text-white"
              >
                See MacroCRM in action
              </motion.h3>
              <p className="mt-3 text-slate-300">Book a 30-minute walkthrough tailored to your pipeline. Well map your process and set up automations for you.</p>

              <form className="mt-6 grid sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Full name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                <input type="email" placeholder="Work email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                <input type="text" placeholder="Company" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 sm:col-span-2" />
                <button className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/20 hover:from-blue-600 hover:to-cyan-500 transition-colors">
                  Request demo
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <p className="text-slate-300">"We cut sales cycle time by 37% after moving to MacroCRM. The automation is unreal."</p>
                <p className="mt-3 text-sm text-slate-400">Head of Sales, Residential Developer</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <p className="text-slate-300">"Finally a CRM that understands property development. From lots to legal — all connected."</p>
                <p className="mt-3 text-sm text-slate-400">COO, Mixed-use Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
