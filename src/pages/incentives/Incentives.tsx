import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const IncentivesPage: NextPage = () => {
  return <div>IncentivesPage</div>;
};

export default withAuth(IncentivesPage);
