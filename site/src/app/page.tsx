"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "../components/Carousel";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Linkedin,
  MessageCircle,
  MessageSquare,
  PhoneCall,
  Sparkles,
  Store,
  Zap,
  Instagram,
  Code,
  Database,
  Smartphone,
  Globe,
  ShoppingCart,
  Factory,
  Briefcase,
  Rocket,
  Shield,
  Users,
  Target,
  Award,
  Clock,
  Layers,
  Cpu,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  FileCode,
  Settings,
  TrendingUp,
  Lock,
  Headphones,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const heroParticles = [
  { top: "10%", left: "15%", size: "w-32 h-32", delay: 0 },
  { top: "35%", left: "75%", size: "w-48 h-48", delay: 1 },
  { top: "70%", left: "55%", size: "w-36 h-36", delay: 2 },
  { top: "25%", left: "50%", size: "w-24 h-24", delay: 0.5 },
];

const highlightCards = [
  {
    title: "Controle de Estoque Inteligente",
    description:
      "Alertas automáticos e visibilidade em tempo real. Não perca vendas por falta de estoque.",
    icon: Lightbulb,
    accent: "from-blue-500/20 via-indigo-500/15 to-purple-500/10",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    title: "Campanhas WhatsApp Automatizadas",
    description:
      "Fluxos prontos, segmentação inteligente e dashboards para medir conversão em tempo real.",
    icon: MessageSquare,
    accent: "from-emerald-500/20 via-teal-500/15 to-blue-500/10",
    glow: "rgba(16, 185, 129, 0.3)",
  },
  {
    title: "Painel de Vendas em Tempo Real",
    description:
      "KPIs unificados, metas e insights diários. Tudo que você precisa para tomar decisões rápidas.",
    icon: BarChart3,
    accent: "from-purple-500/20 via-indigo-500/15 to-blue-500/10",
    glow: "rgba(139, 92, 246, 0.3)",
  },
];

const roadmap = [
  {
    title: "Onboarding guiado por especialistas",
    body: "Configuração completa da operação em até 7 dias, com migração assistida e checklist de sucesso.",
    icon: CheckCircle2,
    animation: "pulse",
  },
  {
    title: "Automação comercial em minutos",
    body: "Templates prontos de campanhas, modelos de funil e scripts de abordagem testados em varejo.",
    icon: Sparkles,
    animation: "rotate",
  },
  {
    title: "Inteligência para decisões rápidas",
    body: "Curva ABC dinâmica, ruptura zero e relatórios automáticos para reuniões de performance.",
    icon: Zap,
    animation: "glow",
  },
];

const proofBullets = [
  "Mais de 50 empresas confiam na Korvex",
  "90% dos clientes recomendam nossos serviços",
  "Equipe estratégica dedicada ao sucesso do seu projeto",
];

const clients = ["Fashion Lab", "Studio Premium", "Vitrine 360", "TrendUp", "Riachu", "Ateliê Carla"];

