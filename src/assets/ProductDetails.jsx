import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeProduct, fetchProduct } from "./action";

const ProductDetails = () => {
  const products = useSelector((state) => state.allSelectedProducts);
  const { productId } = useParams();
  const { title, price, description, category, image } = products;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId != "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);

  return (
    <>
      <div className="container-fluid">
        <div
          className="row justify-content-center "
          style={{ minHeight: "70vh" }}
        >
          <div className="col-10 fs-4">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 col-8 m-5">
                <img className="img-fluid" src={image} alt={title} />
              </div>
              <div className="col-md-5 col-8">
                <div className="title m-2">
                  <span className="fw-bold">Product:</span> {title}
                </div>
                <div className="description m-2">
                  <span className="fw-bold">Description: </span> {description}
                </div>
                <div className="category m-2">
                  <span className="fw-bold">Category: </span> {category}
                </div>

                <div className="price m-2">
                  <span className="fw-bold">Price: </span> ${price}
                </div>
                <div className="cart m-2">
                  <button type="button" className="btn btn-danger">
                    Add to Cart <i className="bi bi-cart"> </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
