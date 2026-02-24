# A7X Systems — Departamentos por Assinatura
## Blueprint Estratégico v1.0

> **Conceito:** Empresas contratam departamentos inteiros como serviço, operados por IA + supervisão humana especializada. Em vez de contratar 5-10 funcionários para um departamento, o cliente assina a A7X e recebe um departamento funcional, escalável e inteligente.

---

## Índice

1. [Visão Geral do Modelo](#1-visão-geral-do-modelo)
2. [Departamentos Disponíveis](#2-departamentos-disponíveis)
3. [Departamento de Marketing](#3-departamento-de-marketing)
4. [Departamento Comercial (Vendas)](#4-departamento-comercial-vendas)
5. [Departamento Financeiro](#5-departamento-financeiro)
6. [Departamento de RH](#6-departamento-de-rh)
7. [Departamento de TI](#7-departamento-de-ti)
8. [Departamento de Atendimento ao Cliente](#8-departamento-de-atendimento-ao-cliente)
9. [Departamento Jurídico](#9-departamento-jurídico)
10. [Departamento de Operações](#10-departamento-de-operações)
11. [Jornada do Cliente](#11-jornada-do-cliente)
12. [Arquitetura Técnica](#12-arquitetura-técnica)
13. [Modelo de Pricing](#13-modelo-de-pricing)
14. [Roadmap de Lançamento](#14-roadmap-de-lançamento)
15. [Riscos e Mitigações](#15-riscos-e-mitigações)
16. [Métricas de Sucesso](#16-métricas-de-sucesso)

---

## 1. Visão Geral do Modelo

### Proposta de Valor

```
Contrate um departamento inteiro por uma fração do custo.
IA faz 80% do trabalho. Especialistas A7X garantem os 20% que fazem a diferença.
```

### Por que funciona

| Problema do mercado | Solução A7X |
|---------------------|-------------|
| Contratar 1 analista de marketing custa R$4-8k/mês + encargos | Departamento completo por preço similar |
| Montar equipe de RH leva meses | Departamento funcional em 48h |
| PMEs não têm budget para departamentos completos | Acesso a capacidade enterprise por assinatura |
| Turnover destrói processos | IA não pede demissão — conhecimento nunca se perde |
| Escalar departamentos é lento e caro | Scale up/down instantâneo mudando de plano |

### Modelo Operacional

```
┌─────────────────────────────────────────────────┐
│                  CLIENTE                         │
│  Preenche onboarding → Recebe estratégia →      │
│  Aprova → Departamento ativado em 48h           │
└──────────────────────┬──────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│              PORTAL DO CLIENTE                   │
│  Dashboard · Aprovações · Relatórios · Chat     │
└──────────────────────┬──────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│                AIOS (Backend)                    │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ Engine IA│  │Automações│  │Integrações│      │
│  │ (Claude/ │  │ (n8n/    │  │ (APIs     │      │
│  │  OpenAI) │  │  Zapier) │  │  externas)│      │
│  └──────────┘  └──────────┘  └──────────┘      │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │        Especialistas A7X (Human Loop)     │   │
│  │   Revisão · QA · Decisões estratégicas    │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

### Diferencial Competitivo

1. **Não é agência** — É um departamento sob demanda com tecnologia proprietária
2. **Não é só ferramenta SaaS** — Tem inteligência humana no loop
3. **Não é freelancer** — É estruturado, previsível e escalável
4. **AI-first** — Custo operacional 60-70% menor que modelo tradicional, repassado ao cliente

---

## 2. Departamentos Disponíveis

| # | Departamento | Automação IA | Prioridade de Lançamento | Complexidade |
|---|-------------|-------------|-------------------------|-------------|
| 1 | **Marketing** | 85% | 🟢 Fase 1 — Lançamento | Média |
| 2 | **Comercial (Vendas)** | 75% | 🟢 Fase 1 — Lançamento | Média |
| 3 | **Atendimento ao Cliente** | 90% | 🟡 Fase 2 | Baixa |
| 4 | **Financeiro** | 80% | 🟡 Fase 2 | Alta |
| 5 | **RH** | 70% | 🟡 Fase 2 | Média |
| 6 | **TI** | 65% | 🔴 Fase 3 | Alta |
| 7 | **Jurídico** | 60% | 🔴 Fase 3 | Alta |
| 8 | **Operações** | 75% | 🔴 Fase 3 | Alta |

---

## 3. Departamento de Marketing

> **Headline:** "Seu departamento de marketing completo — operado por IA, supervisionado por estrategistas."

### Onboarding (Formulário Inteligente)

O cliente responde um wizard de 8-10 perguntas:

| # | Pergunta | Tipo | Por que coletamos |
|---|----------|------|-------------------|
| 1 | Segmento/indústria | Select | Define tom, referências, concorrentes |
| 2 | Faturamento mensal atual | Range | Dimensiona budget de mídia sugerido |
| 3 | Ticket médio do produto/serviço | Input numérico | Calcula CAC e ROI |
| 4 | Público-alvo principal | Multi-select + texto | Define personas |
| 5 | Canais atuais (Instagram, Google, etc.) | Multi-select | Mapeia presença atual |
| 6 | Objetivo principal (leads, vendas, branding) | Select | Define KPIs |
| 7 | Resultados buscados (meta mensal) | Input | Calibra expectativas |
| 8 | Concorrentes diretos (URLs) | Input | Análise competitiva por IA |
| 9 | Possui identidade visual? | Sim/Não + upload | Define se precisamos criar ou seguir |
| 10 | Budget mensal para mídia paga | Range | Dimensiona escopo de tráfego |

### Entregas por Tier

#### Starter — R$2.497/mês
*Para quem está começando ou tem budget limitado*

- Planejamento estratégico mensal (gerado por IA, revisado por estrategista)
- 8 criativos para Instagram/Facebook por mês (copy + briefing visual)
- 1 landing page de alta conversão
- Calendário editorial mensal
- Relatório mensal de performance
- Suporte via portal (resposta em 24h)

#### Growth — R$4.997/mês
*Para quem quer acelerar resultados*

- Tudo do Starter +
- 16 criativos por mês (Instagram + Facebook + Stories)
- 2 landing pages por mês
- Gestão de tráfego pago (Meta Ads) — até R$5k de budget
- E-mail marketing (4 campanhas/mês)
- Relatório semanal + call mensal de 30min
- A/B testing de criativos e landing pages
- Suporte prioritário (resposta em 4h)

#### Scale — R$9.997/mês
*Para quem quer dominar o mercado*

- Tudo do Growth +
- Criativos ilimitados (fair use)
- Landing pages ilimitadas (fair use)
- Gestão de tráfego: Meta Ads + Google Ads — até R$20k de budget
- SEO básico (otimização mensal de conteúdo)
- Gestão de redes sociais (posts + respostas)
- Estrategista dedicado
- Relatório semanal + call semanal de 30min
- Dashboard em tempo real

### O que a IA faz vs. Humano

```
IA AUTOMATIZA (80%):                    HUMANO GARANTE (20%):
├─ Análise de segmento/concorrência     ├─ Revisão estratégica
├─ Geração de copy (anúncios, posts)    ├─ Aprovação de criativos
├─ Sugestão de público-alvo             ├─ Decisões de budget
├─ Estrutura de campanhas               ├─ Relacionamento com cliente
├─ Calendário editorial                 ├─ Ajustes de tom de voz
├─ Relatórios e dashboards              ├─ Troubleshooting complexo
├─ A/B testing (variações)              └─ QA final
├─ Briefing de criativos visuais
├─ Análise de métricas + insights
└─ Email marketing (copy + sequência)
```

### Stack Técnico de Marketing

| Função | Ferramenta | Automação |
|--------|-----------|-----------|
| Copy de anúncios | Claude API / OpenAI | Automático |
| Imagens de criativos | Midjourney API / DALL-E 3 | Semi-automático (curadoria) |
| Landing pages | Templates A7X + conteúdo IA | Automático (aprovação do cliente) |
| Meta Ads | Meta Marketing API | Semi-automático (IA sugere, humano aprova) |
| Google Ads | Google Ads API | Semi-automático |
| Email marketing | Resend / SendGrid + templates | Automático |
| Relatórios | Dados das APIs + IA para insights | Automático |
| Social media | Buffer/Later API + conteúdo IA | Semi-automático |

---

## 4. Departamento Comercial (Vendas)

> **Headline:** "Máquina de vendas que não dorme — prospecção, qualificação e follow-up por IA."

### Onboarding

| # | Pergunta | Por que |
|---|----------|---------|
| 1 | O que você vende? (produto/serviço) | Define abordagem |
| 2 | Ticket médio | Calcula pipeline |
| 3 | Ciclo de venda (dias) | Define cadência de follow-up |
| 4 | Canal de aquisição atual | Mapeia fonte de leads |
| 5 | CRM atual (se tem) | Define integração |
| 6 | Meta mensal de vendas | Calibra esforço |
| 7 | Perfil do cliente ideal (ICP) | Define prospecção |
| 8 | Objeções mais comuns | Treina IA de resposta |

### Entregas por Tier

#### Starter — R$1.997/mês
- Prospecção ativa por IA (100 contatos qualificados/mês)
- Scripts de vendas personalizados (abordagem, follow-up, objeções)
- Sequência de follow-up automatizada (email + WhatsApp)
- CRM configurado e operando (Pipedrive/HubSpot free)
- Relatório mensal de pipeline
- Qualificação de leads por IA (scoring)

#### Growth — R$3.997/mês
- Tudo do Starter +
- 300 contatos qualificados/mês
- Chatbot de qualificação no site
- Automação de propostas (templates + dados do lead)
- Integração com WhatsApp Business API
- Dashboard de pipeline em tempo real
- Call semanal de estratégia comercial

#### Scale — R$7.997/mês
- Tudo do Growth +
- Prospecção ilimitada (fair use)
- SDR virtual (IA faz primeiro contato e agenda reunião)
- Análise de ligações/calls por IA (transcrição + insights)
- Treinamento contínuo de equipe de vendas
- Closer dedicado A7X para deals estratégicos
- Integração completa CRM ↔ Marketing ↔ Financeiro

### O que a IA faz

```
IA AUTOMATIZA (75%):                    HUMANO GARANTE (25%):
├─ Prospecção e enriquecimento de dados  ├─ Fechamento de deals complexos
├─ Scoring e qualificação de leads       ├─ Negociação de preço
├─ Primeiro contato (email/WhatsApp)     ├─ Relacionamento com contas-chave
├─ Follow-up automatizado                ├─ Estratégia comercial
├─ Geração de propostas                  ├─ Reuniões de apresentação
├─ Transcrição e análise de calls        ├─ Gestão de objeções complexas
├─ Previsão de pipeline (forecasting)    └─ Coaching de equipe
├─ Relatórios de vendas
└─ Automação de CRM
```

---

## 5. Departamento Financeiro

> **Headline:** "Seu CFO digital — contas a pagar, receber, fluxo de caixa e relatórios, tudo automatizado."

### Onboarding

| # | Pergunta | Por que |
|---|----------|---------|
| 1 | Regime tributário (Simples, Lucro Presumido, Real) | Define complexidade fiscal |
| 2 | Faturamento mensal médio | Dimensiona volume |
| 3 | Número de clientes/fornecedores ativos | Volume de transações |
| 4 | Software contábil atual | Integração |
| 5 | Banco(s) utilizado(s) | Conciliação bancária |
| 6 | Tem contador externo? | Define divisão de responsabilidades |
| 7 | Maiores dores financeiras | Prioriza entregas |

### Entregas por Tier

#### Starter — R$1.497/mês
- Contas a pagar e receber organizadas
- Conciliação bancária automatizada
- Fluxo de caixa semanal (projeção 30 dias)
- Emissão de boletos/faturas
- Relatório financeiro mensal (DRE simplificado)
- Alertas de vencimento (pagamentos e recebimentos)

#### Growth — R$2.997/mês
- Tudo do Starter +
- Projeção de fluxo de caixa 90 dias
- Dashboard financeiro em tempo real
- Gestão de inadimplência (cobrança automatizada)
- Relatório de rentabilidade por produto/serviço
- Preparação de documentos para contador
- Budget vs. Realizado mensal
- Call mensal de review financeiro

#### Scale — R$5.997/mês
- Tudo do Growth +
- Controller financeiro dedicado A7X
- Análise de cenários e projeções por IA
- Gestão de investimentos e aplicações
- Relatórios para investidores/sócios
- Integração completa com departamento comercial (comissões, metas)
- Planejamento tributário assistido
- Call semanal de review

### O que a IA faz

```
IA AUTOMATIZA (80%):                    HUMANO GARANTE (20%):
├─ Categorização de transações           ├─ Análise estratégica
├─ Conciliação bancária                  ├─ Decisões de investimento
├─ Emissão de boletos/NF                 ├─ Negociação com fornecedores
├─ Projeção de fluxo de caixa            ├─ Planejamento tributário
├─ Alertas e cobranças automáticas       ├─ Reuniões de review
├─ Relatórios (DRE, Balanço)             └─ Compliance e auditoria
├─ Detecção de anomalias
└─ Dashboard em tempo real
```

---

## 6. Departamento de RH

> **Headline:** "Recrute, onboarde e gerencie talentos com IA — sem montar uma equipe de RH."

### Entregas por Tier

#### Starter — R$1.997/mês
- Publicação de vagas em plataformas (LinkedIn, Indeed, etc.)
- Triagem de currículos por IA (fit cultural + técnico)
- Agendamento automático de entrevistas
- Templates de contrato e onboarding
- Pesquisa de clima (trimestral)
- Banco de talentos organizado

#### Growth — R$3.497/mês
- Tudo do Starter +
- Entrevistas iniciais por IA (chatbot + scoring)
- Programa de onboarding estruturado (30-60-90 dias)
- Avaliação de desempenho (templates + coleta + relatório)
- Gestão de benefícios (controle e comparação)
- Treinamentos sob demanda (curadoria de conteúdo por IA)
- Pesquisa de clima mensal + plano de ação

#### Scale — R$5.997/mês
- Tudo do Growth +
- BP (Business Partner) de RH dedicado
- Plano de cargos e salários
- Programa de retenção de talentos
- Análise preditiva de turnover
- Employer branding (conteúdo + presença em redes)
- People analytics dashboard
- Gestão de conflitos e mediação

### O que a IA faz

```
IA AUTOMATIZA (70%):                    HUMANO GARANTE (30%):
├─ Triagem de currículos                 ├─ Entrevistas finais
├─ Publicação de vagas                   ├─ Decisão de contratação
├─ Agendamento de entrevistas            ├─ Mediação de conflitos
├─ Pesquisa de clima                     ├─ Coaching de gestores
├─ Relatórios de desempenho              ├─ Planejamento de carreira
├─ Onboarding automático                 ├─ Cultura organizacional
├─ Análise preditiva de turnover         └─ Feedback sensível
└─ Controle de documentação
```

---

## 7. Departamento de TI

> **Headline:** "Infraestrutura, suporte e desenvolvimento sem contratar uma equipe de TI."

### Entregas por Tier

#### Starter — R$1.997/mês
- Suporte técnico por ticket (resposta em 4h)
- Gestão de licenças e softwares
- Backup automatizado (dados críticos)
- Monitoramento básico de infraestrutura
- Segurança: antivírus, firewall básico, política de senhas
- Inventário de equipamentos

#### Growth — R$4.497/mês
- Tudo do Starter +
- Helpdesk com chatbot IA (resolve 60%+ dos tickets L1)
- Monitoramento 24/7 com alertas
- Gestão de cloud (AWS/Azure/GCP)
- Automação de deploys (CI/CD básico)
- VPN e acesso remoto seguro
- Relatório mensal de segurança
- Suporte prioritário (resposta em 1h)

#### Scale — R$8.997/mês
- Tudo do Growth +
- CTO as a Service (decisões técnicas estratégicas)
- Desenvolvimento sob demanda (small features/integrações)
- Cybersecurity avançada (pentest trimestral, SOC básico)
- Disaster recovery plan
- Otimização de custos cloud
- Arquitetura de soluções
- Compliance (LGPD, ISO 27001 básico)

### O que a IA faz

```
IA AUTOMATIZA (65%):                    HUMANO GARANTE (35%):
├─ Resolução de tickets L1               ├─ Troubleshooting complexo
├─ Monitoramento e alertas               ├─ Decisões de arquitetura
├─ Gestão de backups                     ├─ Desenvolvimento de código
├─ Detecção de anomalias                 ├─ Segurança avançada
├─ Documentação técnica                  ├─ Integrações complexas
├─ Inventário e licenças                 ├─ Gestão de fornecedores
└─ Chatbot de suporte L1                 └─ Planejamento estratégico
```

---

## 8. Departamento de Atendimento ao Cliente

> **Headline:** "Atendimento 24/7 inteligente — seus clientes nunca esperam, sua equipe nunca fica sobrecarregada."

### Entregas por Tier

#### Starter — R$1.497/mês
- Chatbot IA no site (treinado com FAQ e dados do negócio)
- Atendimento WhatsApp automatizado
- Base de conhecimento (FAQ inteligente)
- Triagem e roteamento de tickets
- Respostas prontas para cenários comuns
- Relatório mensal de atendimento

#### Growth — R$2.997/mês
- Tudo do Starter +
- Chatbot multicanal (site + WhatsApp + Instagram DM)
- Análise de sentimento em tempo real
- Escalação inteligente (IA resolve L1, humano L2+)
- NPS automatizado + análise por IA
- Templates de resposta personalizados
- Dashboard de métricas (tempo de resposta, CSAT, resolução)

#### Scale — R$5.497/mês
- Tudo do Growth +
- Atendimento humano A7X para tickets L2 (horário comercial)
- Análise preditiva de churn baseada em atendimento
- Programa de fidelização automatizado
- Integração com CRM + histórico unificado do cliente
- Atendimento por voz (URA inteligente com IA)
- Customer success proativo (IA identifica clientes em risco)

### O que a IA faz

```
IA AUTOMATIZA (90%):                    HUMANO GARANTE (10%):
├─ Respostas L1 (80% dos tickets)       ├─ Casos complexos/sensíveis
├─ Triagem e classificação              ├─ Reclamações graves
├─ Análise de sentimento                ├─ Exceções de política
├─ NPS e pesquisas                      ├─ Negociações
├─ Base de conhecimento                 └─ Treinamento da IA
├─ Respostas multicanal
├─ Detecção de clientes em risco
└─ Relatórios e insights
```

---

## 9. Departamento Jurídico

> **Headline:** "Contratos, compliance e proteção jurídica — sem escritório de advocacia no retainer."

### Entregas por Tier

#### Starter — R$1.997/mês
- Revisão de contratos por IA (identifica riscos e cláusulas problemáticas)
- Templates de contratos (prestação de serviço, trabalho, NDA, etc.)
- Alertas de vencimento de contratos e obrigações
- Checklist de compliance básico (LGPD)
- FAQ jurídico personalizado para o negócio

#### Growth — R$3.997/mês
- Tudo do Starter +
- Elaboração de contratos sob medida
- Gestão de contencioso (acompanhamento de processos)
- Due diligence de parceiros/fornecedores
- Políticas internas (privacidade, uso aceitável, etc.)
- Consultoria jurídica (4h/mês com advogado)
- Registro de marcas e PI

#### Scale — R$7.497/mês
- Tudo do Growth +
- Advogado dedicado A7X
- Compliance avançado (regulatório do setor)
- Suporte em negociações contratuais
- Governança corporativa básica
- Consultoria jurídica ilimitada (horário comercial)
- Gestão de litígios estratégicos

### O que a IA faz

```
IA AUTOMATIZA (60%):                    HUMANO GARANTE (40%):
├─ Análise de contratos (riscos)        ├─ Parecer jurídico
├─ Geração de templates                 ├─ Representação legal
├─ Alertas e vencimentos                ├─ Negociação de contratos
├─ Pesquisa de jurisprudência           ├─ Estratégia contenciosa
├─ Checklist de compliance              ├─ Decisões de risco
├─ FAQ e orientações básicas            └─ Contencioso complexo
└─ Monitoramento de processos
```

---

## 10. Departamento de Operações

> **Headline:** "Processos que funcionam sozinhos — operação enxuta, eficiente e escalável."

### Entregas por Tier

#### Starter — R$1.997/mês
- Mapeamento de processos (top 5 processos críticos)
- Automação de workflows repetitivos (via n8n/Zapier)
- SOP (Standard Operating Procedures) documentados por IA
- Dashboard operacional básico
- Alertas de gargalos

#### Growth — R$3.997/mês
- Tudo do Starter +
- Mapeamento completo de processos
- Automação avançada (integrações entre sistemas)
- Gestão de fornecedores e compras
- Controle de estoque (se aplicável)
- KPIs operacionais em tempo real
- Otimização contínua por IA (sugestões mensais)
- PMO básico (gestão de projetos)

#### Scale — R$7.997/mês
- Tudo do Growth +
- COO as a Service
- Supply chain optimization
- Lean/Six Sigma assistido por IA
- Simulação de cenários operacionais
- Integração completa entre todos departamentos A7X
- Planejamento de capacidade e demanda
- Gestão de mudança organizacional

---

## 11. Jornada do Cliente

### Pré-venda (no site A7X)

```
Etapa 1: DESCOBERTA
│  Cliente acessa a7xsystems.com/subscribe
│  Vê os departamentos disponíveis
│  Compara planos
│
▼
Etapa 2: DIAGNÓSTICO
│  Clica em "Começar" no departamento escolhido
│  Preenche wizard de onboarding (8-10 perguntas)
│  IA analisa respostas em tempo real
│
▼
Etapa 3: PREVIEW DA ESTRATÉGIA
│  Recebe preview instantâneo:
│  ├─ Marketing: "Sua estratégia para os próximos 90 dias"
│  ├─ Comercial: "Sua máquina de vendas projetada"
│  ├─ Financeiro: "Seu painel financeiro estimado"
│  └─ etc.
│  (Gate: precisa de email para ver completo)
│
▼
Etapa 4: ESCOLHA DO PLANO
│  Vê os 3 tiers com preços
│  Compara features
│  Recomendação personalizada baseada no diagnóstico
│
▼
Etapa 5: CONTRATAÇÃO
│  Checkout (Stripe ou contato com consultor)
│  Assinatura mensal ou anual (desconto 15-20%)
│  Contrato digital assinado
│
▼
Etapa 6: ONBOARDING (48h)
│  Acesso ao portal do cliente
│  Setup de integrações
│  Kick-off call com especialista A7X
│  Primeira entrega em até 7 dias
```

### Pós-venda (Portal do Cliente)

```
PORTAL DO CLIENTE
├── Dashboard
│   ├── KPIs do departamento
│   ├── Entregas do mês
│   └── Próximas atividades
│
├── Aprovações
│   ├── Criativos pendentes
│   ├── Estratégias para review
│   └── Propostas geradas
│
├── Relatórios
│   ├── Performance semanal
│   ├── Performance mensal
│   └── ROI acumulado
│
├── Comunicação
│   ├── Chat com equipe A7X
│   ├── Tickets de suporte
│   └── Histórico de calls
│
├── Meus Departamentos
│   ├── Status de cada departamento contratado
│   ├── Upgrade/downgrade
│   └── Adicionar novo departamento
│
└── Conta
    ├── Faturamento
    ├── Contratos
    └── Configurações
```

---

## 12. Arquitetura Técnica

### Site (a7xsystems.com)

```
PÁGINAS NOVAS:
├── /subscribe                       → Hub dos departamentos
├── /subscribe/marketing             → Detalhe + planos + onboarding
├── /subscribe/sales                 → Detalhe + planos + onboarding
├── /subscribe/finance               → Detalhe + planos + onboarding
├── /subscribe/hr                    → Detalhe + planos + onboarding
├── /subscribe/it                    → Detalhe + planos + onboarding
├── /subscribe/support               → Detalhe + planos + onboarding
├── /subscribe/legal                 → Detalhe + planos + onboarding
├── /subscribe/operations            → Detalhe + planos + onboarding
└── /portal (futuro)                 → Área logada do cliente
```

### Componentes

```
NOVOS COMPONENTES:
├── src/components/subscribe/
│   ├── DepartmentHero.tsx           → Header visual do departamento
│   ├── PricingTable.tsx             → Tabela de 3 tiers comparativa
│   ├── PricingCard.tsx              → Card individual de tier
│   ├── OnboardingWizard.tsx         → Wizard de diagnóstico (por depto)
│   ├── StrategyPreview.tsx          → Preview da estratégia gerada por IA
│   ├── DepartmentFeatures.tsx       → Lista de features/entregas
│   ├── DepartmentComparison.tsx     → Comparação entre tiers
│   ├── DepartmentFAQ.tsx            → FAQ específico por departamento
│   └── SubscribeCTA.tsx             → CTA de contratação
│
├── src/lib/
│   ├── departments.ts               → Dados dos departamentos
│   ├── onboarding-questions.ts      → Perguntas por departamento
│   └── strategy-generator.ts        → Engine de geração de estratégia
│
└── src/app/[locale]/subscribe/
    ├── page.tsx                      → Hub com todos departamentos
    ├── layout.tsx                    → Layout da área de assinatura
    └── [department]/
        └── page.tsx                  → Página dinâmica por departamento
```

### Integração com AIOS

```
OPÇÃO A — API REST (ideal):
  Formulário → API Route Next.js → AIOS API
  Retorno: estratégia processada / confirmação de lead

OPÇÃO B — Webhook:
  Formulário → API Route Next.js → Webhook AIOS (n8n/Zapier)
  Retorno: assíncrono (email ou portal)

OPÇÃO C — Email Estruturado (MVP):
  Formulário → API Route Next.js → Email formatado → Equipe A7X
  Retorno: equipe processa e responde
```

### Stack de IA para Entregas

```
GERAÇÃO DE CONTEÚDO:
├── Claude API (Anthropic)          → Estratégias, análises, relatórios
├── OpenAI GPT-4                    → Copy, scripts de vendas, emails
├── DALL-E 3 / Midjourney           → Criativos visuais
└── ElevenLabs (futuro)             → Conteúdo em voz/vídeo

AUTOMAÇÃO:
├── n8n (self-hosted)               → Workflows entre sistemas
├── Meta Marketing API              → Gestão de ads Facebook/Instagram
├── Google Ads API                  → Gestão de ads Google
├── WhatsApp Business API           → Comunicação automatizada
├── Stripe API                      → Billing e assinaturas
└── SendGrid / Resend               → Email transacional + marketing

DADOS:
├── PostgreSQL / Supabase           → Dados de clientes e entregas
├── Analytics APIs                  → Métricas de performance
└── CRM API (Pipedrive/HubSpot)    → Pipeline e relacionamento
```

---

## 13. Modelo de Pricing

### Tabela Consolidada

| Departamento | Starter | Growth | Scale |
|-------------|---------|--------|-------|
| Marketing | R$2.497 | R$4.997 | R$9.997 |
| Comercial | R$1.997 | R$3.997 | R$7.997 |
| Financeiro | R$1.497 | R$2.997 | R$5.997 |
| RH | R$1.997 | R$3.497 | R$5.997 |
| TI | R$1.997 | R$4.497 | R$8.997 |
| Atendimento | R$1.497 | R$2.997 | R$5.497 |
| Jurídico | R$1.997 | R$3.997 | R$7.497 |
| Operações | R$1.997 | R$3.997 | R$7.997 |

### Bundles (Desconto por Volume)

| Bundle | Departamentos | Desconto |
|--------|--------------|----------|
| Duo | 2 departamentos | 10% |
| Trio | 3 departamentos | 15% |
| Quad | 4 departamentos | 20% |
| Enterprise | 5+ departamentos | 25% + negociação |

### Plano Anual
- 2 meses grátis (equivalente a ~17% de desconto)

### Comparação com Mercado

```
CONTRATAR INTERNAMENTE (salários + encargos + ferramentas):
├── Dept. Marketing (3 pessoas): ~R$18-25k/mês
├── Dept. Comercial (3 pessoas): ~R$15-22k/mês
├── Dept. Financeiro (2 pessoas): ~R$10-15k/mês
├── Dept. RH (2 pessoas): ~R$10-15k/mês
└── Total 4 deptos internos: ~R$53-77k/mês

A7X (4 deptos Growth):
├── Marketing Growth: R$4.997
├── Comercial Growth: R$3.997
├── Financeiro Growth: R$2.997
├── RH Growth: R$3.497
├── Desconto Quad (-20%): -R$3.098
└── Total: ~R$12.390/mês

ECONOMIA: 77-84% vs. contratação interna
```

---

## 14. Roadmap de Lançamento

### Fase 1 — MVP (4-6 semanas)
**Objetivo:** Validar o modelo com Marketing + Comercial

```
Semana 1-2: Estrutura do site
├── Hub /subscribe com os 8 departamentos (Marketing e Comercial clicáveis, resto "em breve")
├── Página do Departamento de Marketing completa
│   ├── Hero visual
│   ├── Features detalhadas
│   ├── Tabela de pricing (3 tiers)
│   ├── Onboarding wizard (formulário inteligente)
│   ├── Preview de estratégia (versão simplificada)
│   └── CTA de contratação (formulário → equipe)
├── Página do Departamento Comercial (mesma estrutura)
└── i18n em 3 idiomas

Semana 3-4: Backend
├── API Route para processar onboarding
├── Integração com AIOS (ou email como fallback)
├── Geração de estratégia via IA (preview para o cliente)
└── Notificação interna quando lead chega

Semana 5-6: Polish
├── Testes nos 3 idiomas
├── Responsivo mobile
├── SEO (structured data, sitemap)
├── Revisão de copy
└── Go live
```

### Fase 2 — Expansão (2-3 meses após MVP)
- Adicionar Atendimento ao Cliente e Financeiro
- Portal básico do cliente (dashboard + aprovações)
- Checkout com Stripe (assinatura recorrente)
- Geração de estratégia mais robusta por IA

### Fase 3 — Plataforma Completa (3-6 meses)
- Todos os 8 departamentos ativos
- Portal do cliente completo
- Integrações com ferramentas externas (Meta Ads, Google Ads, CRMs)
- App mobile para o cliente
- Marketplace de add-ons

### Fase 4 — Escala (6-12 meses)
- White-label (outras empresas revendem com marca própria)
- API pública para integrações
- IA proprietária treinada nos dados A7X
- Expansão internacional (USD/EUR pricing)

---

## 15. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|:------------:|:-------:|-----------|
| IA gera conteúdo de baixa qualidade | Média | Alto | Human-in-the-loop obrigatório; QA antes de entregar |
| Cliente espera resultado imediato | Alta | Médio | Onboarding claro com timeline; quick wins nos primeiros 7 dias |
| Escopo creep (cliente pede mais do que o tier inclui) | Alta | Médio | Contrato claro; upsell para tier superior |
| Dependência de APIs externas (OpenAI, Meta) | Média | Alto | Multi-provider (Claude + OpenAI); fallback manual |
| Concorrência copia modelo | Média | Baixo | Vantagem de first-mover; AIOS proprietário como moat |
| Churn alto nos primeiros meses | Média | Alto | Onboarding robusto; resultados rápidos; contrato mínimo 3 meses |
| Capacidade operacional (muitos clientes, pouca equipe) | Média | Alto | IA absorve 80%; contratação progressiva; limite de clientes por tier |
| Questões regulatórias (jurídico e financeiro) | Média | Alto | Parceria com escritórios especializados; disclaimers claros |

---

## 16. Métricas de Sucesso

### KPIs de Negócio

| Métrica | Meta Fase 1 | Meta Fase 2 | Meta Fase 3 |
|---------|:-----------:|:-----------:|:-----------:|
| Leads qualificados/mês | 50 | 200 | 500 |
| Conversão lead → cliente | 10% | 12% | 15% |
| Clientes ativos | 5 | 25 | 100 |
| MRR (Monthly Recurring Revenue) | R$25k | R$150k | R$500k |
| Churn mensal | <10% | <7% | <5% |
| NPS | >40 | >50 | >60 |
| Ticket médio | R$3.5k | R$4.5k | R$5.5k |
| Deptos por cliente | 1.2 | 1.8 | 2.5 |

### KPIs Operacionais

| Métrica | Meta |
|---------|------|
| Tempo de onboarding | <48h |
| Primeira entrega | <7 dias |
| % de entregas geradas por IA | >75% |
| Tempo médio de aprovação (cliente) | <24h |
| Custo operacional por cliente | <30% do ticket |
| Margem bruta | >65% |

---

## Próximos Passos

1. **Dennis analisa este blueprint** — valida pricing, tiers, e estratégia
2. **Definir prioridade dos departamentos** — confirmar Marketing + Comercial como Fase 1
3. **Definir integração AIOS** — API? Webhook? Email?
4. **Definir modelo de checkout** — Stripe imediato ou "Falar com consultor"?
5. **Iniciar implementação Fase 1** — páginas, wizard, pricing, i18n

---

*Documento gerado em Fev/2026 — A7X Systems*
*Versão 1.0 — Sujeito a revisão após análise estratégica*
