import './index.css'

const ProductsHeader = props => {
  const {sortbyOptions, activeOptionId} = props

  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  return (
    <div className="products-header">
      <div className="search-input-container">
        <label htmlFor="checkbox">CUSTOMIZABLE</label>
        <input type="checkbox" className="search-input" id="checkbox" />
      </div>
      <div className="sort-by-container">
        <p className="sort-by">RECOMMENDED</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
