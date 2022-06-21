import React, { useState } from "react";
import "./BestSellerPage.css";
import image8 from "../../assets/image 8.png";
import image11 from "../../assets/image11.png";
import image13 from "../../assets/image 15.png";
import image15 from "../../assets/image 13.png";

const BestSellerPage = () => {
  const [addItem, setAddItem] = useState(0);
  const [addedItemCount, setAddedItemCount] = useState(0);

  return (
    <div className="BestSellerPage-main ">
      <h3 className="BestSellerPage-heading">Best Seller Products</h3>
      <div className="BestSellerPage-container">
        <div className="BestSellerPage-cards">
          <img className="BestSellerPage-image" src={image8} alt="" />
          <div className="BestSellerPage-content">
            <p className="BestSellerPage-content-name">
              Scronuts special Dry fruits
            </p>
            {/* <p className="BestSellerPage-content-details">
              In publishing and graphic design, Lorem ipsum is a place holder
              text commonly used.
            </p> */}
            <p className="BestSellerPage-content-price">
              ₹ 299 / 250gmss
              <span
                style={{ textDecoration: "line-through", marginLeft: "2%" }}
              >
                350
              </span>
            </p>
            <div className="BestSellerPage-content-btns">
              <select
                name="cars"
                id="cars"
                className="BestSellerPage-content-select"
              >
                <option value="volvo">50 gms</option>
                <option value="saab">100 gms</option>
                <option value="opel">500 gms</option>
                <option value="audi">1 K.G.</option>
              </select>
              <p>
                <div class="quantity">
                  <span
                    class="quantity__minus"
                    onClick={() => (addItem > 0 ? setAddItem(addItem - 1) : 0)}
                  >
                    -
                  </span>
                  <input
                    name="quantity"
                    type="text"
                    class="quantity__input"
                    value={addItem}
                  />
                  <span
                    class="quantity__plus"
                    onClick={() => setAddItem(addItem + 1)}
                  >
                    +
                  </span>
                </div>
              </p>
            </div>
            <button
              className="BestSellerPage-add-cart-btn"
              onClick={() => setAddedItemCount(addedItemCount + 1)}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="BestSellerPage-cards">
          <img className="BestSellerPage-image" src={image11} alt="" />
          <div className="BestSellerPage-content">
            {/* <h4 className="BestSellerPage-content-name"> Dry fruits</h4> */}
            <p className="BestSellerPage-content-name">
              Scronuts special Dry fruits
            </p>
            {/* <p className="BestSellerPage-content-details">
              In publishing and graphic design, Lorem ipsum is a place holder
              text commonly used.
            </p> */}
            <p className="BestSellerPage-content-price">
              ₹ 299
              <span
                style={{ textDecoration: "line-through", marginLeft: "2%" }}
              >
                350
              </span>
            </p>
            <div className="BestSellerPage-content-btns">
              <select
                name="cars"
                id="cars"
                className="BestSellerPage-content-select"
              >
                <option value="volvo">50 gms</option>
                <option value="saab">100 gms</option>
                <option value="opel">500 gms</option>
                <option value="audi">1 K.G.</option>
              </select>
              <p>
                <div class="quantity">
                  <span class="quantity__minus">-</span>
                  <input
                    name="quantity"
                    type="text"
                    class="quantity__input"
                    value="1"
                  />
                  <span class="quantity__plus">+</span>
                </div>
              </p>
            </div>
            <button className="BestSellerPage-add-cart-btn">Add to cart</button>
          </div>
        </div>
        <div className="BestSellerPage-cards">
          <img className="BestSellerPage-image" src={image13} alt="" />
          <div className="BestSellerPage-content">
            {/* <h4 className="BestSellerPage-content-name"> Dry fruits</h4> */}
            <p className="BestSellerPage-content-name">Scronuts special Dry fruits</p>
            {/* <p className="BestSellerPage-content-details">
              In publishing and graphic design, Lorem ipsum is a place holder
              text commonly used.
            </p> */}
            <p className="BestSellerPage-content-price">
              ₹ 299
              <span
                style={{ textDecoration: "line-through", marginLeft: "2%" }}
              >
                350
              </span>
            </p>
            <div className="BestSellerPage-content-btns">
              <select
                name="cars"
                id="cars"
                className="BestSellerPage-content-select"
              >
                <option value="volvo">50 gms</option>
                <option value="saab">100 gms</option>
                <option value="opel">500 gms</option>
                <option value="audi">1 K.G.</option>
              </select>
              <p>
                <div class="quantity">
                  <span class="quantity__minus">-</span>
                  <input
                    name="quantity"
                    type="text"
                    class="quantity__input"
                    value="1"
                  />
                  <span class="quantity__plus">+</span>
                </div>
              </p>
            </div>
            <button className="BestSellerPage-add-cart-btn">Add to cart</button>
          </div>
        </div>
        <div className="BestSellerPage-cards">
          <img className="BestSellerPage-image" src={image15} alt="" />
          <div className="BestSellerPage-content">
          <p className="BestSellerPage-content-name">Scronuts special Dry fruits</p>
            {/* <h4 className="BestSellerPage-content-name"> Dry fruits</h4> */}
            {/* <p className="BestSellerPage-content-details">
              loream In publishing and graphic design, Lorem ipsum is a place
              holder text commonly used .
            </p> */}
            <p className="BestSellerPage-content-price">
              ₹ 299
              <span
                style={{ textDecoration: "line-through", marginLeft: "2%" }}
              >
                350
              </span>
            </p>
            <div className="BestSellerPage-content-btns">
              <select
                name="cars"
                id="cars"
                className="BestSellerPage-content-select"
              >
                <option value="volvo">50 gms</option>
                <option value="saab">100 gms</option>
                <option value="opel">500 gms</option>
                <option value="audi">1 K.G.</option>
              </select>
              <p>
                <div class="quantity">
                  <span class="quantity__minus">-</span>
                  <input
                    name="quantity"
                    type="text"
                    class="quantity__input"
                    value="1"
                  />
                  <span class="quantity__plus">+</span>
                </div>
              </p>
            </div>
            <button className="BestSellerPage-add-cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerPage;
