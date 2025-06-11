function AvailableTimes({ availableTimes, onChange, id, style, required }) {
  return (
    <select
      id={id}
      name="time"
      style={style}
      onChange={onChange}
      required={required}>
        {availableTimes.map(availableTime => <option key={availableTime.value}>{availableTime.value}</option>)}
      </ select>
  )
}

export default AvailableTimes;
