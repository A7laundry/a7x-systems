# A7X Systems — Blueprint Completo
## Site Atual + Projeto Departamentos por Assinatura
### v1.0 — Fevereiro 2026

---

## Índice

**PARTE 1 — SITE ATUAL**
1. [Visão Geral](#1-visão-geral)
2. [Arquitetura Técnica](#2-arquitetura-técnica)
3. [Design System](#3-design-system)
4. [Mapa de Páginas](#4-mapa-de-páginas)
5. [Componentes](#5-componentes)
6. [Sistema de Conteúdo (i18n + Blog)](#6-sistema-de-conteúdo)
7. [Ferramentas Interativas](#7-ferramentas-interativas)
8. [SEO & Performance](#8-seo--performance)
9. [Elementos Globais](#9-elementos-globais)

**PARTE 2 — PROJETO DEPARTAMENTOS POR ASSINATURA**
10. [Visão do Produto](#10-visão-do-produto)
11. [Os 8 Departamentos](#11-os-8-departamentos)
12. [Jornada do Cliente](#12-jornada-do-cliente)
13. [Modelo de Pricing](#13-modelo-de-pricing)
14. [Arquitetura Técnica (Assinaturas)](#14-arquitetura-técnica-assinaturas)

**PARTE 3 — VISÃO UNIFICADA**
15. [Mapa do Site Completo](#15-mapa-do-site-completo)
16. [Árvore de Componentes](#16-árvore-de-componentes)
17. [Stack Tecnológico Completo](#17-stack-tecnológico-completo)
18. [Roadmap de Evolução](#18-roadmap-de-evolução)
19. [KPIs & Métricas](#19-kpis--métricas)

---

# PARTE 1 — SITE ATUAL

---

## 1. Visão Geral

### O que é
Site institucional + plataforma de geração de leads da A7X Systems. Posicionamento: consultoria de automação e IA para empresas. Foco em PMEs que precisam estruturar operações.

### Tech Stack

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | Next.js (App Router) | 16.1.6 |
| Runtime | React | 19.2.3 |
| Linguagem | TypeScript | 5.x |
| Estilo | Tailwind CSS | 4.x |
| Animação | Framer Motion | 12.x |
| i18n | next-intl | 4.8.3 |
| Blog | next-mdx-remote + gray-matter + reading-time | 6.0 / 4.0 / 1.5 |
| Utilitários | clsx + tailwind-merge | 2.1 / 3.5 |

### Idiomas Suportados
- 🇺🇸 English (en) — padrão
- 🇧🇷 Português (pt)
- 🇪🇸 Español (es)

---

## 2. Arquitetura Técnica

### Estrutura de Diretórios

```
a7x-systems/
├── content/
│   └── blog/
│       ├── en/           → 3 posts em inglês (.mdx)
│       ├── pt/           → 3 posts em português (.mdx)
│       └── es/           → 3 posts em espanhol (.mdx)
│
├── messages/
│   ├── en.json           → ~454 linhas, 19 namespaces
│   ├── pt.json           → mesma estrutura
│   └── es.json           → mesma estrutura
│
├── public/               → Assets estáticos
│
├── src/
│   ├── app/
│   │   ├── globals.css           → Tema, utilitários CSS, animações
│   │   ├── layout.tsx            → Root layout (fontes, metadata base)
│   │   ├── sitemap.ts            → Sitemap dinâmico (todas rotas + blog)
│   │   ├── robots.ts             → Robots.txt
│   │   └── [locale]/
│   │       ├── layout.tsx        → Layout com Header, Footer, WhatsApp, Popup
│   │       ├── page.tsx          → Homepage (8 seções)
│   │       ├── services/         → Página de serviços detalhada
│   │       ├── about/            → Página sobre
│   │       ├── contact/          → Assessment Wizard
│   │       ├── blog/             → Listagem + [slug] dinâmico
│   │       ├── careers/          → Página de carreiras
│   │       └── tools/
│   │           └── roi-calculator/ → Calculadora de ROI
│   │
│   ├── components/
│   │   ├── sections/     → 8 seções da homepage
│   │   ├── ui/           → 17 componentes visuais reutilizáveis
│   │   ├── forms/        → 7 componentes de formulário
│   │   ├── layout/       → 5 componentes de layout
│   │   ├── motion/       → 4 componentes de animação
│   │   ├── blog/         → 3 componentes de blog
│   │   └── seo/          → 1 componente (5 schemas JSON-LD)
│   │
│   ├── i18n/
│   │   ├── routing.ts    → Locales: ['en', 'pt', 'es'], default: 'en'
│   │   ├── request.ts    → Carrega mensagens por locale
│   │   └── navigation.ts → Link, redirect, usePathname, useRouter
│   │
│   └── lib/
│       ├── constants.ts  → SITE_URL, NAV_LINKS, LOCALES
│       ├── fonts.ts      → Inter (sans) + DM Serif Display (serif)
│       ├── utils.ts      → cn() = clsx + tailwind-merge
│       ├── metadata.ts   → Utilitários de SEO
│       ├── assessment.ts → Engine de assessment (perguntas, scoring)
│       └── blog.ts       → getAllPosts, getPostBySlug, getAllSlugs
│
├── middleware.ts          → next-intl middleware (roteamento i18n)
├── next.config.ts         → Plugin next-intl
├── tsconfig.json          → Strict, path alias @/*
├── postcss.config.mjs     → Tailwind CSS v4
└── package.json           → Dependências
```

### Fluxo de Dados

```
┌──────────────────┐
│    Usuário        │
│  (Browser)        │
└────────┬─────────┘
         │ GET /pt/blog/guia-ia
         ▼
┌──────────────────┐
│   Middleware      │
│  (next-intl)     │
│  Detecta locale  │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐    ┌──────────────────┐
│  Layout [locale] │◄───│  messages/pt.json │
│  Header + Footer │    │  (traduções)      │
│  WhatsApp + Popup│    └──────────────────┘
└────────┬─────────┘
         │
         ▼
┌──────────────────┐    ┌──────────────────┐
│  Page Component  │◄───│  content/blog/pt/ │
│  (SSR/SSG)       │    │  (posts .mdx)     │
└──────────────────┘    └──────────────────┘
```

---

## 3. Design System

### Paleta de Cores

```
BACKGROUNDS
├── --color-background:   #030712   → Fundo principal (quase preto)
├── --color-surface-1:    #0a0f1e   → Cards, containers
├── --color-surface-2:    #111827   → Elementos elevados

ACCENT (Azul → Cyan gradient)
├── --color-accent-400:   #60a5fa   → Destaque claro
├── --color-accent-500:   #3b82f6   → Destaque principal
├── --color-accent-600:   #2563eb   → Destaque escuro
├── --color-cyan-400:     #22d3ee   → Cyan claro
├── --color-cyan-500:     #06b6d4   → Cyan

TEXTO
├── --color-text-primary:   #f8fafc   → Títulos
├── --color-text-secondary: #cbd5e1   → Corpo
├── --color-text-muted:     #64748b   → Secundário

BORDA
└── --color-border:         #1e293b   → Bordas sutis
```

### Tipografia

| Uso | Fonte | Variável CSS | Classe Tailwind |
|-----|-------|-------------|-----------------|
| Interface, corpo | Inter | `--font-inter` | `font-sans` |
| Títulos, números destaque | DM Serif Display | `--font-dm-serif` | `font-serif` |

### Utilitários CSS Customizados

| Classe | Efeito |
|--------|--------|
| `.glass` | Glassmorphism (blur 16px + fundo translúcido) |
| `.gradient-text` | Texto com gradiente azul→cyan |
| `.glow` | Box shadow azul sutil |
| `.glow-hover` | Box shadow azul no hover |
| `.gradient-border` | Borda com gradiente rotativo (conic-gradient animado) |
| `.dot-pattern` | Padrão de pontos no background |

### Padrões de Animação

| Tipo | Componente | Comportamento |
|------|-----------|--------------|
| Fade In | `<FadeIn>` | Opacity 0→1 + translateY, trigger on viewport |
| Slide Up | `<SlideUp>` | translateY 20px→0, trigger on viewport |
| Stagger | `<StaggerChildren>` | Filhos aparecem em sequência (delay configurável) |
| Counter | `<AnimatedCounter>` | Números contam de 0 até o valor final |
| Rotating Text | `<RotatingText>` | Palavras ciclam a cada 3s com AnimatePresence |
| Scroll Progress | `<ScrollProgress>` | Barra de progresso no topo baseada no scroll |
| SVG Draw | `motion.path` | Linhas se desenham progressivamente |
| SVG Grow | `motion.rect` | Barras crescem de 0 até altura final |

### Acessibilidade
- `prefers-reduced-motion: reduce` → desativa todas animações CSS
- `scroll-behavior: auto` quando reduced-motion ativo
- Scrollbar customizada (6px, cores do tema)

---

## 4. Mapa de Páginas

### Homepage (`/`)

```
┌─────────────────────────────────────┐
│  HEADER (fixo, glass)               │
│  Logo · Home · Services · About ·   │
│  Contact · LanguageSwitcher · CTA   │
├─────────────────────────────────────┤
│                                     │
│  ① HERO                            │
│  ┌──────────────┬──────────────┐   │
│  │ Badge        │              │   │
│  │ "Your        │ Network      │   │
│  │  [rotating]  │ Illustration │   │
│  │  Runs on     │ (SVG animado)│   │
│  │  Chaos"      │              │   │
│  │ Subtitle     │              │   │
│  │ [CTA] [CTA]  │              │   │
│  │ Stats bar    │              │   │
│  └──────────────┴──────────────┘   │
│  Gradient Orbs (background)         │
│  Grid Pattern (background)          │
│                                     │
│  ② PAIN POINTS (6 cards)           │
│  ┌────┐ ┌────┐ ┌────┐             │
│  │ 1  │ │ 2  │ │ 3  │             │
│  └────┘ └────┘ └────┘             │
│  ┌────┐ ┌────┐ ┌────┐             │
│  │ 4  │ │ 5  │ │ 6  │             │
│  └────┘ └────┘ └────┘             │
│                                     │
│  ③ SOLUTION                        │
│  Before/After comparison (2 cols)   │
│  Network Diagram (Chaos→Clarity)    │
│  3-Step Timeline                    │
│                                     │
│  ④ SERVICES (5 cards com SVGs)     │
│  ┌────┐ ┌────┐ ┌────┐             │
│  │Proc│ │Work│ │Doc │             │
│  └────┘ └────┘ └────┘             │
│  ┌────┐ ┌────┐                     │
│  │ AI │ │Data│   [View All →]      │
│  └────┘ └────┘                     │
│  Dot Pattern (background)           │
│                                     │
│  ⑤ RESULTS (4 métricas animadas)   │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐     │
│  │ ROI│ │Save│ │Time│ │Ret.│     │
│  │bars│ │coin│ │clk │ │ppl │     │
│  │320%│ │2.4M│ │67% │ │94% │     │
│  └────┘ └────┘ └────┘ └────┘     │
│                                     │
│  ⑥ TESTIMONIALS (3 quotes)         │
│  ⑦ FAQ (6 items accordion)         │
│  ⑧ FINAL CTA (gradient bg)        │
│                                     │
├─────────────────────────────────────┤
│  FOOTER                            │
│  Logo · Services · Company · Legal  │
│  © 2026 A7X Systems                │
├─────────────────────────────────────┤
│  WhatsApp Button (fixed, bottom-R)  │
│  Consultation Popup (60s timer)     │
└─────────────────────────────────────┘
```

### Página de Serviços (`/services`)

```
┌─────────────────────────────────────┐
│  Badge + Título + Subtítulo         │
├─────────────────────────────────────┤
│  5 Service Blocks (full-width)      │
│  ┌─────────────────────────────┐   │
│  │ Icon │ Título + Descrição   │   │
│  │      │ 5 Deliverables ✓     │   │
│  └─────────────────────────────┘   │
│  (×5 serviços)                      │
├─────────────────────────────────────┤
│  CTA → /contact                     │
└─────────────────────────────────────┘
```

**5 Serviços atuais:**
1. Process Discovery & Mapping
2. Workflow Automation
3. Document Processing
4. AI Agents & Chatbots
5. Data Integration & Analytics

### Página Sobre (`/about`)

```
┌─────────────────────────────────────┐
│  Badge + Título + Subtítulo         │
├─────────────────────────────────────┤
│  Story section (Nossa História)     │
│  Mission + Vision (2 cols)          │
│  Values (4 cards)                   │
│  Team section                       │
├─────────────────────────────────────┤
│  CTA → /contact                     │
└─────────────────────────────────────┘
```

### Página de Contato (`/contact`)

```
┌─────────────────────────────────────┐
│  Badge + Título                     │
├─────────────────────────────────────┤
│  Info cards (WhatsApp, Email, etc.) │
├─────────────────────────────────────┤
│  ASSESSMENT WIZARD                  │
│  ┌─────────────────────────────┐   │
│  │ Progress Bar                 │   │
│  │ Pergunta atual (7+1 steps)  │   │
│  │ Opções (select/multi/range) │   │
│  │ [Voltar] [Próximo]          │   │
│  └─────────────────────────────┘   │
│         ↓ (após perguntas)          │
│  ┌─────────────────────────────┐   │
│  │ LEAD CAPTURE                │   │
│  │ Nome + Email                │   │
│  └─────────────────────────────┘   │
│         ↓ (após email)              │
│  ┌─────────────────────────────┐   │
│  │ RESULTS                     │   │
│  │ AI Readiness Score (0-100)  │   │
│  │ Tier + Categorias           │   │
│  │ 3 Recomendações             │   │
│  │ ROI Estimado                │   │
│  │ CTA: Agendar Consultoria    │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

**7 Perguntas do Assessment:**
1. Indústria/segmento (single-select)
2. Nº de funcionários (radio)
3. Maiores dores operacionais (multi-select)
4. Stack de ferramentas atual (multi-select)
5. % tempo em tarefas repetitivas (range slider)
6. Experiência com IA/automação (single-select)
7. Timeline e urgência (single-select)
   - *Condicional:* Se Q6 = "Tentou e falhou" → pergunta adicional

### Blog (`/blog` + `/blog/[slug]`)

```
LISTAGEM /blog:
┌─────────────────────────────────────┐
│  Título + Subtítulo                 │
├─────────────────────────────────────┤
│  Grid de BlogCards (3 posts)        │
│  ┌────┐ ┌────┐ ┌────┐             │
│  │Cat │ │Cat │ │Cat │             │
│  │Titl│ │Titl│ │Titl│             │
│  │Desc│ │Desc│ │Desc│             │
│  │Auth│ │Auth│ │Auth│             │
│  └────┘ └────┘ └────┘             │
└─────────────────────────────────────┘

POST /blog/[slug]:
┌─────────────────────────────────────┐
│  ← Voltar                          │
│  Categoria · Tempo de leitura       │
│  Data                               │
│  H1 Título                          │
│  Descrição                          │
│  Autor avatar + nome                │
├─────────────────────────────────────┤
│  Conteúdo MDX renderizado           │
│  (h1-h3, p, ul, ol, blockquote,    │
│   code, pre, a, strong, hr)        │
├─────────────────────────────────────┤
│  ArticleJsonLd (SEO)               │
└─────────────────────────────────────┘
```

**9 Posts atuais:**

| EN | PT | ES |
|----|----|----|
| AI Readiness Guide | Guia Prontidão IA | Guía Preparación IA |
| Process Clarity Framework | Framework Clareza de Processos | Framework Claridad de Procesos |
| Automation ROI | ROI Automação | ROI Automatización |

### Carreiras (`/careers`)

```
┌─────────────────────────────────────┐
│  Badge + Título + Subtítulo         │
├─────────────────────────────────────┤
│  "Por que A7X" (valores, 4 cards)   │
├─────────────────────────────────────┤
│  "Vagas Abertas"                    │
│  → "Em breve" + mailto:careers@     │
└─────────────────────────────────────┘
```

### Calculadora ROI (`/tools/roi-calculator`)

```
┌─────────────────────────────────────┐
│  Badge + Título + Subtítulo         │
├─────────────────────────────────────┤
│  INPUTS (interativos):              │
│  ├─ Funcionários (stepper ±)        │
│  ├─ Salário médio (input numérico)  │
│  ├─ % tempo manual (range slider)   │
│  └─ Indústria (dropdown)            │
├─────────────────────────────────────┤
│  RESULTADOS (instantâneos):         │
│  ├─ Economia anual (counter)        │
│  ├─ Horas recuperadas               │
│  ├─ ROI estimado                    │
│  └─ Barras antes/depois             │
├─────────────────────────────────────┤
│  Gate: "Baixe Relatório" → email    │
└─────────────────────────────────────┘
```

---

## 5. Componentes

### Inventário Completo

```
src/components/ (45 componentes)
│
├── sections/ (8) ─────────────── SEÇÕES DA HOMEPAGE
│   ├── Hero.tsx                  Split layout: texto + ilustração
│   ├── PainPoints.tsx            6 cards de dores do cliente
│   ├── Solution.tsx              Before/After + NetworkDiagram + Timeline
│   ├── Services.tsx              5 serviços com ilustrações SVG
│   ├── Results.tsx               4 métricas com visualizações animadas
│   ├── Testimonials.tsx          3 depoimentos de clientes
│   ├── FAQ.tsx                   6 perguntas accordion
│   └── FinalCTA.tsx              CTA final com gradiente
│
├── ui/ (17) ──────────────────── COMPONENTES VISUAIS
│   ├── Button.tsx                4 variantes (primary/secondary/outline/ghost), 3 tamanhos
│   ├── Badge.tsx                 Tag/chip de seção
│   ├── Card.tsx                  Container com hover + glow opcional
│   ├── SectionHeader.tsx         Badge + título + subtítulo reutilizável
│   ├── GradientText.tsx          Texto com gradiente azul→cyan
│   ├── GridPattern.tsx           SVG grid background
│   ├── DotPattern.tsx            SVG dot background
│   ├── GradientOrb.tsx           Blob animado (cor, tamanho, duração configuráveis)
│   ├── AnimatedCounter.tsx       Counter numérico animado (prefix/suffix/decimais)
│   ├── RotatingText.tsx          Palavras ciclando com AnimatePresence
│   ├── SmartLink.tsx             Link que resolve hash cross-page
│   ├── HeroIllustration.tsx      SVG grande (550×460): 14 nodes, 25 conexões, partículas
│   ├── ServiceIllustrations.tsx  5 SVGs: ProcessDiscovery, Workflow, Document, AIAgents, Data
│   ├── NetworkDiagram.tsx        SVG (400×200): Chaos → A7X → Clarity
│   ├── WhatsAppButton.tsx        Botão flutuante com pulse (wa.me/14077188393)
│   └── ConsultationPopup.tsx     Popup modal (60s timer, sessionStorage)
│
├── forms/ (7) ────────────────── FORMULÁRIOS
│   ├── AssessmentWizard.tsx      Orquestrador: questions → lead-capture → results
│   ├── AssessmentStep.tsx        Renderiza pergunta (single/multi/range/text)
│   ├── AssessmentProgress.tsx    Barra de progresso animada
│   ├── AssessmentForm.tsx        Formulário legado (não usado)
│   ├── LeadCaptureForm.tsx       Gate: nome + email antes dos resultados
│   ├── AssessmentResults.tsx     Score + tier + categorias + recomendações + ROI
│   └── ROICalculator.tsx         Calculadora interativa com resultados instantâneos
│
├── layout/ (5) ───────────────── LAYOUT
│   ├── Header.tsx                Nav fixo + glass + mobile menu
│   ├── Footer.tsx                4 colunas + copyright
│   ├── Logo.tsx                  Logo A7X Systems
│   ├── LanguageSwitcher.tsx      Dropdown en/pt/es
│   └── MobileMenu.tsx            Menu drawer responsivo
│
├── motion/ (4) ───────────────── ANIMAÇÃO
│   ├── FadeIn.tsx                Fade + translateY, configurável delay
│   ├── SlideUp.tsx               Slide up com trigger viewport
│   ├── StaggerChildren.tsx       Container + items com delay sequencial
│   └── ScrollProgress.tsx        Barra de scroll no topo
│
├── blog/ (3) ─────────────────── BLOG
│   ├── BlogCard.tsx              Card de post (cat, tempo, título, desc, autor)
│   ├── BlogHeader.tsx            Header do post (back, meta, título, autor)
│   └── MDXComponents.tsx         Mapeamento de componentes MDX → HTML estilizado
│
└── seo/ (1) ──────────────────── SEO
    └── JsonLd.tsx                5 schemas: Organization, Service, FAQ, HowTo, Article
```

---

## 6. Sistema de Conteúdo

### i18n — 19 Namespaces

```
messages/{en,pt,es}.json
│
├── metadata          → Título do site, description, keywords
├── nav               → Links de navegação (Home, Services, About, Contact)
├── hero              → Badge, headlines, rotating words, stats, CTAs
├── painPoints        → 6 cards (título, descrição, ícone)
├── solution          → 3 steps, before/after (5+5 items)
├── services          → 5 serviços (título, descrição, ícone)
├── results           → 4 métricas (valor, suffix, label, description)
├── testimonials      → 3 depoimentos (quote, nome, role, empresa)
├── faq               → 6 Q&A pairs
├── finalCta          → Título, subtítulo, botão
├── footer            → Seções, links, copyright
├── servicesPage      → Página /services (5 serviços detalhados, 5 deliverables cada)
├── aboutPage         → Página /about (story, mission, vision, values, team)
├── contactPage       → Página /contact (título, info items)
├── blogPage          → Página /blog (título, labels)
├── careersPage       → Página /careers (por que A7X, vagas)
├── roiCalculator     → Labels e resultados da calculadora
├── assessment        → 7 perguntas + opções + resultados (maior namespace)
└── consultationPopup → Labels do popup
```

### Blog — Sistema MDX

```
content/blog/{locale}/{slug}.mdx

Frontmatter:
---
title: "Título do Post"
description: "Descrição curta"
date: "2026-02-15"
author: "A7X Team"
category: "Guide"
tags: ["AI", "SMB"]
slug: "ai-readiness-guide"
---

Processamento:
1. gray-matter     → extrai frontmatter
2. reading-time    → calcula tempo de leitura
3. MDXRemote (rsc) → renderiza MDX para React (server-side)
4. MDXComponents   → mapeia elementos para componentes estilizados

API (src/lib/blog.ts):
├── getAllPosts(locale)         → Lista todos posts ordenados por data
├── getPostBySlug(locale, slug) → Post individual com conteúdo
└── getAllSlugs(locale)         → Array de slugs (para sitemap + SSG)
```

---

## 7. Ferramentas Interativas

### Assessment Wizard (7 perguntas)

```
Engine: src/lib/assessment.ts

Perguntas:
Q1. Indústria → Healthcare, Retail, Finance, Manufacturing, Services, Tech, Other
Q2. Funcionários → 1-10, 11-50, 51-200, 201-500, 500+
Q3. Dores → Manual data entry, Document processing, Customer support,
            Reporting, Approvals, Inventory, HR tasks (multi-select)
Q4. Ferramentas → CRM, ERP, Spreadsheets, Email only, Custom software (multi)
Q5. % tempo repetitivo → Slider 10-80%
Q6. Experiência IA → None, Tried and failed, Some success, Active use
Q7. Timeline → Immediately, 1-3 months, 3-6 months, Just exploring
    └─ Condicional: Se Q6 = "failed" → "What went wrong?" (text)

Scoring:
├── 4 categorias: Process, Technology, People, Strategy
├── Algoritmo ponderado por respostas
├── Score final: 0-100
└── Tiers: Exploring (0-25), Building (26-50), Scaling (51-75), Leading (76-100)

Output:
├── AI Readiness Score (counter animado)
├── Tier com cor e descrição
├── Bar chart por categoria
├── 3 recomendações personalizadas
├── Range de ROI estimado
└── CTA: "Schedule Deep Consultation"
```

### ROI Calculator

```
Component: src/components/forms/ROICalculator.tsx

Inputs:
├── Nº funcionários em tarefas repetitivas (stepper)
├── Salário médio anual (input numérico)
├── % tempo manual (range slider 10-80%)
└── Indústria (dropdown com benchmarks)

Cálculos:
├── Custo manual = funcionários × salário × (% manual / 100)
├── Economia estimada = custo manual × efficiency factor (por indústria)
├── Horas recuperadas = funcionários × 2080h × (% manual / 100) × efficiency
└── ROI = (economia / investimento estimado) × 100

Output visual:
├── Economia anual (counter animado)
├── Horas recuperadas por ano
├── ROI estimado (%)
├── Barras antes/depois (visual)
└── Gate: "Download Report" → email modal
```

---

## 8. SEO & Performance

### JSON-LD Schemas

| Schema | Onde | Dados |
|--------|------|-------|
| OrganizationJsonLd | Homepage | Nome, URL, logo, contato |
| ServiceJsonLd | Homepage | 5 serviços com descrição |
| FAQJsonLd | Homepage | 6 perguntas e respostas |
| HowToJsonLd | Homepage | 3 steps da solução |
| ArticleJsonLd | Blog posts | Título, autor, data, publisher |

### Sitemap Dinâmico

```
src/app/sitemap.ts

Rotas estáticas (×3 locales = 24 URLs):
├── /
├── /services
├── /about
├── /contact
├── /blog
├── /careers
├── /tools/roi-calculator
└── /blog/{slug} (×3 posts × 3 locales = 9 URLs)

Total: ~33 URLs no sitemap
```

### Performance
- Tailwind CSS v4 (tree-shaking otimizado)
- `prefers-reduced-motion` → desativa animações
- SVGs inline (zero requests de imagem)
- Fontes Google com `next/font` (auto-optimized)
- MDX renderizado server-side (RSC)
- Static generation para blog posts (generateStaticParams)

---

## 9. Elementos Globais

### Header (todas as páginas)

```
┌─ Logo ─── Home · Services · About · Contact ─── 🌐 Lang ─── [Free Assessment] ─┐
└─────────────────────────── glass background, fixed top ─────────────────────────┘
```

### Footer (todas as páginas)

```
┌─────────────────────────────────────────────────────────────┐
│  A7X Systems          Services         Company     Legal    │
│  "AI-powered          Process Disc.    About Us    Privacy  │
│   process clarity"    Workflow Auto.   Contact     Terms    │
│                       Document Proc.   Careers     Cookies  │
│                       AI Agents        Blog                 │
│                       Data Integration                      │
├─────────────────────────────────────────────────────────────┤
│  © 2026 A7X Systems. All rights reserved.                   │
└─────────────────────────────────────────────────────────────┘
```

### WhatsApp Button
- Fixo bottom-right
- Ícone SVG verde com pulse animation
- Link: `wa.me/14077188393`
- Aparece com delay de 2s (slide up + fade)

### Consultation Popup
- Dispara após 60s na página
- Só aparece 1x por sessão (sessionStorage)
- Badge: "Vagas limitadas este mês"
- Form: Nome, Email, Empresa, Faixa de Receita
- Fecha: X, backdrop click, Escape

---

# PARTE 2 — PROJETO DEPARTAMENTOS POR ASSINATURA

---

## 10. Visão do Produto

### Conceito

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│   DEPARTAMENTOS POR ASSINATURA                              │
│                                                              │
│   Empresas contratam departamentos inteiros como serviço.   │
│   IA faz 80% do trabalho. Especialistas A7X garantem        │
│   os 20% que fazem a diferença.                             │
│                                                              │
│   Custo: ~77-84% menor que montar internamente.             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Modelo: AI + Human in the Loop

```
         ┌──────────────┐
         │   CLIENTE     │
         │  Aprova/Pede  │
         └──────┬───────┘
                │
                ▼
┌───────────────────────────────┐
│        PORTAL DO CLIENTE       │
│  Dashboard · Aprovações ·     │
│  Relatórios · Chat            │
└───────────────┬───────────────┘
                │
       ┌────────┴────────┐
       ▼                 ▼
┌─────────────┐   ┌─────────────┐
│  ENGINE IA  │   │ ESPECIALISTA│
│  (80%)      │   │ A7X (20%)   │
│             │   │             │
│ Gera        │   │ Revisa      │
│ Automatiza  │   │ Aprova      │
│ Analisa     │   │ Estratégia  │
│ Reporta     │   │ Relaciona   │
└─────────────┘   └─────────────┘
```

### Por que o mercado precisa disso

| Dor | Realidade | Solução A7X |
|-----|-----------|-------------|
| Montar 1 departamento | 3-6 meses + R$15-25k/mês (salários + encargos) | 48h + fração do custo |
| Turnover | Quando alguém sai, leva o conhecimento | IA retém 100% do conhecimento |
| Escalar | Contratar mais gente, treinar, integrar | Muda de plano, escala instantâneo |
| Qualidade | Depende de quem você consegue contratar | Padrão A7X + IA consistente |
| Múltiplas ferramentas | 5-10 SaaS diferentes, ninguém integra | Stack integrada por departamento |

---

## 11. Os 8 Departamentos

### Visão Geral

| # | Departamento | IA % | Starter | Growth | Scale |
|---|-------------|------|---------|--------|-------|
| 1 | Marketing | 85% | R$2.497 | R$4.997 | R$9.997 |
| 2 | Comercial (Vendas) | 75% | R$1.997 | R$3.997 | R$7.997 |
| 3 | Atendimento ao Cliente | 90% | R$1.497 | R$2.997 | R$5.497 |
| 4 | Financeiro | 80% | R$1.497 | R$2.997 | R$5.997 |
| 5 | RH | 70% | R$1.997 | R$3.497 | R$5.997 |
| 6 | TI | 65% | R$1.997 | R$4.497 | R$8.997 |
| 7 | Jurídico | 60% | R$1.997 | R$3.997 | R$7.497 |
| 8 | Operações | 75% | R$1.997 | R$3.997 | R$7.997 |

---

### 11.1 Marketing

**Automação IA: 85%**

```
IA FAZ:                              HUMANO FAZ:
├─ Análise de segmento/concorrência  ├─ Revisão estratégica final
├─ Geração de copy (anúncios, posts) ├─ Aprovação de criativos
├─ Sugestão de público-alvo          ├─ Decisões de budget
├─ Estrutura de campanhas            ├─ Tom de voz ajustado
├─ Calendário editorial              ├─ Troubleshooting complexo
├─ Relatórios e dashboards           └─ QA final
├─ A/B testing (variações)
├─ Briefing de criativos visuais
├─ Análise de métricas + insights
└─ Email marketing (copy + sequência)
```

| Tier | Preço | Entregas |
|------|-------|----------|
| **Starter** | R$2.497 | Estratégia mensal, 8 criativos, 1 landing page, calendário, relatório mensal |
| **Growth** | R$4.997 | +16 criativos, 2 LPs, Meta Ads (até R$5k), email mkt, relatório semanal, A/B testing |
| **Scale** | R$9.997 | +Criativos ilimitados, LPs ilimitadas, Meta+Google Ads (até R$20k), SEO, social media, estrategista dedicado |

**Onboarding (10 perguntas):**
Segmento → Faturamento → Ticket médio → Público-alvo → Canais atuais → Objetivo → Metas → Concorrentes → Identidade visual → Budget mídia

---

### 11.2 Comercial (Vendas)

**Automação IA: 75%**

```
IA FAZ:                              HUMANO FAZ:
├─ Prospecção e enriquecimento       ├─ Fechamento de deals
├─ Scoring/qualificação de leads     ├─ Negociação de preço
├─ Primeiro contato (email/WhatsApp) ├─ Relacionamento contas-chave
├─ Follow-up automatizado            ├─ Reuniões de apresentação
├─ Geração de propostas              ├─ Objeções complexas
├─ Transcrição/análise de calls      └─ Coaching de equipe
├─ Forecasting de pipeline
└─ Automação de CRM
```

| Tier | Preço | Entregas |
|------|-------|----------|
| **Starter** | R$1.997 | 100 contatos/mês, scripts, follow-up auto, CRM configurado, relatório mensal |
| **Growth** | R$3.997 | 300 contatos, chatbot, propostas auto, WhatsApp Business API, dashboard |
| **Scale** | R$7.997 | Prospecção ilimitada, SDR virtual, análise de calls, closer A7X dedicado |

---

### 11.3 Atendimento ao Cliente

**Automação IA: 90%**

```
IA FAZ:                              HUMANO FAZ:
├─ Respostas L1 (80% dos tickets)   ├─ Casos complexos/sensíveis
├─ Triagem e classificação           ├─ Reclamações graves
├─ Análise de sentimento             ├─ Exceções de política
├─ NPS e pesquisas                   └─ Treinamento da IA
├─ Base de conhecimento
├─ Respostas multicanal
├─ Detecção de clientes em risco
└─ Relatórios e insights
```

| Tier | Preço | Entregas |
|------|-------|----------|
| **Starter** | R$1.497 | Chatbot site + WhatsApp, FAQ, triagem, templates, relatório mensal |
| **Growth** | R$2.997 | +Multicanal (Instagram DM), sentimento, NPS, dashboard, escalação inteligente |
| **Scale** | R$5.497 | +Atendimento humano L2, análise churn, fidelização, CRM integrado, URA IA |

---

### 11.4 Financeiro

**Automação IA: 80%**

```
IA FAZ:                              HUMANO FAZ:
├─ Categorização de transações       ├─ Análise estratégica
├─ Conciliação bancária              ├─ Decisões de investimento
├─ Emissão de boletos/NF             ├─ Negociação fornecedores
├─ Projeção de fluxo de caixa        ├─ Planejamento tributário
├─ Alertas e cobranças automáticas   ├─ Reuniões de review
├─ Relatórios (DRE, Balanço)         └─ Compliance e auditoria
├─ Detecção de anomalias
└─ Dashboard em tempo real
```

| Tier | Preço | Entregas |
|------|-------|----------|
| **Starter** | R$1.497 | Contas a pagar/receber, conciliação, fluxo 30d, boletos, DRE, alertas |
| **Growth** | R$2.997 | +Fluxo 90d, dashboard, cobrança auto, rentabilidade, budget vs real |
| **Scale** | R$5.997 | +Controller dedicado, cenários IA, investimentos, relatórios investidores |

---

### 11.5 RH

**Automação IA: 70%**

```
IA FAZ:                              HUMANO FAZ:
├─ Triagem de currículos             ├─ Entrevistas finais
├─ Publicação de vagas               ├─ Decisão de contratação
├─ Agendamento de entrevistas        ├─ Mediação de conflitos
├─ Pesquisa de clima                 ├─ Coaching de gestores
├─ Relatórios de desempenho          ├─ Planejamento de carreira
├─ Onboarding automático             └─ Cultura organizacional
├─ Análise preditiva de turnover
└─ Controle de documentação
```

| Tier | Preço | Entregas |
|------|-------|----------|
| **Starter** | R$1.997 | Vagas, triagem IA, agendamento, templates, clima trimestral, banco de talentos |
| **Growth** | R$3.497 | +Entrevista IA, onboarding 30-60-90, avaliação, benefícios, treinamentos |
| **Scale** | R$5.997 | +BP dedicado, cargos e salários, retenção, turnover preditivo, employer branding |

---

### 11.6 TI

**Automação IA: 65%**

```
IA FAZ:                              HUMANO FAZ:
├─ Resolução de tickets L1           ├─ Troubleshooting complexo
├─ Monitoramento e alertas           ├─ Decisões de arquitetura
├─ Gestão de backups                 ├─ Desenvolvimento de código
├─ Detecção de anomalias             ├─ Segurança avançada
├─ Documentação técnica              ├─ Integrações complexas
├─ Inventário e licenças             └─ Planejamento estratégico
└─ Chatbot de suporte L1
```

| Tier | Preço | Entregas |
|------|-------|----------|
| **Starter** | R$1.997 | Suporte ticket, licenças, backup, monitoramento básico, segurança básica |
| **Growth** | R$4.497 | +Helpdesk IA, 24/7 monitoring, cloud, CI/CD, VPN, relatório segurança |
| **Scale** | R$8.997 | +CTO as a Service, dev sob demanda, pentest, disaster recovery, compliance |

---

### 11.7 Jurídico

**Automação IA: 60%**

```
IA FAZ:                              HUMANO FAZ:
├─ Análise de contratos (riscos)     ├─ Parecer jurídico
├─ Geração de templates              ├─ Representação legal
├─ Alertas e vencimentos             ├─ Negociação de contratos
├─ Pesquisa de jurisprudência        ├─ Estratégia contenciosa
├─ Checklist de compliance           └─ Contencioso complexo
├─ FAQ e orientações básicas
└─ Monitoramento de processos
```

| Tier | Preço | Entregas |
|------|-------|----------|
| **Starter** | R$1.997 | Revisão de contratos IA, templates, alertas, LGPD checklist, FAQ jurídico |
| **Growth** | R$3.997 | +Contratos sob medida, contencioso, due diligence, políticas, 4h/mês advogado |
| **Scale** | R$7.497 | +Advogado dedicado, compliance avançado, governança, consultoria ilimitada |

---

### 11.8 Operações

**Automação IA: 75%**

```
IA FAZ:                              HUMANO FAZ:
├─ Mapeamento de processos           ├─ Decisões de redesign
├─ Automação de workflows            ├─ Gestão de mudança
├─ SOPs documentados                 ├─ Negociação fornecedores
├─ Dashboard operacional             ├─ Estratégia operacional
├─ Alertas de gargalos               └─ Projetos complexos
├─ Sugestões de otimização
└─ Simulação de cenários
```

| Tier | Preço | Entregas |
|------|-------|----------|
| **Starter** | R$1.997 | Mapeamento top 5, automação workflows, SOPs, dashboard, alertas |
| **Growth** | R$3.997 | +Mapeamento completo, integrações, fornecedores, estoque, KPIs, PMO básico |
| **Scale** | R$7.997 | +COO as a Service, supply chain, Lean/Six Sigma, simulação, integração total |

---

## 12. Jornada do Cliente

### Funil Completo

```
DESCOBERTA                    DIAGNÓSTICO                DECISÃO                     ATIVAÇÃO
─────────────────────────────────────────────────────────────────────────────────────────────────

Homepage A7X                  /subscribe/marketing        Escolhe tier               Portal ativado
   │                              │                          │                          │
   ├─ Vê seções                   ├─ Hero do depto           ├─ Compara features        ├─ Dashboard
   ├─ Assessment                  ├─ Features detalhadas     ├─ Vê preço                ├─ Kick-off call
   ├─ ROI Calculator              ├─ Onboarding wizard       ├─ Checkout (Stripe)       ├─ 1ª entrega (7d)
   └─ Blog posts                  ├─ Preview estratégia      │  ou "Falar consultor"    └─ Ciclo mensal
                                  └─ Pricing table           └─ Assina                      │
                                                                                            ▼
                                                                                    RETENÇÃO
                                                                                    ├─ Relatórios
                                                                                    ├─ Aprovações
                                                                                    ├─ Upsell deptos
                                                                                    └─ NPS mensal
```

### Portal do Cliente (futuro)

```
┌─────────────────────────────────────────────────────────────┐
│  PORTAL DO CLIENTE                                          │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Dashboard                                            │   │
│  │  ├─ KPIs por departamento contratado                  │   │
│  │  ├─ Entregas do mês (progresso)                       │   │
│  │  └─ Próximas atividades                               │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Aprovações Pendentes                                 │   │
│  │  ├─ Criativos gerados pela IA                         │   │
│  │  ├─ Estratégias para review                           │   │
│  │  └─ Propostas comerciais                              │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Meus Departamentos                                   │   │
│  │  ├─ Marketing (Growth) ✓ ativo                        │   │
│  │  ├─ Comercial (Starter) ✓ ativo                       │   │
│  │  ├─ + Adicionar departamento                          │   │
│  │  └─ Upgrade / Downgrade                               │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Relatórios                                           │   │
│  │  ├─ Semanal · Mensal                                  │   │
│  │  └─ ROI acumulado                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Comunicação                                          │   │
│  │  ├─ Chat com equipe A7X                               │   │
│  │  ├─ Tickets de suporte                                │   │
│  │  └─ Histórico de calls                                │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Conta                                                │   │
│  │  ├─ Faturamento (Stripe)                              │   │
│  │  ├─ Contratos                                         │   │
│  │  └─ Configurações                                     │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 13. Modelo de Pricing

### Bundles (Desconto por Volume)

| Bundle | Departamentos | Desconto |
|--------|:------------:|:--------:|
| Duo | 2 | 10% |
| Trio | 3 | 15% |
| Quad | 4 | 20% |
| Enterprise | 5+ | 25% + negociação |

### Plano Anual
- 2 meses grátis (~17% desconto)

### Comparação com Mercado

```
CONTRATAR INTERNAMENTE (4 departamentos):
├── Marketing (3 pessoas): ~R$18-25k/mês
├── Comercial (3 pessoas): ~R$15-22k/mês
├── Financeiro (2 pessoas): ~R$10-15k/mês
├── RH (2 pessoas): ~R$10-15k/mês
├── Ferramentas SaaS: ~R$3-5k/mês
└── TOTAL: ~R$56-82k/mês

A7X (4 deptos Growth + Quad discount):
├── Marketing: R$4.997
├── Comercial: R$3.997
├── Financeiro: R$2.997
├── RH: R$3.497
├── Subtotal: R$15.488
├── Desconto Quad (-20%): -R$3.098
└── TOTAL: ~R$12.390/mês

ECONOMIA: 78-85%
```

---

## 14. Arquitetura Técnica (Assinaturas)

### Novas Rotas

```
/subscribe                          → Hub: todos departamentos
/subscribe/[department]             → Detalhe: marketing, sales, finance, etc.
/portal (futuro)                    → Área logada do cliente
```

### Novos Componentes

```
src/components/subscribe/
├── DepartmentHub.tsx               → Grid de departamentos no hub
├── DepartmentHero.tsx              → Header visual por departamento
├── DepartmentFeatures.tsx          → Lista de features/entregas
├── PricingTable.tsx                → Tabela comparativa 3 tiers
├── PricingCard.tsx                 → Card individual de tier
├── OnboardingWizard.tsx            → Wizard de diagnóstico (por depto)
├── StrategyPreview.tsx             → Preview da estratégia gerada
├── DepartmentComparison.tsx        → Comparação entre tiers (toggle)
├── DepartmentFAQ.tsx               → FAQ específico do departamento
├── BundleCalculator.tsx            → Calculadora de bundles
└── SubscribeCTA.tsx                → CTA de contratação
```

### Novos Dados

```
src/lib/
├── departments.ts                  → Dados dos 8 departamentos
├── onboarding-questions.ts         → Perguntas por departamento
└── strategy-generator.ts           → Engine de geração de estratégia por IA
```

### Novos Namespaces i18n

```
messages/{en,pt,es}.json
├── subscribePage                   → Hub de assinaturas
├── departmentMarketing             → Conteúdo do dept. Marketing
├── departmentSales                 → Conteúdo do dept. Comercial
├── departmentSupport               → Conteúdo do dept. Atendimento
├── departmentFinance               → Conteúdo do dept. Financeiro
├── departmentHR                    → Conteúdo do dept. RH
├── departmentIT                    → Conteúdo do dept. TI
├── departmentLegal                 → Conteúdo do dept. Jurídico
└── departmentOperations            → Conteúdo do dept. Operações
```

### Integração com AIOS

```
OPÇÃO A — API REST (ideal):
  Formulário → Next.js API Route → AIOS API REST
  Retorno: confirmação + estratégia processada

OPÇÃO B — Webhook (n8n/Zapier):
  Formulário → Next.js API Route → Webhook → AIOS
  Retorno: assíncrono

OPÇÃO C — Email (MVP):
  Formulário → Next.js API Route → Email estruturado → Equipe
  Retorno: manual
```

---

# PARTE 3 — VISÃO UNIFICADA

---

## 15. Mapa do Site Completo

```
a7xsystems.com
│
├── / ──────────────────────────── HOMEPAGE
│   ├── Hero (ilustração + rotating text)
│   ├── Pain Points (6 cards)
│   ├── Solution (before/after + diagram + timeline)
│   ├── Services (5 cards com SVGs)
│   ├── Results (4 métricas animadas)
│   ├── Testimonials (3 quotes)
│   ├── FAQ (6 items)
│   └── Final CTA
│
├── /services ──────────────────── SERVIÇOS (consultoria)
│   └── 5 serviços detalhados com deliverables
│
├── /about ─────────────────────── SOBRE
│   └── Story, mission, vision, values, team
│
├── /contact ───────────────────── CONTATO / ASSESSMENT
│   └── Assessment Wizard (7 perguntas → score → recomendações)
│
├── /blog ──────────────────────── BLOG
│   ├── Listagem de posts
│   └── /blog/[slug] → Post individual (MDX)
│
├── /careers ───────────────────── CARREIRAS
│   └── Valores + vagas (em breve)
│
├── /tools ─────────────────────── FERRAMENTAS
│   └── /tools/roi-calculator → Calculadora de ROI interativa
│
├── /subscribe ─────────────────── 🆕 DEPARTAMENTOS POR ASSINATURA
│   ├── Hub (8 departamentos)
│   ├── /subscribe/marketing
│   ├── /subscribe/sales
│   ├── /subscribe/support
│   ├── /subscribe/finance
│   ├── /subscribe/hr
│   ├── /subscribe/it
│   ├── /subscribe/legal
│   └── /subscribe/operations
│
└── /portal (futuro) ──────────── 🆕 ÁREA DO CLIENTE
    ├── Dashboard
    ├── Aprovações
    ├── Relatórios
    ├── Comunicação
    └── Conta

ELEMENTOS GLOBAIS (todas as páginas):
├── Header (nav + lang + CTA)
├── Footer (4 colunas)
├── WhatsApp Button (fixo)
└── Consultation Popup (60s)
```

### Navegação Atualizada

```
HEADER:
Home · Services · Subscribe 🆕 · About · Contact · [Lang] · [CTA]

FOOTER:
Services              Subscribe 🆕         Company        Legal
├─ Process Discovery  ├─ Marketing         ├─ About       ├─ Privacy
├─ Workflow Auto.     ├─ Sales             ├─ Contact     ├─ Terms
├─ Document Proc.     ├─ Support           ├─ Careers     └─ Cookies
├─ AI Agents          ├─ Finance           └─ Blog
└─ Data Integration   ├─ HR
                      ├─ IT
                      ├─ Legal
                      └─ Operations
```

---

## 16. Árvore de Componentes

```
TOTAL: ~57 componentes (45 atuais + 12 novos)

src/components/
│
├── sections/ (8) ────── Homepage sections
├── ui/ (17) ─────────── Visual primitives
├── forms/ (7) ───────── Form components
├── layout/ (5) ──────── Header, Footer, etc.
├── motion/ (4) ──────── Animation wrappers
├── blog/ (3) ────────── Blog system
├── seo/ (1) ─────────── JSON-LD schemas
│
└── subscribe/ (12) ──── 🆕 Subscription module
    ├── DepartmentHub.tsx
    ├── DepartmentHero.tsx
    ├── DepartmentFeatures.tsx
    ├── PricingTable.tsx
    ├── PricingCard.tsx
    ├── OnboardingWizard.tsx
    ├── StrategyPreview.tsx
    ├── DepartmentComparison.tsx
    ├── DepartmentFAQ.tsx
    ├── BundleCalculator.tsx
    ├── SubscribeCTA.tsx
    └── DepartmentIllustration.tsx
```

---

## 17. Stack Tecnológico Completo

### Atual (em produção)

| Camada | Tech | Status |
|--------|------|:------:|
| Framework | Next.js 16.1.6 | ✅ |
| UI | React 19.2.3 | ✅ |
| Language | TypeScript 5 | ✅ |
| Styling | Tailwind CSS 4 | ✅ |
| Animation | Framer Motion 12 | ✅ |
| i18n | next-intl 4.8.3 | ✅ |
| Blog | next-mdx-remote + gray-matter + reading-time | ✅ |
| Utils | clsx + tailwind-merge | ✅ |

### Necessário para Assinaturas

| Camada | Tech | Quando |
|--------|------|--------|
| Payments | Stripe (checkout + subscriptions) | Fase 2 |
| Auth | NextAuth.js ou Clerk | Fase 2 (portal) |
| Database | Supabase ou PlanetScale | Fase 2 (portal) |
| Email | Resend ou SendGrid | Fase 1 (notificações) |
| AI API | Claude API ou OpenAI | Fase 1 (strategy preview) |
| Automation | n8n (self-hosted) | Fase 2 |
| Analytics | Plausible ou PostHog | Fase 1 |

### Necessário para Entregas aos Clientes

| Função | Tech | Quando |
|--------|------|--------|
| Ad Management | Meta Marketing API + Google Ads API | Fase 2 |
| CRM | Pipedrive/HubSpot API | Fase 2 |
| Social Media | Buffer/Later API | Fase 2 |
| Email Marketing | Resend/SendGrid | Fase 2 |
| Image Generation | DALL-E 3 / Midjourney API | Fase 2 |
| WhatsApp | WhatsApp Business API | Fase 2 |
| Voice/Calls | ElevenLabs (futuro) | Fase 3 |

---

## 18. Roadmap de Evolução

```
FASE 1 — SITE + SUBSCRIBE MVP (4-6 semanas)
══════════════════════════════════════════════
├── Site atual (✅ COMPLETO)
│   ├── Homepage com 8 seções
│   ├── Services, About, Contact
│   ├── Blog (9 posts)
│   ├── Careers
│   ├── ROI Calculator
│   ├── Assessment Wizard
│   ├── WhatsApp + Popup
│   └── i18n (en/pt/es)
│
└── Subscribe Module (A FAZER)
    ├── Hub /subscribe com 8 departamentos
    ├── Páginas de Marketing + Comercial (completas)
    ├── Outras 6 páginas (com "em breve")
    ├── Onboarding wizard por departamento
    ├── Preview de estratégia (IA ou template)
    ├── CTA: "Falar com consultor"
    ├── Notificação por email (Resend)
    ├── i18n completo
    └── SEO + sitemap atualizado

FASE 2 — PLATAFORMA (2-3 meses)
════════════════════════════════════
├── Todos os 8 departamentos ativos
├── Checkout Stripe (assinatura recorrente)
├── Portal básico do cliente
│   ├── Auth (login/cadastro)
│   ├── Dashboard
│   ├── Aprovações
│   └── Relatórios
├── Geração de estratégia robusta (Claude API)
├── Integração AIOS
├── Bundle calculator
└── Analytics (Plausible/PostHog)

FASE 3 — OPERAÇÃO (3-6 meses)
════════════════════════════════
├── Portal completo
│   ├── Chat com equipe
│   ├── Tickets
│   └── Histórico
├── Integrações externas
│   ├── Meta Ads API
│   ├── Google Ads API
│   ├── CRM
│   └── WhatsApp Business
├── Geração de criativos (DALL-E/Midjourney)
├── Email marketing automatizado
└── Mobile-responsive portal

FASE 4 — ESCALA (6-12 meses)
═════════════════════════════════
├── White-label (revenda)
├── API pública
├── IA proprietária (fine-tuned nos dados A7X)
├── App mobile
├── Expansion internacional (USD/EUR)
└── Marketplace de add-ons
```

---

## 19. KPIs & Métricas

### Site (já ativo)

| Métrica | O que medir | Ferramenta |
|---------|------------|-----------|
| Visitantes/mês | Tráfego orgânico e pago | Analytics |
| Assessment completados | Leads qualificados | Internal tracking |
| ROI Calculator usado | Engajamento com ferramenta | Internal tracking |
| Blog views | Conteúdo que gera tráfego | Analytics |
| WhatsApp clicks | Conversão direta | UTM tracking |
| Popup conversão | Form fills / impressions | Internal |
| Tempo na página | Engajamento | Analytics |
| Bounce rate | Qualidade do tráfego | Analytics |

### Subscribe (a implementar)

| Métrica | Meta Fase 1 | Meta Fase 2 | Meta Fase 3 |
|---------|:-----------:|:-----------:|:-----------:|
| Leads/mês (subscribe) | 50 | 200 | 500 |
| Conversão lead→cliente | 10% | 12% | 15% |
| Clientes ativos | 5 | 25 | 100 |
| MRR | R$25k | R$150k | R$500k |
| Churn mensal | <10% | <7% | <5% |
| NPS | >40 | >50 | >60 |
| Ticket médio | R$3.5k | R$4.5k | R$5.5k |
| Deptos/cliente | 1.2 | 1.8 | 2.5 |
| Tempo de onboarding | <48h | <24h | <12h |
| % entregas por IA | >75% | >80% | >85% |
| Margem bruta | >60% | >65% | >70% |

---

## Resumo Executivo

```
┌───────────────────────────────────────────────────────────────┐
│                                                                │
│  A7X SYSTEMS — 2 PILARES DE RECEITA                           │
│                                                                │
│  ┌─────────────────────┐    ┌─────────────────────────────┐   │
│  │  PILAR 1             │    │  PILAR 2                     │   │
│  │  CONSULTORIA         │    │  DEPARTAMENTOS POR           │   │
│  │                      │    │  ASSINATURA (MRR)            │   │
│  │  ├─ Process Discovery│    │                              │   │
│  │  ├─ Workflow Auto.   │    │  ├─ Marketing    R$2.5-10k  │   │
│  │  ├─ Document Proc.   │    │  ├─ Comercial    R$2-8k     │   │
│  │  ├─ AI Agents        │    │  ├─ Atendimento  R$1.5-5.5k │   │
│  │  └─ Data Integration │    │  ├─ Financeiro   R$1.5-6k   │   │
│  │                      │    │  ├─ RH           R$2-6k     │   │
│  │  Receita: por projeto│    │  ├─ TI           R$2-9k     │   │
│  │  Modelo: one-time    │    │  ├─ Jurídico     R$2-7.5k   │   │
│  │                      │    │  └─ Operações    R$2-8k     │   │
│  │                      │    │                              │   │
│  │                      │    │  Receita: mensal recorrente  │   │
│  │                      │    │  Modelo: SaaS + serviço      │   │
│  └─────────────────────┘    └─────────────────────────────┘   │
│                                                                │
│  SITE: a7xsystems.com                                         │
│  ├─ 10+ páginas (3 idiomas = 30+ rotas)                       │
│  ├─ Blog (9 posts, MDX)                                       │
│  ├─ Assessment Wizard (qualificação de leads)                  │
│  ├─ ROI Calculator (lead magnet)                               │
│  ├─ Subscribe Module (8 departamentos)                         │
│  └─ Portal do Cliente (futuro)                                 │
│                                                                │
│  STACK: Next.js 16 · React 19 · TypeScript · Tailwind 4 ·    │
│         Framer Motion · next-intl · MDX · Stripe (futuro)     │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

---

*A7X Systems — Blueprint Completo v1.0*
*Fevereiro 2026*
