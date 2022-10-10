import React, { FC } from "react";

import { DEFAULT_POPUP } from "./config";
import type { PopupProps } from "./types";
import Button from "../Button";
import Icon from "../Icon";

const Popup: FC<PopupProps> = ({ show, type = "normal", msg, icon }) => {
  const classNamePopupBody =
    "bg-white border-[0.0625rem] border-beluga min-h-[13.9375rem] min-w-[23rem] absolute z-10 box-border flex flex-col items-start gap-[0.625rem] rounded-2xl border px-[2rem] pb-[3.125rem] pt-[2rem]";
  const classNamePopupContent =
    "min-w-[19rem] min-h-[8.8125rem] flex flex-col items-center gap-[2rem]";

  return (
    <>
      {show && (
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/50">
          <div className={classNamePopupBody}>
            <div className={classNamePopupContent}>
              {/* top content */}
              {type !== "warning" ? (
                <span className="break-words font-primary">{msg}</span>
              ) : (
                icon &&
                icon.src !== "" && (
                  <Icon
                    src={icon.src}
                    height={icon.height ?? DEFAULT_POPUP.DEFAULT_ICON_HEIGHT}
                    width={icon.width ?? DEFAULT_POPUP.DEFAULT_ICON_WIDTH}
                    className="inset-x-[42.43%] top-[22.42%] bottom-[46.56%]"
                  />
                )
              )}
              {/* end of top content */}

              {/* bottom content */}
              <div className="flex flex-row items-start gap-[1.25rem] pt-[2rem]">
                {type !== "warning" ? (
                  <>
                    <Button
                      variant="primary"
                      className="justify-center border-0 bg-disable text-shishaCoal hover:bg-disable hover:text-shishaCoal"
                    >
                      Button
                    </Button>
                    <Button
                      type="submit"
                      className="justify-center border-0 text-white"
                    >
                      Button
                    </Button>
                  </>
                ) : (
                  <span className="font-primary"> {msg}</span>
                )}
              </div>
              {/* end of bottom content */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
