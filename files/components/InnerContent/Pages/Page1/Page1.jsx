import React from 'react';

export default class Page1 extends React.Component {
	render() {
		return(
			<div id="content-holder">
				<form name = 'form1' action=''>
					<span>Поле 1:</span><input type='text'/>
					<br/>
					<span>Поле 2:</span><input type='text'/>
					<br/>
					<span>Поле 3:</span><input type='text'/>
					<br/>
					<span>Поле 4:</span><input type='text'/>
					<br/>
					<input type='submit'/>
				</form>
			</div>
		);
	}
}
