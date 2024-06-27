
import { useState } from "react";
import './App.css';
import { Form } from "./Form";
import { Logo } from "./Logo";
import { Packing_list } from "./Packing_list";
import { Stats } from "./Stats";




const Initialitems=[{ id:1,description:"passport",quantity:2,packed:true },
{ id:2,description:"socks",quantity:2,packed:false },{id:3,description:"charger",quantity:3,packed:true }];

export default function App(){

  const [items,setItems]=useState([]);


  function Handleadditems(item){

    setItems((items)=>[...items,item])

  }

  function Handledelitems(id){
    console.log(id);
    setItems((items)=>items.filter((item)=>item.id !==id))
  }


  function Ondeletething(){
    const confirmed=window.confirm("Are you sure you want to delete all items?")
    if(confirmed) setItems([]);


  }
function handleToggleitems(id) {
  setItems((items) =>
    items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )
  );

}


return <div>
  <Logo/>
  <Form Handleadditems={Handleadditems}/>
  <Packing_list items={items}  Handledelitems={Handledelitems}  handleToggleitems={ handleToggleitems} Ondeletething={Ondeletething}/>
  <Stats items={items} />
  
  
   </div>

}


  export function Item({item1,Handledelitems, handleToggleitems}){
    return(  <div>
      <li className="description" > <span style={item1.packed?{textDecoration:"line-through"} :{}}> <input type="checkbox" className="checkbox" value={item1.packed} onChange={()=>{handleToggleitems(item1.id)}} />  {item1.quantity} {item1.description}   </span> <button onClick={()=>Handledelitems(item1.id)}> ❌</button></li> 
   </div>
    )
  }



