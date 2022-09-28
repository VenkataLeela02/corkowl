import './App.css';
import React from 'react';
import Products from './products.js';
import {Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faDatabase, faPager, faPeopleGroup, faMoneyBill, faToolbox, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Container, Collapse, Button, Form, Row, Col, Image } from "react-bootstrap";
import products from './products.js';
import Header from './components/Header';

function App() {
  return (
    <Container>
    <Row>
      <Header />
    </Row>
    <Row>
      <Col lg={6} md={6} sm={6}>
              <ul className="menu">
                <li className="menu-items"><FontAwesomeIcon icon={faDesktop} /><span className="leftAlign">Dashboard</span></li>
                <li className="menu-items"><FontAwesomeIcon icon={faDatabase} /><span className="leftAlign">Inventory</span></li>
                <li className="menu-items"><FontAwesomeIcon icon={faPager} /><span className="leftAlign">Orders</span></li>
                <li className="menu-items"><FontAwesomeIcon icon={faPeopleGroup} /><span className="leftAlign">Customers</span></li>
                <li className="menu-items"><FontAwesomeIcon icon={faMoneyBill} /><span className="leftAlign">Reports</span></li>
                <li className="menu-items"><FontAwesomeIcon icon={faToolbox} /><span className="leftAlign">Settings</span></li>
              </ul>
              <div className="footer">
                <p className='title'>CorkOwl</p><br></br>
                <p className='copyrights'>&#169; 2020 CorkOwl, All Right Reserved.</p>
              </div>
      </Col>
      <Col lg={6} md={6} sm={6}>
        <p className="overview">Overview
        <Button className="addWine"><FontAwesomeIcon icon={faPlus} /> ADD NEW WINE</Button>
        </p>
        <div className="rect">
        <div className="items openOrders">
          <p className="details">Open Orders
          <svg className="rightAlign" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5417 6.11112H18.7572L13.8373 0.323021C13.5095 -0.0627046 12.931 -0.109607 12.5452 0.218254C12.1595 0.546115 12.1126 1.12465 12.4405 1.51037L16.3511 6.11112H5.64892L9.55957 1.51033C9.88743 1.12461 9.84053 0.546077 9.45481 0.218216C9.06908 -0.109646 8.49055 -0.0627046 8.16269 0.322983L3.24275 6.11112H0.458333C0.205219 6.11112 0 6.31634 0 6.56945V7.48612C0 7.73924 0.205219 7.94445 0.458333 7.94445H1.17131L2.22486 15.53C2.35072 16.4364 3.12568 17.1111 4.04074 17.1111H17.9593C18.8743 17.1111 19.6493 16.4364 19.7752 15.53L20.8287 7.94445H21.5417C21.7948 7.94445 22 7.73924 22 7.48612V6.56945C22 6.31634 21.7948 6.11112 21.5417 6.11112ZM17.9593 15.2778H4.04074L3.02221 7.94445H18.9778L17.9593 15.2778ZM11.9167 10.0833V13.1389C11.9167 13.6452 11.5063 14.0556 11 14.0556C10.4937 14.0556 10.0833 13.6452 10.0833 13.1389V10.0833C10.0833 9.57708 10.4937 9.16668 11 9.16668C11.5063 9.16668 11.9167 9.57708 11.9167 10.0833ZM16.1944 10.0833V13.1389C16.1944 13.6452 15.784 14.0556 15.2778 14.0556C14.7715 14.0556 14.3611 13.6452 14.3611 13.1389V10.0833C14.3611 9.57708 14.7715 9.16668 15.2778 9.16668C15.784 9.16668 16.1944 9.57708 16.1944 10.0833ZM7.63889 10.0833V13.1389C7.63889 13.6452 7.22849 14.0556 6.72222 14.0556C6.21595 14.0556 5.80556 13.6452 5.80556 13.1389V10.0833C5.80556 9.57708 6.21595 9.16668 6.72222 9.16668C7.22849 9.16668 7.63889 9.57708 7.63889 10.0833Z" fill="#FFAA2C"/>
          </svg>
          </p>
          <p className="numbers">239</p>
        </div>
        <div className="items ordersInTransit">
          <p className="details">Orders in transit
          <svg className="rightAlign" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.45 12.65H20.9V8.65906C20.9 8.00594 20.6353 7.37 20.1747 6.90938L17.2906 4.02531C16.83 3.56469 16.1906 3.3 15.5409 3.3H14.3V1.925C14.3 0.862813 13.4372 0 12.375 0H1.925C0.862813 0 0 0.862813 0 1.925V12.375C0 13.4372 0.862813 14.3 1.925 14.3H2.2C2.2 16.1219 3.67813 17.6 5.5 17.6C7.32188 17.6 8.8 16.1219 8.8 14.3H13.2C13.2 16.1219 14.6781 17.6 16.5 17.6C18.3219 17.6 19.8 16.1219 19.8 14.3H21.45C21.7525 14.3 22 14.0525 22 13.75V13.2C22 12.8975 21.7525 12.65 21.45 12.65ZM5.5 15.95C4.58906 15.95 3.85 15.2109 3.85 14.3C3.85 13.3891 4.58906 12.65 5.5 12.65C6.41094 12.65 7.15 13.3891 7.15 14.3C7.15 15.2109 6.41094 15.95 5.5 15.95ZM12.65 12.65H8.34281C7.77219 11.6669 6.72031 11 5.5 11C4.27969 11 3.22781 11.6669 2.65719 12.65H1.925C1.77375 12.65 1.65 12.5262 1.65 12.375V1.925C1.65 1.77375 1.77375 1.65 1.925 1.65H12.375C12.5262 1.65 12.65 1.77375 12.65 1.925V12.65ZM14.3 4.95H15.5409C15.7575 4.95 15.9706 5.03938 16.1253 5.19063L18.6347 7.7H14.3V4.95ZM16.5 15.95C15.5891 15.95 14.85 15.2109 14.85 14.3C14.85 13.3891 15.5891 12.65 16.5 12.65C17.4109 12.65 18.15 13.3891 18.15 14.3C18.15 15.2109 17.4109 15.95 16.5 15.95ZM19.25 12.4816C18.6588 11.5913 17.6481 11 16.5 11C15.6509 11 14.8844 11.33 14.3 11.8559V9.35H19.25V12.4816Z" fill="#2C67FF"/>
          </svg>
          </p>
          <p className="numbers">126</p>
        </div>
        <div className="items fulfilledOrders">
          <p className="details">Fulfilled Orders
          <svg className="rightAlign" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.9297 4.58562L15.7747 1.1275C15.5513 0.45375 14.9222 0 14.2106 0H3.38937C2.67781 0 2.04875 0.45375 1.82531 1.1275L0.0859375 6.34563C0.0309375 6.51406 0 6.68938 0 6.86813V15.95C0 16.8609 0.739062 17.6 1.65 17.6H15.4C19.0438 17.6 22 14.6438 22 11C22 7.88219 19.8344 5.27656 16.9297 4.58562ZM9.625 1.65H14.2106L15.1319 4.41375C13.42 4.4825 11.8766 5.19406 10.7422 6.325H9.625V1.65ZM3.38937 1.65H7.975V6.325H1.83219L3.38937 1.65ZM1.65 15.95V7.975H9.53906C9.07156 8.8825 8.8 9.91031 8.8 11C8.8 12.9731 9.66969 14.74 11.0447 15.95H1.65ZM15.4 15.95C12.6706 15.95 10.45 13.7294 10.45 11C10.45 8.27063 12.6706 6.05 15.4 6.05C18.1294 6.05 20.35 8.27063 20.35 11C20.35 13.7294 18.1294 15.95 15.4 15.95ZM17.6206 8.87906C17.5141 8.7725 17.3422 8.7725 17.2356 8.87906L14.8328 11.2613L13.7913 10.2094C13.6847 10.1028 13.5128 10.1028 13.4062 10.2094L12.7634 10.8488C12.6569 10.9553 12.6569 11.1272 12.7634 11.2337L14.6334 13.1209C14.74 13.2275 14.9119 13.2275 15.0184 13.1209L18.2566 9.90688C18.3631 9.80031 18.3631 9.62844 18.2566 9.52188L17.6206 8.87906Z" fill="#00CF3A"/>
          </svg>
          </p>
          <p className="numbers">1,254</p>
        </div>
        <div className="items cancelledOrders">
          <p className="details">Cancelled Orders
          <svg className="rightAlign" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5009 5.28998L12.7065 0.495606C12.3902 0.179262 11.9613 0 11.5149 0H6.48506C6.03866 0 5.60984 0.179262 5.2935 0.495606L0.495606 5.28998C0.179262 5.60633 0 6.03515 0 6.48155V11.5114C0 11.9578 0.179262 12.3866 0.495606 12.703L5.2935 17.5009C5.60984 17.8172 6.03866 17.9965 6.48506 17.9965H11.5149C11.9613 17.9965 12.3902 17.8172 12.7065 17.5009L17.5044 12.703C17.8207 12.3866 18 11.9578 18 11.5114V6.48506C17.9965 6.03515 17.8172 5.60633 17.5009 5.28998ZM16.3093 11.5114L11.5114 16.3093H6.48506L1.68717 11.5114V6.48506L6.48506 1.68717H11.5149L16.3093 6.48506V11.5114ZM12.5765 11.7821L11.7821 12.5765C11.6169 12.7417 11.3497 12.7417 11.1845 12.5765L8.99824 10.3902L6.81195 12.5765C6.64675 12.7417 6.37961 12.7417 6.21441 12.5765L5.42004 11.7821C5.25483 11.6169 5.25483 11.3497 5.42004 11.1845L7.60633 8.99824L5.42004 6.81195C5.25483 6.64675 5.25483 6.37961 5.42004 6.21441L6.21441 5.42004C6.37961 5.25483 6.64675 5.25483 6.81195 5.42004L8.99824 7.60633L11.1845 5.42004C11.3497 5.25483 11.6169 5.25483 11.7821 5.42004L12.5765 6.21441C12.7417 6.37961 12.7417 6.64675 12.5765 6.81195L10.3902 8.99824L12.5765 11.1845C12.7417 11.3497 12.7417 11.6169 12.5765 11.7821Z" fill="#FF1C1C"/>
          </svg>
          </p>
          <p className="numbers">35</p>
        </div>
        </div>
        <div className="inventory">
        <p className="inventoryTitle">Inventory</p>
        <Table className="table" striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="headings"><Form><Form.Check type="checkbox" className="primary-color" /></Form></th>
                <th className="headings">PRODUCT:</th>
                <th className="headings">RATING:</th>
                <th className="headings">VINTAGE:</th>
                <th className="headings">QTY:</th>
                <th className="headings">VOLUME:</th>
                <th className="headings">COST:</th>
                <th className="headings">PRICE:</th>
              </tr>
            </thead>
            <tbody>
              
                {Products.map((product) => (
                <tr className="tRow">
                  <td><Form><Form.Check type="checkbox" className="primary-color"/></Form></td>
                  <td className="productname"><Image width="40px" height="40px" src={product.image} className="image"/>{product.name}<p className="place">{product.place}</p></td>
                  <td className="color">{product.rating}</td>
                  <td className="color">{product.vintage}</td>
                  <td className="color">{product.qty}</td>
                  <td className="color">{product.volume}</td>
                  <td className="color">{product.cost}</td>
                  <td className="color">{product.price}</td>
                </tr> 
                
                ))}
                
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
    </Container>
   
  );
}

export default App;
