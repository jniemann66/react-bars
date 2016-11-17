// bars.js : defines Bars Component

/* 

MIT License

Copyright (c) 2016 Judd Niemann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

import React, { Component } from 'react';
import Bar from './bar.js';

/** Bars : draws a bar graph consisting of a number of bars */
class Bars extends Component {

	render() {

		if (!this.props.data || this.props.data.length === 0) {
			return null; // no data !
		}

		return (
			<div>
				{this.props.data.map((item, index)=>
					<Bar
						key={index}
						barBackgroundColor={item.barBackgroundColor || this.props.barBackgroundColor}
						barColor={item.barColor || this.props.barColor}
						barHeight={item.barHeight || this.props.barHeight}
						label={item.label || ''}
						makeUppercase={item.makeUppercase || this.props.makeUppercase}
						maxValue={item.maxValue || this.props.maxValue}
						showValue={item.showValue || this.props.showValue}
						value={item.value || 0}
						verticalSpacing={item.verticalSpacing || this.props.verticalSpacing}
					/>
				)}
			</div>
		);
	}
}

Bars.propTypes = {
	barBackgroundColor: React.PropTypes.string,
	barColor: React.PropTypes.string,
	barHeight: React.PropTypes.number,
	data: React.PropTypes.array.isRequired,
	label: React.PropTypes.string,
	makeUppercase: React.PropTypes.bool,
	maxValue: React.PropTypes.number,
	showValue: React.PropTypes.bool,
	value: React.PropTypes.number,
	verticalSpacing: React.PropTypes.number,
};

Bars.defaultProps = {
	barBackgroundColor: '#cccccc',
	barColor: '#303030',
	barHeight: 42,
	label: '',
	makeUppercase: false,
	maxValue: 100,
	showValue: true,
	value: 0,
	verticalSpacing: 46,
};

export default Bars;