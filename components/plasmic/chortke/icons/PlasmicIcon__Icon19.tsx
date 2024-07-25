// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
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
        "lucide lucide-hospital"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 6v4m2 4h-4m4 4h-4m4-10h-4m8 4h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-9a2 2 0 012-2h2"
        }
      ></path>

      <path d={"M18 22V4a2 2 0 00-2-2H8a2 2 0 00-2 2v18"}></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
