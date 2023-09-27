import { useShoppingCart } from "../context/ShoppingCartContainer";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/items.json";
type CartItemProps = {
  id: number;
  quantity: number;
};
export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id == id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal">
      <img
        src={item.imgUrl}
        style={{ width: "200px", height: "100px", objectFit: "cover" }}
      />
      {item.name}
      {quantity}
      <Button onClick={() => removeFromCart(id)}>Delete</Button>
    </Stack>
  );
}
