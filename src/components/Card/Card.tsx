import { CardSuit, CardSuits, CardValue } from '../../types';
import CardBack from './CardBack';
import CardFront from './CardFront';

import styled from '@emotion/styled';

const SVG_BOX_WIDTH = 350;
const SVG_BOX_HEIGHT = 500;

type CardProps = {
  value: CardValue;
  suit?: CardSuit;
  isVisible?: boolean;
  backColor?: string;
  height?: string;
};

const Card = ({ value, suit, isVisible = true, backColor, height }: CardProps) => {
  const Card = styled.svg`
    aspect-ratio: 0.7;
    height: ${height || 'auto'};
    overflow: hidden;
    font-family: SigmarOne;
  `;

  const CardBackground = styled.rect`
    width: 100%;
    height: 100%;
    fill: url(#BackgroundGradient);
    border: 10em rgb(125, 125, 125) solid;
    stroke: rgb(125, 125, 125);
    stroke-width: 0.5em;
    rx: 15px;
    ry: 15px;
  `;
  const CardElementsContainer = styled.g`
    pointer-events: none;
    user-select: none;
    width: 100%;
    height: 100%;
    fill: ${suit && [CardSuits.DIAMONDS.toString(), CardSuits.HEARTS.toString()].includes(suit) ? 'red' : 'black'};
  `;
  return (
    <Card viewBox={`0 0 ${SVG_BOX_WIDTH} ${SVG_BOX_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="BackgroundGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="100%" stopColor="rgba(150, 150, 150, 1)" />
        </linearGradient>
      </defs>
      <CardBackground />
      <CardElementsContainer>{isVisible ? <CardFront value={value} suit={suit} /> : <CardBack color={backColor} />}</CardElementsContainer>
    </Card>
  );
};

export default Card;
