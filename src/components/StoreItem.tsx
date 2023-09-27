type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}
import { Card, Button } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContainer'
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart } = useShoppingCart()

  const quantity = getItemQuantity(id)
  return <Card>
    <Card.Img src={imgUrl} height="200px" width="100%" />
    <Card.Body>
      <Card.Title className='d-flex justify-content-between align-items-center'>
        <span>{name}</span>
        <span>{formatCurrency(price)}</span>
      </Card.Title>
      <div>
        {
          quantity == 0 ? (
            <Button onClick={() => increaseCartQuantity(id)}>Add to cart</Button>
          ) : (
          <div>
            <div style={{display:"flex"}}>
            <Button onClick={() => {
              decreaseCartQuantity(id)
            }
            }>-</Button>
            <div>{quantity} in cart</div>
            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button onClick={() => removeFromCart(id)}>Remove from Cart</Button>
          </div>
          )
        }
      </div>
    </Card.Body>
  </Card>
}