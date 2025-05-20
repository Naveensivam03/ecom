import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";
import "./product_list.css";
import { useParams, useNavigate } from "react-router-dom";

// One Piece imports
import onePiece1 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia.jpg';
import onePiece2 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 2.jpg';
import onePiece3 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 3.jpg';
import onePiece4 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 4.jpg';
import onePiece5 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 5.jpg';
import onePiece6 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 6.jpg';
import onePiece7 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 7.jpg';
import onePiece8 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 8.jpg';
import onePiece9 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 9.jpg';
import onePiece10 from '../../assets/category_images/ONE PIECE/ONE PIECE_  copia 10.jpg';

// Naruto imports
import naruto1 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 31.jpg';
import naruto2 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 32.jpg';
import naruto3 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 33.jpg';
import naruto4 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 34.jpg';
import naruto5 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 35.jpg';
import naruto6 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 36.jpg';
import naruto7 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 37.jpg';
import naruto8 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 38.jpg';
import naruto9 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 39.jpg';
import naruto10 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 40.jpg';
import naruto11 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 41.jpg';
import naruto12 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 42.jpg';
import naruto13 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 43.jpg';
import naruto14 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 44.jpg';
import naruto15 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 45.jpg';
import naruto16 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 46.jpg';
import naruto17 from '../../assets/category_images/Shonen anime/naruto/www.kmizrd2-0_Mesa de trabajo 1 copia 47.jpg';

// DBZ imports
import dbz1 from '../../assets/category_images/Shonen anime/dbz/dbz1.jpg';
import dbz2 from '../../assets/category_images/Shonen anime/dbz/dbz2.jpg';
import dbz3 from '../../assets/category_images/Shonen anime/dbz/dbz3.jpg';
import dbz4 from '../../assets/category_images/Shonen anime/dbz/dbz4.jpg';
import dbz5 from '../../assets/category_images/Shonen anime/dbz/dbz5.jpg';
import dbz6 from '../../assets/category_images/Shonen anime/dbz/dbz6.jpg';
import dbz7 from '../../assets/category_images/Shonen anime/dbz/dbz7.jpg';

// Bleach imports
import bleach1 from '../../assets/category_images/Shonen anime/bleach/bleach1.jpg';
import bleach2 from '../../assets/category_images/Shonen anime/bleach/bleach2.jpg';
import bleach3 from '../../assets/category_images/Shonen anime/bleach/bleach3.jpg';
import bleach4 from '../../assets/category_images/Shonen anime/bleach/bleach4.jpg';
import bleach5 from '../../assets/category_images/Shonen anime/bleach/bleach5.jpg';

// JJK imports
import jjk1 from '../../assets/category_images/Shonen anime/jjk/jjk1.jpg';
import jjk2 from '../../assets/category_images/Shonen anime/jjk/jjk2.jpg';
import jjk3 from '../../assets/category_images/Shonen anime/jjk/jjk3.jpg';
import jjk4 from '../../assets/category_images/Shonen anime/jjk/jjk4.jpg';
import jjk5 from '../../assets/category_images/Shonen anime/jjk/www.kmizrd2-0_Mesa de trabajo 1.jpg';

// Cartoon imports
import cartoon1 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 2.jpg';
import cartoon2 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 3.jpg';
import cartoon3 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 4.jpg';
import cartoon4 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 5.jpg';
import cartoon5 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 6.jpg';
import cartoon6 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 7.jpg';
import cartoon7 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 8.jpg';
import cartoon8 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 9.jpg';
import cartoon9 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 10.jpg';
import cartoon10 from '../../assets/category_images/Cartoon/www.kmizrd2-0_Mesa de trabajo 1 copia 11.jpg';

// Streetwear imports
import streetwear1 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 2.jpg';
import streetwear2 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 3.jpg';
import streetwear3 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 4.jpg';
import streetwear4 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 5.jpg';
import streetwear5 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 6.jpg';
import streetwear6 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 7.jpg';
import streetwear7 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 8.jpg';
import streetwear8 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 9.jpg';
import streetwear9 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 10.jpg';
import streetwear10 from '../../assets/category_images/Streatwear/www.kmizrd_Mesa de trabajo 1 copia 11.jpg';

