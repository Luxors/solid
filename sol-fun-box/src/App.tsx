import { type Component, For } from 'solid-js';

import { ICard } from './utils/types';
import Card from './components/Card';

const products: ICard[] = [
  {
    id: 1,
    consist: 'фуа-гра',
    quantity: 10,
    weight: '0,5',
    slogan: 'Печень утки разварная с артишоками.',
  },
  {
    id: 2,
    consist: 'рыбой',
    quantity: 40,
    gift: 2,
    weight: '2',
    slogan: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    id: 3,
    consist: 'курой',
    quantity: 100,
    gift: 5,
    weight: '5',
    isDisabled: true,
    slogan: null,
  },
];

const App: Component = () => {
  return (
    <main class="app-main">
      <h1 class="app-title">Ты сегодня покормил кота?</h1>
      <div class="app-products">
        <For each={products}>{(item) => <Card {...item} />}</For>
      </div>
    </main>
  );
};

export default App;
