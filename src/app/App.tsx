import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  Zap, 
  Users, 
  LineChart,
  Globe,
  Star,
  Download
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/80 backdrop-blur-sm border-b border-black/5">
    <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl font-black uppercase tracking-tighter italic"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Мари я
      </motion.span>
      <div className="hidden md:flex items-center gap-10">
        <a href="#about" className="text-xs uppercase tracking-widest font-bold hover:text-[#ff5f3d] transition-colors">Обо мне</a>
        <a href="#experience" className="text-xs uppercase tracking-widest font-bold hover:text-[#ff5f3d] transition-colors">Опыт</a>
        <a href="#skills" className="text-xs uppercase tracking-widest font-bold hover:text-[#ff5f3d] transition-colors">Навыки</a>
        <a href="mailto:marivane8059@gmail.com" className="px-6 py-2 bg-black text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#ff5f3d] transition-colors">Связаться</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="pt-40 pb-20 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 text-xs uppercase font-bold tracking-widest mb-8">
          <Sparkles size={14} className="text-[#ff5f3d]" />
          Digital Account Manager
        </div>
        <h1 
          className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8 tracking-tighter"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Превращаю <br /> 
          <span className="text-transparent border-text-black outline-black" style={{ WebkitTextStroke: '1px black' }}>идеи</span> <br />
          в результат.
        </h1>
        <p className="text-xl text-gray-700 max-w-xl leading-relaxed mb-10 italic">
          Мария Иванова, Санкт-Петербург. Мне важно быть частью команды, создающей что-то душевное и осмысленное. Моя сильная сторона — сочетание системности и энтузиазма: я умею структурировать, держать процессы под контролем и поддерживать рабочий ритм команды, при этом сохраняя живость и вовлечённость. Сейчас моя цель — включиться в творческие проекты, внести реальную пользу и набраться практического опыта в создании новых идей и форматов.  
        </p>
        <div className="flex flex-wrap gap-5">
          <a href="https://t.me/mariva8059" target="_blank" className="group flex items-center gap-3 px-8 py-4 bg-[#ff5f3d] text-white rounded-2xl font-bold uppercase tracking-widest transition-all hover:scale-105">
            Telegram <MessageCircle size={18} />
          </a>
           <a href="https://mary8059.github.io/baraholka/" target="_blank" className="group flex items-center gap-3 px-8 py-4 bg-[#ff5f3d] text-white rounded-2xl font-bold uppercase tracking-widest transition-all hover:scale-105">
            Сайт <MessageCircle size={18} />
          </a>
          <button className="group flex items-center gap-3 px-8 py-4 border-2 border-black rounded-2xl font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white">
            Резюме PDF <Download size={18} />
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative aspect-[3/4] bg-gray-200 rounded-[40px] overflow-hidden group shadow-2xl"
      >
        <ImageWithFallback 
          src=""
          alt="Creative Workspace"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-1">
            <MapPin size={16} /> Санкт-Петербург
          </div>
          <p className="opacity-80 italic"></p>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionTitle = ({ children, subtitle }: { children: string, subtitle?: string }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      {children}
    </motion.h2>
    {subtitle && <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] font-bold text-xs">{subtitle}</p>}
  </div>
);

