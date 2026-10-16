'use client'

import { useMemo, useState } from 'react'
import {
  AlertTriangle,
  ArrowUpRight,
  BellRing,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Crosshair,
  FileLock2,
  Globe2,
  Grid2X2,
  LockKeyhole,
  MapPin,
  Menu,
  Minus,
  Plus,
  Radio,
  Shield,
  ShieldCheck,
  Siren,
  Sparkles,
  Users,
  X,
  Zap,
} from 'lucide-react'

const checklist = [
  { label: 'Perimeter access points mapped', done: true },
  { label: 'Credentialing & guest flow verified', done: true },
  { label: 'Emergency egress routes designated', done: true },
  { label: 'Medical response liaison assigned', done: false },
]

const riskRows = [
  { label: 'Venue perimeter', value: 'Controlled', detail: '04 access nodes', tone: 'gold' },
  { label: 'Guest profile', value: 'Curated', detail: 'Tier 01 protocol', tone: 'gold' },
  { label: 'Threat posture', value: 'Low', detail: 'No active alerts', tone: 'green' },
]

export default function Page() {
  const [guestCount, setGuestCount] = useState(240)
  const [modal, setModal] = useState<string | null>(null)
  const [activeNav, setActiveNav] = useState('Overview')
  const [monitoring, setMonitoring] = useState(checklist)
  const [menuOpen, setMenuOpen] = useState(false)

  const capacity = useMemo(() => Math.min(100, Math.round((guestCount / 300) * 100)), [guestCount])

  function notify(message: string) {
    setModal(message)
  }

  return (
    <main className="min-h-screen bg-[#0A192F] text-[#F8F7F2]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col border-x border-[#F0E68C]/20">
        <header className="flex items-center justify-between border-b border-[#F0E68C]/25 px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center border border-[#F0E68C] bg-[#F0E68C] text-[#0A192F]">
              <ShieldCheck aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#F0E68C]">SMGG / 01</p>
              <h1 className="font-serif text-xl tracking-wide sm:text-2xl">Sentinel Midnight Gala Guard</h1>
            </div>
          </div>
          <div className="hidden items-center gap-7 sm:flex">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" /> System nominal
            </div>
            <button onClick={() => notify('Secure client visibility session confirmed.')} className="border border-[#F0E68C]/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#F0E68C] transition hover:bg-[#F0E68C] hover:text-[#0A192F]">
              Secure session
            </button>
          </div>
          <button aria-label="Open menu" className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button>
        </header>

        <nav className={`${menuOpen ? 'flex' : 'hidden'} flex-col gap-4 border-b border-[#F0E68C]/20 px-5 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12`}>
          <div className="flex flex-wrap gap-5 sm:gap-8">
            {['Overview', 'Perimeter', 'Guest intelligence', 'Response plan'].map((item) => (
              <button key={item} onClick={() => { setActiveNav(item); notify(`${item} module selected.`) }} className={`font-mono text-[10px] uppercase tracking-[0.14em] transition ${activeNav === item ? 'text-[#F0E68C]' : 'text-white/45 hover:text-white'}`}>
                {activeNav === item && <span className="mr-2">◆</span>}{item}
              </button>
            ))}
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">15 OCT 2026 / 19:42 UTC</p>
        </nav>

        <section className="grid gap-8 px-5 py-9 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#F0E68C]"><Sparkles aria-hidden="true" /> Principal event dossier</div>
            <h2 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl">A quiet night.<br /><span className="text-[#F0E68C]">A guarded one.</span></h2>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55">An executive-grade operating picture for the moments that matter. Coordinate venue intelligence, guest movement, and response readiness through one discreet command surface.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => notify('Risk assessment is ready for localized review.')} className="flex items-center gap-3 bg-[#F0E68C] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.13em] text-[#0A192F] transition hover:bg-white"><ClipboardCheck size={15} /> Review assessment <ArrowUpRight size={15} /></button>
              <button onClick={() => notify('Client brief prepared locally. No external transmission initiated.')} className="flex items-center gap-3 border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.13em] text-white/70 transition hover:border-[#F0E68C] hover:text-[#F0E68C]"><FileLock2 size={15} /> Export client brief</button>
            </div>
          </div>
          <div className="relative flex min-h-[280px] items-end border border-[#F0E68C]/60 p-5 sm:min-h-[320px]">
            <div className="absolute inset-2 border border-[#F0E68C]/20" />
            <div className="relative grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
              {[['EVENT', 'Midnight Gala'], ['SITE', 'Astor House'], ['STATUS', 'Protected']].map(([a, b]) => <div key={a} className="border border-white/10 bg-[#102442]/80 p-4"><p className="font-mono text-[9px] tracking-[0.18em] text-white/35">{a}</p><p className="mt-2 font-serif text-lg text-[#F0E68C]">{b}</p></div>)}
            </div>
            <div className="absolute right-7 top-7 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-300"><Radio size={13} /> Live posture</div>
          </div>
        </section>

        <section className="grid gap-5 border-t border-[#F0E68C]/20 px-5 py-7 sm:px-8 lg:grid-cols-3 lg:px-12">
          {riskRows.map((row, i) => <div key={row.label} className="flex items-center justify-between border border-white/10 bg-[#0e203c] p-5"><div className="flex items-center gap-4"><span className="font-mono text-xs text-[#F0E68C]/60">0{i + 1}</span><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">{row.label}</p><p className="mt-1 font-serif text-xl">{row.value}</p></div></div><div className="text-right"><span className={`font-mono text-[10px] uppercase tracking-[0.13em] ${row.tone === 'green' ? 'text-emerald-300' : 'text-[#F0E68C]'}`}>{row.detail}</span><div className="mt-2 h-1 w-14 bg-white/10"><div className={`h-full ${row.tone === 'green' ? 'w-2/3 bg-emerald-300' : 'w-full bg-[#F0E68C]'}`} /></div></div></div>)}
        </section>

        <section className="grid gap-5 px-5 pb-12 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-12">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="border border-[#F0E68C]/35 bg-[#0e203c] p-6">
              <div className="mb-7 flex items-start justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F0E68C]">01 / Capacity matrix</p><h3 className="mt-2 font-serif text-2xl">Guest load calculator</h3></div><Users className="text-[#F0E68C]" /></div>
              <p className="text-xs leading-6 text-white/45">Calibrate staffing, access lanes, and response coverage to the confirmed invitation profile.</p>
              <div className="mt-8 flex items-center justify-between border-y border-white/10 py-5"><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">Confirmed guests</span><div className="flex items-center gap-4"><button onClick={() => setGuestCount(Math.max(0, guestCount - 10))} aria-label="Decrease guests" className="border border-white/20 p-1 hover:border-[#F0E68C]"><Minus size={14} /></button><span className="w-12 text-center font-serif text-2xl text-[#F0E68C]">{guestCount}</span><button onClick={() => setGuestCount(Math.min(300, guestCount + 10))} aria-label="Increase guests" className="border border-white/20 p-1 hover:border-[#F0E68C]"><Plus size={14} /></button></div></div>
              <div className="mt-6"><div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-white/40"><span>Venue capacity</span><span>{capacity}% optimized</span></div><div className="h-2 bg-white/10"><div className="h-full bg-[#F0E68C] transition-all" style={{ width: `${capacity}%` }} /></div></div>
              <button onClick={() => notify('Guest capacity matrix validated locally.')} className="mt-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0E68C]">Validate matrix <ArrowUpRight size={14} /></button>
            </article>

            <article className="border border-[#F0E68C]/35 bg-[#0e203c] p-6">
              <div className="mb-7 flex items-start justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F0E68C]">02 / Readiness</p><h3 className="mt-2 font-serif text-2xl">Emergency monitor</h3></div><Siren className="text-[#F0E68C]" /></div>
              <div className="flex flex-col gap-4">{monitoring.map((item, index) => <button key={item.label} onClick={() => setMonitoring(monitoring.map((x, i) => i === index ? { ...x, done: !x.done } : x))} className="flex items-center gap-3 text-left"><span className={`flex size-5 items-center justify-center border ${item.done ? 'border-[#F0E68C] bg-[#F0E68C] text-[#0A192F]' : 'border-white/25 text-transparent'}`}><Check size={13} /></span><span className={`text-xs ${item.done ? 'text-white/70' : 'text-white/45'}`}>{item.label}</span></button>)}</div>
              <button onClick={() => notify('Monitoring checklist saved to this protected session.')} className="mt-8 flex w-full items-center justify-center gap-2 border border-[#F0E68C]/50 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0E68C] hover:bg-[#F0E68C] hover:text-[#0A192F]">Save readiness state <CheckCircle2 size={14} /></button>
            </article>
          </div>

          <aside className="border border-[#F0E68C]/35 bg-[#102442] p-6"><div className="flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F0E68C]">03 / Zone watch</p><h3 className="mt-2 font-serif text-2xl">Perimeter analysis</h3></div><Crosshair className="text-[#F0E68C]" /></div><div className="relative mt-7 h-48 overflow-hidden border border-white/10 bg-[#0A192F]"><div className="absolute inset-7 border border-[#F0E68C]/50" /><div className="absolute inset-14 border border-[#F0E68C]/25" /><div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0E68C] shadow-[0_0_24px_8px_#F0E68C]" /><span className="absolute left-4 top-4 font-mono text-[9px] text-white/40">NORTH / ASTOR HOUSE</span>{[['top-5 left-1/2', 'A'], ['right-5 top-1/2', 'B'], ['bottom-5 left-1/2', 'C'], ['left-5 top-1/2', 'D']].map(([pos, label]) => <span key={label} className={`absolute ${pos} -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] text-[#F0E68C]`}>{label}</span>)}</div><div className="mt-6 flex flex-col gap-3">{[['Access nodes', '04 / 04 verified', Globe2], ['Response relay', 'Active / encrypted', Zap], ['Watch status', 'No anomalies', Shield]].map(([a, b, Icon]) => { const IconComp = Icon as typeof Globe2; return <div key={a as string} className="flex items-center justify-between border-b border-white/10 pb-3"><div className="flex items-center gap-3"><IconComp size={15} className="text-[#F0E68C]" /><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/50">{a as string}</span></div><span className="font-mono text-[10px] text-white/70">{b as string}</span></div> })}</div><button onClick={() => notify('Perimeter map opened in localized review mode.')} className="mt-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0E68C]">Open full perimeter map <ArrowUpRight size={14} /></button></aside>
        </section>

        <footer className="mt-auto flex flex-col gap-4 border-t border-[#F0E68C]/20 px-5 py-6 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-12"><div className="flex items-center gap-3"><LockKeyhole size={13} className="text-[#F0E68C]" /> Absolute credit protection / localized validation only</div><div className="flex gap-5"><span>© 2026 Sentinel</span><button onClick={() => notify('Privacy posture: no external submission hooks are active.')} className="hover:text-[#F0E68C]">Privacy posture</button></div></footer>
      </div>

      {modal && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#030b18]/75 p-5 backdrop-blur-sm sm:items-center"><div role="dialog" aria-modal="true" aria-label="Localized validation notification" className="w-full max-w-md border border-[#F0E68C] bg-[#102442] p-6 shadow-2xl"><div className="flex items-start justify-between"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center bg-[#F0E68C] text-[#0A192F]"><BellRing size={17} /></div><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F0E68C]">Localized validation</p><h2 className="mt-1 font-serif text-xl">Protected confirmation</h2></div></div><button aria-label="Close notification" onClick={() => setModal(null)} className="text-white/50 hover:text-white"><X /></button></div><p className="mt-6 border-l-2 border-[#F0E68C] pl-4 text-sm leading-6 text-white/70">{modal}</p><div className="mt-7 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-300"><CheckCircle2 size={14} /> No external network request made</div><button onClick={() => setModal(null)} className="mt-7 w-full bg-[#F0E68C] py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#0A192F] hover:bg-white">Acknowledge</button></div></div>}
    </main>
  )
}
