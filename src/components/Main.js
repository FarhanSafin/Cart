import React from "react";
import Product from "./Product";


function Main(props) {

const {products, onAdd} = props;
    return (
        <div className="product-card">
        <div class="form-outline">
        <input type="search" id="form1" class="form-control" placeholder="Search Product" aria-label="Search" />
        </div>
            <div className="row block">
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd} className="product-card"></Product>
            ) )}
            </div>
            <div className="user">
            <hr></hr>
            <p>Dhanmondi | Register 1 | New Sale <button type="button" className="footer-button">Options</button> <button type="button">New Sale</button></p>
            </div>
        </div>
    )
}


export default Main