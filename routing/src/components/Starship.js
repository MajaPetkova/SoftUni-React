import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link , Routes, Route} from "react-router-dom";

export const Starship = () => {
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
      })
      .catch(() =>{
        navigate("/not-found")
      })
  }, [productId, navigate]);

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
        {/* <li>Films: {starship.films}</li> */}
      </ul>

      <h3>Movies</h3>
      <nav>
        <ul>
          {starship.films?.map((x, i)=> <li key={x}><Link  to={`/products/${productId}/films/${i +1}`}>Film {i + 1} </Link></li>)}
        </ul>
      </nav>
      <button onClick={nextProductHandler}>Next</button>

    <section>
<Routes>
<Route path={`/films/1`} element={<h3>Film 1</h3>}></Route>
<Route path={`/films/2`} element={<h3>Film 2</h3>}></Route>
<Route path={`/films/3`} element={<h3>Film 3</h3>}></Route>

</Routes>
    </section>
    </>
  );
};
