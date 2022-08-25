import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0); // При клике на категории меняются вкладки категорий
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];// массив с категориями пицц
  const onClickCategories = (index) => { // тыц по категориям
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li onClick={() => onClickCategories(index)} className={activeIndex == index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
