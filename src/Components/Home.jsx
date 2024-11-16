import Carousel from 'react-bootstrap/Carousel';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { DryFruitsGallery, DryProducts, Video } from './Data';
import Card from 'react-bootstrap/Card';
import { useState, useEffect} from 'react';
import { FaYoutube } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Home() {
  const [visibleCount, setVisibleCount] = useState(8);
  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Container fluid>
        <marquee style={{backgroundColor:'#ff7043', fontWeight:'600',color:'white'}}><i>Welcome to Puspak Kaju Badam – "Where Taste Meets Tradition!" </i></marquee>
        <Carousel>
          <Carousel.Item>
            <Image fluid src={require('../Components/Images/slider-3.jpg')} />
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid src={require('../Components/Images/slider-2.jpg')} />
          </Carousel.Item>
          <Carousel.Item>
            <Image fluid src={require('../Components/Images/slider-1.jpg')} />
          </Carousel.Item>
        </Carousel>

        <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Gallery</h2>
        <Row>
          {DryFruitsGallery.map(d => (
            <Col className="my-2" lg={3} md={6} sm={6} xs={6} key={d.id}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={d.image} />
                <Card.Body>
                  <Card.Title style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>{d.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Dry Fruits & Nuts</h2>
        <Row>
          {DryProducts.slice(0, visibleCount).map(product => (
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
          {visibleCount < DryProducts.length && (
            <div className="view-more-container">
              <button className="view-more-button" onClick={handleViewMore}>View More</button>
            </div>
          )}
        </Row>
        <Row className='my-2'>
          <Col>
            <Image fluid src={require('../Dry fruits and nuts/Green Illustrative Health Linkedin Background Photo.png')} />
          </Col>
        </Row>
        <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Benefits Of Dry Fruits</h2>
        <Row>
          {Video.map(d => (
            <Col className="my-2" lg={6} md={6} sm={12} xs={12} key={d.id}>
              <Card style={{ width: '100%' }}>
                <a href={d.link}>
                  <Card.Img variant="top" src={d.thumbnail} />
                  <FaYoutube className="youtube-icon" />
                </a>
                <Card.Body>
                  <Card.Title style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '2px' }}>{d.descrption}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Contact Us</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12} className='contact-image'>
            <Row>
              <h3 className='contact-heading' >OUR INFORMATION</h3>
              <Col>
                <h5 className='contact-heading'>Office Address</h5>
                <p><IoLocationSharp style={{color:'red', fontSize:'20px',textAlign:'center'}} /> F-21, Gautham Marg, Vaishali Nagar, Jaipur-302021</p>
                <p>91+9057669000</p>
                <p style={{ marginTop: '10px' }}><IoLocationSharp style={{color:'red', fontSize:'20px',textAlign:'center'}} />G-18, Shiv Shakti Paradise, Central Spine, Vidhyadhar Nagar, Jaipur-302039</p>
                <p>91+9057668000</p>
              </Col>
              <Col>
                <h5 className='contact-heading'>General Enquiary</h5>
                <p><MdEmail style={{color:'red', fontSize:'20px',textAlign:'center'}} /> pushpakkajubadam2222@gmail.com</p>
              </Col>
            </Row>
            <Row className='my-4'>
              <Col>
                <h5 className='contact-heading'>Call Us</h5>
                <p><FaPhoneVolume style={{color:'red'}} /> 91+9057669000</p>
                <p><FaPhoneVolume style={{color:'red'}} /> 91+9057668000</p>
              </Col>
              <Col>
                <h5 className='contact-heading' >Our Timing</h5>
                <p>8:30 AM - 10:00 PM</p>
                <p>All Week Open</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
          <Row>
                    <Col>
                        <div className='line-1'></div>
                        <button className='impact'>Enquiry Form</button>
                    </Col>
                </Row>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City Name</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>What can I Help You...?</Form.Label>
                <Form.Control as="textarea" placeholder='Enter here.......' rows={4} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />

              </Form.Group>
              <Button style={{ display: 'flex', alignItems: 'center', margin: 'auto' }} type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
          <h2 style={{ fontFamily: 'cursive', textAlign: 'center', marginTop: '5px' }}>Location here...</h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <a href='https://maps.app.goo.gl/FTAhxDmZPeDRQAhY8'>
          <Image style={{height:'auto',width:'100%'}} src={require('../Components/Images/Location-image.png')}/>
          </a>
          </Col>
        </Row>

      </Container >
    </>
  )
}
export default Home;