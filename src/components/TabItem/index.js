import './index.css'

const TabItem = props => {
  const {tabDetails, onClickChange, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChange = () => {
    onClickChange(tabId)
  }

  const activeBtnClass = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtnClass}`}
        onClick={onChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
