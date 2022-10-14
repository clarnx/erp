import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const CollectionPage: NextPage = () => {
  return <div>CollectionPage</div>;
};

export default withAuth(CollectionPage);
