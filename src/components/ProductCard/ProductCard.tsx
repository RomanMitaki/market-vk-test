import { Button, Card, Div, Text, Title } from "@vkontakte/vkui";
import * as React from "react";
import "./styles.css";

const ProductCard = () => {
  return (
    <Card style={{ borderRadius: "20px" }}>
      <Div className="card__container">
        <img
          className="card__image"
          src="https://source.unsplash.com/b5D7zjvY184"
          alt=""
        />
        <Title>Product</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          modi vero voluptas. Adipisci at autem dolore error impedit inventore
          laborum magni necessitatibus obcaecati, optio perferendis praesentium
          quasi sed temporibus voluptates?
        </Text>
        <Div>
          <Div>
            <Button>+</Button>
            <Text>10</Text>
            <Button>-</Button>
          </Div>
          <Text>2300</Text>
          <Button>delete</Button>
        </Div>
      </Div>
    </Card>
  );
};

export default ProductCard;
