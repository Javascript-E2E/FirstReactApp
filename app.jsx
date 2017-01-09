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
			<Content myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   render() {
      return (
         <div>
			<input type = "text" value = {this.props.myDataProp.firstName} />
			<input type = "text" value = {this.props.myDataProp.lastName} />
			<button onClick = {this.props.updateStateProp}>GetName</button>
         </div>
      );
   }
}

App.propTypes = {
   myDataProp: React.PropTypes.object.isRequired,
}

App.defaultProps = {
   myDataProp: {
      firstName:"first name of user",
	  lastName:"last name of user"
   }
}

export default App;