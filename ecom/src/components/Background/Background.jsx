import './Background.css';
import image1 from '../../assets/Background/image1.png';
import image2 from '../../assets/Background/image2.jpg';
import image3 from '../../assets/Background/image3.jpg';
import image4 from '../../assets/Background/image4.jpg';


const images = [image1, image2, image3, image4];

// Helper to get N unique random indexes from array length
function getRandomIndexes(arrayLength, n) {
  const indexes = new Set();
  while (indexes.size < n) {
    indexes.add(Math.floor(Math.random() * arrayLength));
  }
  return [...indexes];
}

const Background = () => {
  // Pick 4 unique random images
  const randomIndexes = getRandomIndexes(images.length, 4);

  return (
    <div className="background-container">
      {randomIndexes.map((idx) => (
        <img
          key={idx}
          src={images[idx]}
          className="background fade-in"
          alt={`background-${idx}`}
        />
      ))}
    </div>
  );
};

export default Background;
