import Image from "next/image";

const WatchColor = ({ color }) => {
  const images = {
    navy: {
      src: "/images/navy.png",
      bgColor: "bg-gray-400",
    },
    mint: {
      src: "/images/mint.png",
      bgColor: "bg-green-200",
    },
    ocean: {
      src: "/images/ocean.png",
      bgColor: "bg-pink-200",
    },
  };

  const watch = images[color];

  return (
    <div className={`p-4 rounded-lg ${watch.bgColor} flex justify-center items-center`} style={{ width: "300px", height: "200px" }}>
      <Image src={watch.src} alt={`${color} watch`} width={200} height={200} />
    </div>
  );
};

export default WatchColor;
