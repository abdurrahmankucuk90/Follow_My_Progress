import Buton from "../buton/Buton";
import cardStyle from  "./card.module.css";

const Card = ({ img, btnName, dil }) => {
  return (
    <>
      <h1 className={cardStyle["title"]}>{dil}</h1>      
      <img className={cardStyle["imgaes"]} src={img} alt="img" />
      <Buton btnName={btnName}/>
    </>
  );
};

export default Card;
