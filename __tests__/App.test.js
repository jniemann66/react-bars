import React from 'react';
import { mount, shallow } from 'enzyme';
import Bar from '../src/bar';
import Bars from '../src/bars';
import sinon from 'sinon';

// Turn console.error warnings into actual errors:
beforeAll(() => {
  console.error = (error) => {
    throw new Error(error);
  };
});

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
	it('with NO data, a prop warning should be issued (but component should not crash)', () => {

		// no data
	
		expect(()=> {
			const wrapper = mount(
				<Bars/>
			);
		}).toThrow("Warning: Failed prop type");
		
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

		const wrapper = mount(
			<Bars data={testData}/>
		);

		expect(wrapper.find(Bar).length).toBe(10)
	
		wrapper.unmount();
	});
});