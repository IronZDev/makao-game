import { CardData } from '../types';
import { getCardKey } from '../utils';
import Card from './Card/Card';

import styled from '@emotion/styled';

type CardDrawPileProps = {
  cards: CardData[];
};

const CardDrawPile = ({ cards }: CardDrawPileProps) => {
  const DeckContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(auto-fit, 0.5px);
  `;

  const CardWrapper = styled.div``;

  // TODO
  const takeCard = () => {};

  return (
    <DeckContainer>
      {cards.map((card, index) => (
        <CardWrapper key={getCardKey(card)}>
          <Card cardData={card} isVisible={false} isSelected={false} onClickHandler={index === cards.length - 1 ? takeCard : undefined} />
        </CardWrapper>
      ))}
    </DeckContainer>
  );
};

export default CardDrawPile;
