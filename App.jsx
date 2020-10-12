
import React, { useState } from 'react';

function App(){
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState(['Egg', 'Milk', 'Bread']);

    function change(e){
        setNewItem(e.target.value);
    }

    function add(){
        setItems(i => {
            return [...i , newItem];
        });
    }

    function del(e){
        const delItem = e.target.id;
        setItems(i => {
            return i.filter((item, index) => {
                if(index != delItem) {
                    return item;
                }
            });
        });
    }

    return <div>
        <input type="text" onChange={change}/>
        <button onClick={add}>Add</button>
        <ul>
            {items.map((i, index)=> {
                return <li key={index}><button onClick={del} id={index}>Del</button> {i}</li>
            })}
        </ul>
    </div>;
}

export default App;