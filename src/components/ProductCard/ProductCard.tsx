import {
  Button,
  Card,
  Div,
  IconButton,
  Separator,
  Spacing,
  Text,
  Title,
} from "@vkontakte/vkui";
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
import { Icon24Delete } from "@vkontakte/icons";

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
        <Div className="card__imageContainer">
          <img className="card__image" src={image} alt="image" />
        </Div>
        <Spacing />
        <Title className="card__title">{title}</Title>
        <Spacing />
        <Text className="card__description">{description}</Text>
        <Spacing />
        <Text>
          Цена за 1 шт. <span style={{ color: "green" }}>{price}</span> руб.
        </Text>
        <Div className="card__buttonsContainer">
          <Div className="card__buttonsContainer_counter">
            <Button disabled={qty === 1} onClick={decrease}>
              -
            </Button>
            <Separator />
            <Text style={{ lineHeight: "1.8" }}>{qty}</Text>
            <Separator />
            <Button disabled={qty === 10} onClick={increase}>
              +
            </Button>
          </Div>
          <Text style={{ color: "green" }}>{`${totalItemsPrice} руб.`}</Text>
          <div>
            <IconButton aria-label="Удалить 24" onClick={onDelete}>
              <Icon24Delete fill={"red"} />
            </IconButton>
          </div>
        </Div>
      </Div>
    </Card>
  );
};

export default ProductCard;
