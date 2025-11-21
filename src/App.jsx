import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <CTA />

        <section id="contact" className="relative py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <h3 className="text-xl font-semibold text-white">Contact</h3>
                  <p className="mt-2 text-slate-300">Have questions about MacroCRM? Our team can help you map your process and set up automations.</p>
                </div>
                <div className="flex items-center md:justify-end">
                  <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/20 hover:from-blue-600 hover:to-cyan-500 transition-colors">
                    Talk to us
                  </a>
                </div>
              </div>
            </div>

            <footer className="mt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
              <p>© {new Date().getFullYear()} MacroCRM. All rights reserved.</p>
              <div className="flex gap-4 mt-3 sm:mt-0">
                <a href="#" className="hover:text-slate-200">Privacy</a>
                <a href="#" className="hover:text-slate-200">Terms</a>
                <a href="#" className="hover:text-slate-200">Security</a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
