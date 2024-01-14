import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
    id:string;
    title:string;
    description:string;
    priority:string;
    isCompleted?:boolean;
}

type TInitialState = {
    todos:TTodo[]
}

const initialState: TInitialState ={
    todos:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action:PayloadAction<TTodo>) =>{
            state.todos.push({...action.payload, isCompleted:false});
        },
        removeTodo:(state, action:PayloadAction<string>) =>{
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        toggleComplete:(state,action:PayloadAction<string>)=>{
          //  state.todos = state.todos.map(item => item.id === action.payload ? {...item,isCompleted:!item.isCompleted}:item);
          
          const task  = state.todos.find(item => item.id === action.payload);
           task!.isCompleted = !task?.isCompleted;
           /* const  notCompletedTodos = state.todos.filter(item => !item.isCompleted);
           const  completedTodos = state.todos.filter(item => item.isCompleted);
           state.todos = [...notCompletedTodos,...completedTodos] */
        },
        /* filterByPriority:(state,action:PayloadAction<string>) =>{
            console.log('slice value',action.payload);
            if(action.payload === 'high'){
              state.filteredTodos =   state.todos.filter(item => item.priority === action.payload);
            }else if(action.payload === 'medium'){
               state.filteredTodos = state.todos.filter(item => item.priority === action.payload);
            }
            else if(action.payload === 'low'){
               state.filteredTodos = state.todos.filter(item => item.priority === action.payload);
            }else{
                state.filteredTodos = state.todos
            }
        } */
    }
});


export const {addTodo,removeTodo,toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;