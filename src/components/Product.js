import React from 'react'
function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className="card" >
            <img className="small" src={product.image} alt={product.name }></img>
            <p className="name">{product.name}</p>
            <div  className="cart-btn">
                <button  onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;
