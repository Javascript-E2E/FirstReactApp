import React from 'react';
 import Content from './components/content';
 
 //var ReactCSSTransitionGroup = require('reactaddonscsstransitiongroup');
 
 class Home extends React.Component {
 	
 	constructor(props) {
       super(props);
 		
       this.state = {
          data: {
 			 firstName:'',
 			 lastName:''
 		 }
       }
 
       this.saveDetails = this.saveDetails.bind(this);
 	  this.changeFirstName = this.changeFirstName.bind(this);
 	  this.changeLastName = this.changeLastName.bind(this);
 
    };
 
    saveDetails(e) {
 	   var dataToSave = this.state.data;
        this.setState({data: dataToSave});
    }
    
    changeFirstName(e) {
 	   var firstName = e.target.value;
 	   var firstNameData = this.state.data;
 	   firstNameData.firstName = firstName;
        this.setState({data: firstNameData});
 	   console.log(firstNameData.firstName)
    }
    
    changeLastName(e) {
 	   var lastName = e.target.value;
 	   var lastNameData = this.state.data;
 	   lastNameData.lastName = lastName;
        this.setState({data: lastNameData});
    }
 	
    render() {
       return (
          <div>
 			<h1>User Details</h1>
 			<Content saveDetailsProp = {this.saveDetails} 
 			changeFirstNameProp = {this.changeFirstName} changeLastNameProp = {this.changeLastName} />
          </div>
       );
    }
 }
 
 export default Home;