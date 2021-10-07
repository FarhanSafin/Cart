import React from 'react';

export default function Basket(props) {
  const { cartItems, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <div className="blocked  ">
      <a href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>Add Customer</a>
      <hr></hr>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
              <svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="10" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
              </button>{' '}
            </div>

            <div className="col-2 text-right">
              {item.qty} x BDT{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="calculation">
            <div className="row">
              <div className="col-2">Discount</div>
              <div className="  text-right">BDT0.00</div>
            </div>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="  text-right">BDT{itemsPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax (0%)</div>
              <div className="  text-right">BDT0</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total</strong>
              </div>
              <div className="  text-right">
                <strong>BDT{totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-2">
                <button className="paybutton">Pay</button>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}