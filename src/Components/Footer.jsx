import { Container, Row, Col} from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
function Footer(){
    return(
        <>
        <Container fluid>
            <Row className="footer-row">
            <h2 style={{ fontFamily: 'cursive', textAlign: 'center',color:'#ff7043', marginTop: '5px' }}><i>Thanks For Visit</i></h2>
              <Col lg={3} md={6} sm={6} xs={6}>
              <h5  className="aligncenter-1"> Quick Links</h5>
              <ul >
                <div  className="aligncenter">
                    <Link className='nav-links' to="/" > <li>HOME</li></Link>
                    <Link className='nav-links' to="/dryfruitsandnuts" > <li>DRY FRUITS & NUTS</li></Link>
                    <Link className='nav-links' to="/products" > <li>PRODUCTS</li></Link>
                    <Link className='nav-links' to="/aboutus" > <li>ABOUT US</li></Link>
                    </div>
                    </ul>
              </Col>
              <Col lg={3} md={6} sm={6} xs={6}>
              <div className="footer-section social">
          <h5 className="aligncenter-1">Join On</h5>
          <div className="social-icons">
          <a href="https://www.instagram.com/pushpakkajubadamvaishali/"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/p/JHw55iKMkL75MojT/"><FaFacebook /></a>
            <a href="https://wa.me/qr/TSLYWZBKMOORJ1"><FaWhatsapp /></a>
          </div>
        </div></Col>
              <Col lg={3} md={6} sm={6} xs={6}>
              <h5 className="aligncenter-1">Location-1</h5>
              <p  className="aligncenter"><IoLocationSharp style={{ fontSize:'20px',textAlign:'center'}} /> F-21, Gautham Marg, Vaishali Nagar, Jaipur-302021</p>
              <p  className="aligncenter">91+9057669000</p>
              </Col>
              <Col lg={3} md={6} sm={6} xs={6}>
              <h5 className="aligncenter-1">Location-2</h5>
              <p style={{ marginTop: '10px' }}  className="aligncenter"><IoLocationSharp style={{ fontSize:'20px',textAlign:'center'}} /> G-18, Shiv Shakti Paradise, Central Spine, Vidhyadhar Nagar, Jaipur-302039</p>
              <p  className="aligncenter">91+9057668000</p>
              </Col>
       <h6 className="aligncenter" style={{color:'#ff7043'}}>Copyright &copy; 2024. All About Pushpak Kaju, All Rights Reserved.</h6> 
            </Row>
        </Container>
        </>
    )
}
export default Footer;