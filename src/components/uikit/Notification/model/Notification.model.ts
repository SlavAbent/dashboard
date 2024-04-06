import { ToastPosition } from "react-toastify/dist/types";

export type PositionType = ToastPosition & "center" | "centerLeft" | "centerRight"

// type OmitKeysNotification = Omit<ToastPosition, "rtl">;


export interface INotification {
  // position?: PositionType
  position?
  autoClose?
  hideProgressBar?
  // newestOnTop?: any
  closeOnClick?
  rtl?
  pauseOnFocusLoss?
  draggable?
  pauseOnHover?
  theme?
  progress?
}
