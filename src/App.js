import './App.css';
import HomePage from './components/pages/HomePage';
import SigninPage from './components/pages/SigninPage';
import HeaderComponent from './components/smart/HeaderComponent';
import SignupPage from './components/pages/SignupPage';

function App() {
  return (
    <>
    {/* <SignupPage></SignupPage> */}
    <SigninPage /> 
     <HomePage> 
        <HeaderComponent></HeaderComponent> 
      </HomePage>
      </>  
  );
}

export default App;
