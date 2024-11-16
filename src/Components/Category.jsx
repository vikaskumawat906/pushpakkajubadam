import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { 
    DriedFruitsAndChocolats, 
    MouthFreshners, 
    GroceryAndMasala, 
    Drinks, 
    Seeds 
} from "./Data";

const categoryData = {
    "mouth-fresheners": MouthFreshners,
    "dried-fruits-and-chocolates": DriedFruitsAndChocolats,
    "grocery-and-masala": GroceryAndMasala,
    "drinks": Drinks,
    "seeds": Seeds
};

function Category() {
    const { category } = useParams();
    const products = categoryData[category] || [];
    const categoryName = category.replace(/-/g, ' ').toUpperCase();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container fluid>
            <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>
                {categoryName}
            </h2>
            <Row>
                {products.length > 0 ? (
                    products.map(product => (
                        <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={product.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.name}</Card.Title>
                                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>
                                        Total Reviews : {product.review}
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                        No products available for this category.
                    </p>
                )}
            </Row>
        </Container>
    );
}

export default Category;
