// bar.js : defines Bar Component

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
import './bar.css';

/** Bar : draws a bar as part of a bar graph */
class Bar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		
		};
	}

	render() {
	
		return (
			<div>
				<div className="bar-contain" style={{
					height: this.props.barHeight + 'px',
					marginBottom: this.props.verticalSpacing + 'px',
					background: this.props.barBackgroundColor
				}}>
					<span className="bar-expand" style={{
						width: 100 * this.props.value / this.props.maxValue + '%',
						height: this.props.barHeight -2 + 'px',
						background: this.props.barColor
					}}>
						<div className="bar-label"> 
							{this.props.makeUppercase ? this.props.label.toUpperCase() : this.props.label}
						</div>
					</span>
				</div>

				<div className="bar-suffix">
					{this.props.showValue ? this.props.value : ''}
					{this.props.suffix}
				</div>

			</div>
		);
	}
}

Bar.propTypes = {
	barBackgroundColor: React.PropTypes.string,
	barColor: React.PropTypes.string,
	barHeight: React.PropTypes.number,
	label: React.PropTypes.string,
	makeUppercase: React.PropTypes.bool,
	maxValue: React.PropTypes.number,
	showValue: React.PropTypes.bool,
	suffix: React.PropTypes.string,
	value: React.PropTypes.number,
	verticalSpacing: React.PropTypes.number,
};

Bar.defaultProps = {
	barBackgroundColor: '#cccccc',
	barColor: '#303030',
	barHeight: 42,
	label: '',
	makeUppercase: false,
	maxValue: 100,
	showValue: false,
	suffix: '',
	value: 0,
	verticalSpacing: 46,
};

export default Bar;