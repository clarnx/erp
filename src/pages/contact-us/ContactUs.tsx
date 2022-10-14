import { NextPage } from "next";
import React from "react";

import { withAuth } from "@/utils/withAuth";

const ContactUsPage: NextPage = () => {
  return <div>ContactUsPage</div>;
};

export default withAuth(ContactUsPage);
