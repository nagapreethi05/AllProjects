import './styles.css';
import AppHeader from './components/AppHeader'
import values from './components/Game';


function App() {
  return (
    <>
      <div ><AppHeader /></div>
      <div className="appStyle"><values.Game /></div>
    </>
  );
}

export default App;