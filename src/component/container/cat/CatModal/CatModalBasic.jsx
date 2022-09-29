import { useEffect, useRef } from "react";

import { ModalBackground, ModalWindow, ModalClose } from "./Styles";

const CatModalBasic = ({ catId, setModalOpen }) => {
  //   const catApis = useRecoilValueLoadable(catDataStateSelecter);
  //   const [content, setContent] = useRecoilState(catDataState);
  // useEffect(() => {
  //   console.log("catId::", catId);
  // }, []);

  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  //   const modalRef = useRef < HTMLDivElement > null;

  //   useEffect((e) => {
  //     const handler = () => {
  //       if (modalRef.current && !modalRef.current.contains(e.target)) {
  //         setModalOpen(false);
  //       }
  //     };

  //     document.addEventListener("mousedown", handler);

  //     return () => {
  //       document.removeEventListener("mousedown", handler);
  //     };
  //   });

  return (
    <ModalBackground>
      <ModalWindow>
        <div className={"modal-header"}>
          <ModalClose onClick={closeModal}>X</ModalClose>
          <p>고양이 소개가 들어갈 모달모달모달.</p>
        </div>
        <p style={{ padding: "20px" }}>아이디는: {catId}</p>
      </ModalWindow>
    </ModalBackground>
  );
};
export default CatModalBasic;
