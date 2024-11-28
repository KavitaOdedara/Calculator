import Styles from './Display.module.css';

const Display = ({displayValue}) => {
    return <input type="text" className={Styles.display} value={displayValue} readOnly/>

}
export default Display;