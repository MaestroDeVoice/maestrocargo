const movers = [
  { value: 0, title: "Грузчик не нужен" },
  { value: 1, title: "1 грузчик" },
  { value: 2, title: "2 грузчика" },
  { value: 3, title: "3 грузчика" },
  { value: 4, title: "4 грузчика" },
  { value: 5, title: "5 грузчика" },
  { value: 6, title: "6 грузчика" },
  { value: 7, title: "7 грузчика" },
  { value: 8, title: "8 грузчика" },
  { value: 9, title: "9 грузчика" },
  { value: 10, title: "10 грузчика" },
];

function SelectMovers(props) {
  return (
    <div className="calculator__movers">
      <select onChange={props.onChange}>
        {movers.map(mover => <option value={mover.value}>{mover.title}</option>)}
      </select>
    </div>
  );
}

export default SelectMovers;
