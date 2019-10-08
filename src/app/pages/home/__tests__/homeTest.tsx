import React from 'react';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import Home from '../home';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Layout', () => {
    it('should exist', () => {
        expect(Home).toBeDefined();
    });

    it('should render', () => {
        const wrapper = Enzyme.shallow(<Home />);
        expect(wrapper.find('h1').contains('Home')).toEqual(true);
    });
});
