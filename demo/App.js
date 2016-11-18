import React, { Component } from 'react';
import ReactDOM from 'react-dom';	
import Bar from '../src/bar.js';
import Bars from '../src/bars.js';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			testData: [
				{label:'Javascript', value:85},
				{label:'C++', value: 82},
				{label:'React', value:80},
				{label:'Node.js', value:75},
				{label:'HTML5 -=I am RED! =-', value:72, barColor:'red'},
				{label:'CSS', value:68},
				{label:'JQuery', value:65},
				{label:'Bootstrap', value:60},
				{label:'Python', value:50},
				{label:'Angular.js', value:45},
			]
		};
	}

// the render() function:
  render() {
    return (
			<div className="demo">
				<Bars data={this.state.testData} makeUppercase={true}/>
			</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);