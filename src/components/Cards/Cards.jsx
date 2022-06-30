import React from "react";
import { Container } from "../../UI/Container/Container";
import Card from "../Card/Card";
import { CardContent, CardsSC } from "./CardsSC";

function Cards() {
  const cardsInfo = [
    {
      image: "./image/card-img1.webp",
      title: "Title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore quae illo ad. Totam ullam, a odit aut vitae illo?",
      id: 1,
    },
    {
      image: "./image/card-img2.webp",
      title: "Title 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore quae illo ad. Totam ullam, a odit aut vitae illo?",
      id: 2,
    },
    {
      image: "./image/card-img3.webp",
      title: "Title 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore quae illo ad. Totam ullam, a odit aut vitae illo?",
      id: 3,
    },
  ];
  return (
    <>
      <CardsSC>
        <Container>
          <CardContent>
            {cardsInfo.map((card) => {
              return (
                <Card
                  key={card.id}
                  title={card.title}
                  desc={card.desc}
                  image={card.image}
                />
              );
            })}
          </CardContent>
        </Container>
      </CardsSC>
    </>
  );
}

export default Cards;
