import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <Image src={product.image} width={200} height={200} alt="image" />
    </div>
  );
};

export default Product;
