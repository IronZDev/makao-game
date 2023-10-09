import { CardSuits } from './types';
import Hand from './components/Hand';

import './App.css';

function App() {
  return (
    <>
      <Hand
        cards={[
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
        ]}
        cardsVisible={true}
      />
    </>
  );
}

export default App;
