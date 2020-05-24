import axios from 'axios';

// interface defines the type of the response object in the code below
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// type annotations for function params
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo has ID: ${id}
    Title: ${title}
    Is it finished? ${completed}
  `);
};

const url = 'http://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((response) => {
  const todo = response.data as Todo; // type annotation
  const { id, title, completed } = todo;

  // TS checks that we call the fn with the right number of correctly typed parameters
  logTodo(id, title, completed);
});
