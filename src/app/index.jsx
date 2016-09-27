import ReactDom from 'react-dom';

import TodoList from './components/TodoList.jsx';

ReactDom.render(
    <TodoList />,
    document.getElementsByTagName('body')[0]
);
