import React from 'react';
import Page1 from './Pages/Page1/Page1.jsx';
import Page2 from './Pages/Page2/Page2.jsx';
import Page3 from './Pages/Page3/Page3.jsx';

export default class InnerContent extends React.Component {
    render() {

		if (this.props.stateValue == 0) {
			return(
				<div id="content-holder">
					Стартовая информация
				</div>
			);
		}
		else if (this.props.stateValue == 1) {
			return <Page1/>;
		}

		else if(this.props.stateValue == 2){
        	return <Page2/>;
    	}
    	else if(this.props.stateValue == 3){
    		return <Page3/>
    	}
    }

    deleteRow(i){

    };
}

