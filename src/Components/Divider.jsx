
// Style
import './Divider.css'

const Divider = ({children, variant}) => {
  return (
    <div className={"Divider"} style={{backgroundColor: `var(--color-${variant})` }}>
      {children}
    </div>
  )
}

export default Divider