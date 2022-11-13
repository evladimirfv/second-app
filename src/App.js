import logo from './logo.svg';
import './App.css';
import parse from 'html-react-parser';

let categories = [
  'English Rock',
  'Spanish Rock',
  'Salsa',
  'Cumbia',
  'Vallenato',
  'Reggae',
  'Reggeton',
  'Folklorica'
];


let reducer = (accumulator, item) => {
    				return accumulator + "<li>" + item + "</li>";
                };

let generateOL = '<ul>' + 
				categories.reduce(reducer,"") 
                + '</ul>';



let content = 
  (<div>
    <h1> My top 10 favorite songs per category </h1>
    <h2>Categories:</h2>
    <div>{parse(generateOL)} </div>
    

  </div>);

function App() {
  return ( content
   
  );
}

export default App;
