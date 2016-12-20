import React from 'react';
import { mount } from 'enzyme';
import Transport from './Transport';

beforeEach(() => {
	while(document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	}
});

it('should require propTypes.children', () => {
	expect(Transport.propTypes.children).toEqual(React.PropTypes.element.isRequired);
});

it('should render nothing', () => {
	const wrapper = mount(
		<Transport>
			<h1>Hi</h1>
		</Transport>
	);

	expect(wrapper.html()).toEqual(null);
});

it('should not append children to the document body if not open', () => {
	const wrapper = mount(
		<Transport>
			<h1>Hi</h1>
		</Transport>
	);

	expect(document.body.childElementCount).toEqual(0);
});

it('should append children to the document body if open', () => {
	const wrapper = mount(
		<Transport isOpen>
			<h1>Hi</h1>
		</Transport>
	);

	expect(document.body.childElementCount).toEqual(1);
	expect(document.body.lastElementChild, wrapper.instance().node);
});

it('should append children to document body if props.isOpen is set to true', () => {
	const wrapper = mount(
		<Transport isOpen={false}>
			<h1>Hi</h1>
		</Transport>
	);
	expect(document.body.childElementCount).toEqual(0);

	wrapper.setProps({ isOpen: true });
	expect(document.body.childElementCount).toEqual(1);
	expect(document.body.lastElementChild, wrapper.instance().node);
});
