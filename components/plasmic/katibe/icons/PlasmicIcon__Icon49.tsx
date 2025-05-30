/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon49Icon(props: Icon49IconProps) {
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
        "lucide lucide-credit-card-icon lucide-credit-card"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"20"} height={"14"} x={"2"} y={"5"} rx={"2"}></rect>

      <path d={"M2 10h20"}></path>
    </svg>
  );
}

export default Icon49Icon;
/* prettier-ignore-end */
