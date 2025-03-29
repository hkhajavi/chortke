/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon38Icon(props: Icon38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 300"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}
      <path
        stroke={"currentColor"}
        strokeWidth={"100%"}
        d={"M0 20l10 280"}
      ></path>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

export default Icon38Icon;
/* prettier-ignore-end */
