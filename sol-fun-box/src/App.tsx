import type { Component } from 'solid-js';
import Card from './components/Card';

const App: Component = () => {
  return (
    <main class="app-main">
      <h1 class="app-title">Ты сегодня покормил кота?</h1>
      <div class="app-products">
        <Card />
      </div>
    </main>
  );
};

export default App;
