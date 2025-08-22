function InputRange(props) {
  return (
    <div className="calculator__ranges">
      <label htmlFor="range">{props.title}</label>
      <input
        type="range"
        min={props.min}
        max={props.max}
        id="range"
        name="range"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputRange;