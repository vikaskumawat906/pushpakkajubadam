import { Container, Row, Col, Image } from "react-bootstrap";
import { DriedFruitsAndChocolats, MouthFreshners, RoastAndFlavoured, GroceryAndMasala, Drinks, Seeds } from "./Data";
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";

function Products() {
    const [visibleCount, setVisibleCount] = useState(8);
    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 8);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Container fluid>
                <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Roast And Flavoured</h2>
                <Row>
                    {RoastAndFlavoured.slice(0, visibleCount).map(product => (
                        <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={product.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={product.Image} />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.name}</Card.Title>
                                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Total Reviews : {product.review}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    {visibleCount < RoastAndFlavoured.length && (
                        <div className="view-more-container">
                            <button className="view-more-button" onClick={handleViewMore}>View More</button>
                        </div>
                    )}
                </Row>
                <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Mouth Frehners</h2>
                <Row>
                    {MouthFreshners.map(product => (
                        <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={product.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.name}</Card.Title>
                                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Total Reviews : {product.review}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className='my-2'>
          <Col>
            <Image fluid src={require('../Components/Images/Green and Light Yellow Modern Fruit Juice Special Promo Summer Sale Banner.png')} />
          </Col>
        </Row>
                <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Dried Fruits And Chocolats</h2>
                <Row>
                    {DriedFruitsAndChocolats.slice(0, visibleCount).map(product => (
                        <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={product.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.name}</Card.Title>
                                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Total Reviews : {product.review}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    {visibleCount < DriedFruitsAndChocolats.length && (
                        <div className="view-more-container">
                            <button className="view-more-button" onClick={handleViewMore}>View More</button>
                        </div>
                    )}
                </Row>
                <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Grocery And Masala</h2>
                <Row>
                    {GroceryAndMasala.slice(0, visibleCount).map(product => (
                        <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={product.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.name}</Card.Title>
                                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Total Reviews : {product.review}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    {visibleCount < GroceryAndMasala.length && (
                        <div className="view-more-container">
                            <button className="view-more-button" onClick={handleViewMore}>View More</button>
                        </div>
                    )}
                </Row>
                <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Drinks</h2>
                <Row>
                    {Drinks.map(product => (
                        <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={product.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.name}</Card.Title>
                                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Total Reviews : {product.review}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className='my-2'>
          <Col>
            <Image fluid src={require('../Components/Images/Green Orange and Pink Simple Fruits Diagonal Photos Facebook Cover.png')} />
          </Col>
        </Row>
                <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Seeds</h2>
                <Row>
                    {Seeds.map(product => (
                        <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={product.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={product.img} />
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
export default Products;