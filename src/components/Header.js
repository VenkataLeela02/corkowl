import React from 'react';
import './Header.css';
import { Navbar, Nav, MenuItem, Container, Dropdown, DropdownButton, Button, Form,Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell} from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <header className='App-header'>
            <Container>
            <Row>
                <Col>
                    <div className="brand">
                        <span class="owl">CORK<svg className="top" width="17" height="22" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.92873 4.8341C5.84553 5.86492 7.44566 7.35052 8.64829 9.21005C8.70556 9.29763 8.76283 9.32458 8.8201 9.32458C8.87736 9.32458 8.93463 9.29763 8.9919 9.21005C10.1945 7.35052 11.7947 5.86492 13.7115 4.8341C15.3689 3.91781 16.457 2.37494 16.7736 0.629948C16.7736 0.488463 16.6288 0.373926 16.4873 0.431195C15.3992 0.973556 14.4559 1.22958 13.5666 1.22958C12.5088 1.22958 11.7374 0.85902 11.0502 0.542362C10.4202 0.25939 9.87787 0 9.04917 0H8.59102C7.76232 0 7.21659 0.25939 6.59001 0.542362C5.90279 0.85902 5.13136 1.22958 4.07022 1.22958C3.18425 1.22958 2.24101 0.973556 1.15291 0.431195C1.01143 0.373926 0.866577 0.488463 0.866577 0.629948C1.18324 2.37494 2.26796 3.91781 3.92873 4.8341Z" fill="#DD4553"/>
                        <svg className="top" width="17" height="22" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8132 18.2853C6.78037 18.2853 2.68739 14.1924 2.68739 9.1292C2.68739 7.92994 2.91646 6.75763 3.37461 5.69649C3.77548 6.35676 4.37512 6.95639 5.23414 7.49875C5.37562 7.61328 5.52048 7.70087 5.69228 7.78509L5.71923 7.81541C5.32172 8.33082 5.09265 8.98772 5.09265 9.70188C5.09265 11.5041 6.5513 12.9628 8.32324 12.9628C8.89592 12.9628 9.43828 12.8213 9.89643 12.5619C11.2136 15.2535 11.5572 17.8272 11.8132 17.8272C12.0692 17.8272 12.4129 15.2535 13.73 12.5619C14.1882 12.8213 14.7305 12.9628 15.3032 12.9628C17.0751 12.9628 18.5338 11.5041 18.5338 9.70188C18.5338 8.98772 18.3081 8.33082 17.9072 7.81541L17.9342 7.78509C18.106 7.70087 18.2474 7.61328 18.3923 7.49875C19.2783 6.95639 19.8813 6.32644 20.2788 5.66954C20.71 6.72731 20.966 7.89962 20.966 9.1292C20.966 14.1924 16.8764 18.2853 11.8132 18.2853ZM7.09366 8.78559C7.89541 9.47281 8.52536 10.2476 9.06772 11.0763C8.83865 11.1909 8.60958 11.2481 8.32324 11.2481C7.49454 11.2481 6.80732 10.5609 6.80732 9.70188C6.80732 9.35827 6.89154 9.04498 7.09366 8.78559ZM16.5328 8.78559C16.7315 9.04498 16.8191 9.35827 16.8191 9.70188C16.8191 10.5609 16.1319 11.2481 15.3032 11.2481C15.0169 11.2481 14.7878 11.1909 14.5587 11.0763C15.1045 10.2476 15.731 9.47281 16.5328 8.78559ZM21.0536 3.43945C21.1951 2.43558 21.1951 1.32054 21.1681 0.0336914C21.1378 0.94998 20.939 1.86627 20.5651 2.69497C20.3091 3.26765 19.9655 3.81001 19.5646 4.29511C19.4501 4.43996 19.3355 4.58145 19.1941 4.7263C18.7056 5.29898 18.079 5.78408 17.3918 6.15463L17.3345 6.18495C14.4745 7.70087 12.9013 10.1028 12.0423 12.2183C11.985 12.3328 11.9008 12.3901 11.8132 12.3901C11.729 12.3901 11.6414 12.3328 11.5841 12.2183C10.7251 10.1028 9.15194 7.70087 6.29191 6.18495L6.23464 6.15463C5.54743 5.78408 4.92084 5.29898 4.43238 4.7263C4.31785 4.58145 4.17636 4.46691 4.06182 4.32542C3.66095 3.84033 3.34766 3.2946 3.08827 2.72192C2.71771 1.89322 2.48864 0.97693 2.45832 0.0336914C2.43137 1.32054 2.43137 2.4659 2.57285 3.49672C1.5454 5.12718 0.972717 7.07092 0.972717 9.1292C0.972717 15.139 5.83377 20 11.8132 20C17.8196 20 22.684 15.139 22.684 9.1292C22.684 7.0406 22.1114 5.09686 21.0536 3.43945Z" fill="#FBE1D0"/>
                        </svg>
                        </svg>WL
                        </span>
                    </div>        
                </Col>
                <Col lg={6}>
                    <Form>
                    <Button type="submit" variant="primary" className="searchButton">
                    <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                    <Form.Control
                        type="text"
                        name="q"
                        placeholder="Search wines, customers here..."
                        className="search"
                    ></Form.Control>
                    </Form>
                </Col>
                <Col lg={3}>
                <FontAwesomeIcon icon={faBell} className="bell"/>
                <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                    Leela Teja
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownMenu" id="dropdown-basic">
                    <p><Dropdown.Item className="dropdownItems" href="/">Profile</Dropdown.Item></p>
                    <p><Dropdown.Item className="dropdownItems" href="/">Orders</Dropdown.Item></p>
                    <p><Dropdown.Item className="dropdownItems" href="/">Sign Out</Dropdown.Item></p>
                </Dropdown.Menu>
                </Dropdown>
                </Col>
        
    
            </Row>
            </Container>
            </header>
    );
}

export default Header;