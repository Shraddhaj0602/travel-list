export function Stats({ items }) {

  if (items.length === 0)
    return (<div className="footer"><p>Start adding some items to your packed list 🚀
    </p></div>);



  const numofitems = items.length;
  const numofpackeditems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numofpackeditems / numofitems) * 100);


  return <footer className="footer"> <em>{(percentage === 100) ? `you got everything! ready to go ✈️` : `💼 You have  ${numofitems} items on your list,and you already packed  ${numofpackeditems} ${(percentage + '%')} `}</em></footer>;

}
