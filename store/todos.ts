type State = {
  todos: [Todo];
};

type Todo = {
  text: string;
  done: boolean;
};

export const state = () => ({
  todos: [],
});

export const getters = {
  getTodos(state: State) {
    return state.todos;
  },
};

export const mutations = {
  add(state: State, text: string) {
    state.todos.push({ text, done: false });
  },
  remove(state: State, todo: Todo) {
    state.todos.filter((e) => e !== todo);
  },
  toggle(state: State, todo: Todo) {
    todo.done = !todo.done;
  },
};
