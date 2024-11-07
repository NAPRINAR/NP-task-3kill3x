import './Product.scss';

export const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="product__items">
        {data.map((el, i) => {
          return (
            <div key={el.name} className="product__item">
              <img src={el.imageUrl} alt={el.name} />
              <p>
                <span>Name:</span>
                {el.name}
              </p>
              <p>
                <span>Category:</span>
                {el.category}
              </p>
              <p>
                <span>Price:</span>
                {el.price}
              </p>
              <p>
                <span>Brand:</span>
                {el.brand}
              </p>
              <span>Rating:</span>
              {el.rating}
            </div>
          );
        })}
      </div>
    </div>
  );
};
