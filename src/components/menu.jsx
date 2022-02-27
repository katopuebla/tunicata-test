import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { FaUserCog, FaUserSlash } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'
import { GeneralContext } from '../contexts/generalContext';
import { auth } from '../firebase';
import AddProduct from '../pages/product/addProduct';
import ProductsService from '../services/Products-service';

const imageMain = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FLogo.png?alt=media&token=3f51ea5a-5a30-4819-93b4-34197cefcd4a"
// const logo = "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata_logo.png?alt=media&token=370fc1ea-7586-466e-b7b1-2345a9d69f26";

const Menu = () => {

    const { autenticado, setAutenticado } = useContext(GeneralContext);
    const [showAdd, setShowAdd] = useState(false);
    const [products, setProducts] = useState([]);

    const handleShowAdd = () => {
        console.log('handleShowAdd', true)
        setShowAdd(true);
    }

    const signOut = () => {
        auth.signOut().then(success => setAutenticado(false));
    }

    async function fetchProducts() {
        const listData = [];
        const infoData = await ProductsService.getIds();
        // filter only one field in Collections
        infoData.forEach(data => {
            if (data)
                listData.push(data);
        });
        setProducts(listData);
    }

    useEffect(async () => {
        fetchProducts();
    }, []);

    return <React.Fragment>
        {/*<Navbar className="bg-green" variant="dark" expand="sm">
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img
                        alt="Tunicata"
                        src={imageMain}
                        width="12%"
                        className="align-top"
                    />{" "}
                </Navbar.Brand>
            </LinkContainer>
            </Navbar>*/}
        <Navbar className="bg-green" variant="light" expand="md">
            <LinkContainer to="/">
                <Navbar.Brand href="#home">
                    <img
                        alt="Tunicata"
                        src={imageMain}
                        width="150"
                        height="auto"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link >Inicio</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Catalogos" id="collasible-nav-dropdown">
                        {
                            products && products.map((id, index) => {
                                return <LinkContainer key={index} to={`/catalogs/${id}/`}>
                                    <NavDropdown.Item>{id}</NavDropdown.Item>
                                </LinkContainer>
                            }

                            )

                        }
                        {/* <LinkContainer to="/catalogs/Adelita/">
                            <NavDropdown.Item>Adelita</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/catalogs/Pet_Lovers/">
                            <NavDropdown.Item>Pet Lovers</NavDropdown.Item>
                        </LinkContainer> */}
                    </NavDropdown>
                </Nav>
                {autenticado
                    ? <Nav>
                        <LinkContainer to="/list">
                            <Nav.Link>productList</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    : <Nav></Nav>
                }
                {autenticado
                    ? <Nav>
                        <NavItem onClick={handleShowAdd}>addProduct</NavItem>
                        {/*<LinkContainer to="/add">
                            <Nav.Link>addProduct</Nav.Link>
                        </LinkContainer>*/}
                    </Nav>
                    : <Nav></Nav>
                }
                <Nav>
                    <LinkContainer to="/about/">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
                {
                    console.log('autenticado', autenticado),
                    autenticado
                        ? <Navbar.Text className="ms-auto">
                            <a href="#" onClick={signOut}><FaUserSlash /> </a>
                        </Navbar.Text>
                        : <Nav className="ms-auto">
                            <LinkContainer to="/login">
                                <Nav.Link><FaUserCog /> </Nav.Link>
                            </LinkContainer>
                        </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
        <AddProduct showAdd={showAdd} setShowAdd={setShowAdd} />
    </React.Fragment>
}

export default Menu;