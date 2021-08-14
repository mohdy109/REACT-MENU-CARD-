import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItem,setMenuitem] = useState(items);
  const [catogories,setCatogories] = useState([]);
  const filterItem = (category) => {
    const newItems = items.filter((item)=>item.category === category);
  setMenuitem(newItems)};
  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu </h2>
        <div className="underline">

        </div>
        <Categories filterItem={filterItem}/>
        <Menu items = {menuItem}/>

      </div>
      </section>

  </main>;
}

export default App;
