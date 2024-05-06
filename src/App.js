import './App.css';
import SiteHeader from './components/siteheader';
import MyFooter from './components/footer';
import Title from './components/title';
// import { Layout } from 'antd';  
// const { Header, Content, Footer } = 'Layout';

function App() {
  // return (
  //   <div className="App">
  //     <SiteHeader/>
  //     <div className="CONTENT">
  //       <h4>CONSTRUCTION</h4>
  //     </div>
  //     <MyFooter/>
  //   </div>
  // );
  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
