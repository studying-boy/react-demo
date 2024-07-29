import { useRoutes } from 'react-router-dom';
import routes from './router';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="content"> 
        {/* 映射关系 ：path => Component */} ​ 
        { useRoutes(routes) } 
      </div> 
    </div>
  );
}

export default App;
