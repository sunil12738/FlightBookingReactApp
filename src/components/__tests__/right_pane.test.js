import {shallow} from 'enzyme';
import React from 'react';
import RightPane from '../right_pane.jsx';

test('Link changes the class when hovered', () => {
	const component = shallow(<RightPane />);
	expect(component).toMatchSnapshot();
});