import { Button, Card, Div, Spacing, Text, Title } from "@vkontakte/vkui";
import * as React from "react";
import "./styles.css";
import { TProductMapped } from "../../utils/types";

type TProductCardProps = {
  info: TProductMapped;
};
const ProductCard = (props: TProductCardProps) => {
  const { title, qty, image, description, price } = props.info;
  return (
    <Card style={{ borderRadius: "20px" }}>
      <Div className="card__container">
        <img className="card__image" src={image} alt="image" />
        <Spacing />
        <Title>{title}</Title>
        <Spacing />
        <Text>{description}</Text>
        <Spacing />
        <Text>Цена за 1 шт. {price} руб.</Text>
        <Div className="card__buttonsContainer">
          <Div className="card__buttonsContainer_counter">
            <Button>+</Button>
            <Text>{qty}</Text>
            <Button>-</Button>
          </Div>
          <Text>Total price</Text>
          <Button>delete</Button>
        </Div>
      </Div>
    </Card>
  );
};

export default ProductCard;
