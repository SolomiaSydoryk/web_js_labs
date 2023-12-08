import React, { useState } from "react";
import {
  PriceSection,
  SectionWrapper,
  StyledImage,
  StyledDescSection,
  StyledText,
  StyledButton,
  StyledButtonMini,
  CustomLink,
  ButtonWrapper,
  ModalButton,
} from "./DisplayMore.styled";
import dataCard from "../../components/CardData/CardData";
import { InputNumber, Modal, Space } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const DisplayMore = (props) => {
  const [value, setValue] = useState("1");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { game } = props;
  const dispatch = useDispatch();
  const addGame = () => {
    dispatch({
      type: "ADD_GAME",
      payLoad: {
        id: game.id,
        img: dataCard[game.id],
        name: game.name,
        price: game.price,
        count: parseInt(value),
      },
    });
    showConfirmModal();
  };

  const showConfirmModal = () => {
    setIsModalVisible(true);
  };

  const handleCart = () => {
    setIsModalVisible(false);
  };

  const handleContinue = () => {
    setIsModalVisible(false);
  };

  return (
    <SectionWrapper>
      <StyledImage>
        <img src={dataCard[game.id - 1].image} alt="#" />
      </StyledImage>
      <StyledDescSection>
        <h2>{game.name}</h2>
        <StyledText>{game.type}</StyledText>
        <StyledText>{game.description}</StyledText>
        <PriceSection>
          <h5 style={{ marginRight: "20px" }}>Price:</h5>${game.price}
        </PriceSection>
        <Space>
          <h3>Count of games to buy:</h3>
          <InputNumber min={1} max={10} value={value} onChange={setValue} />
          <StyledButtonMini
            type="primary"
            onClick={() => {
              setValue(1);
            }}
          >
            Reset
          </StyledButtonMini>
        </Space>
        <ButtonWrapper>
          <CustomLink exact to="/catalog" activeClassName="selected">
            <StyledButton style={{ marginTop: "20px", width: "200px" }}>
              GO BACK
            </StyledButton>
          </CustomLink>
          <StyledButton
            onClick={addGame}
            style={{ marginTop: "20px", width: "200px" }}
          >
            ADD TO CART
          </StyledButton>
        </ButtonWrapper>
      </StyledDescSection>
      <Modal
        title="Game added to cart"
        visible={isModalVisible}
        onOk={handleCart}
        onCancel={handleContinue}
        footer={[
          <ButtonWrapper>
            <NavLink key="back" to="/cart">
              <ModalButton onClick={handleCart}>Go to cart</ModalButton>
            </NavLink>
            ,
            <ModalButton
              key="continue"
              type="primary"
              onClick={handleContinue}
              style={{ marginLeft: "20px" }}
            >
              Continue shopping
            </ModalButton>
          </ButtonWrapper>,
        ]}
      >
        <p>{game.name} has been added to your cart.</p>
      </Modal>
    </SectionWrapper>
  );
};

export default DisplayMore;
