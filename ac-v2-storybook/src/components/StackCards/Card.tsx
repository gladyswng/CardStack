import * as React from "react";
import "./card.css";

interface CardProps {
  card: {
    id: string;
    title: string;
    text: string;
  };
}

const Card: React.FC<CardProps> = props => {
  return <div>{props.card.title}</div>;
};

export default Card;
