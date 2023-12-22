import { CardData } from '../types';
import CardContainer from './Card/CardContainer';

import styled from '@emotion/styled';

type HandProps = {
  cards?: CardData[];
  rotate?: 90 | -90 | 180 | 0;
  cardsVisible?: boolean;
  height?: string;
  width?: string;
};

const Hand = ({ cards, rotate = 0, cardsVisible = true, height = '100%', width = '100%' }: HandProps) => {
  const HandContainer = styled.div`
    rotate: ${rotate}deg;
    height: ${height};
    width: ${width};
  `;

  return (
    <HandContainer>
      <CardContainer cards={cards} cardsVisible={cardsVisible}></CardContainer>
    </HandContainer>
  );
};

export default Hand;
