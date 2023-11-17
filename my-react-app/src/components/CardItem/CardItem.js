import React from "react";
import { Card, Button } from "antd";
import { PriceSection } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title = "No title.", type, text, imageSrc, price }) => (
  <Card
    hoverable
    style={{
      width: "410px",
      borderRadius: "20px",
      marginBottom: "30px"
    }}
    cover={
      <img
        style={{ borderRadius: "20px", height: "261px" }}
        alt="example"
        src={imageSrc}
      />
    }
  >
    <Meta
      title={<h2 style={{ fontSize: "24px", marginBottom: "0px" }}>{title}</h2>}
      description={
        <div>
          <p style={{ fontSize: "18px" }}>{type}</p>
          <p style={{ fontSize: "16px" }}>{text}</p>
        </div>
      }
    />
    <PriceSection>
      <p>${price}</p>
      <Button size="large">Show More</Button>
    </PriceSection>
  </Card>
);

export default CardItem;
