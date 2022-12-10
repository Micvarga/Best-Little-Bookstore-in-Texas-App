import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Row,
    Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FlagLogo from '../app/assets/images/nav-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBook, faCalendarPlus, faDollarSign, faHouseChimney, faStar } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Container fluid className='navSection'>
            <Row className='navRow'>
                <Col xs='12'>
                    <div className='bg-light py-3 py-sm-5 navSection'>
                        <h1 className='mt-1 brandName'>Best Little Bookstore in Texas</h1>
                    </div>
                </Col>
                <Col xs='12'>
                    <Navbar dark sticky='top' expand='md' className='navBar'>
                        <NavbarBrand href='/' className='d-none d-sm-block'>
                            <img src={FlagLogo} alt='Best Little Bookstore in Texas logo' className='float-start' />
                        </NavbarBrand>
                        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                        <Collapse isOpen={menuOpen} navbar>
                            <Nav className='ms-auto' navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/'>
                                        <FontAwesomeIcon icon={faHouseChimney} /> Home
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <FontAwesomeIcon icon={faBook} /> Books
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Non-Fiction</DropdownItem>
                                        <DropdownItem>Fiction</DropdownItem>
                                        <DropdownItem>Teen & YA</DropdownItem>
                                        <DropdownItem>Kids</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className='nav-link' to='/books'>
                                        <FontAwesomeIcon icon={faStar} /> Reader's Choice
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/books'>
                                        <FontAwesomeIcon icon={faDollarSign} /> Today's Deals
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/books'>
                                        <FontAwesomeIcon icon={faBolt} /> New Arrivals
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/events'>
                                        <FontAwesomeIcon icon={faCalendarPlus} /> In Store Events
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
};

export default Header;