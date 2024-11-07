import { useEffect, useState } from 'react';
import { FilterSection } from '../FilterSection/FilterSection';
import { Product } from '../Product/Product';
import data from '../../assets/data.json';
import './Main.scss';
export const Main = () => {
  const [products, setProducts] = useState(data);
  const [filterResult, setFilterResult] = useState({
    category: '',
    brand: '',
    price: [0, 500],
    rating: '',
    sort: '',
  });
  useEffect(() => {
    const addFilters = () => {
      const results = data.filter((product) => {
        if (filterResult.category === 'All Categories') {
          setFilterResult((prev) => ({ ...prev, category: '' }));
        }

        const categoryFilter = filterResult.category
          ? product.category === filterResult.category
          : true;
        const brandFilter = filterResult.brand ? product.brand === filterResult.brand : true;
        const priceFilter =
          product.price >= filterResult.price[0] && product.price <= filterResult.price[1];
        const ratingFilter = filterResult.rating ? product.rating >= filterResult.rating : true;
        return categoryFilter && brandFilter && priceFilter && ratingFilter;
      });

      if (filterResult.sort) {
        results.sort((first, second) => {
          switch (filterResult.sort) {
            case 'price':
              return first.price - second.price;
            case 'rating':
              return second.rating - first.rating;
            case 'popularity':
              return first.popularity - second.popularity;
            default:
              return;
          }
        });
      }

      setProducts(results);
    };
    addFilters();
  }, [filterResult]);

  return (
    <div className="main">
      <FilterSection filterResult={filterResult} setFilterResult={setFilterResult} />
      <Product data={products} />
    </div>
  );
};
