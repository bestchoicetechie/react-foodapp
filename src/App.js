
import { useState } from 'react';
import './App.css';
import Categories from './Components/Categories/Categories';
import Items from './Components/Items/Items';
import MenuItems from './Components/Data/data';

// const foodItems = [
//   {
//     id: 1,
//     image: './images/item-1.jpeg',
//     title: 'banana',
//     description: 'ddhdhdjdjjdjjd',
//     price: 23,
//   }
// ]

function App() {
  const [menuItem, setMenuItem] = useState(MenuItems);
  


  const filterItems = (category) =>{
    if (category === 'all'){
      setMenuItem(MenuItems);
      return;
    }
    const newItems = MenuItems.filter((item)=> item.category === category)
    setMenuItem(newItems);
  };
  return (
    <div className="foodApp">
      <div className="app">
        <h1>Our Menu</h1>
      </div>

      <Categories  filterItems={filterItems} />
      <Items items={menuItem}/>

    </div>
  );
}

export default App;
