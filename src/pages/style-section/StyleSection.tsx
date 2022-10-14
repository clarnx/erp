import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const StyleSectionPage: NextPage = () => {
  return <div>StyleSectionPage</div>;
};

export default withAuth(StyleSectionPage);
