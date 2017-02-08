import React from 'react';
 class Content extends React.Component {
	constructor(props) {
      super(props);
		
    /*  this.state = {
         data: {
			 firstName:'',
			 lastName:''
		 }
      }

      //this.saveDetails = this.saveDetails.bind(this);
	  //this.changeFirstName = this.changeFirstName.bind(this);
	 // this.changeLastName = this.changeLastName.bind(this);*/

   };

   saveDetails(e) {
	  // var dataToSave = this.state.data;
      // this.setState({data: dataToSave});
   }
   
   changeFirstName(e) {
	  // ContentLogic.testMethod();
	  let firstName = e.target.value;
	  /* var firstNameData = this.state.data;
	   firstNameData.firstName = firstName;
       this.setState({data: firstNameData});*/
	   console.log(firstName)
   }
   
   changeLastName(e) {
	  let lastName = e.target.value;
	  /* var lastNameData = this.state.data;
	   lastNameData.lastName = lastName;
       this.setState({data: lastNameData});*/
   }
    render() {
       return (
          <div>
			<form>
				<label>
					First Name:
					<input type = "text" className="text-color" onChange = {this.changeFirstName}/>
				</label>
				<br/><br/>
				<label>
					Last Name: 
					<input type = "text" className="text-color" onChange = {this.changeLastName} />
				</label>
				<br/><br/>
				<button onClick = {this.saveDetailsProp}>SAVE</button>
			</form>
          </div>
       );
    }
}
export default Content;