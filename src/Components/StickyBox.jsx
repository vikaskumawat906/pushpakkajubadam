import { FaInstagram, FaWhatsapp,FaFacebook } from 'react-icons/fa';
function StickyBox() {
  return (
    <>
      <div className="sticky-box">
        <a href="https://www.instagram.com/pushpakkajubadamvaishali/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon insta-icon" />
        </a>
        <a href="https://wa.me/qr/TSLYWZBKMOORJ1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon whatsapp-icon" />
        </a>
        <a href="https://www.facebook.com/share/p/JHw55iKMkL75MojT/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook-icon" />
        </a>
      </div>
    </>
  )
};
export default StickyBox;