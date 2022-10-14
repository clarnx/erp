import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const WorkWithClientPage: NextPage = () => {
  return <div>WorkWithClient</div>;
};

export default withAuth(WorkWithClientPage);
