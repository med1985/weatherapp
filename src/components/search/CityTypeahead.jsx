import React from 'react'
import { findDOMNode } from 'react-dom'
import { debounce } from 'lodash'
import { connect } from 'react-redux'
import { autoCompleteCity } from '../../actions/citySearch'
import { Typeahead } from 'react-typeahead';

class CityTypeahead extends React.Component {

    componentWillMount() {
        const { autoCompleteCity } = this.props
        this.debouncedSearch = debounce(() => {
            autoCompleteCity(this.getValue())
        }, 500);
    }

    getValue() {
        return findDOMNode(this.refs.typeahead.refs.entry).value
    }

    render() {
        const { citySearch } = this.props
        return <citysearch>
                <Typeahead
                    options={ citySearch.cities || []}
                    onKeyPress={() => this.debouncedSearch()}
                    maxVisible={2}
                    displayOption='description'
                    filterOption={(opt) => opt}
                    ref='typeahead'
                />
            </citysearch>
    }
}

export default connect(
    state => ({ citySearch: state.citySearch }),
    { autoCompleteCity }
)(CityTypeahead)