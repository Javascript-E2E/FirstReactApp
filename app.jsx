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

   };

   updateState(e) {
	   var testFirstName = 'Bakkiavathy';
	   var testLastName = 'Ezhumalai';
	   var testData = this.state.data;
	   testData.firstName = testFirstName;
	   testData.lastName = testLastName;
       this.setState({data: testData});
   }
	
   render() {
      return (
         <div>
			<h1>User Details</h1>
			<Content contentProp = {this.state.data} updateStateProp = {this.updateState}/>
         </div>
      );
   }
}

class Content extends React.Component {
    render() {
       return (
          <div>
			First Name:
			<input type = "text" value = {this.props.contentProp.firstName} />
			<br/><br/>
			Last Name: 
			<input type = "text" value = {this.props.contentProp.lastName} />
			<br/><br/>
			<button onClick = {this.props.updateStateProp}>GetNames</button>
          </div>
       );
    }
}

export default App;