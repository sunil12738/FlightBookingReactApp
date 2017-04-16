import {shallow} from 'enzyme';
import React from 'react';
import Application from '../application.jsx';

test('Link changes the class when hovered', () => {
	const component = shallow(<Application />);
	expect(component).toMatchSnapshot();
});