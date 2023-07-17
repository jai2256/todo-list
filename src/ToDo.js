import React from 'react';
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';
// import DoneIcon from '@mui/icons-material/Done';

const ToDo = ({todo, handleToggle, handleFilter}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        
<Grid container justifyContent="center" alignItems="center" spacing={0.5} style={{ padding:0, margin:1 }}>
  <Grid item>
    <span
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? "todo strike" : "todo"}

    >
      {todo.task}
    </span>
  </Grid>
  <Grid item>
    <span>      
      {"  "}
      <DeleteIcon style={{paddingTop:'4'}}        
        sx={{ 
          color: "black", 
          "&:hover": { color: "red" } 
        }}
      
      onClick={() => handleFilter(todo.id)} />
    </span>
  </Grid>
</Grid>
    );
};

export default ToDo;