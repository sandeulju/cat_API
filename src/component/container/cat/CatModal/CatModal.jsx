import React from "react";
import { useState } from "react";
import CatModalBasic from "./CatModalBasic";

const CatModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={showModal}>모달 띄우기</button>
      {modalOpen && <CatModalBasic setModalOpen={setModalOpen} />}
    </div>
  );
};

export default CatModal;
