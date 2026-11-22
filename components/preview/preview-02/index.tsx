"use client";

import { ActivateAgentDialog } from "@/components/preview/preview-02/cards/activate-agent-dialog";
import { AnalyticsCard } from "@/components/preview/preview-02/cards/analytics-card";
import { AnomalyAlert } from "@/components/preview/preview-02/cards/anomaly-alert";
import { BarChartCard } from "@/components/preview/preview-02/cards/bar-chart-card";
import { BookAppointment } from "@/components/preview/preview-02/cards/book-appointment";
import { CodespacesCard } from "@/components/preview/preview-02/cards/codespaces-card";
import { ContributionsActivity } from "@/components/preview/preview-02/cards/contributions-activity";
import { Contributors } from "@/components/preview/preview-02/cards/contributors";
import { EnvironmentVariables } from "@/components/preview/preview-02/cards/environment-variables";
import { FeedbackForm } from "@/components/preview/preview-02/cards/feedback-form";
import { FileUpload } from "@/components/preview/preview-02/cards/file-upload";
import { GithubProfile } from "@/components/preview/preview-02/cards/github-profile";
import { IconPreviewGrid } from "@/components/preview/preview-02/cards/icon-preview-grid";
import { InviteTeam } from "@/components/preview/preview-02/cards/invite-team";
import { Invoice } from "@/components/preview/preview-02/cards/invoice";
import { LiveWaveformCard } from "@/components/preview/preview-02/cards/live-waveform";
import { NoTeamMembers } from "@/components/preview/preview-02/cards/no-team-members";
import { NotFound } from "@/components/preview/preview-02/cards/not-found";
import { ObservabilityCard } from "@/components/preview/preview-02/cards/observability-card";
import { PieChartCard } from "@/components/preview/preview-02/cards/pie-chart-card";
import { ReportBug } from "@/components/preview/preview-02/cards/report-bug";
import { ShippingAddress } from "@/components/preview/preview-02/cards/shipping-address";
import { Shortcuts } from "@/components/preview/preview-02/cards/shortcuts";
import { SkeletonLoading } from "@/components/preview/preview-02/cards/skeleton-loading";
import { SleepReport } from "@/components/preview/preview-02/cards/sleep-report";
import { StyleOverview } from "@/components/preview/preview-02/cards/style-overview";
import { TypographySpecimen } from "@/components/preview/preview-02/cards/typography-specimen";
import { UIElements } from "@/components/preview/preview-02/cards/ui-elements";
import { UsageCard } from "@/components/preview/preview-02/cards/usage-card";
import { Visitors } from "@/components/preview/preview-02/cards/visitors";
import { WeeklyFitnessSummary } from "@/components/preview/preview-02/cards/weekly-fitness-summary";

export function Preview02() {
  return (
    <div className="bg-muted dark:bg-background h-[calc(100vh-40px-12px-24px)] overflow-auto contain-[paint] [--gap:--spacing(6)]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="bg-muted dark:bg-background grid w-[2400px] grid-cols-7 items-start gap-(--gap) p-(--gap) md:w-[3000px] *:[div]:gap-(--gap)"
          data-slot="capture-target"
        >
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <StyleOverview />
            <TypographySpecimen />
            <div className="md:hidden">
              <UIElements />
            </div>
            <CodespacesCard />
            <Invoice />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <IconPreviewGrid />
            <div className="hidden w-full md:flex">
              <UIElements />
            </div>
            <ObservabilityCard />
            <ShippingAddress />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <EnvironmentVariables />
            <BarChartCard />
            <InviteTeam />
            <ActivateAgentDialog />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <SkeletonLoading />
            <PieChartCard />
            <NoTeamMembers />
            <ReportBug />
            <Contributors />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <FeedbackForm />
            <BookAppointment />
            <SleepReport />
            <GithubProfile />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <WeeklyFitnessSummary />
            <FileUpload />
            <AnalyticsCard />
            <UsageCard />
            <Shortcuts />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <AnomalyAlert />
            <LiveWaveformCard />
            <Visitors />
            <ContributionsActivity />
            <NotFound />
          </div>
        </div>
      </div>
    </div>
  );
}
