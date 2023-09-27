import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from "../context/ShoppingCartContainer";

export function Navbar() {
    const {openCart,cartQuantity}=useShoppingCart()
    return <NavbarBs className="bg-light shadow-sm p-4">
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            <Button className="d-flex" onClick={openCart}>
                Basket
                <div className="color-white" style={{marginLeft:"10px"}}> 
                
                {cartQuantity}</div>
            </Button>
        </Container>
    </NavbarBs>;
}