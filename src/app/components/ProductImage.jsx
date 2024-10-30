import Image from "next/image";

const ProductImage = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default ProductImage;
