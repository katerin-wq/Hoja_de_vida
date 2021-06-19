import Todo from './components/Todo';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <Title/>
      <Todo />
      <Cuerpo />
      <Footer/>
    </div>
  );
}

export default App;
