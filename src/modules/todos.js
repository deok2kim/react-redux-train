const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

let nextId = 1; // 데이터 저장시 사용할 고유 id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    text,
    id: nextId++,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// const initialState = [
//   {
//     id: 1,
//     text: "예시",
//     done: false,
//   },
// ];
const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}
