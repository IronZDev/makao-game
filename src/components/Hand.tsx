import { CardData } from '../types';
import Card from './Card/Card';

import styled from '@emotion/styled';

type HandProps = {
  cards?: CardData[];
  cardsVisible?: boolean;
};

export default function Hand({ cards, cardsVisible = true }: HandProps) {
  const HandContainer = styled.div`
    max-width: 75%;
    display: inline-flex;
    justify-content: center;
  `;
  const CardWrapper = styled.div`
    overflow: hidden;
    &: last-child ${cardsVisible ? ',: hover' : ''} {
      overflow: visible;
    }
  `;
  return (
    <HandContainer>
      {cards?.map((card) => (
        <CardWrapper key={`${card.suit}${card.value}`}>
          <Card value={card.value} suit={card.suit} height="100px" isVisible={cardsVisible} />
        </CardWrapper>
      ))}
    </HandContainer>
  );
}
