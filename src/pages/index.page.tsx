import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const HomePage: NextPage = () => {
  return <div>HomePage</div>;
};

export default withAuth(HomePage);
