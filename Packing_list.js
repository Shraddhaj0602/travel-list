import { useState } from "react";
import { Item } from "./App";

export function Packing_list({ items, Handledelitems, handleToggleitems, Ondeletething }) {

  const [sortby, setsortby] = useState("input");





  let sortitems;
  if (sortby === 'input') sortitems = items;
  if (sortby === 'description') sortitems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === 'packed') sortitems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list-container">
      <div className="list">
        {sortitems.map((item) => (
          <Item
            item1={item}
            key={item.id}
            Handledelitems={Handledelitems}
            handleToggleitems={handleToggleitems} />
        ))}

      </div>

      <div>

        <select className="Sort" value={sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>

      <button className="clear" onClick={Ondeletething}> Clear list </button>




    </div>
  );
}
