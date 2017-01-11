import React from 'react';

class App extends React.Component {
	
	constructor() {
      super();
		
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
			First Name:
			<input type = "text" value = {this.state.data.firstName} />
			Last Name:
			<input type = "text" value = {this.state.data.lastName} />
			<button onClick = {this.updateState}>GetNames</button>
         </div>
      );
   }
}

// class Content extends React.Component {

//    render() {
//       return (
//          <div>

//          </div>
//       );
//    }
//}

export default App;