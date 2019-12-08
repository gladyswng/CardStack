import * as React from "react";
import { useState } from "react";
import "./index.css";

import Stack from "./Stack";

type CardsState = {
  cards: {
    id: string;
    title: string;
    text: string;
  }[];
};

class StackCards extends React.Component<{}, CardsState> {
  state = {
    cards: [
      {
        id: "13254",
        title: "1",
        text: "Test 1"
      },
      {
        id: "1267",
        title: "2",
        text: "Test 2"
      },
      {
        id: "0983",
        title: "3",
        text: "More test"
      },
      {
        id: "1353",
        title: "4",
        text: "More test"
      },
      {
        id: "67891",
        title: "5",
        text: "More test"
      }
    ]
  };
  // const [cardState, setCard ] = useState<{ id: string; title: string }[]>([])

  swap = (e: any) => {
    // if (e.target !== this.state.cards[4]) return;
    // this.state.cards[4].style.animation = "swap 700ms forwards";
    // setTimeout(() => {
    //   cardNode.style.animation = "";
    // }, 700);
  };
  render() {
    const onClickHandler = (e: any) => {
      this.swap(e);
    };

    return <Stack onClickHandler={onClickHandler} cards={this.state.cards} />;
  }
}

export default StackCards;
