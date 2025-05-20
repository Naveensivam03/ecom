import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Background from '../Background/Background';
import './descrip.css';
import { categoryProducts } from '../product_listing/product_list';

const ProductDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [userReview, setUserReview] = useState({
    rating: 5,
    comment: '',
    name: ''
  });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [orderSummary, setOrderSummary] = useState('');
  const [choices, setChoices] = useState([]);

  // Find the product from all categories
  const product = Object.values(categoryProducts).flat().find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="navbar_background">
        <Background />
        <Navbar />
        <div className="product-description-container">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/')}>Return to Home</button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddChoice = () => {
    if (!selectedSize || !selectedColor || quantity < 1) {
      alert('Please select size, color, and quantity.');
      return;
    }
    setChoices(prev => [
      ...prev,
      {
        size: selectedSize,
        color: selectedColor,
        quantity,
      }
    ]);
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
  };

  const handleRemoveChoice = (idx) => {
    setChoices(prev => prev.filter((_, i) => i !== idx));
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedSize,
      selectedColor
    };
    
    // Get existing cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(
      item => item.id === cartItem.id && 
              item.selectedSize === cartItem.selectedSize && 
              item.selectedColor === cartItem.selectedColor
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity += cartItem.quantity;
    } else {
      // Add new item if it doesn't exist
      cart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success message
    alert('Item added to cart successfully!');
  };

  const handleContactToBuy = () => {
    setShowContactModal(true);
  };

  const handleContactFormChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    let summary = `Order Summary\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}\nPhone: ${contactForm.phone}\nShipping Address: ${contactForm.address}\n\nProduct: ${product.title}\n`;
    choices.forEach((c, i) => {
      summary += `Choice ${i+1}: Size: ${c.size}, Color: ${c.color}, Qty: ${c.quantity}\n`;
    });
    summary += `\nTotal Choices: ${choices.length}`;
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setOrderSummary(summary);
    }, 500);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement review submission
    console.log('Review submitted:', userReview);
    setShowReviewForm(false);
    setUserReview({ rating: 5, comment: '', name: '' });
  };

  const renderStars = (rating) => {
    return Array(5).fill('').map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="navbar_background">
      <Background />
      <Navbar />
      <div className="product-description-container">
        <button className="back-arrow" onClick={() => navigate(-1)} aria-label="Go back">←</button>
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="thumbnail-gallery">
            <div
              className={`thumbnail ${selectedImage === 0 ? 'active' : ''}`}
              onClick={() => setSelectedImage(0)}
            >
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        </div>

        <div className="product-details">
          <div className="product-header">
            <h1>{product.title}</h1>
            <div className="product-meta">
              <div className="rating">
                {renderStars(product.rating)}
                <span className="reviews">({product.reviews} reviews)</span>
              </div>
              <div className="type">{product.type}</div>
            </div>
          </div>

          <div className="price-section">
            <div className="current-price">${product.price.toFixed(2)}</div>
            <div className="original-price">${product.originalPrice.toFixed(2)}</div>
            <div className="discount-badge">{product.discount}</div>
          </div>

          <div className="product-description">
            <p>Premium quality t-shirt featuring {product.type.toLowerCase()} designs. Made from 100% cotton for maximum comfort and durability. Perfect for casual wear.</p>
          </div>

          <div className="product-features">
            <h3>Features</h3>
            <ul>
              <li>100% Premium Cotton</li>
              <li>Machine Washable</li>
              <li>Available in Multiple Sizes</li>
              <li>Vibrant Print Quality</li>
            </ul>
          </div>

          <div className="product-options">
            <div className="size-selector">
              <h3>Size</h3>
              <div className="size-options">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="color-selector">
              <h3>Color</h3>
              <div className="color-options">
                {['Black', 'White', 'Navy', 'Red'].map((color) => (
                  <button
                    key={color}
                    className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button 
                className="quantity-btn"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                min="1"
                className="quantity-input"
              />
              <button 
                className="quantity-btn"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div style={{margin: '1rem 0', display: 'flex', gap: '0.7rem'}}>
            <button className="add-to-cart" style={{flex: 1}} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="add-to-cart" style={{flex: 1, background: 'linear-gradient(90deg, #6ec1e4 0%, #007bff 100%)'}} onClick={handleAddChoice}>
              Add Choice
            </button>
          </div>

          {choices.length > 0 && (
            <div className="choices-list" style={{marginBottom: '1.5rem'}}>
              <h4 style={{marginBottom: '0.5rem'}}>Your Selections:</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                {choices.map((c, idx) => (
                  <li key={idx} style={{marginBottom: '0.5rem', background: '#f8f9fa', borderRadius: '7px', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span>Size: <b>{c.size}</b>, Color: <b>{c.color}</b>, Qty: <b>{c.quantity}</b></span>
                    <button style={{background: 'none', border: 'none', color: '#ff4444', fontSize: '1.2rem', cursor: 'pointer'}} onClick={() => handleRemoveChoice(idx)} title="Remove">×</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="action-buttons">
            <button 
              className="buy-now"
              onClick={handleContactToBuy}
              disabled={choices.length === 0}
            >
              Contact to Buy
            </button>
          </div>

          <div className="reviews-section">
            <div className="reviews-header">
              <h3>Customer Reviews</h3>
              <button 
                className="write-review-btn"
                onClick={() => setShowReviewForm(true)}
              >
                Write a Review
              </button>
            </div>

            {showReviewForm && (
              <form className="review-form" onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    value={userReview.name}
                    onChange={(e) => setUserReview({...userReview, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Rating</label>
                  <div className="rating-input">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${star <= userReview.rating ? 'filled' : ''}`}
                        onClick={() => setUserReview({...userReview, rating: star})}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label>Your Review</label>
                  <textarea
                    value={userReview.comment}
                    onChange={(e) => setUserReview({...userReview, comment: e.target.value})}
                    required
                    placeholder="Share your experience with this product..."
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-review">Submit Review</button>
                  <button 
                    type="button" 
                    className="cancel-review"
                    onClick={() => setShowReviewForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="reviews-list">
              {/* Example review - replace with actual reviews */}
              <div className="review-item">
                <div className="review-header">
                  <div className="reviewer-info">
                    <span className="reviewer-name">John Doe</span>
                    <div className="review-rating">{renderStars(5)}</div>
                  </div>
                  <span className="review-date">2 days ago</span>
                </div>
                <p className="review-comment">
                  Amazing quality and perfect fit! The design is exactly as shown and the material is very comfortable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showContactModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => setShowContactModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2>Contact to Buy</h2>
            {sent ? (
              <div className="success-message">
                <h3 style={{color: '#22b455', marginBottom: '1rem'}}>Your Order Request</h3>
                <pre style={{textAlign: 'left', background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>{orderSummary}</pre>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleContactFormSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" value={contactForm.name} onChange={handleContactFormChange} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={contactForm.email} onChange={handleContactFormChange} required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" name="phone" value={contactForm.phone} onChange={handleContactFormChange} required />
                </div>
                <div className="form-group">
                  <label>Shipping Address</label>
                  <textarea name="address" value={contactForm.address} onChange={handleContactFormChange} required />
                </div>
                <div className="form-group">
                  <label>Order Summary</label>
                  <textarea value={choices.map((c, i) => `Choice ${i+1}: Size: ${c.size}, Color: ${c.color}, Qty: ${c.quantity}`).join('\n')} readOnly />
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-review" disabled={sending}>{sending ? 'Sending...' : 'Send Order Request'}</button>
                  <button type="button" className="cancel-review" onClick={() => setShowContactModal(false)} disabled={sending}>Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
