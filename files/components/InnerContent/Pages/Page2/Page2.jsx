import React from 'react';

export default class Page2 extends React.Component {
	render() {
		var myArray = [
			['0','Имя ','Фамилия','Возраст','Телефон'],
			[1,'Сергей','Сергеев',21,8999000111],
			[2,'Андрей','Романов',24,8907656756],
			[3,'Виталий','Пименов',15,8999443432]
		]

		var rows = myArray.map(function(el,i){
			var cols = el.map(function (elem,j){
				if(j!=0){
					return(<td key = {j}>{elem}</td>);
				}
			});
			return(<tr key = {i}>{cols}</tr>);
		});

		return(
			<div id = 'content-holder'>
				<table className='exampleTable' cellSpacing='0'>
					<tbody>{rows}</tbody>
				</table>
			</div>
		);
	}
}