const iconAnimations = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  rotate: {
    rotate: [0, 10, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  glow: {
    opacity: [0.7, 1, 0.7],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  swing: {
    rotate: [0, 5, -5, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
} satisfies Record<string, TargetAndTransition>;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0f172a] text-[#f3f4f6]">
      <header className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        {/* Gradiente animado de fundo */}
        <div className="absolute inset-0 gradient-animated opacity-70" />
        
        {/* Camadas de profundidade - reduzidas ~20% para melhor performance */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.24),transparent_50%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.2),transparent_55%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.16),transparent_60%)] blur-xl" />
        
        {/* Overlay escuro para contraste - bem mais transparente */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/40 via-[#0f172a]/30 to-[#0f172a]/50" />

        {/* Partículas animadas */}
        {heroParticles.map((particle, idx) => (
          <motion.div
            key={idx}
            className={`pointer-events-none absolute ${particle.size} rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/10 blur-3xl`}
            style={{ top: particle.top, left: particle.left }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative z-50 mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-16 sm:gap-16 sm:px-8 md:gap-20 md:px-12 md:py-20 lg:py-32">
          {/* Banner superior */}
          <div className="glass-strong flex flex-col items-center justify-between gap-4 rounded-full border border-white/20 px-8 py-4 text-sm sm:flex-row opacity-100"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 glow-blue"
              >
                <Sparkles size={20} />
              </motion.div>
              <span className="font-medium text-white/95 text-shadow-subtle">
                Desenvolvimento de software sob medida – do conceito ao deploy.
              </span>
            </div>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:text-blue-400"
            >
              Fale com um especialista
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-10 text-center lg:text-left">
              {/* Logo com glow e parallax */}
              <div className="flex flex-col items-center gap-6 lg:items-start opacity-100"
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(59,130,246,0.5))",
                      "drop-shadow(0 0 40px rgba(99,102,241,0.6))",
                      "drop-shadow(0 0 20px rgba(59,130,246,0.5))",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <Image
                    src="/korvex-3d-06.png"
                    alt="Logotipo Korvex em 3D"
                    width={280}
                    height={200}
                    className="h-auto w-56 drop-shadow-[0_40px_80px_rgba(59,130,246,0.6)] md:w-64 lg:w-72"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
                </motion.div>
                
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-full border border-blue-500/30 px-6 py-2 text-sm font-medium tracking-wide text-blue-300 text-shadow-subtle opacity-100"
                >
                  <Rocket size={16} className="inline mr-2 text-blue-400" />
                  Soluções 100% personalizadas • Tecnologia de ponta • Suporte estratégico
                </motion.span>
                
                <p className="text-xl font-medium text-[#60a5fa] text-shadow-subtle opacity-100">
                  Soluções tecnológicas personalizadas que transformam seu negócio.
                </p>
              </div>

              {/* Título principal com peso 800 */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl font-extrabold leading-tight tracking-tight text-white text-shadow-strong sm:text-6xl lg:text-7xl opacity-100"
                style={{ fontWeight: 800 }}
              >
                <span
                  className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                  style={{ textShadow: "0 25px 60px rgba(79,70,229,0.55)" }}
                >
                  Software sob medida
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent"
                  style={{ textShadow: "0 20px 55px rgba(45,212,191,0.45)" }}
                >
                  que transforma sua empresa em líder digital
                </span>
              </motion.h1>

              {/* Descrição com hierarquia de cores */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto max-w-2xl text-lg leading-relaxed text-[#94a3b8] text-shadow-subtle lg:mx-0 lg:text-xl opacity-100"
              >
                <strong className="text-white">Não vendemos pacotes prontos.</strong> Criamos sistemas 100% personalizados: 
                plataformas web, apps mobile, dashboards, ERP, CRM, automações e integrações. 
                <strong className="text-blue-400"> Do conceito à operação, sua solução única.</strong>
              </motion.p>

              {/* Botões com animações */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-start opacity-100">
                <Link
                  href="#contato"
                  className="group relative rounded-full bg-[#3b82f6] px-10 py-4 text-center font-bold text-white shadow-lg shadow-blue-900/50 transition-all duration-300 hover:scale-103 hover:bg-[#2563eb] hover:shadow-xl hover:shadow-blue-900/60"
                >
                  <span className="relative z-10 flex items-center gap-2">
                  Solicitar Proposta Personalizada
                  <ArrowRight size={18} />
                </span>
                  <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                </Link>
                <Link
                  href="#demo"
                  className="group relative rounded-full border-2 border-white/40 bg-white/5 px-10 py-4 text-center font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-103 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                >
                  <span className="flex items-center justify-center gap-3">
                    Ver Demonstração
                    <motion.span
                      animate={{ rotate: [0, 12, -12, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Sparkles size={18} />
                    </motion.span>
                  </span>
                </Link>
              </div>

              {/* Informações de contato */}
              <div className="flex flex-col items-center gap-4 text-sm text-[#94a3b8] sm:flex-row sm:justify-start opacity-100">
                <span className="inline-flex items-center gap-2">
                  <PhoneCall size={18} />
                  (51) 98033-9085
                </span>
                <span className="hidden sm:inline-block">•</span>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle size={18} />
                  contato@korvexsistemas.com.br
                </span>
                <span className="hidden sm:inline-block">•</span>
                <span className="inline-flex items-center gap-2">
                  <Building2 size={18} />
                  Caxias do Sul, RS-Brasil
                </span>
              </div>
            </div>

            {/* Mockup com parallax */}
            <div className="relative flex w-full justify-center opacity-100">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-lg"
              >
                <div className="glass-strong rounded-[2.5rem] border border-white/20 p-8 shadow-2xl glow-blue-strong">
                  <motion.div
                    className="relative overflow-hidden rounded-3xl border border-white/30"
                    animate={{
                      boxShadow: [
                        "0 40px 100px -60px rgba(59,130,246,0.6)",
                        "0 60px 120px -70px rgba(99,102,241,0.7)",
                        "0 40px 100px -60px rgba(59,130,246,0.6)",
                      ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/Screenshot_207.png"
                      alt="Interface principal Korvex"
                      width={680}
                      height={520}
                      className="h-auto w-full"
                      priority
                    />
                  </motion.div>
                  <div className="mt-8 space-y-4 text-sm text-white/90">
                    <div className="flex items-center gap-3">
                      <Store size={20} className="text-blue-400" />
                      <span>Experiência completa do PDV Korvex integrada ao estoque.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle size={20} className="text-emerald-400" />
                      <span>WhatsApp automatizado com fluxos prontos para campanhas.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative space-y-12 pb-24 pt-8 sm:space-y-16 sm:pb-28 sm:pt-10 md:space-y-20 md:pb-32 md:pt-12">
        {/* Seção: O que podemos desenvolver */}
        <section id="solucoes" className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-8 sm:mb-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 px-6 py-2 text-sm font-bold text-indigo-400 mb-4">
                  Nossas Especialidades
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4" style={{ fontWeight: 800 }}>
                  <span
                    className="bg-gradient-to-r from-indigo-300 via-blue-300 to-violet-300 bg-clip-text text-transparent"
                    style={{ textShadow: "0 18px 45px rgba(99,102,241,0.45)" }}
                  >
                    Desenvolvemos qualquer sistema que sua empresa precise
                  </span>
                </h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#94a3b8] lg:text-xl">
                  Do conceito à implementação, criamos soluções tecnológicas personalizadas para diferentes segmentos e necessidades.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Sistemas de Gestão",
                  description: "ERP, CRM, gestão de estoque, vendas e operações. Soluções completas para administrar seu negócio.",
                  icon: Briefcase,
                  iconClass: "bg-blue-500/20 text-blue-400",
                },
                {
                  title: "E-commerce & PDV",
                  description: "Lojas virtuais, PDV omnichannel, integração com marketplaces e gestão de vendas online e física.",
                  icon: ShoppingCart,
                  iconClass: "bg-purple-500/20 text-purple-400",
                },
                {
                  title: "Aplicativos Mobile",
                  description: "Apps iOS e Android nativos ou híbridos para clientes, vendedores ou gestão interna da empresa.",
                  icon: Smartphone,
                  iconClass: "bg-emerald-500/20 text-emerald-400",
                },
                {
                  title: "Sistemas Web",
                  description: "Plataformas web responsivas, dashboards, painéis administrativos e sistemas de gestão online.",
                  icon: Globe,
                  iconClass: "bg-cyan-500/20 text-cyan-400",
                },
                {
                  title: "Automações & Integrações",
                  description: "Integração entre sistemas, automação de processos, APIs e conectores para otimizar operações.",
                  icon: Zap,
                  iconClass: "bg-yellow-500/20 text-yellow-400",
                },
                {
                  title: "Sistemas Industriais",
                  description: "Soluções para indústria: controle de produção, qualidade, manutenção e gestão de fábrica.",
                  icon: Factory,
                  iconClass: "bg-orange-500/20 text-orange-400",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/40 hover:shadow-2xl"
                  >
                    <div className="relative z-10">
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconClass} mb-6`}>
                        <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 800 }}>
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[#94a3b8]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Seção: O que desenvolvemos - Exemplos detalhados */}
        <section id="o-que-desenvolvemos" className="relative py-16 sm:py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16">
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 border border-purple-500/30 px-6 py-2 text-sm font-bold text-purple-400 mb-4">
                  <Code size={16} />
                  O Que Desenvolvemos
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4" style={{ fontWeight: 800 }}>
                  <span
                    className="bg-gradient-to-r from-violet-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
                    style={{ textShadow: "0 20px 55px rgba(168,85,247,0.45)" }}
                  >
                    Sistemas personalizados que resolvem problemas reais
                  </span>
                </h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#94a3b8] lg:text-xl">
                  Cada projeto é único. Desenvolvemos soluções sob medida que se adaptam perfeitamente às necessidades da sua empresa.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Sistemas ERP Personalizados",
                  description: "Gestão completa de recursos empresariais: financeiro, estoque, compras, vendas, produção e RH. Totalmente adaptado ao seu modelo de negócio.",
                  icon: Layers,
                  iconClass: "bg-blue-500/20 text-blue-400",
                  features: ["Módulos customizados", "Integração com sistemas legados", "Relatórios em tempo real"],
                },
                {
                  title: "Plataformas CRM Avançadas",
                  description: "Gestão de relacionamento com clientes, pipeline de vendas, automação de follow-ups e análise de conversão. Tudo em um só lugar.",
                  icon: Users,
                  iconClass: "bg-purple-500/20 text-purple-400",
                  features: ["Automação de vendas", "Análise preditiva", "Integração multi-canal"],
                },
                {
                  title: "Dashboards Executivos",
                  description: "Painéis de controle com KPIs em tempo real, gráficos interativos e alertas inteligentes para tomada de decisão estratégica.",
                  icon: BarChart3,
                  iconClass: "bg-emerald-500/20 text-emerald-400",
                  features: ["Visualização de dados", "Alertas automáticos", "Exportação de relatórios"],
                },
                {
                  title: "Apps Mobile Nativos",
                  description: "Aplicativos iOS e Android com performance nativa, offline-first e sincronização em tempo real. Para clientes ou equipe interna.",
                  icon: Smartphone,
                  iconClass: "bg-cyan-500/20 text-cyan-400",
                  features: ["Offline-first", "Push notifications", "Biometria e segurança"],
                },
                {
                  title: "E-commerce & Marketplaces",
                  description: "Lojas virtuais completas, integração com marketplaces (Mercado Livre, Amazon, etc), gestão de pedidos e logística.",
                  icon: ShoppingCart,
                  iconClass: "bg-orange-500/20 text-orange-400",
                  features: ["Multi-marketplace", "Gestão de estoque unificada", "Checkout otimizado"],
                },
                {
                  title: "Sistemas de Controle de Produção",
                  description: "Gestão completa da linha de produção: planejamento, controle de qualidade, rastreabilidade e otimização de processos industriais.",
                  icon: Factory,
                  iconClass: "bg-red-500/20 text-red-400",
                  features: ["Rastreabilidade total", "Controle de qualidade", "Otimização de processos"],
                },
                {
                  title: "Automações e Integrações",
                  description: "Conectamos seus sistemas, automatizamos processos repetitivos e criamos fluxos inteligentes que economizam tempo e reduzem erros.",
                  icon: Zap,
                  iconClass: "bg-yellow-500/20 text-yellow-400",
                  features: ["APIs RESTful", "Webhooks", "Integração com ERPs"],
                },
                {
                  title: "Sistemas de Gestão Financeira",
                  description: "Controle completo do financeiro: contas a pagar/receber, fluxo de caixa, conciliação bancária e relatórios fiscais automatizados.",
                  icon: TrendingUp,
                  iconClass: "bg-green-500/20 text-green-400",
                  features: ["Conciliação automática", "Relatórios fiscais", "Projeções financeiras"],
                },
                {
                  title: "Plataformas SaaS Personalizadas",
                  description: "Soluções multi-tenant escaláveis, com gestão de assinaturas, billing automático e painel administrativo completo.",
                  icon: Cloud,
                  iconClass: "bg-indigo-500/20 text-indigo-400",
                  features: ["Multi-tenant", "Billing automático", "Escalabilidade horizontal"],
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-2xl"
                  >
                    <div className="relative z-10">
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconClass} mb-6`}>
                        <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 800 }}>
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[#94a3b8] mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                            <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Seção: Tecnologias que usamos */}
        <section id="tecnologias" className="relative py-16 sm:py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 px-6 py-2 text-sm font-bold text-cyan-400 mb-4">
                  <Cpu size={16} />
                  Stack Tecnológico
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4" style={{ fontWeight: 800 }}>
                  <span
                    className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent"
                    style={{ textShadow: "0 18px 45px rgba(14,165,233,0.45)" }}
                  >
                    Tecnologias modernas que garantem performance e escalabilidade
                  </span>
                </h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#94a3b8] lg:text-xl">
                  Utilizamos as melhores ferramentas do mercado para construir sistemas robustos, seguros e de alta performance.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  category: "Frontend",
                  technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                  icon: Code,
                  color: "from-blue-500/20 to-cyan-500/20",
                  textColor: "text-blue-400",
                },
                {
                  category: "Backend",
                  technologies: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
                  icon: Server,
                  color: "from-green-500/20 to-emerald-500/20",
                  textColor: "text-green-400",
                },
                {
                  category: "Banco de Dados",
                  technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server"],
                  icon: Database,
                  color: "from-purple-500/20 to-pink-500/20",
                  textColor: "text-purple-400",
                },
                {
                  category: "Cloud & DevOps",
                  technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
                  icon: Cloud,
                  color: "from-orange-500/20 to-yellow-500/20",
                  textColor: "text-orange-400",
                },
              ].map((stack, index) => (
                <ScrollReveal key={stack.category} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl"
                  >
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stack.color} ${stack.textColor} mb-6`}>
                      <stack.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontWeight: 800 }}>
                      {stack.category}
                    </h3>
                    <ul className="space-y-3">
                      {stack.technologies.map((tech) => (
                        <li key={tech} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-12 text-center">
                <p className="text-base text-[#94a3b8] mb-6">
                  E muito mais: APIs REST, WebSockets, Microserviços, Testes automatizados, 
                  Monitoramento em tempo real e muito mais conforme a necessidade do projeto.
                </p>
                <Link
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 px-8 py-4 text-base font-bold text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/30"
                >
                  Quer saber mais sobre nossa stack?
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Seção: Por que escolher a Korvex */}
        <section id="por-que-korvex" className="relative py-16 sm:py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-6 py-2 text-sm font-bold text-emerald-400 mb-4">
                  <Star size={16} />
                  Nossa Diferenciação
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4" style={{ fontWeight: 800 }}>
                  <span
                    className="bg-gradient-to-r from-emerald-300 via-teal-300 to-lime-200 bg-clip-text text-transparent"
                    style={{ textShadow: "0 18px 45px rgba(16,185,129,0.5)" }}
                  >
                    Por que escolher a Korvex para seu projeto?
                  </span>
                </h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#94a3b8] lg:text-xl">
                  Não somos apenas desenvolvedores. Somos parceiros estratégicos que transformam ideias em soluções tecnológicas de alto impacto.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "100% Personalizado",
                  description: "Cada sistema é desenvolvido do zero, pensado exclusivamente para sua empresa. Sem templates genéricos ou limitações de pacotes prontos.",
                  icon: Target,
                  color: "from-blue-500/20 to-cyan-500/20",
                  iconColor: "text-blue-400",
                },
                {
                  title: "Equipe Estratégica",
                  description: "Time multidisciplinar que entende de negócios, não apenas de código. Analisamos processos, identificamos oportunidades e entregamos soluções que geram resultados.",
                  icon: Users,
                  color: "from-purple-500/20 to-pink-500/20",
                  iconColor: "text-purple-400",
                },
                {
                  title: "Tecnologia de Ponta",
                  description: "Utilizamos as melhores ferramentas e frameworks do mercado. Sistemas modernos, escaláveis e preparados para crescer junto com seu negócio.",
                  icon: Rocket,
                  color: "from-emerald-500/20 to-teal-500/20",
                  iconColor: "text-emerald-400",
                },
                {
                  title: "Suporte Contínuo",
                  description: "Não abandonamos o projeto após o deploy. Oferecemos suporte técnico, evoluções, manutenção e melhorias contínuas para garantir que seu sistema sempre esteja atualizado.",
                  icon: Headphones,
                  color: "from-orange-500/20 to-yellow-500/20",
                  iconColor: "text-orange-400",
                },
                {
                  title: "Entrega Rápida",
                  description: "Metodologia ágil que permite entregas incrementais e funcionais em semanas, não meses. Você vê resultados desde o início do projeto.",
                  icon: Clock,
                  color: "from-cyan-500/20 to-blue-500/20",
                  iconColor: "text-cyan-400",
                },
                {
                  title: "Segurança e Compliance",
                  description: "Sistemas desenvolvidos seguindo as melhores práticas de segurança, LGPD compliance e proteção de dados. Seu negócio e seus clientes protegidos.",
                  icon: Shield,
                  color: "from-red-500/20 to-pink-500/20",
                  iconColor: "text-red-400",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-2xl"
                  >
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} ${item.iconColor} mb-6`}>
                      <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 800 }}>
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#94a3b8]">
                      {item.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Seção: Soluções sob medida para empresas */}
        <section id="solucoes-sob-medida" className="relative py-16 sm:py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
            <div className="glass-strong rounded-[2rem] border border-white/20 px-6 py-12 sm:rounded-[2.5rem] sm:px-8 sm:py-16 md:rounded-[3rem] md:px-12 md:py-20 shadow-2xl backdrop-blur-xl">
              <ScrollReveal>
                <div className="text-center mb-12 sm:mb-16">
                  <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 border border-purple-500/30 px-6 py-2 text-sm font-bold text-purple-400 mb-4">
                    <Settings size={16} />
                    Soluções Personalizadas
                  </span>
                  <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4" style={{ fontWeight: 800 }}>
                    <span
                      className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent"
                      style={{ textShadow: "0 20px 55px rgba(217,70,239,0.45)" }}
                    >
                      Sistemas sob medida que se adaptam ao seu negócio
                    </span>
                  </h2>
                  <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#94a3b8] lg:text-xl">
                    Não force seu processo de negócio em um sistema genérico. Criamos a solução perfeita para sua realidade.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Análise Profunda",
                    description: "Entendemos seus processos, desafios e objetivos antes de escrever uma linha de código. Garantimos que a solução resolva problemas reais.",
                    step: "01",
                  },
                  {
                    title: "Desenvolvimento Ágil",
                    description: "Metodologia ágil com entregas incrementais. Você acompanha a evolução, dá feedbacks e vê o sistema ganhando forma em tempo real.",
                    step: "02",
                  },
                  {
                    title: "Testes e Validação",
                    description: "Testes rigorosos em ambiente controlado antes do deploy. Validamos com sua equipe para garantir que tudo funciona perfeitamente.",
                    step: "03",
                  },
                  {
                    title: "Deploy e Treinamento",
                    description: "Implementação suave, migração de dados assistida e treinamento completo da equipe. Você não fica sozinho nessa jornada.",
                    step: "04",
                  },
                  {
                    title: "Suporte e Evolução",
                    description: "Suporte técnico dedicado, monitoramento 24/7 e evoluções contínuas. Seu sistema sempre atualizado e otimizado.",
                    step: "05",
                  },
                  {
                    title: "Parceria de Longo Prazo",
                    description: "Não somos fornecedores, somos parceiros. Crescemos juntos, evoluímos juntos e alcançamos resultados juntos.",
                    step: "06",
                  },
                ].map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-2xl"
                    >
                      <div className="absolute top-6 right-6 text-6xl font-extrabold text-white/5" style={{ fontWeight: 900 }}>
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 relative z-10" style={{ fontWeight: 800 }}>
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[#94a3b8] relative z-10">
                        {item.description}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.6}>
                <div className="mt-12 text-center">
                  <Link
                    href="#contato"
                    className="inline-flex items-center gap-3 rounded-full bg-purple-500 px-10 py-4 text-base font-bold text-white shadow-lg shadow-purple-900/50 transition-all duration-300 hover:scale-105 hover:bg-purple-600 hover:shadow-xl"
                  >
                    Quero uma solução personalizada
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Seção: Diferenciais da Korvex */}
        <section id="diferenciais" className="relative py-16 sm:py-20 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-6 py-2 text-sm font-bold text-blue-400 mb-4">
                  <Award size={16} />
                  Diferenciais Exclusivos
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4" style={{ fontWeight: 800 }}>
                  <span
                    className="bg-gradient-to-r from-blue-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent"
                    style={{ textShadow: "0 18px 45px rgba(59,130,246,0.45)" }}
                  >
                    O que torna a Korvex única no mercado
                  </span>
                </h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#94a3b8] lg:text-xl">
                  Mais do que desenvolvimento, oferecemos uma experiência completa de transformação digital.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
              {[
                {
                  title: "Consultoria Incluída",
                  description: "Não apenas desenvolvemos, mas também consultamos. Analisamos seu negócio, identificamos oportunidades de melhoria e sugerimos otimizações que vão além do código.",
                  icon: Lightbulb,
                  stat: "100%",
                  statLabel: "dos projetos incluem consultoria estratégica",
                },
                {
                  title: "Código Limpo e Documentado",
                  description: "Entregamos código de qualidade profissional, bem documentado e fácil de manter. Seu time pode evoluir o sistema com confiança.",
                  icon: FileCode,
                  stat: "100%",
                  statLabel: "do código é documentado e revisado",
                },
                {
                  title: "Escalabilidade Garantida",
                  description: "Desenvolvemos pensando no futuro. Sistemas arquitetados para crescer junto com seu negócio, suportando milhões de transações sem perder performance.",
                  icon: TrendingUp,
                  stat: "10x",
                  statLabel: "capacidade de crescimento sem refatoração",
                },
                {
                  title: "Segurança em Primeiro Lugar",
                  description: "LGPD compliance, criptografia de dados, autenticação robusta e auditoria completa. Seus dados e os de seus clientes sempre protegidos.",
                  icon: Lock,
                  stat: "100%",
                  statLabel: "dos sistemas são LGPD compliant",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl"
                  >
                    <div className="flex items-start gap-6">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <item.icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 800 }}>
                          {item.title}
                        </h3>
                        <p className="text-base leading-relaxed text-[#94a3b8] mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold text-blue-400" style={{ fontWeight: 900 }}>
                            {item.stat}
                          </span>
                          <span className="text-sm text-[#94a3b8]">
                            {item.statLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de cards de destaque - Exemplo: Sistema PDV para Varejo */}
        <section id="recursos" className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="relative mx-auto flex max-w-[1280px] flex-col gap-8 px-6 sm:gap-10 sm:px-8 md:gap-12 md:px-12">
            <ScrollReveal>
              <div className="text-center opacity-100 mb-2 sm:mb-3 md:mb-4">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ fontWeight: 800 }}>
                <span
                  className="bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-300 bg-clip-text text-transparent"
                  style={{ textShadow: "0 15px 40px rgba(14,165,233,0.4)" }}
                >
                  Exemplos de Sistemas Desenvolvidos
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-[#94a3b8] lg:text-xl">
                Veja exemplos de funcionalidades que desenvolvemos em diferentes projetos. Cada sistema é personalizado 
                conforme as necessidades específicas do cliente.
              </p>
              </div>
            </ScrollReveal>

            {/* Badge atualizado */}
            <ScrollReveal delay={0.2}>
              <div className="flex justify-center mb-4 sm:mb-5">
              <span className="rounded-full bg-blue-500/20 border border-blue-500/30 px-6 py-2 text-sm font-bold text-blue-400">
                Funcionalidades Desenvolvidas
              </span>
              </div>
            </ScrollReveal>

            {/* Cards */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              {highlightCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl opacity-100"
                  style={{
                    boxShadow: `0 20px 60px -30px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1) inset`,
                  }}
                >
                  {/* Glow no hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: `radial-gradient(circle, ${card.glow}, transparent 70%)` }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/20 text-blue-400 shadow-lg"
                    >
                      <card.icon size={28} />
                    </motion.div>
                    <h3 className="mt-8 text-2xl font-bold text-white" style={{ fontWeight: 800 }}>
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#94a3b8]">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de como funciona */}
        <section id="demo" className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/10 to-white/5 px-6 py-16 sm:rounded-[2.5rem] sm:px-8 sm:py-20 md:rounded-[3rem] md:px-12 md:py-24 backdrop-blur-2xl shadow-2xl">
            <div className="grid gap-12 sm:gap-14 md:gap-16 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8 opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-6 py-2 text-xs font-bold uppercase tracking-wide text-blue-400">
                  Como funciona
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl" style={{ fontWeight: 800 }}>
                  <span
                    className="bg-gradient-to-r from-indigo-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent"
                    style={{ textShadow: "0 15px 40px rgba(59,130,246,0.35)" }}
                  >
                    Do conceito à operação: metodologia que acelera resultados
                  </span>
                </h2>
                <p className="text-lg leading-relaxed text-[#94a3b8]">
                  <strong className="text-white">Não entregamos apenas código.</strong> Acompanhamos cada etapa do projeto: 
                  análise estratégica, desenvolvimento ágil, testes rigorosos e suporte contínuo. 
                  <strong className="text-blue-400"> Seu sistema funcionando perfeitamente, do primeiro dia.</strong>
                </p>
                <div className="grid gap-6">
                  {roadmap.map((step, idx) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      className="group glass rounded-3xl border border-white/20 p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl opacity-100"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={iconAnimations[step.animation as keyof typeof iconAnimations]}
                          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400"
                        >
                          <step.icon size={24} />
                        </motion.div>
                        <h3 className="text-lg font-bold text-white" style={{ fontWeight: 800 }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-base leading-relaxed text-[#94a3b8]">{step.body}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://wa.me/5551980339085"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#3b82f6] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2563eb] hover:shadow-xl"
                  >
                    Falar no WhatsApp
                    <MessageCircle size={20} />
                  </Link>
                  <Link
                    href="#contato"
                    className="group inline-flex items-center gap-3 rounded-full border-2 border-blue-500/40 bg-blue-500/10 px-8 py-4 text-base font-bold text-blue-400 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/20"
                  >
                    Agendar onboarding
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>

              <div className="relative rounded-[3rem] border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-xl shadow-2xl opacity-100">
                <div className="space-y-8 opacity-100">
                  <div className="glass rounded-3xl border border-white/20 p-6">
                    <h3 className="text-xl font-bold text-white" style={{ fontWeight: 800 }}>
                      Resultados mensuráveis que transformam negócios
                    </h3>
                    <ul className="mt-4 space-y-4 text-base text-[#94a3b8]">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">Aumento médio de 35%</strong> em eficiência operacional com automações inteligentes.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">Redução de até 70%</strong> no tempo de processos manuais através de integrações.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">Insights em tempo real</strong> para tomada de decisão estratégica baseada em dados.</span>
                      </li>
                    </ul>
                  </div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="glass rounded-3xl border border-white/20 p-6 opacity-100"
                  >
                    <p className="text-lg font-bold text-white" style={{ fontWeight: 800 }}>
                      "A Korvex não desenvolveu apenas um sistema. Transformou completamente nossa operação."
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[#94a3b8]">
                      <strong className="text-white">Em apenas duas semanas, tínhamos um sistema completo funcionando.</strong> 
                      Hoje temos visibilidade total dos processos, automações que economizam horas de trabalho diário 
                      e dados em tempo real que nos permitem tomar decisões estratégicas muito mais rápido.
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                      <div>
                        <span className="block font-bold text-white">Marina Alves</span>
                        <p className="text-sm text-[#94a3b8]">CEO, Studio Premium</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de prova social */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
            <div className="glass-strong rounded-[2rem] border border-white/20 px-6 py-12 sm:rounded-[2.5rem] sm:px-8 sm:py-16 md:rounded-[3rem] md:px-12 md:py-20 shadow-2xl backdrop-blur-xl opacity-100">
              <div className="grid gap-12 sm:gap-14 md:gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="space-y-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-6 py-2 text-xs font-bold uppercase tracking-wide text-emerald-400">
                    Prova social
                  </span>
                  <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl" style={{ fontWeight: 800 }}>
                    <span
                      className="bg-gradient-to-r from-emerald-300 via-teal-300 to-green-200 bg-clip-text text-transparent"
                      style={{ textShadow: "0 18px 45px rgba(16,185,129,0.45)" }}
                    >
                      Resultados comprovados que geram confiança
                    </span>
                  </h2>
                  <p className="text-lg leading-relaxed text-[#94a3b8]">
                    <strong className="text-white">Mais de 50 empresas já transformaram seus processos com a Korvex.</strong> 
                    Desenvolvemos sistemas personalizados que integram processos, automatizam operações e geram insights valiosos. 
                    <strong className="text-emerald-400"> Um time estratégico que acompanha seu projeto do início ao deploy e além.</strong>
                  </p>
                  <ul className="space-y-4 text-base text-[#94a3b8]">
                    {proofBullets.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-8">
                  <div className="glass rounded-3xl border border-white/20 p-8">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-400">Clientes Korvex</h3>
                    <div className="mt-6 grid grid-cols-2 gap-4 text-base text-[#94a3b8]">
                      {clients.map((client) => (
                        <motion.div
                          key={client}
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="glass flex items-center justify-center rounded-2xl border border-white/10 px-6 py-4 font-medium text-white transition-all duration-300"
                        >
                          {client}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="glass rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8">
                    <p className="text-xl font-bold text-white" style={{ fontWeight: 800 }}>
                      "O sistema em tempo real mudou completamente o jogo. Conseguimos otimizar processos e <strong className="text-emerald-300">reduzir custos operacionais em 40%</strong> no primeiro trimestre."
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500" />
                      <div>
                        <span className="block font-bold text-white">Pedro Martins</span>
                        <p className="text-sm text-[#94a3b8]">Head de Operações, TrendUp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de visual do sistema */}
        <section className="relative pt-8 sm:pt-10 md:pt-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
            <div className="text-center opacity-100 mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ fontWeight: 800 }}>
                <span
                  className="bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent"
                  style={{ textShadow: "0 18px 45px rgba(79,70,229,0.45)" }}
                >
                  Interfaces reais que inspiram sua equipe
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-[#94a3b8] lg:text-xl">
                Painéis intuitivos, cards 3D e indicadores claros. Veja como a Korvex combina design e performance para
                elevar a operação da sua loja.
              </p>
            </div>
            
            {/* Badge "Visual do sistema" posicionado acima do carousel */}
            <div className="flex justify-center mb-4 sm:mb-5">
              <span className="rounded-full bg-purple-500/20 border border-purple-500/30 px-6 py-2 text-sm font-bold text-purple-400">
                Visual do sistema
              </span>
            </div>
            
            {/* Carousel */}
            <div className="mt-0">
              <Carousel
              items={[
                {
                  src: "/Screenshot_206.png",
                  alt: "Tela de login do Korvex PDV com identidade visual moderna",
                },
                {
                  src: "/Screenshot_207.png",
                  alt: "Painel administrativo do Korvex PDV com catálogo e carrinho",
                },
                {
                  src: "/Screenshot_208.png",
                  alt: "Emissão fiscal com NFC-e e NF-e integradas no Korvex PDV",
                },
                {
                  src: "/Screenshot_209.png",
                  alt: "DANFE detalhado gerado pelo Korvex com dados completos do cliente",
                },
              ]}
              />
            </div>
          </div>
        </section>

        {/* Seção CTA final */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(15,23,42,0.8),transparent_65%)]" />
          <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 py-16 text-white sm:rounded-[2.5rem] sm:px-8 sm:py-20 md:rounded-[3rem] md:px-12 md:py-24 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
            <div className="grid gap-12 sm:gap-14 md:gap-16 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-2 text-xs font-bold uppercase tracking-wide text-white/90">
                  Pronto para começar
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ fontWeight: 800 }}>
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Pronto para transformar sua empresa?
                  </span>
                </h2>
                <p className="text-lg leading-relaxed text-white/80">
                  <strong className="text-white">Não perca mais tempo com sistemas genéricos que não atendem suas necessidades.</strong> 
                  Fale com nossos especialistas e descubra como podemos criar a solução perfeita para seu negócio. 
                  <strong className="text-blue-300"> Primeira consulta gratuita e sem compromisso.</strong>
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/5551980339085"
                    className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-base font-bold text-[#0f172a] shadow-lg shadow-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/30"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Falar com Especialista Agora
                      <MessageCircle size={20} />
                    </span>
                    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30" />
                  </Link>
                  <Link
                    href="#contato"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/40 bg-white/5 px-10 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    Solicitar Proposta Personalizada
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="grid gap-4 text-base text-white/65 sm:grid-cols-3">
                  <div className="glass rounded-3xl border border-white/10 p-6">
                    <p className="text-3xl font-bold text-white">+50</p>
                    <p className="mt-2">Lojas conectadas via Korvex</p>
                  </div>
                  <div className="glass rounded-3xl border border-white/10 p-6">
                    <p className="text-3xl font-bold text-white">+32%</p>
                    <p className="mt-2">Crescimento médio de faturamento</p>
                  </div>
                  <div className="glass rounded-3xl border border-white/10 p-6">
                    <p className="text-3xl font-bold text-white">7 dias</p>
                    <p className="mt-2">Para o sistema operando na sua loja</p>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-3xl border border-white/20 p-10 shadow-2xl backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white" style={{ fontWeight: 800 }}>
                  Solicite sua proposta personalizada
                </h3>
                <p className="mt-3 text-base text-white/80">
                  <strong className="text-white">Preencha o formulário abaixo ou fale diretamente no WhatsApp.</strong> 
                  Nossa equipe de especialistas responde em até 30 minutos com uma proposta sob medida para seu projeto.
                </p>
                <form 
                  className="mt-8 space-y-5 text-base"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const nome = formData.get("nome") as string;
                    const email = formData.get("email") as string;
                    const whatsapp = formData.get("whatsapp") as string;
                    const mensagem = formData.get("mensagem") as string;
                    
                    // Formata mensagem para WhatsApp
                    const texto = `Olá! Gostaria de receber uma proposta personalizada.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*WhatsApp:* ${whatsapp}\n\n*Mensagem:*\n${mensagem}`;
                    const url = `https://wa.me/5551980339085?text=${encodeURIComponent(texto)}`;
                    
                    // Abre WhatsApp
                    window.open(url, "_blank");
                    
                    // Limpa formulário
                    e.currentTarget.reset();
                  }}
                >
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    required
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail corporativo"
                    required
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"
                  />
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp"
                    required
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"
                  />
                  <textarea
                    name="mensagem"
                    rows={4}
                    placeholder="Conte rapidamente sobre sua necessidade ou projeto."
                    required
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="group relative w-full rounded-full bg-[#3b82f6] px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/50 transition-all duration-300 hover:scale-105 hover:bg-[#2563eb] hover:shadow-xl hover:shadow-blue-900/60"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Receber Proposta Personalizada
                      <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer id="contato" className="relative border-t border-white/10 bg-[#0a0a0a] text-[#94a3b8]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-12 sm:gap-10 sm:px-8 sm:py-14 md:flex-row md:items-start md:justify-between md:gap-12 md:px-12 md:py-16">
          <div className="space-y-6">
              <Image src="/korvex-3d-06.png" alt="Korvex" width={160} height={120} className="h-auto w-40" />
            <p className="max-w-sm text-base leading-relaxed text-[#94a3b8]">
              Desenvolvimento de software sob medida para empresas. Soluções personalizadas com suporte humano e tecnologia de ponta.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.linkedin.com"
                rel="noreferrer"
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-blue-500 hover:text-blue-400 hover:shadow-lg"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com"
                rel="noreferrer"
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-purple-500 hover:text-purple-400 hover:shadow-lg"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me/5551980339085"
                rel="noreferrer"
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-emerald-500 hover:text-emerald-400 hover:shadow-lg"
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-base text-[#94a3b8] md:flex-row md:items-center md:gap-12">
            <Link href="/politica-de-privacidade" className="transition hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/politica-de-cookies" className="transition hover:text-white">
              Política de Cookies
            </Link>
            <Link href="/termos-de-uso" className="transition hover:text-white">
              Termos de Uso
            </Link>
            <Link href="#contato" className="transition hover:text-white">
              Contato
            </Link>
          </div>

          <div className="text-sm text-[#64748b]">
            © {new Date().getFullYear()} Korvex Sistemas. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Botão fixo WhatsApp - Responsivo mobile primeiro */}
      <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:bottom-6 md:bottom-8 md:right-4 opacity-100">
        <div className="relative">
          {/* Efeito de luz verde sutil atrás do botão */}
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 -inset-3 rounded-full bg-emerald-500/30 blur-xl -z-10"
          />
          <Link
            href="https://wa.me/5551980339085"
            className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/40 transition-all duration-300 hover:scale-105 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/50 sm:w-auto sm:px-6 sm:py-4 sm:text-base md:px-8"
          >
            <MessageCircle size={18} className="sm:size-5 md:size-6 drop-shadow-lg" />
            <span className="sm:hidden drop-shadow-lg">Fale conosco</span>
            <span className="hidden sm:inline drop-shadow-lg">Fale com um especialista</span>
          </Link>
        </div>
      </div>
    </div>
  );
}