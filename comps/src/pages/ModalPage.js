import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        {" "}
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>accept bitch</p>
    </Modal>
  );

  return (
    <div className="relative">
      {showModal && modal}
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      v{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum tincidunt tempor. Nam vulputate ante non ex porttitor volutpat.
        Curabitur eu consectetur tellus. Suspendisse accumsan lorem sed dolor
        maximus, quis egestas dolor luctus. Mauris vel pulvinar eros, at
        convallis nulla. Nam lacus mauris, ornare accumsan mattis quis, accumsan
        pharetra nisl. Vivamus sed ornare nunc.
      </p>
    </div>
  );
}

export default ModalPage;
