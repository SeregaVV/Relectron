import React from 'react';
import InnerContent from './InnerContent/InnerContent.jsx';


export default class Content extends React.Component {

	constructor(props) {
		super(props);
		this.state = {innerContentStateValue: 0};
	}
	render() {
		return(
			<div className="content">
				<div id = 'left-menu'>
					<button onClick={() => this.loadContent1()}>Кнопка1</button>
					<button onClick={() => this.loadContent2()}>Кнопка2</button>
					<button onClick={() => this.loadContent3()}>Кнопка3</button>
				</div>
				<InnerContent stateValue={this.state.innerContentStateValue}/>
			</div>
		);
	}	

	loadContent1() {
		this.setState({innerContentStateValue: 1});
	}

	loadContent2() {
		this.setState({innerContentStateValue: 2});
	}

	loadContent3() {
		this.setState({innerContentStateValue: 3});
	}
}
