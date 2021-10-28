/**
 * Custom Input Component returns an input field
 * max-length is hardcoded for now
 */
const Input = ({value, label, onChange, placeholder })=> {

  return(
    <>
      { label && <label>{label}</label> }
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength="255"
        className="p-2 rounded border"/>
    </>
  )
}

export default Input