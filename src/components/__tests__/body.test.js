import {shallow} from 'enzyme';
import React from 'react';
import Body from '../body.jsx';

test('Link changes the class when hovered', () => {
	const component = shallow(<Body />);
	expect(component).toMatchSnapshot();
});