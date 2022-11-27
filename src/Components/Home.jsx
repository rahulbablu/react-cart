import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'

const Home = () => {

  const productList = [
    { name: "Mac Book", price: 1100, imgSrc:img1, id: "sgsdfgdfgfgdg" },
    { name: "4k Monitor", price: 300, imgSrc:img2 , id: "aavdfvdvfgdg" },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
     dispatch({type:'addToCart',payload:options});
     dispatch({ type: "calculatePrice"});
     toast.success("Added To Cart");
  }

  return (
    <div className="home">
      {productList.map((item) => (
        <ProductCard
          key={item.id}
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          id={item.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
  </div>
);

export default Home;
