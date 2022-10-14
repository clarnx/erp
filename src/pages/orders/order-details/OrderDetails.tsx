import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const OrderDetailsPage: NextPage = () => {
  return <div>OrderDetailsPage</div>;
};

export default withAuth(OrderDetailsPage);
