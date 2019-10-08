import React from 'react';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import Home from '../index';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Layout', () => {
    it('should exist', () => {
        expect(Home).toBeDefined();
    });

    it('should render', () => {
        Enzyme.shallow(<Home />);
    });

    it('should be properly rendered', () => {
        const wrapper = Enzyme.mount(<Home />);

        expect(wrapper.find('h1').contains('Darty React App')).toEqual(true);
    });
});
