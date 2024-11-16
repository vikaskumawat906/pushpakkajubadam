import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Container fluid>
                <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Welcome To Pushpak Kaju Badam</h2>
                <Row>
                    <Col>
                        <p><i>At Pushpak Kaju Badam, we take pride in delivering premium-quality dry fruits, nuts, and a variety of mouthwatering delicacies to enrich your lifestyle. Located in the heart of Jaipur, our journey has been about offering natural, fresh, and flavorful products that promote health and indulgence.</i></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='line-1'></div>
                        <button className='impact'>Our Specialty</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>We specialize in a diverse range of products crafted to satisfy your needs:</p>
                        <p style={{fontWeight:'650'}}>(1) Dry Fruits & Nuts</p>
                        <p><i>From classic favorites like cashews (Kaju), almonds (Badam), and raisins (Kishmish) to exotic varieties such as Pecan Nuts, Hazel Nuts, and Brazil Nuts, we bring nature's finest to your table.</i></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{fontWeight:'650'}}>(2) Roast & Flavored Options</p>
                        <p><i>Enjoy an innovative range of roasted and flavored dry fruits like Masala Kaju, Sweet Badam, and Phool Makhana. These delicacies are perfect for snacking or as thoughtful gifts.</i></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{fontWeight:'650'}}>(3) Mouth Fresheners</p>
                        <p><i>Traditional Indian mouth fresheners like Supari Chikni, Mitha Pan, and Jeera Goli are crafted to provide a refreshing end to every meal.</i></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{fontWeight:'650'}}>(4) Dried Fruits & Chocolates</p>
                        <p><i>Indulge in tropical dried fruits such as mango, pineapple, and kiwi or treat yourself with an array of cookies, chocolates, and candies.</i></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='line-1'></div>
                        <button className='impact'>Beyond Dry Fruits</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p><i>We go beyond dry fruits to offer an array of grocery essentials, including pulses, spices, seeds, and oils. Our collection of beverages like Thandai and Sharbat ensures that every occasion is accompanied by the perfect drink.</i></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='line-1'></div>
                        <button className='impact'>Crafted with Love</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p><i>Whether you're seeking to celebrate a festive occasion, create memorable gifts, or simply embrace a healthier lifestyle, Pushpak Kaju Badam is your one-stop destination. We also specialize in customized gift packing boxes for weddings, corporate events, and festivals.</i></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='line-1'></div>
                        <button className='impact'>Our Vision</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p><i>Our vision is to inspire healthy, happy lives by providing the highest quality products sourced with care. We strive to maintain freshness, authenticity, and excellence in every bite.</i></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default About;