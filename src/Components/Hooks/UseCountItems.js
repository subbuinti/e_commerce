import { useContext } from "react";
import CartContext from "../store/CartContext";

const useCountItem = function () {
  const cartCtxtConsumer = useContext(CartContext);

  //* to get items count:
  const countLength = function (item_id) {
    return cartCtxtConsumer.items.filter((item) => item.id === item_id).length;
  };
  return countLength;
};

export default useCountItem;
