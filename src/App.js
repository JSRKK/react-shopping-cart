import React from 'react';
import './App.css';
import { Header, Content, Footer } from './components'
import RouterApp from './routes';
import { Provider } from 'react-redux';
import store from './stores';
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Content>
        <RouterApp />
      </Content>
      <Footer />
    </Provider>
  );
}

export default App;
