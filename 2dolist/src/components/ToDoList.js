import React, {useState } from 'react';
import {Container} from './style';
import Lists from './Lists'
import ToDo from './ToDo'


const ToDoList =({id})=>{
    const [list , setList]=useState([]);

    return(
        <Container>
            <ToDo list={list} setList={setList}/>
            <div>
                {list.map((task, index)=>(
                    <Lists task={task} index={index} setList={setList} list={list}/>
                ))}
            </div>
        </Container>
    )

}
export default ToDoList;

