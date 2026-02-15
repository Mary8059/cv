import {
  ArrowUpRight,
  Download,
  Globe,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react'

type Experience = {
  company: string
  role: string
  period: string
  details: string[]
  achievements?: string[]
}

const experiences: Experience[] = [
  {
    company: 'Realweb',
    role: 'Account manager',
    period: 'Октябрь 2025 — настоящее время',
    details: [
      'Сопровождение клиентов на всех этапах: от подписания до закрытия',
      'Управление командой технических специалистов: контроль качества и сроков',
      'Подготовка аналитических отчётов и презентаций по результатам РК',
      'Работа с Яндекс Метрикой, Calltouch, Comagic',
    ],
  },
  {
    company: 'Whiteleads',
    role: 'Account manager',
    period: 'Июль 2024 — июль 2025',
    details: [
      'Ведение до 13 клиентов одновременно',
      'Работа с вертикалями: dating, betting, e-commerce, entertainment',
      'Согласование креативов и коммуникация с баинг-отделом',
      'Анализ KPI и трат через Appsflyer, Adjust, AppMetrica',
    ],
    achievements: [
      'Систематизировала базу данных отдела и повысила прозрачность процессов',
      'Обучила двух специалистов до самостоятельного ведения проектов',
    ],
  },
  {
    company: 'Свеза',
    role: 'Intern',
    period: 'Январь 2024 — март 2024',
    details: [
      'Анализ рынков стран Персидского залива',
      'Международная деловая переписка на английском языке',
    ],
  },
]

const hardSkills = [
  { label: 'Account management', icon: <Users size={18} /> },
  { label: 'Media planning', icon: <Zap size={18} /> },
  { label: 'Market analysis', icon: <LineChart size={18} /> },
  { label: 'English B2', icon: <Globe size={18} /> },
  { label: 'Я.Метрика / Appsflyer', icon: <ArrowUpRight size={18} /> },
  { label: 'KPI analysis', icon: <Sparkles size={18} /> },
]

const softSkills = [
  'Быстро адаптируюсь к новым задачам и форматам проектов.',
  'Проактивно предлагаю улучшения в процессах.',
  'Умею поддерживать ритм команды и конструктивную коммуникацию.',
]

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff5f3d]">{subtitle}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-black uppercase tracking-tight">{title}</h2>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] selection:bg-[#ff5f3d] selection:text-white">
      <header className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-xl font-black uppercase tracking-tight">Мария Иванова</span>
          <a
            href="mailto:marivane8059@gmail.com"
            className="px-4 py-2 text-xs uppercase font-bold tracking-widest rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
          >
            Связаться
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="py-16 md:py-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 text-xs uppercase font-bold tracking-widest mb-8">
              <Sparkles size={14} className="text-[#ff5f3d]" />
              Digital Account Manager
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
              Структурно.
              <br />
              Ярко.
              <br />
              По делу.
            </h1>
            <p className="mt-8 text-lg text-black/75 max-w-2xl leading-relaxed">
              Мне важно быть частью команды, создающей душевные и осмысленные проекты. Я соединяю системность
              и энергичность: держу процессы под контролем, поддерживаю ритм команды и помогаю доводить идеи до
              результата. Сейчас целенаправленно вхожу в более творческую среду и хочу приносить пользу проектам,
              которые меня вдохновляют.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://t.me/mariva8059"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#ff5f3d] text-white font-bold uppercase text-xs tracking-wider hover:scale-[1.02] transition"
              >
                Telegram <MessageCircle size={16} />
              </a>
              <a
                href="https://mary8059.github.io/baraholka/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/20 font-bold uppercase text-xs tracking-wider hover:bg-black hover:text-white transition"
              >
                Мой сайт <ArrowUpRight size={16} />
              </a>
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/20 font-bold uppercase text-xs tracking-wider hover:bg-black hover:text-white transition">
                Резюме PDF <Download size={16} />
              </button>
            </div>
          </div>

          <aside className="rounded-3xl border border-black/10 p-8 bg-white shadow-sm">
            <p className="text-sm uppercase font-bold tracking-widest text-black/60">Позиция</p>
            <p className="mt-2 text-2xl font-black">Digital Account Manager</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2 text-sm text-black/70">
                <MapPin size={16} className="text-[#ff5f3d]" /> Санкт-Петербург
              </div>
              <div className="flex items-center gap-2 text-sm text-black/70">
                <Mail size={16} className="text-[#ff5f3d]" /> marivane8059@gmail.com
              </div>
            </div>
          </aside>
        </section>

        <section className="py-16 border-t border-black/10">
          <SectionTitle title="Опыт работы" subtitle="Профессиональный путь" />
          <div className="space-y-6">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.period}`} className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{item.role}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] font-bold text-black/50">{item.company}</p>
                  </div>
                  <span className="self-start text-xs uppercase font-bold tracking-wider bg-black text-white px-3 py-1.5 rounded-full">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-black/75">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="text-[#ff5f3d]">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {item.achievements && (
                  <div className="mt-6 pt-6 border-t border-dashed border-black/10">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#ff5f3d]">Достижения</p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      {item.achievements.map((achievement) => (
                        <div key={achievement} className="p-4 rounded-2xl bg-[#faf9f6] text-sm flex items-start gap-2">
                          <Star size={14} className="mt-0.5 text-[#ff5f3d] shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-black/10 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionTitle title="Навыки" subtitle="Хард-скиллы" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hardSkills.map((skill) => (
                <div key={skill.label} className="rounded-2xl border border-black/10 bg-white px-4 py-3 flex items-center gap-2">
                  <span className="text-[#ff5f3d]">{skill.icon}</span>
                  <span className="text-xs uppercase tracking-wider font-bold">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-black text-white p-8">
            <SectionTitle title="Как я работаю" subtitle="Софт-скиллы" />
            <ul className="space-y-4 text-white/85">
              {softSkills.map((skill, index) => (
                <li key={skill} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#ff5f3d] text-black font-bold text-sm flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm uppercase font-bold tracking-[0.2em] text-black/50">St. Petersburg</p>
          <a href="mailto:marivane8059@gmail.com" className="font-bold underline underline-offset-4 hover:text-[#ff5f3d]">
            marivane8059@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}
