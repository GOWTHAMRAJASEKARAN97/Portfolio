import { toast, ToastPosition } from "react-toastify";
import { Typography } from "@mui/material";
import S from "./Toast.Styled";

type ToastType = "success" | "warning" | "error" | "info";

interface IToast {
  message: string;
  type?: ToastType;
  life?: number;
}

const ToastContent = ({ message }: { message: string }) => (
  <S.Toast>
    <Typography variant="body2">{message}</Typography>
  </S.Toast>
);

export const ToastContainer = ({ ...options }) => (
  <S.ToastContainerStyled {...options} />
);

const Toast = ({ message, type = "info", life = 3500 }: IToast) =>
  toast[type](<ToastContent message={message} />, {
    position: "bottom-right" as ToastPosition,
    autoClose: life,
    closeOnClick: false,
    // pauseOnHover: true,
    draggable: false,
  });

export default Toast;
