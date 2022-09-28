import { useEffect } from "react";
import styles from "./ModalBasic.module.css";
import { ModalBackground, ModalWindow, ModalClose } from "./Styles";

const CatModalBasic = ({ catId, setModalOpen }) => {
  // 모달 끄기
  //   const catApis = useRecoilValueLoadable(catDataStateSelecter);
  //   const [content, setContent] = useRecoilState(catDataState);
  useEffect(() => {
    console.log("catId::", catId);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

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
