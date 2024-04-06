import React from "react";
import { IColor } from "../../../../../pages/List/model/index.model";

export type classNameType = "active" | "danger" | "success" | "default"

export interface IBadge {
  children?: IColor
  id?: number
  size: number
  color?: string
  className?: classNameType | string
  onClick?: (event: React.MouseEvent) => void
  selectedColor?: number
}
