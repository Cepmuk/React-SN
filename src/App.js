import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className='appWraper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Content />
      </BrowserRouter>
    </div>
  )
}
export default App;
