import React, { FC } from "react";

import { DEFAULT_POPUP } from "./config";
import type { PopupProps } from "./types";
import Button from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

const Popup: FC<PopupProps> = ({ show, type = "normal", msg, icon }) => {
  const classNamePopupBody =
    "bg-white border-[0.0625rem] border-beluga h-[13.9375rem] w-[23rem] absolute z-10 box-border flex flex-col items-start gap-[0.625rem] rounded-2xl border px-[2rem] pb-[3.125rem] pt-[2rem]";
  const classNamePopupContent =
    "w-[19rem] h-[8.8125rem] flex flex-col items-center gap-[2rem]";

  return (
    <>
      {show && (
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/50">
          <div className={classNamePopupBody}>
            <div className={classNamePopupContent}>
              {/* top content */}
              {type !== "warning" ? (
                <Typography
                  size="text-base"
                  variant="span"
                  fontFamily="font-tertiary"
                  className="items-center leading-[1.813rem]"
                >
                  {msg}
                </Typography>
              ) : (
                icon &&
                icon.src !== "" && (
                  <Icon
                    src={icon.src}
                    height={icon.height ?? DEFAULT_POPUP.DEFAULT_ICON_HEIGHT}
                    width={icon.width ?? DEFAULT_POPUP.DEFAULT_ICON_WIDTH}
                    className="inset-x-[42.43%] top-[22.42%] bottom-[46.56%] mt-[3.125rem]"
                  />
                )
              )}
              {/* end of top content */}

              {/* bottom content */}
              <div className="flex flex-row items-start gap-[1.25rem]">
                {type !== "warning" ? (
                  <>
                    <Button
                      size="xs"
                      variant="primary"
                      className="justify-center rounded-[0.938rem] border-0 bg-disable text-shishaCoal hover:bg-disable hover:text-shishaCoal"
                    >
                      <Typography
                        size="text-base"
                        variant="span"
                        fontFamily="font-tertiary"
                        className="items-center leading-[1.813rem]"
                      >
                        Button
                      </Typography>
                    </Button>
                    <Button
                      size="xs"
                      type="submit"
                      className="justify-center rounded-[0.938rem] border-0"
                    >
                      <Typography
                        size="text-base"
                        variant="span"
                        color="white"
                        fontFamily="font-tertiary"
                        className="items-center leading-[1.813rem]"
                      >
                        Button
                      </Typography>
                    </Button>
                  </>
                ) : (
                  <Typography
                    size="text-base"
                    variant="span"
                    color="white"
                    fontFamily="font-tertiary"
                    className="items-center font-bold leading-[1.813rem]"
                  >
                    {msg}
                  </Typography>
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
