import { XMarkIcon } from "@heroicons/react/24/solid";

const MiniCards = (props) => {
  const { id, title, imageUrl, price, deleted } = props;
  let renderX;
  if (deleted) {
    renderX = (
      <XMarkIcon
        onClick={() => deleted(id)}
        className="h-4 w-4 text-black cursor-pointer"
      />
    );
  }

  return (
    <div className="flex justify-between items-center my-6">
      <div className="flex items-center gap-2">
        <figure className="w-10 h-10">
          <img
            className="w-full object-cover rounded-lg"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-xs font-light text-justify p-4">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs font-black">${price}</p>
        {renderX}
      </div>
    </div>
  );
};

export { MiniCards };
