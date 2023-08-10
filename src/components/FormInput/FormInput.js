import { useState } from "react";
import classes from './FormInput.module.css';
// initialise default input value
// const initialUserInput = {
//     'current-savings':10000,
//     'yearly-contribution':1200,
//     'expected-return':7,
//     'duration':10
// };

// initialize default input value as blank
const initialUserInput = {
    'current-savings':'',
    'yearly-contribution':'',
    'expected-return':'',
    'duration':''
};
const FormInput = (props) => {

    // const [userInput,serUserInput] = useState({
    //     'current-savings':1000,
    //     'yearly-contribution':1200,
    //     'expected-return':7,
    //     'duration':10
    // });

    const [userInput,setUserInput] = useState(initialUserInput);

    //Handling event for submit form
    const handleSubmit = (e) => {
      e.preventDefault();
      //debugger
      if(userInput["current-savings"] !== '' && userInput["duration"] !=='' && userInput["expected-return"] !=='' && userInput["yearly-contribution"] !=='')
      {
      props.onCalculate(userInput);
      }
    }
    //Handle event for reset button click
    const handleReset =  () => {
        setUserInput(initialUserInput);
      //  props.onCalculate(initialUserInput);
    }

    // Handle event for all user input set to all the inputs inside the form
    const handleUserInputChange = (input,value) => {
        // to set user input all the values dynamically
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value, // + indicates converts the value to numeric
            }
        });
    }

 return(
    <div>
     <form onSubmit={handleSubmit} className={classes['form']}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={(e)=>handleUserInputChange('current-savings', e.target.value)} 
            value={userInput['current-savings']} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(e)=>handleUserInputChange('yearly-contribution', e.target.value)} 
            value={userInput['yearly-contribution']} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(e)=>handleUserInputChange('expected-return', e.target.value)}
            value={userInput['expected-return']}  type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(e)=>handleUserInputChange('duration', e.target.value)} 
            value={userInput['duration']} type="number" id="duration" />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>

    </div>
 );
};
export default FormInput;