// Export the categoryProducts object
export const categoryProducts = {
  "one-piece": [
  {
      id: 1,
      title: "One Piece T-Shirt 1",
      type: "Anime",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: onePiece1,
      reviews: 128,
    },
    {
      id: 2,
      title: "One Piece T-Shirt 2",
      type: "Anime",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: onePiece2,
      reviews: 256,
    },
    {
      id: 3,
      title: "One Piece T-Shirt 3",
      type: "Anime",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: onePiece3,
      reviews: 89,
    },
    {
      id: 4,
      title: "One Piece T-Shirt 4",
      type: "Anime",
      design: "Character",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: onePiece4,
      reviews: 167,
    },
    {
      id: 5,
      title: "One Piece T-Shirt 5",
      type: "Anime",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: onePiece5,
      reviews: 128,
    },
    {
      id: 6,
      title: "One Piece T-Shirt 6",
      type: "Anime",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: onePiece6,
      reviews: 256,
    },
    {
      id: 7,
      title: "One Piece T-Shirt 7",
      type: "Anime",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: onePiece7,
      reviews: 89,
    },
    {
      id: 8,
      title: "One Piece T-Shirt 8",
      type: "Anime",
      design: "Character",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: onePiece8,
      reviews: 167,
    },
    {
      id: 9,
      title: "One Piece T-Shirt 9",
      type: "Anime",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: onePiece9,
      reviews: 128,
    },
    {
      id: 10,
      title: "One Piece T-Shirt 10",
      type: "Anime",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: onePiece10,
      reviews: 256,
    }
  ],
  "shonen-anime": [
    {
      id: 1,
      title: "Naruto T-Shirt 1",
      type: "Anime",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: naruto1,
      reviews: 128,
    },
    {
      id: 2,
      title: "Naruto T-Shirt 2",
      type: "Anime",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: naruto2,
      reviews: 256,
    },
    {
      id: 3,
      title: "Naruto T-Shirt 3",
      type: "Anime",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: naruto3,
      reviews: 89,
    },
    {
      id: 4,
      title: "Naruto T-Shirt 4",
      type: "Anime",
      design: "Character",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: naruto4,
      reviews: 167,
    },
    {
      id: 5,
      title: "Dragon Ball T-Shirt 1",
      type: "Anime",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: dbz1,
      reviews: 128,
    },
    {
      id: 6,
      title: "Dragon Ball T-Shirt 2",
      type: "Anime",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: dbz2,
      reviews: 256,
    },
    {
      id: 7,
      title: "Dragon Ball T-Shirt 3",
      type: "Anime",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: dbz3,
      reviews: 89,
    },
    {
      id: 8,
      title: "Dragon Ball T-Shirt 4",
      type: "Anime",
      design: "Character",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: dbz4,
      reviews: 167,
    },
    {
      id: 9,
      title: "Bleach T-Shirt 1",
      type: "Anime",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: bleach1,
      reviews: 128,
    },
    {
      id: 10,
      title: "Bleach T-Shirt 2",
      type: "Anime",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: bleach2,
      reviews: 256,
    },
    {
      id: 11,
      title: "Bleach T-Shirt 3",
      type: "Anime",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: bleach3,
      reviews: 89,
    },
    {
      id: 12,
      title: "Bleach T-Shirt 4",
      type: "Anime",
      design: "Character",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: bleach4,
      reviews: 167,
    },
    {
      id: 13,
      title: "Jujutsu Kaisen T-Shirt 1",
      type: "Anime",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: jjk1,
      reviews: 128,
    },
    {
      id: 14,
      title: "Jujutsu Kaisen T-Shirt 2",
      type: "Anime",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: jjk2,
      reviews: 256,
    },
    {
      id: 15,
      title: "Jujutsu Kaisen T-Shirt 3",
      type: "Anime",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: jjk3,
      reviews: 89,
    },
    {
      id: 16,
      title: "Jujutsu Kaisen T-Shirt 4",
      type: "Anime",
      design: "Character",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: jjk4,
      reviews: 167,
    }
  ],
  "cartoon": [
    {
      id: 1,
      title: "Cartoon T-Shirt 1",
      type: "Cartoon",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: cartoon1,
      reviews: 128,
    },
    {
      id: 2,
      title: "Cartoon T-Shirt 2",
      type: "Cartoon",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: cartoon2,
      reviews: 256,
    },
    {
      id: 3,
      title: "Cartoon T-Shirt 3",
      type: "Cartoon",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: cartoon3,
      reviews: 89,
    },
    {
      id: 4,
      title: "Cartoon T-Shirt 4",
      type: "Cartoon",
      design: "Character",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: cartoon4,
      reviews: 167,
    },
    {
      id: 5,
      title: "Cartoon T-Shirt 5",
      type: "Cartoon",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: cartoon5,
      reviews: 128,
    },
    {
      id: 6,
      title: "Cartoon T-Shirt 6",
      type: "Cartoon",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: cartoon6,
      reviews: 256,
    },
    {
      id: 7,
      title: "Cartoon T-Shirt 7",
      type: "Cartoon",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: cartoon7,
      reviews: 89,
    },
    {
      id: 8,
      title: "Cartoon T-Shirt 8",
      type: "Cartoon",
      design: "Character",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: cartoon8,
      reviews: 167,
    },
    {
      id: 9,
      title: "Cartoon T-Shirt 9",
      type: "Cartoon",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: cartoon9,
      reviews: 128,
    },
    {
      id: 10,
      title: "Cartoon T-Shirt 10",
      type: "Cartoon",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: cartoon10,
      reviews: 256,
    }
  ],
  "streetwear": [
    {
      id: 1,
      title: "Streetwear T-Shirt 1",
      type: "Streetwear",
      design: "Urban",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: streetwear1,
      reviews: 128,
    },
    {
      id: 2,
      title: "Streetwear T-Shirt 2",
      type: "Streetwear",
      design: "Urban",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: streetwear2,
      reviews: 256,
    },
    {
      id: 3,
      title: "Streetwear T-Shirt 3",
      type: "Streetwear",
      design: "Urban",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: streetwear3,
      reviews: 89,
    },
    {
      id: 4,
      title: "Streetwear T-Shirt 4",
      type: "Streetwear",
      design: "Urban",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: streetwear4,
      reviews: 167,
    },
    {
      id: 5,
      title: "Streetwear T-Shirt 5",
      type: "Streetwear",
      design: "Urban",
    price: 25.49,
    originalPrice: 29.99,
    discount: "15% OFF",
    rating: 4.9,
      image: streetwear5,
      reviews: 128,
  },
  {
      id: 6,
      title: "Streetwear T-Shirt 6",
      type: "Streetwear",
      design: "Urban",
    price: 27.99,
    originalPrice: 34.99,
    discount: "20% OFF",
    rating: 5.0,
      image: streetwear6,
      reviews: 256,
  },
  {
      id: 7,
      title: "Streetwear T-Shirt 7",
      type: "Streetwear",
      design: "Urban",
    price: 35.99,
    originalPrice: 39.99,
    discount: "10% OFF",
    rating: 5.0,
      image: streetwear7,
      reviews: 89,
  },
  {
      id: 8,
      title: "Streetwear T-Shirt 8",
      type: "Streetwear",
      design: "Urban",
    price: 34.49,
    originalPrice: 45.99,
    discount: "25% OFF",
    rating: 5.0,
      image: streetwear8,
      reviews: 167,
    },
    {
      id: 9,
      title: "Streetwear T-Shirt 9",
      type: "Streetwear",
      design: "Urban",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: streetwear9,
      reviews: 128,
    },
    {
      id: 10,
      title: "Streetwear T-Shirt 10",
      type: "Streetwear",
      design: "Urban",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: streetwear10,
      reviews: 256,
    }
  ],
  "top-collections": [
    {
      id: 1,
      title: "One Piece T-Shirt 1",
      type: "Anime",
      design: "Character",
      price: 25.49,
      originalPrice: 29.99,
      discount: "15% OFF",
      rating: 4.9,
      image: onePiece1,
      reviews: 128,
    },
    {
      id: 2,
      title: "Naruto T-Shirt 1",
      type: "Anime",
      design: "Character",
      price: 27.99,
      originalPrice: 34.99,
      discount: "20% OFF",
      rating: 5.0,
      image: naruto1,
      reviews: 256,
    },
    {
      id: 3,
      title: "Cartoon T-Shirt 1",
      type: "Cartoon",
      design: "Character",
      price: 35.99,
      originalPrice: 39.99,
      discount: "10% OFF",
      rating: 5.0,
      image: cartoon1,
      reviews: 89,
    },
    {
      id: 4,
      title: "Streetwear T-Shirt 1",
      type: "Streetwear",
      design: "Urban",
      price: 34.49,
      originalPrice: 45.99,
      discount: "25% OFF",
      rating: 5.0,
      image: streetwear1,
      reviews: 167,
    }
  ]
};

