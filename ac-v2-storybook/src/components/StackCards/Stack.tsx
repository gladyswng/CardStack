import * as React from "react";
import Card from "./Card";
import "./stack.css";

interface CardProps {
  cards: {
    id: string;
    title: string;
    text: string;
  }[];
  onClickHandler: (e: any) => void;
}

class Stack extends React.Component<CardProps> {
  // private cardElement = React.createRef<HTMLDivElement>();
  constructor(props: CardProps) {
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
  }

  state = { styleClass: "", cardsOrdered: [...this.props.cards] };

  onCardClick(e: any) {
    const { cardsOrdered } = this.state;

    this.setState({ styleClass: "cardOnClick" });

    setTimeout(async () => {
      await this.setState({
        styleClass: "",
        cardsOrdered: [...cardsOrdered.slice(1, 5), cardsOrdered[0]]
      });

      //[cardsOrdered[0], ...cardsOrdered.slice(1)]
    }, 700);
    console.log(cardsOrdered);
  }

  render() {
    const cardStack = this.state.cardsOrdered.reverse();
    console.log(this.state.cardsOrdered);
    return (
      <div className="stack" onClick={this.onCardClick}>
        {cardStack.map((card, i) => {
          return (
            <div
              className={`card ${
                i === cardStack.length - 1 ? this.state.styleClass : ""
              }`}
              key={card.id}
            >
              <Card card={card} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Stack;
