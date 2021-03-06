import React, { useEffect } from "react";
import Modal from "react-modal";
//

Modal.setAppElement("#root");
const Expandmessage = ({ title, description, file, tag, time, postedBy }) => {
  const [color, setColor] = React.useState("");
  useEffect(() => {
    if (tag === "red") {
      setColor("#F87171");
    } else if (tag === "green") {
      setColor("#34D399");
    } else {
      setColor("#FBBF24");
    }
  }, [tag]);
  const customStyles = {
    content: {
      top: "50%",
      backgroundColor: "#1D2127",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "90%",
      color: "#fff",
      borderRadius: "20px",
      borderTop: `10px solid ${color}`,
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  // const color = new TailwindColor().pick()
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="w-4 h-4 cursor-pointer ml-auto" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-full cursor-pointer mb-1" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-auto "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex justify-between">
          <div className="text-md mb-1  text-gray-100">{postedBy}</div>
          <p className="text-sm ml-auto">{time}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm mt-1 w-full">{description}</p>
          {file && (
            <p className="w-full h-32">
              <img src={file} alt="Attachment" className="h-64 w-full mt-10" />
            </p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Expandmessage;
