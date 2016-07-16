import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

//({ number, increase, decrease })
class Home extends React.Component {
    render() {
        return (
            <div>
                

            </div>
        )
    }
}

export default connect(
    state => ({ number: state.count.number }),
    { increase, decrease }
)(Home)