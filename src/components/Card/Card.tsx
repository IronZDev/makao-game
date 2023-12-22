import { CardData, CardSuits } from '../../types';
import CardBack from './CardBack';
import CardFront from './CardFront';

import styled from '@emotion/styled';

const SVG_BOX_WIDTH = 350;
const SVG_BOX_HEIGHT = 500;

type CardProps = {
  cardData: CardData;
  onClickHandler: () => void;
  isVisible?: boolean;
  isSelected?: boolean;
  height?: string;
  width?: string;
};

const Card = ({ cardData, onClickHandler, isVisible = true, isSelected = false, height = '100%', width = 'auto' }: CardProps) => {
  const CardWrapper = styled.div`
    position: relative;
    margin-top: auto;
    height: calc(${height} - 15px);
    width: ${width};
    margin-bottom: ${isSelected ? '15px' : '0px'};
    &: hover {
      margin-bottom: 15px;
      cursor: pointer;
    }
  `;
  const Card = styled.svg`
    height: ${height};
    width: ${width};
    padding: 3px;
    ${isSelected &&
    `
      padding: 0px;
      border: 3px solid gold;
      border-radius: 5px;
    `}
    aspect-ratio: 0.7;
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
    fill: ${cardData.suit && [CardSuits.DIAMONDS.toString(), CardSuits.HEARTS.toString()].includes(cardData.suit) ? 'red' : 'black'};
  `;
  return (
    <CardWrapper onClick={() => onClickHandler()}>
      <Card viewBox={`0 0 ${SVG_BOX_WIDTH} ${SVG_BOX_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="BackgroundGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="100%" stopColor="rgba(150, 150, 150, 1)" />
          </linearGradient>
        </defs>
        <CardBackground />
        <CardElementsContainer>
          {isVisible ? <CardFront value={cardData.value} suit={cardData.suit} /> : <CardBack />}
        </CardElementsContainer>
      </Card>
    </CardWrapper>
  );
};

export default Card;
