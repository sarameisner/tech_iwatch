import Image from "next/image";

const Watch = ({ src, alt, isActive }) => {
  return (
    <div className={`p-4 ${isActive ? "border-4 border-green-300" : ""}`}>
      <Image src={src} alt={alt} width={150} height={150} />
    </div>
  );
};

export default Watch;
