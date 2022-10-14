import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const OrderProcessingPage: NextPage = () => {
  return <div>OrderProcessing</div>;
};

export default withAuth(OrderProcessingPage);
