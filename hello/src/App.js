// import logo from './logo.svg';
import './App.css';
import ParentComp from './components/ParentComp';
import PureComp from './components/PureComp';
//import FragmentDemo from './components/FragmentDemo';
//import LifecycleA from './components/LifecycleA';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
     <ParentComp />
    </div>
  );
}
export default App;


