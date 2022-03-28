import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='appWraper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Content profilePage={props.profilePage} messagesPage={props.messagesPage} />
      </BrowserRouter>
    </div>
  )
}
export default App;
