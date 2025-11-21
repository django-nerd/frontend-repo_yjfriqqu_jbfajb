import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#cta' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-inset ring-white/20 shadow-lg" />
            <span className="text-white text-lg font-semibold tracking-tight">MacroCRM</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="text-sm text-slate-200/80 hover:text-white">Sign in</a>
            <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:to-cyan-500 transition-colors">
              Get a demo
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="#cta" className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-center text-slate-200" onClick={() => setOpen(false)}>Sign in</a>
                <a href="#cta" className="flex-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-2 text-center font-semibold text-white" onClick={() => setOpen(false)}>Get a demo</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
