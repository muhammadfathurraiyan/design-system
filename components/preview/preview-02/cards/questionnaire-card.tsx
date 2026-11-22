import { Card, CardContent } from "@/components/ui/card"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

export function QuestionnaireCard() {
  return (
    <Card>
      <CardContent>
        <Questionnaire shortcuts="letters" className="gap-4">
          <QuestionnaireProgress />
          <QuestionnaireItem name="payout-speed" required>
            <QuestionnaireTitle>
              How fast should payouts settle?
            </QuestionnaireTitle>
            <QuestionnaireDescription>
              You can change this later in payout settings.
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="instant">
                Instant
                <QuestionnaireChoiceDescription>
                  Arrives in seconds · 1.5% fee
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="same-day">
                Same day
                <QuestionnaireChoiceDescription>
                  Before 17:00 local · 0.5% fee
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="standard">
                Standard
                <QuestionnaireChoiceDescription>
                  Next business day · no fee
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireActions>
              <QuestionnairePrevious />
              <QuestionnaireNext />
            </QuestionnaireActions>
          </QuestionnaireItem>
          <QuestionnaireItem name="threshold">
            <QuestionnaireTitle>
              When should we release funds?
            </QuestionnaireTitle>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="auto">
                Automatically
                <QuestionnaireChoiceDescription>
                  Every closing batch
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="manual">
                Manually
                <QuestionnaireChoiceDescription>
                  Approve each transfer
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireActions>
              <QuestionnairePrevious />
              <QuestionnaireSubmit>Finish</QuestionnaireSubmit>
            </QuestionnaireActions>
          </QuestionnaireItem>
        </Questionnaire>
      </CardContent>
    </Card>
  )
}
