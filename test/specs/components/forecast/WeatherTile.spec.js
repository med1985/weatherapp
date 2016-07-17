import React from 'react'
import TestUtils from 'react-addons-test-utils'
import WeatherTile from '../../../../src/components/forecast/WeatherTile.jsx'
import expect from 'expect'

const weather = {
    dt: 123,
    dt_txt: '2016-07-15 10:00',
    weather: [
        {
            icon: 'something'
        }
    ]
};

describe('WeatherTile', () => {
    it('should render', () => {
        const component = TestUtils.renderIntoDocument(<WeatherTile weather={weather}/>)
        expect(component).toExist()
    });
});