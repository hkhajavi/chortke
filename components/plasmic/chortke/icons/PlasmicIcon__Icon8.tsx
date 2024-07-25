// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon8Icon(props: Icon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "lucide lucide-cable"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M17 21v-2a1 1 0 01-1-1v-1a2 2 0 012-2h2a2 2 0 012 2v1a1 1 0 01-1 1"}
      ></path>

      <path
        d={"M19 15V6.5a1 1 0 00-7 0v11a1 1 0 01-7 0V9m16 12v-2h-4M3 5h4V3"}
      ></path>

      <path
        d={"M7 5a1 1 0 011 1v1a2 2 0 01-2 2H4a2 2 0 01-2-2V6a1 1 0 011-1V3"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
