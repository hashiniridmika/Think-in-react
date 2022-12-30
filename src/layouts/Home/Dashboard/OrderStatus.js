import React from "react";
import OrderStatusTop from "./OrderStatus/OrderStatusTop";
import OrderStatusTable from "./OrderStatus/OrderStatusTable";

export default function OrderStatus() {
  return (
    <div>
      <OrderStatusTop />
      <OrderStatusTable />
    </div>
  );
}
