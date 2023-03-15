import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export const Products = () => {
  // const params= useParams();
  const [starship, setStarship] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
//   console.log(location)

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${productId}/`)
      .then((res) => res.json())
      .then((data) => {
        setStarship(data);
      });
  }, [productId]);

  const nextProductHandler = () => {
    //  TODO: redirect to next product
    navigate(`/products/${Number(productId) + 1}`)
  };

  return (
    <>
      <h2>Products Page</h2>
      <h3>Product {productId} Specifications</h3>
      <ul>
        <li>Name: {starship.name}</li>
        <li>Model: {starship.model}</li>
        <li>Passengers: {starship.passengers}</li>
      </ul>
      <button onClick={nextProductHandler}>Next</button>
    </>
  );
};