const ProductList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const products = categoryProducts[category] || categoryProducts["top-collections"];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="navbar_background">
      <Background />
      <Navbar />
        <div className="product-list-container">
      <div className="product-list-header">
          <div className="header-content">
            <h2>{category ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Top Collections'}</h2>
        <p>Discover our unique collection of premium t-shirts</p>
          </div>

        <div className="filters">
            <div className="filter-group">
              <label>Sort By</label>
          <select>
            <option>Featured</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
            </div>

            <div className="filter-group">
              <label>Price Range</label>
          <select>
            <option>All Prices</option>
            <option>Under $30</option>
            <option>$30 - $40</option>
            <option>$40+</option>
          </select>
            </div>

            <div className="filter-group">
              <label>Category</label>
          <select>
            <option>All Categories</option>
                <option>Anime</option>
                <option>Cartoon</option>
                <option>Streetwear</option>
          </select>
            </div>

            <div className="filter-group">
              <label>Design</label>
          <select>
            <option>All Designs</option>
                <option>Character</option>
                <option>Urban</option>
          </select>
            </div>
        </div>
      </div>

      <div className="product-grid">
          {products.map((product) => (
            <div 
              className="product-card" 
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
            <span className="badge">{product.discount}</span>
              </div>
            <div className="product-content">
                <div className="product-type">{product.type}</div>
              <h4>{product.title}</h4>
              <div className="price">
                <span className="current">${product.price.toFixed(2)}</span>
                <span className="original">${product.originalPrice.toFixed(2)}</span>
              </div>
                <div className="product-meta">
              <div className="rating">
                <span>⭐</span> {product.rating}
                    <span className="reviews">({product.reviews})</span>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductList;
