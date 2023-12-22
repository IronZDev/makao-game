/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';

import { CardData } from '../../types';
import Card from './Card';

import styled from '@emotion/styled';

type CardContainerProps = {
  cards?: CardData[];
  cardsVisible?: boolean;
};

const CardContainer = ({ cards, cardsVisible = true }: CardContainerProps) => {
  const [selectedCards, setSelectedCards] = useState(new Map());
  const [handPadding, setHandPadding] = useState('0');
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const handContainerRef = useRef(null);

  // Update new padding on each resize and change of number of cards in hand
  useEffect(() => {
    const cardCount = cards?.length;
    const container = handContainerRef.current as unknown as HTMLDivElement;
    if (cardCount && container) {
      const cardWrapper = container.children[0] as unknown as HTMLDivElement;
      const cardSvg = cardWrapper.children[0] as unknown as SVGElement;
      setHandPadding(`${cardSvg?.getBoundingClientRect().width - cardWrapper?.offsetWidth}px`);
    }
  }, [cards?.length, windowWidth, windowHeight]);

  const CardContainer = styled.div`
    height: 100%;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, max-content));
    padding-right: ${handPadding};
    pointer-events: ${!cardsVisible ? 'none' : 'all'};
  `;
  const getCardKey = (card: CardData) => `${card.value}${card.suit}`;

  const onCardClick = (card: CardData) => {
    const key = getCardKey(card);
    setSelectedCards(new Map(selectedCards.set(key, !selectedCards.get(key))));
  };

  return (
    <CardContainer ref={handContainerRef}>
      {cards?.map((card) => (
        <Card
          key={getCardKey(card)}
          cardData={card}
          isVisible={cardsVisible}
          onClickHandler={() => onCardClick(card)}
          isSelected={!!selectedCards.get(getCardKey(card))}
        />
      ))}
    </CardContainer>
  );
};

export default CardContainer;
