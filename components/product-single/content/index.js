import productsColors from './../../../data/products-colors';
import CheckboxColor from './../../products-filter/form-builder/checkbox-color';

const Content = () => {
  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>261311</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">T-Shirt Summer Vibes</h2>

        <div className="product__prices">
          <h4>$89.99</h4>
          <span>$119.99</span>
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map(type => (
              <CheckboxColor key={type.id} name="product-color" color={type.color} />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Size: <strong>See size table</strong></h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select>
                <option>Choose size</option>
              </select>
            </div>
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" className="quantity-button__btn">
                -
              </button>
              <span>1</span>
              <button type="button" className="quantity-button__btn">
                +
              </button>
            </div>
            
            <button type="submit" className="btn btn--rounded btn--yellow">Add to cart</button>
            <button type="button" className="btn-heart"><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    