import { useState } from "react";

export function Form({ Handleadditems }) {

  const [description, setDescription] = useState(" ");
  const [quantity, setQuantity] = useState(1);

  // as we know on clicking enter button .data automatically gone so this is html feature to reduce this we  stop it
  function HandleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!description) return;
    const newitems = { description, quantity, packed: false, id: Date.now() };
    console.log(newitems);
    Handleadditems(newitems);

    setDescription("");
    setQuantity(1);



  }
  return <form className='addform' onSubmit={HandleSubmit}>
    <h3> What do you need for your 😍 trip ? </h3>
    <select className="option" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}> {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (<option value={num} key="num">{num}</option>))} </select>
    <input className="inputofform" type="text" placeholder="items.." value={description} onChange={(e) => (setDescription(e.target.value))} />
    <button className="addbtn"> Add</button>
  </form>;

}
