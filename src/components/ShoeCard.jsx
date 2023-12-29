const ShoeCard = ({ item, handleClick, shoe, p, md }) => {
  return (
    <div
      onClick={() => handleClick(item.bigShoe)}
      className={`bg-card bg-cover bg center flex ${
        shoe === item.bigShoe ? "border-red-600" : "border-transparent"
      } border-2 rounded-xl cursor-pointer hover:cursor-pointer`}
    >
      <div>
        <img
          src={item.thumbnail || item.imgURL}
          alt={item.thumbnail || "products"}
          className={`p-${p} md:p-${md}`}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
