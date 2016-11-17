import React from 'react';
import { mount, shallow } from 'enzyme';
import Bar from '../src/bar';
import Bars from '../src/bars';
import sinon from 'sinon';

describe('Bar component', () => {
	it('should be able to tolerate any props as input', () => {

		const wrapper = mount(
			<div>
				<Bar/>
				<Bar someprop='nonsense' />
				<Bar value={-30} />
				<Bar value={120} />
				<Bar label="Javascript" value={85} barColor='#ff0000'/>
			</div>
		);

		expect(wrapper.find(Bar).length).toBe(5);
	
		wrapper.unmount();

	});
});

describe('Bars component', () => {
	it('with NO DATA, it should return nothing (but not crash)', () => {

		// no Props
		const wrapper = mount(
			<Bars/>
		);

		let instance = wrapper.instance();
	
		wrapper.unmount();

	});

	it('with 10 data items, renders a Bar for each of the 10 data items', () => {

		let testData = [ // 10 items
			{label:'Javascript', value:85},
			{label:'C++', value: 82},
			{label:'React', value:80},
			{label:'Node.js', value:75},
			{label:'HTML5', value:72, barColor:'red'},
			{label:'CSS', value:68},
			{label:'JQuery', value:65},
			{label:'Bootstrap', value:60},
			{label:'Python', value:50},
			{label:'Angular.js', value:45},
		];

		// no Props
		const wrapper = mount(
			<Bars data={testData}/>
		);

		expect(wrapper.find(Bar).length).toBe(10)
	
		wrapper.unmount();
	});
});