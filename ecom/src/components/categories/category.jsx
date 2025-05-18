import "./category.css";
import image1 from '../../assets/category/image1.jpeg';
import image2 from '../../assets/category/image2.png';
import image3 from '../../assets/category/image3.png';
import image4 from '../../assets/category/image4.png';
import image5 from '../../assets/category/image5.png';

const categories = [
  {
    title: "Anime",
    image: image1, // Use the imported variable directly
  },
  {
    title: "Motivation",
    image: image2,
  },
  {
    title: "One Piece",
    image: image3,
  },
  {
    title: "Top Collections",
    image: image4,
  },
  {
    title: "Death Note",
    image: image5,
  },
];

const Category = () => {
  return (
    <div className="category-container">
      <div className="container">
        <h2 className="category-heading">
          Choose <span className="highlight">your</span> category
        </h2>
        <div className="grid-layout">
          {categories.map((cat, idx) => (
            <div className={`grid-item item-${idx + 1}`} key={idx}>
              <img src={cat.image} alt={cat.title} />
              <div className="category-overlay">
                <h3>{cat.title}</h3>
                <button className="view-btn">view collections →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;