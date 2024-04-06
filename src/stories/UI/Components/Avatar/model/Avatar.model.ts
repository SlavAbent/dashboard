import React from "react";

export type statusType = "success" | "warning" | "error"

export interface IAvatarProps {
  className?: string
  size?: number
  image?: string
  title?: string
  status?: statusType
  onClick?: (event: React.MouseEvent) => void
}
