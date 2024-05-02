import './App.css';
import SiteHeader from './components/siteheader';
import MyFooter from './components/footer';
import { Layout } from 'antd';  
const { Header, Content, Footer } = 'Layout';

function App() {
  return (
    <div className="App">
      {/* <Layout>
        <Header>
          <SiteHeader />
        </Header>
        <Content>
          UNDER CONSTRUCTION
        </Content>
        <Footer>
          <MyFooter />
        </Footer>
      </Layout> */}
      <MyFooter/>
    </div>
  );
}

export default App;
