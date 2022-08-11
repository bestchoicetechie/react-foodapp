import './Categories.css'

const Categories = ({ filterItems }) => {
  return (
    <div className='categories-container'>
        <button className="category-btn" onClick={()=>
        filterItems('all')}>All</button>
        <button className="category-btn" onClick={()=>
        filterItems('breakfast')}>Breakfast</button>
        <button className="category-btn" onClick={()=>
        filterItems('lunch')}>Lunch</button>
        <button className="category-btn" onClick={()=>
        filterItems('shakes')}>Shakes</button>
    </div>
  )
}

export default Categories