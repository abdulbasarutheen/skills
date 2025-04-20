import { useState } from "react";
import axios from "axios";
import "./App.css";
import logo1 from "./3899152.jpg";
import logo2 from "./10135204.jpg";
import logo3 from "./freepik__adjust__14353.jpg";
import logo4 from "./9305773.jpg";

const App = () => {
  const [product, setProduct] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [slideshow, setSlideshow] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  function Show() {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProduct(response.data.products);
      setShowButton(false);
      setSlideshow(false);
    });
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      {slideshow && (
        <div id="blog">
          <figure>
            <img src={logo1} alt="Slide 1" />
            <img src={logo2} alt="Slide 2" />
            <img src={logo3} alt="Slide 3" />
            <img src={logo4} alt="Slide 4" />
            <img src={logo2} alt="Slide 2" />
          </figure>
        </div>
      )}

      <div id="menu">
        <p id="brand">Mega Mart</p>
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e5e817">
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
        <div id="filter">
          <p>Filter</p>
          <select>
            <option>All</option>
            <option>Groceries</option>
            <option>Cosmetics</option>
            <option>Fresh Meat</option>
          </select>
        </div>
        <div id="supp">
          <p>About Us</p>
          <p>Help</p>
          <p>Settings</p>
        </div>
        <div id="mode">
          <p>Dark Mode</p>
          <input
            id="check"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>

      <div id="main">
        {product.map((pr) => (
          <div key={pr.id} id="div1">
            <p id="title">
              {pr.id}. {pr.title}
            </p>
            <p id="desc">{pr.description}</p>
            <img id="img" src={pr.images[0]} alt={pr.title} height="200" width="200" />
            <div id="price">
              <p>Price : ${pr.price}</p>
              <p>Rating : {pr.rating} /5</p>
              <button id="now">Buy Now</button>
            </div>
          </div>
        ))}
        {showButton && <button id="view-more" onClick={Show}>View More...</button>}
      </div>
    </div>
  );
};

export default App;
