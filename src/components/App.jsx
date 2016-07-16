import React from 'react'
import { Link, withRouter } from 'react-router'

class App extends React.Component {
    render() {
        const { router } = this.props;
        return <div>
                <header>
                    Links:
                    {' '}
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/foo">Foo</Link>
                    {' '}
                    <Link to="/bar">Bar</Link>
                </header>
                <div>
                    <button onClick={() => router.push('/foo')}>Go to /foo</button>
                </div>
                <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
            </div>
    }
}

export default withRouter(App);