import ToDo from './ToDo';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

const ToDoList = ({toDoList,handleToggle, handleFilter, clearData}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo key={uuidv4()} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <Button sx={{color: "brown",fontWeight: 'bold'}} size="large" style={{margin: '20px'}} onClick={clearData} color='secondary'>CLEAR ALL</Button>
        </div>
    );
};

export default ToDoList;