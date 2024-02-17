// Write your code here
import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  onClickUpdateSuggestion = () => {
    const {searchInfo, updateSearchInput} = this.props
    const {suggestion} = searchInfo
    updateSearchInput(suggestion)
  }

  render() {
    const {searchInfo} = this.props
    const {suggestion} = searchInfo

    return (
      <li className="suggestion-item" onClick={this.onClickUpdateSuggestion}>
        <p className="suggestion-text">{suggestion}</p>
        <img
          className="arrow-img"
          alt="arrow icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </li>
    )
  }
}
export default SuggestionItem
