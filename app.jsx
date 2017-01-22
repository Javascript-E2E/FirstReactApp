import React from 'react';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
	
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
			<ReactCSSTransitionGroup transitionName = "testtransition"
			transitionAppear = {true} transitionAppearTimeout = {500}
			transitionEnter = {false} transitionLeave = {false}>
				<h1>User Details</h1>
			</ReactCSSTransitionGroup>
			<Content saveDetailsProp = {this.saveDetails} 
			changeFirstNameProp = {this.changeFirstName} changeLastNameProp = {this.changeLastName} />
         </div>
      );
   }
}

class Content extends React.Component {
    render() {
       return (
          <div>
			<form>
				<label>
					First Name:
					<input type = "text" className="text-color" onChange = {this.props.changeFirstNameProp}/>
				</label>
				<br/><br/>
				<label>
					Last Name: 
					<input type = "text" className="text-color" onChange = {this.props.changeLastNameProp} />
				</label>
				<br/><br/>
				<button onClick = {this.props.saveDetailsProp}>SAVE</button>
			</form>
          </div>
       );
    }
}

export default App;