export type QuestionType = 'single-select' | 'multi-select' | 'radio' | 'range' | 'text'

export interface QuestionOption {
  value: string
  labelKey: string
}

export interface Question {
  id: string
  titleKey: string
  subtitleKey?: string
  type: QuestionType
  options?: QuestionOption[]
  rangeMin?: number
  rangeMax?: number
  rangeSuffix?: string
  required?: boolean
  conditionalOn?: {
    questionId: string
    value: string
  }
}

export const QUESTIONS: Question[] = [
  {
    id: 'industry',
    titleKey: 'q1Title',
    subtitleKey: 'q1Subtitle',
    type: 'single-select',
    required: true,
    options: [
      { value: 'agency', labelKey: 'q1Opt1' },
      { value: 'healthcare', labelKey: 'q1Opt2' },
      { value: 'retail', labelKey: 'q1Opt3' },
      { value: 'manufacturing', labelKey: 'q1Opt4' },
      { value: 'professional-services', labelKey: 'q1Opt5' },
      { value: 'technology', labelKey: 'q1Opt6' },
      { value: 'other', labelKey: 'q1Opt7' },
    ],
  },
  {
    id: 'employees',
    titleKey: 'q2Title',
    type: 'radio',
    required: true,
    options: [
      { value: '1-10', labelKey: 'q2Opt1' },
      { value: '11-50', labelKey: 'q2Opt2' },
      { value: '51-200', labelKey: 'q2Opt3' },
      { value: '201-500', labelKey: 'q2Opt4' },
      { value: '500+', labelKey: 'q2Opt5' },
    ],
  },
  {
    id: 'painPoints',
    titleKey: 'q3Title',
    subtitleKey: 'q3Subtitle',
    type: 'multi-select',
    required: true,
    options: [
      { value: 'manual-entry', labelKey: 'q3Opt1' },
      { value: 'documents', labelKey: 'q3Opt2' },
      { value: 'support', labelKey: 'q3Opt3' },
      { value: 'reporting', labelKey: 'q3Opt4' },
      { value: 'approvals', labelKey: 'q3Opt5' },
      { value: 'inventory', labelKey: 'q3Opt6' },
      { value: 'hr', labelKey: 'q3Opt7' },
    ],
  },
  {
    id: 'tools',
    titleKey: 'q4Title',
    subtitleKey: 'q4Subtitle',
    type: 'multi-select',
    required: true,
    options: [
      { value: 'crm', labelKey: 'q4Opt1' },
      { value: 'erp', labelKey: 'q4Opt2' },
      { value: 'spreadsheets', labelKey: 'q4Opt3' },
      { value: 'email-only', labelKey: 'q4Opt4' },
      { value: 'custom-software', labelKey: 'q4Opt5' },
    ],
  },
  {
    id: 'repetitiveTime',
    titleKey: 'q5Title',
    subtitleKey: 'q5Subtitle',
    type: 'range',
    rangeMin: 10,
    rangeMax: 80,
    rangeSuffix: '%',
    required: true,
  },
  {
    id: 'aiExperience',
    titleKey: 'q6Title',
    type: 'radio',
    required: true,
    options: [
      { value: 'none', labelKey: 'q6Opt1' },
      { value: 'tried-failed', labelKey: 'q6Opt2' },
      { value: 'some-success', labelKey: 'q6Opt3' },
      { value: 'active-use', labelKey: 'q6Opt4' },
    ],
  },
  {
    id: 'aiFailReason',
    titleKey: 'q6FollowTitle',
    type: 'text',
    conditionalOn: {
      questionId: 'aiExperience',
      value: 'tried-failed',
    },
  },
  {
    id: 'timeline',
    titleKey: 'q7Title',
    type: 'radio',
    required: true,
    options: [
      { value: 'asap', labelKey: 'q7Opt1' },
      { value: '1-3months', labelKey: 'q7Opt2' },
      { value: '3-6months', labelKey: 'q7Opt3' },
      { value: 'exploring', labelKey: 'q7Opt4' },
    ],
  },
]

export type Answers = Record<string, string | string[]>

export interface AssessmentResult {
  score: number
  tier: 'exploring' | 'building' | 'scaling' | 'leading'
  tierLabelKey: string
  categories: {
    labelKey: string
    score: number
  }[]
  recommendations: string[]
  roiRange: { min: number; max: number }
}

