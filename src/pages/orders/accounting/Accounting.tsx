import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const AccountingPage: NextPage = () => {
  return <div>AccountingPage</div>;
};

export default withAuth(AccountingPage);
