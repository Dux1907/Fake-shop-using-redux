/* eslint-disable react/jsx-key */
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProduct } from "./action";
import { Link } from "react-router-dom";
const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.product);
  const dispatch = useDispatch();
  useEffect(() => {
    async function data() {
      try {
        let a = await fetch("https://fakestoreapi.com/products");
        let b = await a.json();
        dispatch(setProduct(b));
        //     console.log(b)
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, [dispatch]);
  console.log(products);
  // console.log(products + " kartik");
  return (
    <div className="container-fluid">
      <div className="row text-center gap-5 justify-content-center">
        {products.map((user) => {
          const { id, title, price, description, category, image } = user;
          const rating = user.rating.rate;
          return (
            <div className="col-lg-3 col-md-4 col-sm-7 col-10 border border-1 ">
              <Link to={`/product/${id}`}>
                <div className="img-fluid m-2">
                  <img
                    className="img-fluid"
                    style={{ height: "300px" }}
                    src={image}
                  />
                </div>
                <div className="title m-2">
                  <span className="fw-bold">Product:</span> {title}
                </div>
                <div className="description m-2">
                  <span className="fw-bold">Description: </span> {description}
                </div>
                <div className="category m-2">
                  <span className="fw-bold">Category: </span> {category}
                </div>
                <div className="rating m-2">
                  <span className="fw-bold">Rating: </span>
                  {rating}
                </div>
                <div className="price m-2">
                  <span className="fw-bold">Price: </span> ${price}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
