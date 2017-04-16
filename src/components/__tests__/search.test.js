import React from 'react';
import Search from '../search.jsx';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
	const component = renderer.create(<Search />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});