import { CardData } from '../types';
import { getCardKey } from '../utils';
import Card from './Card/Card';

import styled from '@emotion/styled';

type PlayedCardsPileProps = {
  cards: CardData[];
};

const PlayedCardsPile = ({ cards }: PlayedCardsPileProps) => {
  const PlayedCardsContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(auto-fit, 0.5px);
  `;

  const CardWrapper = styled.div``;

  return (
    <PlayedCardsContainer>
      {cards.map((card) => (
        <CardWrapper key={getCardKey(card)}>
          <Card cardData={card} isVisible={true} isSelected={false} />
        </CardWrapper>
      ))}
    </PlayedCardsContainer>
  );
};

export default PlayedCardsPile;
