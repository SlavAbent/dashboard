import { DOMAttributes } from "react";

export type IconType = "svg" | "png"

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string
  type: IconType
  color?: string
  size?: number
}
