import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from "react-bootstrap";
import { DryProducts } from "./Data";
import { useEffect } from 'react';
function DryFruitsAndNuts(){
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return(
    <>
    <Container fluid>
    <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>All Available Dry Fruits And Nuts</h2>
    <Row>
          {DryProducts.map(product => (
            <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={product.id}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className="card-title">{product.name}</Card.Title>
                  <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Total Reviews : {product.review}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
    </>
)
}
export default DryFruitsAndNuts;