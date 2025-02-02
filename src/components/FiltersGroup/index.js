import './index.css'

const FiltersGroup = () => (
  <div className="filters-group-container">
    <div className="sort-by-container">
      <p className="sort-by">IDEAL FOR</p>
      <select className="sort-by-select">
        <option className="select-option">ALL</option>
      </select>
    </div>
    <div className="sort-by-container">
      <p className="sort-by">OCCASION</p>
      <select className="sort-by-select">
        <option className="select-option">ALL</option>
      </select>
    </div>
    <div className="sort-by-container">
      <p className="sort-by">WORK</p>
      <select className="sort-by-select">
        <option className="select-option">ALL</option>
      </select>
    </div>
    <div className="sort-by-container">
      <p className="sort-by">FABRIC</p>
      <select className="sort-by-select">
        <option className="select-option">ALL</option>
      </select>
    </div>
    <div className="sort-by-container">
      <p className="sort-by">SEGMENT</p>
      <select className="sort-by-select">
        <option className="select-option">ALL</option>
      </select>
    </div>
    <div className="sort-by-container">
      <p className="sort-by">SUITABLE FOR</p>
      <select className="sort-by-select">
        <option className="select-option">ALL</option>
      </select>
    </div>
    <div className="sort-by-container">
      <p className="sort-by">RAW MATERIALS</p>
      <select className="sort-by-select">
        <option className="select-option">ALL</option>
      </select>
    </div>
    <div className="sort-by-container">
      <p className="sort-by">PATTERN</p>
      <select className="sort-by-select">
        <option className="select-option">ALL</option>
      </select>
    </div>
  </div>
)

export default FiltersGroup
