import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const CustomerReceiptPage: NextPage = () => {
  return <div>CustomerReceipt</div>;
};

export default withAuth(CustomerReceiptPage);
