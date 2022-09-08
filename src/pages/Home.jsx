import React from 'react'

import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Sort from '../components/Sort';


function Home () {
      const [isLoading, setIsLoading] = React.useState(true); // отображение скелетона
      const [items, setItems] = React.useState([]); // получаем пиццы с бэкенда
      React.useEffect(() => {
        //..................
        fetch('https://63183e5bf6b281877c66ddb2.mockapi.io/items') //................
          .then((res) => {
            //.................
            return res.json(); //................
          }) //..................
          .then((json) => {
            setItems(json);
            setIsLoading(false); //когда стр загрузилась убераем пиццы показываем скелетон
          }); //...................
      }, []);
    
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) // при загрузке показываем скелетон  6 шт //! а когда загрузится сайт то пиццы
          : items.map((obj, index) => <PizzaBlock key={index} {...obj} />)}
      </div>
    </>
  );
}

export default Home;
