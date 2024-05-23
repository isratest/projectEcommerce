import {
  CalendarDaysIcon,
  ShoppingBagIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

const MyOrdersCards = (props) => {
  const { total, quantityProducts } = props;

  return (
    <div className="flex justify-between content-center items-center mb-3  rounded-lg border border-black w-96 h-20 mt-4 p-4">
      <div>
        <p className="flex items-center">
          <span>
            <CalendarDaysIcon className="w-3 h-3 mr-2" />
          </span>
          <span>22.05/2024</span>
        </p>
        <p className="flex items-center">
          <span>
            <ShoppingBagIcon className="w-3 h-3 mr-2" />
          </span>
          <span>{quantityProducts}</span>
        </p>
      </div>
      <p className="flex items-center">
        <span className=" text-lg font-bold">$ {total}</span>
        <ChevronDoubleRightIcon className="w-4 h-4 ml-2" />
      </p>
    </div>
  );
};

export { MyOrdersCards };
