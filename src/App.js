import './App.css';
import SiteHeader from './components/siteheader';
import MyFooter from './components/footer';
import Title from './components/title';
// import { Layout } from 'antd';  
// const { Header, Content, Footer } = 'Layout';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

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
