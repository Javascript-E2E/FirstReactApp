import React from 'react';
 import Content from './components/content';
 
 //var ReactCSSTransitionGroup = require('reactaddonscsstransitiongroup');

function getHomeState(){
    return {
        data : {
            firstName:'',
            lastName:''
        }
    }
}
 
 var Home = React.createClass({
 	
 	// constructor(props) {
    //    super(props);
 		
    //    this.state = {
    //       data: {
 	// 		 firstName:'',
 	// 		 lastName:''
 	// 	 }
    //    }
 
    //    this.saveDetails = this.saveDetails.bind(this);
 	//   this.changeFirstName = this.changeFirstName.bind(this);
 	//   this.changeLastName = this.changeLastName.bind(this);
 
    // },

    getInitialState : function(){
        return getHomeState();
    },
 
    // saveDetails(e) {
 	//    var dataToSave = this.state.data;
    //     this.setState({data: dataToSave});
    // },
    
    // changeFirstName(e) {
 	//    var firstName = e.target.value;
 	//    var firstNameData = this.state.data;
 	//    firstNameData.firstName = firstName;
    //     this.setState({data: firstNameData});
 	//    console.log(firstNameData.firstName)
    // },
    
    // changeLastName(e) {
 	//    var lastName = e.target.value;
 	//    var lastNameData = this.state.data;
 	//    lastNameData.lastName = lastName;
    //     this.setState({data: lastNameData});
    // },
 	
    componentDidMount : function () {
        HomeStore.addChangeListener(this._onChange);
    },

    componentWillUnMount : function() {
        HomeStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getHomeState());
    },

    render() {
       return (
          <div>
 			<h1>User Details</h1>
 			 <Content data = {this.state.data} />
          </div>
       );
    }
 });
 
 export default Home;