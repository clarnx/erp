import type { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const YourShowPage: NextPage = () => {
  return <div>YourShowPage</div>;
};

export default withAuth(YourShowPage);
