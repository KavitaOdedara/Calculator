import Styles from './ButtonContainer.module.css'

const buttonsName = ['c', '/', '*', '+', '1', '2', '3', '-', '4', '5', '6', '%', '7', '8', '9', '.', '0', '=']
const ButtonContainer = ({onButtonClick}) =>{
    return<div className={Styles.buttonContainer}>

    {buttonsName.map(btnName => 
    <button className={Styles.button} onClick={() => onButtonClick(btnName)}>
      {btnName}
    </button>

    )}

  </div>
}

export default ButtonContainer;