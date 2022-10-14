import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const OutletPage: NextPage = () => {
  return <div>OutletPage</div>;
};

export default withAuth(OutletPage);
