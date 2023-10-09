/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';

import { CardData } from '../types';
import Card from './Card/Card';

import styled from '@emotion/styled';

type HandProps = {
  cards?: CardData[];
  cardsVisible?: boolean;
  height?: string;
};

const Hand = ({ cards, cardsVisible = true, height = '140px' }: HandProps) => {
  const [selectedCards, setSelectedCards] = useState(new Map());
  const [handPaddingRight, setHandPaddingRight] = useState('0');
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const handContainerRef = useRef(null);

  // Update new padding on each resize and change of number of cards in hand
  useEffect(() => {
    const cardCount = cards?.length;
    const container = handContainerRef.current as unknown as HTMLDivElement;
    if (cardCount && container) {
      const cardWrapper = container.children[0] as unknown as HTMLDivElement;
      const cardSvg = cardWrapper.children[0] as unknown as SVGElement;
      setHandPaddingRight(`${cardSvg?.getBoundingClientRect().width - cardWrapper?.offsetWidth}px`);
    }
  }, [cards?.length, windowWidth, windowHeight]);

  const HandContainer = styled.div`
    width: 75%;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    height: ${height};
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, max-content));
    padding-right: ${handPaddingRight};
    pointer-events: ${!cardsVisible ? 'none' : 'all'};
  `;

  type CardWrapperProps = {
    isSelected: boolean;
  };

  const CardWrapper = styled.div<CardWrapperProps>`
    margin-top: ${(props) => (props.isSelected ? '0px' : '40px')};
    &: hover {
      margin-top: ${(props) => (props.isSelected ? '0px' : '15px')};
    }
  `;

  const getCardKey = (card: CardData) => `${card.value}${card.suit}`;

  const onCardClick = (card: CardData) => {
    const key = getCardKey(card);
    setSelectedCards(new Map(selectedCards.set(key, !selectedCards.get(key))));
  };
  return (
    <HandContainer ref={handContainerRef}>
      {cards?.map((card) => (
        <CardWrapper key={`${card.suit}${card.value}`} isSelected={!!selectedCards.get(getCardKey(card))} onClick={() => onCardClick(card)}>
          <Card value={card.value} suit={card.suit} height={`${parseInt(height) - 40}px`} isVisible={cardsVisible} />
        </CardWrapper>
      ))}
    </HandContainer>
  );
};

export default Hand;
