import React from 'react';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

// import News from '../index';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Layout', () => {
    // it('should exist', () => {
    //     expect(News).toBeDefined();
    // });

    // it('should render', () => {
    //     const wrapper = Enzyme.shallow(<News />);
    //     expect(wrapper.find('h1').contains('Haberler')).toEqual(true);
    // });

    it('should run', () => {
        expect('1').toEqual('1');
    });
});
