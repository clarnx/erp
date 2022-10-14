import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const WeblinksPage: NextPage = () => {
  return <div>WeblinksPage</div>;
};

export default withAuth(WeblinksPage);
