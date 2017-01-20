import React from 'react';

class App extends React.Component {
	
	constructor(props) {
      super(props);
		
      this.state = {
         data: {
			 firstName:'',
			 lastName:''
		 }
      }

      this.updateState = this.updateState.bind(this);
	  this.changeFirstName = this.changeFirstName.bind(this);
	  this.changeLastName = this.changeLastName.bind(this);

   };

   updateState(e) {
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
			<h1>User Details</h1>
			<Content contentProp = {this.state.data} updateStateProp = {this.updateState} 
			changeFirstNameProp = {this.changeFirstName} changeLastNameProp = {this.changeLastName} />
         </div>
      );
   }
}

class Content extends React.Component {
    render() {
       return (
          <div>
			First Name:
			<input type = "text" onChange = {this.props.changeFirstNameProp}/>
			<br/><br/>
			Last Name: 
			<input type = "text" onChange = {this.props.changeLastNameProp} />
			<br/><br/>
			<button onClick = {this.props.updateStateProp}>SAVE</button>
          </div>
       );
    }
}

export default App;