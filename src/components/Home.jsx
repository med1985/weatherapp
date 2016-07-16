import React from 'react'
import { connect } from 'react-redux'
import CityTypeahead from './search/CityTypeahead.jsx'

//({ number, increase, decrease })
class Home extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        City:  <CityTypeahead />
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(
    state => ({}),
    {  }
)(Home)