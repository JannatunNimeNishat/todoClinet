import { useAppSelector } from "@/redux/hook";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const {todos} = useAppSelector((state)=> state.todos);
    
  //getting todos from jsonPlaceHolder using RTQ query ( redux -> api -> api.ts)
  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);
  // console.log('data',data);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
         {
                    todos.length <= 0 ? <div className="bg-white text-2xl font-bold p-5 flex items-center justify-center rounded-md">
                    <p>There is no task pending</p>
                </div>
                :
                <div className="h-full w-full bg-white p-5 opacity-85 rounded-lg space-y-3">
                   {
                     todos.map((item) => (
                        <TodoCard key={item.id} {...item} />
                      ))
                   }
                </div>
                }
        {/*  <div className="bg-white text-2xl font-bold p-5 flex items-center justify-center rounded-md">
                    <p>There is no task pending</p>
                </div> */}

       {/*  <div className="h-full w-full bg-white p-5 opacity-85 rounded-lg space-y-3">
          {todos.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div> */}

        {/*  {
                    filteredTodos.length ? filteredTodos.map((item)=>(
                        <TodoCard key={item.id} {...item}/>
                        
                    ))
                    :
                    todos.map((item) =>(
                        <TodoCard key={item.id} {...item}/>
                    ))
                   } */}
      </div>
    </div>
  );
};

export default TodoContainer;
