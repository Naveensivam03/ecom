import "./category.css";
import image1 from '../../assets/category/image1.jpeg';
import image2 from '../../assets/category/image2.png';
import image3 from '../../assets/category/image3.png';
import image4 from '../../assets/category/image4.png';
import image5 from '../../assets/category/image5.png';
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "One piece", image: image1, path: "one-piece" },
  { title: "Shonen Anime", image: image2, path: "shonen-anime" },
  { title: "Top collections", image: image3, path: "top-collections" },
  { title: "Cartoon", image: image4, path: "cartoon" },
  { title: "Streatwear", image: image5, path: "streetwear" },
];

const Category = () => {
  const navigate = useNavigate();

  const handleViewCollections = (path) => {
    navigate(`/collections/${path}`);
  };

  return (
    <div className="category-container" id="categories">
      <div className="container">
        <h2 className="category-heading">
          Choose <span className="highlight">your</span> category
        </h2>
        <div className="grid-layout">
          {categories.map((cat, idx) => (
            <div className={`grid-item item-${idx + 1}`} key={idx}>
              <img className="category-img" src={cat.image} alt={cat.title} />
              <div className="category-overlay">
                <h3>{cat.title}</h3>
                <button className="view-btn" onClick={() => handleViewCollections(cat.path)}>
                  view collections →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
