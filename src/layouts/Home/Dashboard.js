import React from "react";
import TopDasboard from "./Dashboard/TopDasboard";
import Traffic from "./Dashboard/Traffic";
import DashboardCard from "./Dashboard/DashboardCard";
import RecentActivity from "./Dashboard/RecentActivity";
import OrderStatus from "./Dashboard/OrderStatus";

export default function Dashboard() {
  return (
    <div>
      <TopDasboard />
      <Traffic />
      <DashboardCard />
      <RecentActivity />
      <OrderStatus />
    </div>
  );
}
