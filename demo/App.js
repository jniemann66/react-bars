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
				{label:'Javascript', value:8.5},
				{label:'C++', value: 8.2},		
				{label:'HTML5', value:7.2},
				{label:'CSS', value:6.8},
				{label:'Python', value:5.0},
			],
			 testData2: [
				{label:'Without Numeric Value', value:85},
				{label:'Percentage', value: 82, showValue: true, suffix:'%'},
				{label:'Score out of 10', value: 7.5, maxValue: 10, showValue: true, suffix: '/10'},
				{label:"I'm not Upper Case", value:75, showValue: true, makeUppercase: false},
				{label:"I'm red !!", value:72, barColor:'red'},
      ]
		};
	}

// the render() function:
  render() {
    return (
			<div className="demo">
				
				<h3>Example 1: My 1337 skillz</h3>
				<Bars data={this.state.testData} maxValue={10} showValue={true}/>

				<h3>Example 2: Formatting variations:</h3>
				<Bars data={this.state.testData2} makeUppercase={true}/>
			</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);