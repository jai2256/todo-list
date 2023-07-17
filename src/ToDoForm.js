import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// const styles = {
//     ""
// }

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}> 
            <TextField label="Enter task..." id="outlined-size-small" defaultValue="Small" size="small" input value={userInput} type="text" onChange={handleChange} />
            {/* {" "} <Button variant="contained" color='success'onClick={handleSubmit}> Add </Button>  */}
            {" "} <Button variant="contained" sx={{color: "brown",fontWeight: 'bold', backgroundColor: "white", "&:hover": {backgroundColor:"Brown", color: "white" }}}onClick={handleSubmit}> Add </Button>
        </form>
    );
};

export default ToDoForm;