import { useCallback } from 'react';

import { CardSuit, CardValue } from '../../types';

const SMALL_TEXT = '4em';
const BIG_TEXT = '20em';
const JOKER_TEXT = '20em';
const SVG_BOX_WIDTH = 350;
const SVG_BOX_HEIGHT = 500;

type CardFrontProps = {
  value: CardValue;
  suit?: CardSuit;
};

export default function CardFront({ value, suit }: CardFrontProps) {
  const CornerSymbol = useCallback(
    ({ rotated }: { rotated?: boolean }) => (
      <g transform={`rotate(${rotated ? 180 : 0}, ${SVG_BOX_WIDTH / 2}, ${SVG_BOX_HEIGHT / 2})`}>
        <text x="0.55em" y="1em" textAnchor="middle" fontSize={SMALL_TEXT}>
          {value}
        </text>
        <text x="0.55em" y="2em" textAnchor="middle" fontSize={SMALL_TEXT}>
          {suit}
        </text>
      </g>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
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
    <>
      {value != 'JOKER' ? (
        <>
          <CornerSymbol />
          {/* For some reason unicode symbols are not centered properly, have to use magic number, TextSize issue? */}
          <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize={BIG_TEXT}>
            {suit}
          </text>
          <CornerSymbol rotated={true} />
        </>
      ) : (
        <>
          <JokerCornerSymbol />
          {/* For some reason unicode symbol for Joker is not centered properly */}
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize={JOKER_TEXT}>
            🂿
          </text>
          <JokerCornerSymbol rotated={true} />
        </>
      )}
    </>
  );
}
