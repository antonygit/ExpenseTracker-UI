import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import { Table,Button,Modal,ModalBody,ModalFooter,ModalHeader } from 'reactstrap';


 

class Nav extends Component {
  constructor(props) {
  super(props);
  this.toggleNavbar = this.toggleNavbar.bind(this);
  this.state = {
  collapsed: true,
  modal: false
  };
  this.toggle = this.toggle.bind(this);
  this.trans = this.trans.bind(this);


  this.state={  amount:0,table:[]  }

  }
  //NavBar toggle logic
  toggleNavbar() {
  this.setState({
  collapsed: !this.state.collapsed,
  });
  }

  //modal toggle logic
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

   }

  trans() {


    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    const obj={title:this.refs.title.value,amount:this.refs.amount.value,date:this.refs.date.value}
    this.setState({
      amount:this.state.amount+1,
      table:[...this.state.table,obj]
 
    });

    console.log(this.state.amount +" "+this.state.table)
   }
  

  render() {
  const collapsed = this.state.collapsed;
  const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  return (
       <div className="root">
   <header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
  <div className="container">
  <a className="navbar-brand" href="#"><b>Expense Tracker</b></a>
  <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" />
  </button>
  <div className={`${classOne}`} id="navbarResponsive">
  <ul className="navbar-nav">
  <li className="nav-item active">
  <a className="nav-link" href="#">Transactions</a>
  </li>
  <li className="nav-item">
  <a className="nav-link" href="#">Categories</a>
  </li>
  </ul>
  </div>

  </div>
  </nav>
  </header>

<br></br>
<Button color="primary" onClick={this.toggle}>Add Transaction</Button>
<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Transaction</ModalHeader>
          <ModalBody>
          <label  >Title</label>
                    <input type="text" className="form-control" ref="title"  placeholder="Enter title"></input>
                    <label >Amount</label>
                    <input type="number" className="form-control"  ref="amount" placeholder="Enter amount"></input>
                    <label >Date </label>
                    <input type="text" name="birthdate" ref="date"  className="form-control" ></input>
                      </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.trans}>Submit</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
<br></br><br></br>

<Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>SpentOn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          {
          this.state.table.map(data=>(
             <td>{data.title}</td>
            <td>{data.amount}</td>
            <td>{data.date}</td>
 

          ))
         
        }
          </tr>
           
        </tbody>
      </Table>
      
 
  </div>
  );
  }
  }

export default Nav;
