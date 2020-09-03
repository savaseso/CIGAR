import { ToastContainer, toast } from 'react-toastify';

export const notify = (text) => toast.dark(text, {
    position: "bottom-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });