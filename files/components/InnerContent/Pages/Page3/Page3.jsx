import React from 'react';
import MyRow from './MyRow/MyRow.jsx';

export default class Page3 extends React.Component {
	constructor(props) {
		super(props);
		this.state={rows: [1,1,1]};
	}
	render() {
		return(
			<div id = 'content-holder'>
				<img src='./files/img/add.png' alt='add' className='add' onClick={() => this.addRow()}/>
				<table>
					<tbody>
						{this.state.rows.map(function(el,i){
							return(<MyRow key={i} keyid={i} deleteRow={() => this.deleteRow()} />);
						},this)}
					</tbody>
				</table>
			</div>
		);
	}

	deleteRow(i){
		var newRows = this.state.rows;
		newRows.splice(i, 1);
		this.setState({rows: newRows});
	}

	addRow(){
		var newRows = this.state.rows;
		newRows.push(1);
		this.setState({rows: newRows});
	}
}
