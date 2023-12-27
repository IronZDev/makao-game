import { CardData } from './types';

export const getCardKey = (card: CardData) => `${card.value}${card.suit}`;
