import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Background from '../Background/Background';
import './cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [orderSummary, setOrderSummary] = useState('');

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    updateCart(updatedCart);
  };

  const applyCoupon = () => {
    // Example coupon codes
    const coupons = {
      'WELCOME10': 10,
      'SUMMER20': 20,
      'SPECIAL15': 15
    };

    if (coupons[couponCode]) {
      setCouponApplied(true);
      setCouponDiscount(coupons[couponCode]);
    } else {
      alert('Invalid coupon code');
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * couponDiscount) / 100;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const shipping = subtotal > 0 ? 10 : 0; // $10 shipping fee
    return subtotal - discount + shipping;
  };

  const handleCheckoutClick = () => {
    setShowCheckoutModal(true);
  };

  const handleCheckoutFormChange = (e) => {
    setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
  };

  const handleCheckoutFormSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    let summary = `Order Summary\n\nName: ${checkoutForm.name}\nEmail: ${checkoutForm.email}\nPhone: ${checkoutForm.phone}\nShipping Address: ${checkoutForm.address}\n\nCart Items:\n`;
    cartItems.forEach((item, i) => {
      summary += `Item ${i+1}: ${item.title} | Size: ${item.selectedSize} | Color: ${item.selectedColor} | Qty: ${item.quantity} | Price: $${item.price}\n`;
    });
    summary += `\nSubtotal: $${calculateSubtotal().toFixed(2)}\nShipping: $${calculateSubtotal() > 0 ? '10.00' : '0.00'}\n`;
    if (couponApplied) summary += `Discount: -$${calculateDiscount().toFixed(2)}\n`;
    summary += `Total: $${calculateTotal().toFixed(2)}`;
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setOrderSummary(summary);
    }, 500);
  };

  return (
    <div className="navbar_background">
      <Background />
      <Navbar />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <button onClick={() => navigate('/')} className="continue-shopping">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p className="item-type">{item.type}</p>
                    <div className="item-options">
                      <span>Size: {item.selectedSize}</span>
                      <span>Color: {item.selectedColor}</span>
                    </div>
                    <div className="item-price">
                      <span className="current-price">${item.price.toFixed(2)}</span>
                      {item.originalPrice && (
                        <span className="original-price">${item.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                  <div className="item-quantity">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span>${calculateSubtotal() > 0 ? '10.00' : '0.00'}</span>
              </div>
              {couponApplied && (
                <div className="summary-item discount">
                  <span>Discount ({couponDiscount}%)</span>
                  <span>-${calculateDiscount().toFixed(2)}</span>
                </div>
              )}
              <div className="summary-item total">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>

              <div className="coupon-section">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  disabled={couponApplied}
                />
                <button 
                  onClick={applyCoupon}
                  disabled={couponApplied || !couponCode}
                >
                  Apply
                </button>
              </div>

              <button 
                className="checkout-button"
                onClick={handleCheckoutClick}
              >
                Proceed to Checkout
              </button>

              <button 
                className="continue-shopping"
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
      {showCheckoutModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => setShowCheckoutModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2>Checkout</h2>
            {sent ? (
              <div className="success-message">
                <h3 style={{color: '#22b455', marginBottom: '1rem'}}>Your Order Request</h3>
                <pre style={{textAlign: 'left', background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>{orderSummary}</pre>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleCheckoutFormSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" value={checkoutForm.name} onChange={handleCheckoutFormChange} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={checkoutForm.email} onChange={handleCheckoutFormChange} required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" name="phone" value={checkoutForm.phone} onChange={handleCheckoutFormChange} required />
                </div>
                <div className="form-group">
                  <label>Shipping Address</label>
                  <textarea name="address" value={checkoutForm.address} onChange={handleCheckoutFormChange} required />
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-review" disabled={sending}>{sending ? 'Processing...' : 'Show Order Summary'}</button>
                  <button type="button" className="cancel-review" onClick={() => setShowCheckoutModal(false)} disabled={sending}>Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
