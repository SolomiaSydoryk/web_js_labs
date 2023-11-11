import React from "react";
import {Card, Button } from "antd";
import { PriceSection } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title='No title.', text, imageSrc, price }) => (
  <Card 
    hoverable
    style={{ width: "410px", borderRadius: "20px" }}
    cover={
      <img style={{ borderRadius: "20px", height: "261px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={<h2 style={{ fontSize: "24px" }}>{title}</h2>} 
    description={<p style={{ fontSize: "16px" }}>{text}</p>} />
    <PriceSection>
      <p>${price}</p>
      <Button size="large">Show More</Button>
    </PriceSection>
  </Card>
);

export default CardItem;