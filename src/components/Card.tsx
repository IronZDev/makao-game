import { useCallback } from 'react';

import { CardSuit, CardSuits, CardValue } from '../types';

import styled from '@emotion/styled';

const SMALL_TEXT = '4em';
const BIG_TEXT = '20em';
const JOKER_TEXT = '20em';
const SVG_BOX_WIDTH = 350;
const SVG_BOX_HEIGHT = 500;

type CardProps = {
  value: CardValue;
  color?: CardSuit;
  height?: string;
};

export default function Card({ value, color, height }: CardProps) {
  const Card = styled.svg`
    aspect-ratio: 0.7;
    height: ${height || 'auto'};
    overflow: visible;
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
    fill: ${color && [CardSuits.DIAMONDS.toString(), CardSuits.HEARTS.toString()].includes(color) ? 'red' : 'black'};
  `;

  const CornerSymbol = ({ rotated }: { rotated?: boolean }) => (
    <g transform={`rotate(${rotated ? 180 : 0}, ${SVG_BOX_WIDTH / 2}, ${SVG_BOX_HEIGHT / 2})`}>
      <text x="0.55em" y="1em" textAnchor="middle" fontSize={SMALL_TEXT}>
        {value}
      </text>
      <text x="0.55em" y="2em" textAnchor="middle" fontSize={SMALL_TEXT}>
        {color}
      </text>
    </g>
  );

  const JokerCornerSymbol = useCallback(
    ({ rotated }: { rotated?: boolean }) => (
      <g transform={`rotate(${rotated ? 180 : 0}, ${SVG_BOX_WIDTH / 2}, ${SVG_BOX_HEIGHT / 2})`}>
        {value
          .toString()
          .split('')
          .map((letter, letterIndex) => (
            <text key={letter} x="0.55em" y={`${letterIndex + 1}em`} textAnchor="middle" fontSize={SMALL_TEXT}>
              {letter}
            </text>
          ))}
      </g>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Card viewBox={`0 0 ${SVG_BOX_WIDTH} ${SVG_BOX_HEIGHT}`} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="BackgroundGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="100%" stopColor="rgba(150, 150, 150, 1)" />
        </linearGradient>
      </defs>
      <CardBackground />
      <CardElementsContainer>
        {value != 'JOKER' ? (
          <>
            <CornerSymbol />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize={BIG_TEXT}>
              {color}
            </text>
            <CornerSymbol rotated={true} />
          </>
        ) : (
          <>
            <JokerCornerSymbol />
            <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize={JOKER_TEXT}>
              🂿
            </text>
            <JokerCornerSymbol rotated={true} />
          </>
        )}
      </CardElementsContainer>
    </Card>
  );
}
