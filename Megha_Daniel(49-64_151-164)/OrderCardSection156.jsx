import OrdersPageHeaderIntroCard152 from "./OrdersPageHeaderIntroCard152";
import OrdersStatsGrid153 from "./OrdersStatsGrid153";
import OrdersFilterTabs155 from "./OrdersFilterTabs155";

// 156. Unified Orders Workspace
function OrderCardSection156() {
  return (
    <div className="space-y-6">
      <OrdersPageHeaderIntroCard152 />
      <OrdersStatsGrid153 />
      <OrdersFilterTabs155 />
    </div>
  );
}

export default OrderCardSection156;