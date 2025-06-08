import '../css/IconSwitch.css'

function IconSwitch( { icon, onSwitch }) {
    return (
        <span className="material-icons switch-icon" onClick={onSwitch}>
          {icon}
        </span>
    )
}

export default IconSwitch
