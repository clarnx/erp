import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const PoliciesPage: NextPage = () => {
  return <div>PoliciesPage</div>;
};

export default withAuth(PoliciesPage);
