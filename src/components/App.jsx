import React from 'react'

export default class App extends React.Component {
    render() {
        return <div>
                <header className='navbar nav-bar-default'>
                    <div className='container-fluid'>
                        <ul className='nav navbar-nav'>
                            <li><h2>Weather App</h2></li>
                        </ul>
                    </div>
                </header>
                <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
            </div>
    }
}