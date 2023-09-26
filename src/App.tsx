import { CardSuits } from './types';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <>
      <Card value={'JOKER'} color={CardSuits.SPADES} height={'150px'} />
    </>
  );
}

export default App;
