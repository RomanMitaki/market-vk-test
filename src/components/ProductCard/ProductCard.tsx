import { Button, Card, Div, Spacing, Text, Title } from "@vkontakte/vkui";
import * as React from "react";
import "./styles.css";
import { TProductMapped } from "../../utils/types";
import { useAppDispatch } from "../../services/hooks/useAppDispatch";
import { useAppSelector } from "../../services/hooks/useAppSelector";
import { useMemo } from "react";
import {
  decreaseItem,
  deleteItem,
  increaseItem,
} from "../../services/slices/products";

type TProductCardProps = {
  info: TProductMapped;
};
const ProductCard = (props: TProductCardProps) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((store) => store.products);
  const { title, qty, image, description, price, id } = props.info;

  const totalItemsPrice = useMemo(() => {
    return (price * qty).toFixed(2);
  }, [qty]);

  const onDelete = () => {
    dispatch(deleteItem(id));
  };
  const decrease = () => {
    dispatch(decreaseItem(id));
  };
  const increase = () => {
    dispatch(increaseItem(id));
  };

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
            <Button disabled={qty === 1} onClick={decrease}>
              -
            </Button>
            <Button disabled={qty === 10} onClick={increase}>
              +
            </Button>
            <Text>{qty}</Text>
          </Div>
          <Text>{totalItemsPrice}</Text>
          <Button onClick={onDelete}>delete</Button>
        </Div>
      </Div>
    </Card>
  );
};

export default ProductCard;
