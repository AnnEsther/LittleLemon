import './App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
   <>
   <head>
   <meta name="description" content="A family owned Mediterranean Restaurant, prominent in the Chicago Food scene with a focus on Traditional recipes with modern experience."/>
   <meta name="og:title" content="Little Lemon Restaurant"/>
   <meta name="og:description" content="A family owned Mediterranean Restaurant"/>
   <meta name="og:image" content="https://www.google.com/imgres?q=little%20lemon%20restaurant&imgurl=https%3A%2F%2Flittle-lemon-restaurant-project.netlify.app%2Fstatic%2Fmedia%2FLogo%2520Footer.2c859235d6c57bb54176.png&imgrefurl=https%3A%2F%2Flittle-lemon-restaurant-project.netlify.app%2F&docid=_2LJFmrpcR8sgM&tbnid=92V7uooHsYa2XM&vet=12ahUKEwibpLTMrr-KAxUnDjQIHc5iIawQM3oECBUQAA..i&w=1362&h=2400&hcb=2&ved=2ahUKEwibpLTMrr-KAxUnDjQIHc5iIawQM3oECBUQAA"/>
   </head>
   <body>
    <Header/>
   
    <Main/>
    <Footer/>
   </body>
   </>
  );
}

export default App;
