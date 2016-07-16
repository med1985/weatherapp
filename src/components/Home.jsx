import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

//({ number, increase, decrease })
class Home extends React.Component {
    render() {
        return (
            <div>
                Some state changes:
                {this.props.number}
                <button onClick={() => this.props.increase(1)}>Increase</button>
                <button onClick={() => this.props.decrease(1)}>Decrease</button>
            </div>
        )
    }
}

export default connect(
    state => ({ number: state.count.number }),
    { increase, decrease }
)(Home)