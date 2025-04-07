import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import "./Modal.css"

interface ModalProps {
  isOpen: boolean;
}


function Modal(props: React.PropsWithChildren<ModalProps>) {
  const { isOpen } = props;
  

  const el = useRef(document.createElement("div"));
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    const _el = el.current;
    modalRoot?.appendChild(_el);

    return () => {
      modalRoot?.removeChild(_el);
    };
  }, [modalRoot]);


  if (!isOpen) return null;

  const modal = (
    <div className="modal" data-testid="modal">
      <div className="modal-content">{props.children}</div>
    </div>
  );

  return ReactDOM.createPortal(modal, el.current);
}

export default Modal

