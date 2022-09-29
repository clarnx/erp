import { FC } from "react";
import { ImSpinner2 } from "react-icons/im";

import clsxm from "@/utils/clsxm";

type LoadingProps = {
  fullscreen?: boolean;
  size?: number;
  color?: string;
};

export const Loading: FC<LoadingProps> = (props) => {
  const { fullscreen = true, size = 45, color = "#3d3a3a" } = props;

  return (
    <>
      <div
        className={clsxm(
          fullscreen ? "flex h-screen items-center justify-center" : ""
        )}
      >
        <ImSpinner2 className="animate-spin" size={size} color={color} />
      </div>
    </>
  );
};

export default Loading;
