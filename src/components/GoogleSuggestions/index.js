// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLoweCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />

          <div className="search-container">
            <div className="input-container">
              <img
                className="search-img"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                className="input-element"
                type="search"
                placeholder="Search Google"
                onChange={this.onChangeInputSearch}
                value={searchInput}
              />
            </div>
            <ul className="search-items">
              {searchResult.map(eachSearch => (
                <SuggestionItem
                  key={eachSearch.id}
                  searchInfo={eachSearch}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
