import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './categories.css';

function Categories() {
  const categoryURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(categoryURL);
      const { data } = response;
      const { categories } = data;
      console.log(categories);
      return categories;
    };

    fetchCategories().then((categories) => setCategories(categories));
  }, []);
  return (
    <div className='is-flex is-flex-wrap-wrap categories__container'>
      {categories &&
        categories.map((category) => {
          return (
            <div
              className='is-flex-direction-column card m-3 categories__category'
              key={category.id}>
              <div className='card-image mt-2'>
                <img src={category.strCategoryThumb} />
              </div>
              <div className='card-header'>
                <p className='card-header-title title categories__categoryTitle'>
                  {category.strCategory}
                </p>
              </div>
              <div className='card-content'>
                <div className='content'>{category.strCategoryDescription}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Categories;
