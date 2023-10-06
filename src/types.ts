export enum CardSuits {
  CLUBS = '♣',
  DIAMONDS = '♦',
  HEARTS = '♥',
  SPADES = '♠',
}

export type CardSuit = `${CardSuits}`;
export type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A' | 'JOKER';
export type CardData = {
  suit: CardSuits;
  value: CardValue;
};
