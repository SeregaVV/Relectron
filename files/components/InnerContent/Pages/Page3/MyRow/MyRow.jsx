import React from 'react';

export default class MyRow extends React.Component {
	render() {
		return(
			<tr>
				<td>{this.props.keyid+1}: </td>
				<td><input type="text"/></td>
				<td><input type="text"/></td>
				<td><input type="text"/></td>
				<td><img src="./files/img/delete.png" alt="delete" className = "delete" onClick={() => this.deleteRow()} /></td>
			</tr>
		);
	}

	deleteRow(){
		this.props.deleteRow(this.props.keyid);
	}
}