export function getVisibleQuestions(answers: Answers): Question[] {
  return QUESTIONS.filter((q) => {
    if (!q.conditionalOn) return true
    const parentAnswer = answers[q.conditionalOn.questionId]
    if (Array.isArray(parentAnswer)) {
      return parentAnswer.includes(q.conditionalOn.value)
    }
    return parentAnswer === q.conditionalOn.value
  })
}

export function calculateScore(answers: Answers): AssessmentResult {
  let processScore = 0
  let toolScore = 0
  let readinessScore = 0
  let urgencyScore = 0

  // Pain points scoring (more pain = more opportunity)
  const pains = (answers.painPoints as string[]) || []
  processScore = Math.min(25, pains.length * 4)

  // Repetitive time scoring
  const repTime = parseInt(answers.repetitiveTime as string) || 30
  processScore += Math.min(25, Math.round(repTime / 80 * 25))

  // Tool maturity scoring
  const tools = (answers.tools as string[]) || []
  if (tools.includes('crm') || tools.includes('erp')) toolScore += 12
  if (tools.includes('custom-software')) toolScore += 10
  if (tools.includes('spreadsheets')) toolScore += 5
  if (tools.includes('email-only')) toolScore += 2
  toolScore = Math.min(25, toolScore)

  // AI experience scoring
  const aiExp = answers.aiExperience as string
  if (aiExp === 'active-use') readinessScore = 25
  else if (aiExp === 'some-success') readinessScore = 18
  else if (aiExp === 'tried-failed') readinessScore = 12
  else readinessScore = 5

  // Timeline urgency
  const timeline = answers.timeline as string
  if (timeline === 'asap') urgencyScore = 25
  else if (timeline === '1-3months') urgencyScore = 20
  else if (timeline === '3-6months') urgencyScore = 12
  else urgencyScore = 5

  const total = processScore + toolScore + readinessScore + urgencyScore

  let tier: AssessmentResult['tier']
  let tierLabelKey: string
  if (total <= 25) {
    tier = 'exploring'
    tierLabelKey = 'tierExploring'
  } else if (total <= 50) {
    tier = 'building'
    tierLabelKey = 'tierBuilding'
  } else if (total <= 75) {
    tier = 'scaling'
    tierLabelKey = 'tierScaling'
  } else {
    tier = 'leading'
    tierLabelKey = 'tierLeading'
  }

  // Generate recommendation keys based on answers
  const recommendations: string[] = []
  if (pains.includes('manual-entry') || pains.includes('documents')) {
    recommendations.push('recDocProcessing')
  }
  if (pains.includes('support')) {
    recommendations.push('recAiAgents')
  }
  if (pains.includes('reporting') || tools.includes('spreadsheets')) {
    recommendations.push('recDataIntegration')
  }
  if (aiExp === 'none' || aiExp === 'tried-failed') {
    recommendations.push('recProcessDiscovery')
  }
  if (pains.includes('approvals') || pains.includes('hr')) {
    recommendations.push('recWorkflowAutomation')
  }
  // Ensure we always have 3 recommendations
  const allRecs = ['recProcessDiscovery', 'recWorkflowAutomation', 'recDocProcessing', 'recAiAgents', 'recDataIntegration']
  for (const rec of allRecs) {
    if (recommendations.length >= 3) break
    if (!recommendations.includes(rec)) recommendations.push(rec)
  }

  // ROI estimate based on employees & repetitive time
  const emp = answers.employees as string
  let avgHeadcount = 25
  if (emp === '1-10') avgHeadcount = 5
  else if (emp === '11-50') avgHeadcount = 30
  else if (emp === '51-200') avgHeadcount = 100
  else if (emp === '201-500') avgHeadcount = 300
  else avgHeadcount = 600

  const savingsBase = avgHeadcount * (repTime / 100) * 50000 * 0.3
  const roiMin = Math.round(savingsBase * 0.5)
  const roiMax = Math.round(savingsBase * 1.2)

  return {
    score: total,
    tier,
    tierLabelKey,
    categories: [
      { labelKey: 'catProcess', score: processScore },
      { labelKey: 'catTools', score: toolScore },
      { labelKey: 'catReadiness', score: readinessScore },
      { labelKey: 'catUrgency', score: urgencyScore },
    ],
    recommendations: recommendations.slice(0, 3),
    roiRange: { min: roiMin, max: roiMax },
  }
}
