/**
 * Require the classnames project to make it easier to write conditional classes
 */
var classNames = require('classnames');

/**
 * Button Component returns a single button
 * The variant prop allows to adjust the color.
 */
const Button = ({ children, variant, onClick, ...props })=> {

  return(
    <button
      onClick = {onClick}
      className={
        classNames(
        "text-white rounded px-5 py-3 leading-none",
        {
          "bg-gray-500" : !variant,
          "bg-disqo-blue" : variant === "save",
          "bg-disqo-red" : variant === "delete",
          "bg-disqo-green" : variant === "add"
        }
      )}
    >
      {children || '' }
    </button>
  )
}

export default Button