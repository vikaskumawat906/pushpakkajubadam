import { useState, useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Container fluid>
            <nav ref={navRef}>
                <div>
                    <Image className="logo" src={require("../Components/Images/logo.png")} />
                    <span className="nav-name">Pushpak Kaju Badam</span>
                </div>

                <div className="menu" onClick={toggleMenu}>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                </div>

                <ul className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
                    <Link className="nav-link" to="/" onClick={toggleMenu}>
                        <li>HOME</li>
                    </Link>
                    <Link className="nav-link" to="/dryfruitsandnuts" onClick={toggleMenu}>
                        <li>DRY FRUITS & NUTS</li>
                    </Link>
                    <Link className="nav-link" to="/products" onClick={toggleMenu}>
                        <li>PRODUCTS</li>
                    </Link>
                    <Link className="nav-link" to="/aboutus" onClick={toggleMenu}>
                        <li>ABOUT US</li>
                    </Link>
                    <Link className="nav-link">
                        <li>
                            <div className="d-flex justify-content-center align-items-center my-4">
                                <Form.Select
                                    size="md"
                                    style={{ maxWidth: "250px", width: "auto" }}
                                    onChange={(e) => {
                                        const categoryPath = e.target.value;
                                        window.location.href = `/category/${categoryPath}`;
                                    }}
                                >
                                    <option value="">SELECT CATEGORY</option>
                                    <option value="mouth-fresheners">Mouth Fresheners</option>
                                    <option value="dried-fruits-and-chocolates">Dried Fruits & Chocolates</option>
                                    <option value="grocery-and-masala">Grocery And Masala</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="seeds">Seeds</option>
                                </Form.Select>
                            </div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </Container>
    );
}

export default Navbar;
