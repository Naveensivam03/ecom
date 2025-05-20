import './Hero.css'
import arrow_btn from '../../assets/Background/arrow_btn.png'
import { useNavigate } from 'react-router-dom';

const Hero = ({heroData , heroCount , setHeroCount}) => {
  const navigate = useNavigate();
  return (
    <div className='hero'>
        <div className='hero-txt'>
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className='hero-explore' style={{cursor: 'pointer'}} onClick={() => navigate('/collections/top-collections')}>
            <p>Explore!</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className='hero-dot-play'>
            <ul className='hero-dots'>
                <li onClick={()=> setHeroCount(0)}  className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=> setHeroCount(1)}   className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=> setHeroCount(2)}   className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
        </div>

    </div>
  )
}
export default Hero