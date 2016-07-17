import React from 'react'
import { findDOMNode } from 'react-dom'
import { debounce } from 'lodash'
import { connect } from 'react-redux'
import { autoCompleteCity, resetSearch } from '../../actions/citySearch'
import { Typeahead } from 'react-typeahead';

class CityTypeahead extends React.Component {

    componentWillMount() {
        const { autoCompleteCity, reset } = this.props
        this.debouncedSearch = debounce(() => {
            if (this.getValue()) {
                autoCompleteCity(this.getValue())
            } else {
                reset()
            }
        }, 500);
        this.optionSelectedBind = this.onOptionSelected.bind(this);
    }

    getValue() {
        return findDOMNode(this.refs.typeahead.refs.entry).value
    }

    onOptionSelected(option) {
        const { resetSearch, onSelected } = this.props;
        resetSearch();
        onSelected(option.description);
    }

    render() {
        const { citySearch } = this.props
        return <citysearch>
                <Typeahead
                    options={ citySearch.cities || []}
                    onKeyUp={() => this.debouncedSearch()}
                    onKeyPress={() => this.debouncedSearch()}
                    maxVisible={10}
                    onOptionSelected={this.optionSelectedBind}
                    displayOption='description'
                    filterOption={(opt) => opt}
                    ref='typeahead'
                />
            </citysearch>
    }
}

export default connect(
    state => ({ citySearch: state.citySearch }),
    { autoCompleteCity, resetSearch }
)(CityTypeahead)