import React from "react";
import { useState } from "react";

import "./Products.scss";
import prod1 from "../../assets/ia_300000006.png";
import prod2 from "../../assets/ia_300000014.png";
import prod3 from "../../assets/ia_300000019.png";
import prod4 from "../../assets/ia_300000005.png";
import prod5 from "../../assets/ia_300000020.png";
import prod6 from "../../assets/ia_300000015.png";
import prod7 from "../../assets/ia_400000240.png";
import prod8 from "../../assets/ia_300000021.png";
import prod9 from "../../assets/ia_300000008.png";
const languageList = [
  { value: "metal", label: "Metal" },
  { value: "wodden", label: "Wodden" },
  { value: "fabric", label: "Fabric" },
  { value: "foam", label: "Foam" },
  { value: "naturalskin", label: "Natural Skin" },
  { value: "syntheticfiber", label: "Synthetic Fiber" },
];

const Products = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const changeWidth = (event) => {
    setWidth(event.target.value);
  };

  const changeHeight = (event) => {
    setHeight(event.target.value);
  };

  return (
    <div className="container">
      <div className="filter">
        <div className="colors">
          <h1>Colors -</h1>
          <div className="circle">
            <li className="color1"></li>
            <li className="color2"></li>
            <li className="color3"></li>
            <li className="color4"></li>
            <li className="color5"></li>
            <li className="color6"></li>
            <li className="color7"></li>
            <li className="color8"></li>
          </div>
        </div>
        <div className="filt">Filters</div>
        <div className="app">
          <div className="title">Materials</div>
          {languageList.map((x, i) => (
            <label key={i}>
              {x.label}
              <input type="checkbox" name="lang" value={x.value} />
            </label>
          ))}
          <div className="range">
            <h4>Price {height}$</h4>
            <div className="slide">
              <input
                type="range"
                onChange={changeHeight}
                min={1}
                max={501}
                step={50}
                value={height}
                className="custom-slider"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="products">
          <div className="product-card">
            <div className="thumbnail">
              <img src={prod1} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>

          <div className="product-card">
            <div className="thumbnail">
              <img src={prod2} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>

          <div className="product-card">
            <div className="thumbnail">
              <img src={prod3} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>

          <div className="product-card">
            <div className="thumbnail">
              <img src={prod4} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>

          <div className="product-card">
            <div className="thumbnail">
              <img src={prod5} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>

          <div className="product-card">
            <div className="thumbnail">
              <img src={prod6} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>

          <div className="product-card">
            <div className="thumbnail">
              <img src={prod7} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>

          <div className="product-card">
            <div className="thumbnail">
              <img src={prod8} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>

          <div className="product-card">
            <div className="thumbnail">
              <img src={prod9} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="price">&#8377;499</span>
            </div>
          </div>
        </div>
        <div className="ctas">
          <div className="banner-cta">Load More</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
