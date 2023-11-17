import React from "react";
import { Card, Button } from "antd";
import { PriceSection } from "./CardItem.styled";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CardItem = (props) => (
  <Link to={`/more/${props.id}`} style={{ textDecoration: "none", width: 400 }}>
    <Card
      hoverable
      style={{
        width: "410px",
        height: "700px",
        borderRadius: "20px",
        marginBottom: "30px",
      }}
      cover={
        <img
          style={{ borderRadius: "20px", height: "261px" }}
          alt="example"
          src={props.imageSrc}
        />
      }
    >
      <Meta
        title={<h2 style={{ fontSize: "24px", marginBottom: 0}}>{props.title}</h2>}
        description={[
          <p style={{ fontSize: "18px", color: "#4f4f4f" }}>{props.type}</p>,
          <p style={{ fontSize: "16px", color: "#4f4f4f" }}>{props.text}</p>,
        ]}
      />
      <PriceSection>
        <p>${props.price}</p>
        <Button size="large">Show More</Button>
      </PriceSection>
    </Card>
  </Link>
);

export default CardItem;
