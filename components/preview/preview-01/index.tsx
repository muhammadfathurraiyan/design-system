import { AccountAccess } from "./cards/account-access";
import { AspectRatioCard } from "./cards/aspect-ratio-card";
import { CardOverview } from "./cards/card-overview";
import { CarouselCard } from "./cards/carousel-card";
import { ClaimableBalance } from "./cards/claimable-balance";
import { CollapsibleCard } from "./cards/collapsible-card";
import { ContextMenuCard } from "./cards/context-menu-card";
import { ContributionHistory } from "./cards/contribution-history";
import { CoverArt } from "./cards/cover-art";
import { DividendIncome } from "./cards/dividend-income";
import { DrawerCard } from "./cards/drawer-card";
import { EmptyConnectBank } from "./cards/empty-connect-bank";
import { EmptyDistributeTrack } from "./cards/empty-distribute-track";
import { EmptyExploreCatalog } from "./cards/empty-explore-catalog";
import { Faq } from "./cards/faq";
import { FrontDoor } from "./cards/front-door";
import { HoverCardDemo } from "./cards/hover-card-demo";
import { IndexInvesting } from "./cards/index-investing";
import { KitchenIsland } from "./cards/kitchen-island";
import { LoadingCard } from "./cards/loading-card";
import { NewMilestone } from "./cards/new-milestone";
import { NotificationSettings } from "./cards/notification-settings";
import { PaginationCard } from "./cards/pagination-card";
import { Payments } from "./cards/payments";
import { PayoutThreshold } from "./cards/payout-threshold";
import { PopoverCard } from "./cards/popover-card";
import { PowerUsage } from "./cards/power-usage";
import { Preferences } from "./cards/preferences";
import { QrConnect } from "./cards/qr-connect";
import { ReceivingMethod } from "./cards/receiving-method";
import { RecentTransactions } from "./cards/recent-transactions";
import { ReleaseCatalog } from "./cards/release-catalog";
import { ResizableCard } from "./cards/resizable-card";
import { RollerShades } from "./cards/roller-shades";
import { SavingsProgress } from "./cards/savings-progress";
import { SavingsTargets } from "./cards/savings-targets";
import { ScrollAreaCard } from "./cards/scroll-area-card";
import { SheetCard } from "./cards/sheet-card";
import { SidebarNav } from "./cards/sidebar-nav";
import { SocialLinks } from "./cards/social-links";
import { StockPerformance } from "./cards/stock-performance";
import { SyncingState } from "./cards/syncing-state";
import { ToggleCard } from "./cards/toggle-card";
import { TransferFunds } from "./cards/transfer-funds";
import { UpcomingPayments } from "./cards/upcoming-payments";

export function Preview01() {
  return (
    <div className="bg-muted dark:bg-background h-[calc(100vh-40px-12px-24px)] overflow-auto contain-[paint] [--gap:--spacing(6)]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="bg-muted dark:bg-background grid w-[2400px] grid-cols-7 items-start gap-(--gap) p-(--gap) md:w-[3000px] *:[div]:gap-(--gap)"
          data-slot="capture-target"
        >
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <ContributionHistory />
            <EmptyDistributeTrack />
            <QrConnect />
            <DividendIncome />
            <IndexInvesting />
            <SyncingState />
            <PopoverCard />
            <ToggleCard />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <PayoutThreshold />
            <ClaimableBalance />
            <Preferences />
            <SavingsProgress />
            <KitchenIsland />
            <HoverCardDemo />
            <CollapsibleCard />
          </div>
          <div className="col-span-2 flex flex-col p-px [contain-intrinsic-size:760px_1200px] [content-visibility:auto]">
            <SavingsTargets />
            <RecentTransactions />
            <div className="grid grid-cols-2 items-start gap-(--gap)">
              <div className="flex flex-col gap-(--gap)">
                <SidebarNav />
                <Faq />
              </div>
              <div className="flex flex-col gap-(--gap)">
                <Payments />
                <FrontDoor />
              </div>
            </div>
            <ReleaseCatalog />
            <AspectRatioCard />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <AccountAccess />
            <CardOverview />
            <TransferFunds />
            <CoverArt />
            <LoadingCard />
            <ContextMenuCard />
            <ScrollAreaCard />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <ReceivingMethod />
            <PowerUsage />
            <EmptyConnectBank />
            <UpcomingPayments />
            <RollerShades />
            <PaginationCard />
            <SheetCard />
            <CarouselCard />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <StockPerformance />
            <EmptyExploreCatalog />
            <NewMilestone />
            <SocialLinks />
            <NotificationSettings />
            <DrawerCard />
            <ResizableCard />
          </div>
        </div>
      </div>
    </div>
  );
}
