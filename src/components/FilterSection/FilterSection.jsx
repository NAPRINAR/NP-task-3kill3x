import { useState } from 'react';
import './FilterSection.scss';

export const FilterSection = ({ filterResult, setFilterResult }) => {
  const [filter, setFilters] = useState({
    categories: ['All Categories', 'Clothing', 'Electronics', 'Footwear'],
    brands: ['A', 'B', 'C', 'D'],
  });

  const onFilterChange = (value, type) => {
    setFilterResult((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="filterSection">
      <h3 className="filterSection__header">Filters</h3>
      <div className="filterSection__selects">
        <select
          name="categories"
          id=""
          onChange={(e) => onFilterChange(e.target.value, 'category')}>
          {filter.categories.map((el, i) => {
            return <option key={`${el}_${i}`}>{el}</option>;
          })}
        </select>
        <select name="brands" onChange={(e) => onFilterChange(e.target.value, 'brand')}>
          {filter.brands.map((el, i) => {
            return <option key={`${el}_${i}`}>Brand {el}</option>;
          })}
        </select>
      </div>
      <div className="filterSection__price">
        <p>Price:${filterResult.price[1]}</p>
        <input
          type="range"
          min={0}
          max={500}
          value={filterResult.price[1]}
          onChange={(e) => onFilterChange([0, Number(e.target.value)], 'price')}
        />
      </div>

      <div className="filterSection__ratings">
        <h3>Rating</h3>
        <select name="ratings" id="" onChange={(e) => onFilterChange(e.target.value, 'rating')}>
          <option value={4.5}>4.5+</option>
          <option value={4.5}>4+</option>
          <option value={3.5}>3.5+</option>
        </select>
      </div>

      <div className="filterSection__sort">
        <h3>Sort by</h3>
        <select
          name="sort"
          id=""
          onChange={(e) => onFilterChange(e.target.value.toLowerCase(), 'sort')}>
          <option>Price</option>
          <option>Rating</option>
          <option>Popularity</option>
        </select>
      </div>
    </div>
  );
};
