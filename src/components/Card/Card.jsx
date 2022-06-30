import React from "react";
import {
  CardButton,
  CardDesc,
  CardIblock,
  CardImg,
  CardSC,
  CardText,
  CardTitle,
} from "./CardSC";

function Card({image, title, desc}) {
  return (
    <>
      <CardSC>
        <CardIblock>
          <CardImg src={image} />
        </CardIblock>
        <CardText>
          <CardTitle>{title}</CardTitle>
          <CardDesc>
            {desc}
          </CardDesc>
          <CardButton>Подробнее</CardButton>
        </CardText>
      </CardSC>
    </>
  );
}

export default Card;
