import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from '../components/productSlice'

function ProductList(){
 const productList = useSelector(selectProduct);

return (
    <>
    <div className="products-field">

    </div>
    </>
)


}
export default ProductList