import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const OrdersPage: NextPage = () => {
  return <div>OrdersPage</div>;
};

export default withAuth(OrdersPage);
