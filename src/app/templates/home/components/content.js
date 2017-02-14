import React from 'react';
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
				<button ref="saveButton" onClick = {this.props.saveDetailsProp}>SAVE</button>
			</form>
          </div>
       );
    }
}
export default Content;