
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome'

const users = [{name:'Ali',surname:'Musayev',age:'19',id:'1',src:'https://cdn.britannica.com/05/94905-050-1830515C/Whirlpool-Galaxy-NGC-5195-Sc.jpg'},
{name:'Kenan',surname:'Akbarli',age:'18',id:'2',src:'https://cdn.britannica.com/05/94905-050-1830515C/Whirlpool-Galaxy-NGC-5195-Sc.jpg'},
{name:'Ferid',surname:'Qara',age:'20',id:'3',src:"https://cdn.britannica.com/05/94905-050-1830515C/Whirlpool-Galaxy-NGC-5195-Sc.jpg"}]

function App() {
  return (

    <>
    {users.map((user)=>{
      return <Welcome id={user.id}name={user.name} surname={user.surname} age={user.age} img={user.src} />
    })}
    <Welcome/>
    </>
  );
}

export default App;
