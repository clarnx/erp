import React, { FC } from "react";

import { camelize } from "@/utils/helpers";

import type { CardInfoProps } from "./types";
import Icon from "../Icon";
import Label from "../Label";
import Typography from "../Typography";

const CardInfo: FC<CardInfoProps> = (props) => {
  const { header, date, promo, onDownload, onOpen } = props;

  return (
    <div
      className="flex rounded-[0.875rem] border border-beluga py-3 px-6"
      data-testid={`card-info-${camelize(header)}`}
    >
      <div className="col-span-2 flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <Typography
            size="text-sm"
            variant="h5"
            color="text-blackOut"
            className="font-medium"
          >
            {header}
          </Typography>

          {promo && <Label text={promo} />}
        </div>

        <div className="flex gap-1">
          <Icon src="/svg/Clock.svg" height={15} width={14} />

          <Typography
            size="text-xs"
            variant="span"
            fontFamily="font-tertiary"
            color="text-improbable"
            className="font-normal"
          >
            {date}
          </Typography>
        </div>
      </div>

      <div className="col-span-1 ml-[4.625rem] flex items-center">
        <div onClick={onDownload}>
          <Typography
            size="text-sm"
            variant="span"
            fontFamily="font-tertiary"
            color="text-improbable"
            className="cursor-pointer font-semibold uppercase"
          >
            download
          </Typography>
        </div>

        <div className="mx-4 h-5 border-x-[0.031rem]" />

        <div onClick={onOpen}>
          <Typography
            size="text-sm"
            variant="span"
            fontFamily="font-tertiary"
            color="text-improbable"
            className="cursor-pointer font-semibold uppercase"
          >
            open
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
