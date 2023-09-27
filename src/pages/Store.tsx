import storeItems from '../data/items.json'
import { Row, Col } from "react-bootstrap"
import { StoreItem } from '../components/StoreItem.tsx'
export default function Store() {    
    return <>
        <h1>Store</h1>
        <Row >
            {
                storeItems.map(item => {
                    return (<Col  key={item.id} ><StoreItem {...item} /></Col>)
                })
            }
        </Row>
    </>
}