const ExperienceCard = ({ company, role, period, details, achievements }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative p-8 bg-white border border-black/5 rounded-[32px] hover:shadow-xl transition-all mb-8"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-[#ff5f3d] transition-colors">{role}</h3>
        <p className="text-gray-500 font-bold tracking-widest uppercase text-xs mt-1">{company}</p>
      </div>
      <div className="text-sm font-black italic bg-black text-white px-4 py-1.5 rounded-full self-start">
        {period}
      </div>
    </div>
    <ul className="space-y-4 mb-8">
      {details.map((item: string, i: number) => (
        <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
          <span className="text-[#ff5f3d] font-bold mt-1">—</span> {item}
        </li>
      ))}
    </ul>
    {achievements && (
      <div className="pt-8 border-t border-dashed border-black/10">
        <p className="text-xs uppercase font-black tracking-widest text-[#ff5f3d] mb-4">Достижения</p>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-[#faf9f6] rounded-2xl text-sm italic">
              <Star size={16} className="text-[#ff5f3d] shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    )}
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Realweb",
      role: "Account manager",
      period: "Октябрь 2025 — Настоящее время",
      details: [
        "Сопровождение клиентов на всех этапах: от подписания до закрытия",
        "Управление командой технических специалистов: контроль качества и сроков",
        "Подготовка аналитических отчетов и презентаций по результатам РК",
        "Работа с Яндекс Метрикой, Calltouch, Comagic"
      ]
    },
    {
      company: "Whiteleads",
      role: "Account Manager",
      period: "Июль 2024 — Июль 2025",
      details: [
        "Ведение до 13 клиентов одновременно",
        "Работа с различными вертикалями: dating, betting, e-commerce, entertainment",
        "Согласование креативов и коммуникация с баинг-отделом",
        "Анализ KPI и трат через Appsflyer, Adjust, AppMetrica",
      ],
      achievements: [
        "Систематизировала базу данных отдела, повысив прозрачность процессов",
        "Обучила двух специалистов до уровня самостоятельного ведения проектов"
      ]
    },
    {
      company: "Свеза",
      role: "Intern",
      period: "Январь 2024 — Март 2024",
      details: [
        "Анализ рынков стран Персидского залива",
        "Опыт международной деловой переписки на английском языке"
      ]
    },
    {
      company: "Digital Banana",
      role: "Admin",
      period: "Октябрь 2021 — Июнь 2022",
      details: [
        "Помощь в проведении занятий для детей",
        "Организация коммуникации в между родителями и преподавателями"
            ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Профессиональный путь">Опыт работы</SectionTitle>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillTag = ({ name, icon }: { name: string, icon: any }) => (
  <div className="flex items-center gap-3 px-6 py-4 bg-white border border-black/5 rounded-2xl hover:border-[#ff5f3d] hover:translate-y-[-4px] transition-all group">
    <div className="text-[#ff5f3d] group-hover:scale-110 transition-transform">{icon}</div>
    <span className="font-bold uppercase tracking-widest text-xs">{name}</span>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <SectionTitle subtitle="Что я умею">Хард Скиллы</SectionTitle>
          <div className="grid grid-cols-2 gap-4">
            <SkillTag name="Account Management" icon={<Users size={20} />} />
            <SkillTag name="Media Planning" icon={<Zap size={20} />} />
            <SkillTag name="Market Analysis" icon={<LineChart size={20} />} />
            <SkillTag name="English B2" icon={<Globe size={20} />} />
            <SkillTag name="Я.Метрика/Appsflyer" icon={<ArrowUpRight size={20} />} />
            <SkillTag name="KPI Analysis" icon={<Sparkles size={20} />} />
          </div>
        </div>
        <div className="bg-black text-white p-12 rounded-[40px] flex flex-col justify-center">
          <SectionTitle subtitle="Как я работаю">Софт Скиллы</SectionTitle>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#ff5f3d] rounded-full flex items-center justify-center shrink-0">
                <span className="font-bold italic">01</span>
              </div>
              <p className="italic text-lg">Быстрая адаптация: перешла из mobile performance в медийный web без потери эффективности.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shrink-0">
                <span className="font-bold italic">02</span>
              </div>
              <p className="italic text-lg">Проактивность: всегда ищу способы улучшить процессы.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shrink-0">
                <span className="font-bold italic">03</span>
              </div>
              <p className="italic text-lg">Лидерство: опыт управления командой и обучения сотрудников.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-20 px-6 bg-[#1a1a1a] text-white">
    <div className="max-w-4xl mx-auto text-center">
      <SectionTitle subtitle="База">Образование</SectionTitle>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-10"
      >
        <p className="text-3xl font-black italic mb-2">НИУ ВШЭ Санкт-Петербург</p>
        <p className="text-xl opacity-60 uppercase tracking-widest font-bold text-sm">Школа Экономики и Менеджмента</p>
        <p className="mt-4 italic text-gray-400">Международный бизнес и менеджмент, 2024</p>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 bg-[#faf9f6] border-t border-black/5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-4" style={{ fontFamily: 'var(--font-display)' }}>Где меня найти</h2>
        <a href="mailto:marivane8059@gmail.com" className="text-xl font-bold hover:text-[#ff5f3d] transition-colors underline decoration-[#ff5f3d] decoration-4 underline-offset-8">
          marivane8059@gmail.com
        </a>
      </div>
      <div className="flex gap-6">
        <a href="https://t.me/mariva8059" className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#ff5f3d] transition-colors">
          <MessageCircle size={24} />
        </a>
        <a href="mailto:marivane8059@gmail.com" className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#ff5f3d] transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-black/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
         <span>St. Petersburg, Russia</span>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] selection:bg-[#ff5f3d] selection:text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}
