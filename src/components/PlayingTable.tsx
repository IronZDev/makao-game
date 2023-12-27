import { CardData, CardSuits } from '../types';
import CardDrawPile from './CardDrawPile';
import Hand from './Hand';
import PlayedCardsPile from './PlayedCardsPile';

import styled from '@emotion/styled';
type PlayingTableProps = {
  numberOfPlayers: 1 | 2; // TODO: Add support for 3/4 players
};

const PlayingTable = () => {
  const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-areas:
      '. Player2 Player2 Player2 .'
      'Player4 . . . Player3'
      'Player4 . Deck . Player3'
      'Player4 . . . Player3'
      '. Player1 Player1 Player1 .';
    width: 100%;
    height: 100%;
    background: rgb(3, 0, 121);
    background: radial-gradient(circle, rgba(3, 0, 121, 1) 0%, rgba(2, 15, 150, 1) 59%, rgba(0, 48, 214, 1) 100%);
    .player {
      transform-origin: center;
      position: relative;
    }
    .first-player {
      grid-area: Player1;
    }
    .second-player {
      grid-area: Player2;
      margin-bottom: auto;
    }
    .third-player {
      grid-area: Player3;
    }
    .fourth-player {
      grid-area: Player4;
      margin-right: auto;
    }
  `;

  const HandWrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const DeckWrapper = styled.div`
    grid-area: Deck;
    display: inline-flex;
    gap: 50px;
  `;

  const cards: CardData[] = [
    { value: 'K', suit: CardSuits.DIAMONDS },
    { value: 'Q', suit: CardSuits.DIAMONDS },
    { value: 'J', suit: CardSuits.SPADES },
    { value: 'K', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
    { value: 'Q', suit: CardSuits.SPADES },
  ];
  return (
    <Table>
      <DeckWrapper>
        <CardDrawPile cards={cards} />
        <PlayedCardsPile cards={cards} />
      </DeckWrapper>
      <HandWrapper className="player first-player">
        <Hand cards={cards} />
      </HandWrapper>
      <HandWrapper className="player second-player">
        <Hand cards={cards} rotate={180} cardsVisible={false} />
      </HandWrapper>
    </Table>
  );
};

export default PlayingTable;
