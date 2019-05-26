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
  modal: false,
  modalCat:false,
  collapsedCat:true
  };
  this.toggle = this.toggle.bind(this);
  this.toggleCat = this.toggleCat.bind(this);
  this.saveCategory=this.saveCategory.bind(this);

  this.trans = this.trans.bind(this);


  this.state={  amount:0,table:[],total:0,categoryArr:["Gas"]  }

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


  //modal toggle logic
  toggleCat() {
    this.setState(prevState => ({
      modalCat: !prevState.modalCat
    }));

   }

  trans() {


    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    const obj={title:this.refs.title.value,amount:this.refs.amount.value,date:this.refs.date.value,category:this.refs.category.value}
    this.setState({
      amount:this.state.amount+1,
      table:[...this.state.table,obj],
      total:this.state.total+Number(obj.amount)
 
    });

    }

    saveCategory()
    {

      this.setState(prevState => ({
        modalCat: !prevState.modalCat
      }));
      const cat=this.refs.categoryInput.value;
      this.setState({
        categoryArr:[...this.state.categoryArr,cat] 
      });
  
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
  <a className="nav-link" onClick={this.toggleCat} href="#">Categories</a>
  </li>
  </ul>
  </div>

  </div>
  </nav>
  </header>

<br></br>

<Button color="primary" onClick={this.toggle}>Add Expenses</Button>
<br></br><br></br>
<div className="row">
 <div className="col-sm"  >Total:<b>{this.state.total} Rs</b></div>
 
</div>


<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Transaction</ModalHeader>
          <ModalBody>
            <label>Categories</label>
             <select className="form-control" id="sel1" ref="category">

                    {
                  this.state.categoryArr.map(data=>(
                     <option>{data}</option>

                  ))
                }
         
              </select>
          <label  >Title</label>
                    <input type="text" className="form-control" ref="title"  placeholder="Enter title"></input>
                    <label >Amount</label>
                    <input type="number" className="form-control"  ref="amount" placeholder="Enter amount"></input>
                    <label >Date </label>
                    <input className="form-control" type="date" ref="date"  ></input>
                      </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.trans}>Submit</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalCat} toggle={this.toggleCat} className={this.props.className}>
          <ModalHeader toggle={this.toggleCat}>Category</ModalHeader>
          <ModalBody>
            <label>Name</label>
                <input type="text" className="form-control"  ref="categoryInput" placeholder="Enter Category"></input>
               </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveCategory}>Save</Button>{' '}
            <Button color="danger" onClick={this.toggleCat}>Cancel</Button>
          </ModalFooter>
        </Modal>
<br></br><br></br>

<Table>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Title</th>
            <th><img src={require('/home/arul/ExpenseTracker-UI/my-app/src/images/money.png')} width="45" height="45"/></th>
            <th><img src={require('/home/arul/ExpenseTracker-UI/my-app/src/images/exp.png')} width="45" height="45"/></th>
          </tr>
        </thead>
        
        <tbody>
        {
          this.state.table.map(data=>(
          <tr>
             <td>{data.category}</td>
             <td>{data.title}</td>
            <td>{data.amount}</td>
            <td>{data.date}</td>    
            </tr>

          ))
         
       
        }
        </tbody>
      </Table>
      
 
  </div>
  );
  }
  }

export default Nav;