'use client'

import { useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AssessmentProgress } from './AssessmentProgress'
import { AssessmentStep } from './AssessmentStep'
import { LeadCaptureForm } from './LeadCaptureForm'
import { AssessmentResults } from './AssessmentResults'
import { getVisibleQuestions, calculateScore, type Answers, type AssessmentResult } from '@/lib/assessment'

type Phase = 'questions' | 'lead-capture' | 'results'

export function AssessmentWizard() {
  const t = useTranslations('assessment')
  const [answers, setAnswers] = useState<Answers>({})
  const [currentStep, setCurrentStep] = useState(0)
  const [phase, setPhase] = useState<Phase>('questions')
  const [result, setResult] = useState<AssessmentResult | null>(null)

  const visibleQuestions = useMemo(() => getVisibleQuestions(answers), [answers])
  const currentQuestion = visibleQuestions[currentStep]

  function handleAnswer(value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))
  }

  function canAdvance(): boolean {
    if (!currentQuestion) return false
    const val = answers[currentQuestion.id]
    if (!currentQuestion.required && currentQuestion.conditionalOn) return true
    if (!val) return false
    if (Array.isArray(val) && val.length === 0) return false
    return true
  }

  function next() {
    if (currentStep < visibleQuestions.length - 1) {
      setCurrentStep((s) => s + 1)
    } else {
      // Done with questions → lead capture
      setPhase('lead-capture')
    }
  }

  function prev() {
    if (currentStep > 0) setCurrentStep((s) => s - 1)
  }

  function handleLeadSubmit() {
    const res = calculateScore(answers)
    setResult(res)
    setPhase('results')
  }

  if (phase === 'results' && result) {
    return <AssessmentResults result={result} />
  }

  if (phase === 'lead-capture') {
    return <LeadCaptureForm onSubmit={handleLeadSubmit} />
  }

  return (
    <div>
      <AssessmentProgress current={currentStep + 1} total={visibleQuestions.length} />

      <AnimatePresence mode="wait">
        {currentQuestion && (
          <AssessmentStep
            key={currentQuestion.id}
            question={currentQuestion}
            value={answers[currentQuestion.id] ?? (currentQuestion.type === 'multi-select' ? [] : '')}
            onChange={handleAnswer}
          />
        )}
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={prev}
          disabled={currentStep === 0}
          className="text-sm text-text-muted transition-colors hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {t('back')}
        </button>

        <Button onClick={next} disabled={!canAdvance()}>
          {currentStep === visibleQuestions.length - 1 ? t('seeResults') : t('next')}
        </Button>
      </div>
    </div>
  )
}
