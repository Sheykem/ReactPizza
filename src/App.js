import React from 'react';

import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Categories from './components/Categories';
import Sort from './components/Sort';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Гавайская" price={190} />
            <PizzaBlock title="Сырная" price={180} />
            <PizzaBlock title="Маргарита" price={200} />
            <PizzaBlock title="Тайская" price={220} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
