import type { NextPage } from "next";

import Button from "@/components/Button";

const Home: NextPage = () => {
  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2">
        <Button
          className="rounded-lg bg-white font-tertiary font-normal text-primary-300"
          onClick={() => alert("clciked")}
        >
          September, 21 2022
        </Button>
      </div>
    </div>
  );
};

export default Home;
