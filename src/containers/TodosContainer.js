import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
  // const { todos } = useSelector((state) => ({
  //   todos: state.todos,
  // }));
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (todo) => dispatch(addTodo(todo));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
