import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const UniversityPage: NextPage = () => {
  return <div>UniversityPage</div>;
};

export default withAuth(UniversityPage);
