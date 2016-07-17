import React from 'react'
import TestUtils from 'react-addons-test-utils'
import WeatherTile from '../../../../src/components/forecast/WeatherTile.jsx'
import expect from 'expect'

const weather = {
    dt: 123,
    dt_txt: '2016-07-15 10:00',
    weather: [
        {
            main: 'some detail',
            icon: 'something'
        }
    ]
};

describe('WeatherTile', () => {
    let component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<WeatherTile weather={weather}/>)
    });

    it('should render', () => {
        expect(component).toExist()
    });

    it('should be contain 4 divs (one outer, 3 inner)', () => {
        const divs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
        expect(divs.length).toBe(4)
    });

    it('should be contain 4 divs (one outer, 3 inner)', () => {
        const divs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
        expect(divs[2].textContent).toBe('some detail')
        expect(divs[3].textContent).toBe(' 10:00')
    });
});