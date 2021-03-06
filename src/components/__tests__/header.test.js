import React from 'react';
import Header from '../header.jsx';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
	const component = renderer.create(<Header />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});