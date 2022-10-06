// Importing css stylesheets is as simple as this, mind the path though.
// If we start with a "./" we are saying to start in THIS folder.
// If we need to go up a folder we start with "../"
// This can be chained when we need to go up multiple folders "../../../"
import './App.css';

// Components
// Named import, we have to destructure them 
import { Header, Main } from "./components/Header/Header"
// Default import
import Footer from './components/Footer/Footer';


// This is the main component where we will 
function App() {
  // Here we are creating an object containing the properties we want
  // We are using this to keep our returned JSX as clean as possible
  const headerProps1 = {
    className: "header"
  }

  const headerTitle = "This is another title"

  return (
    <div className="App">
      {/** Here we are taking the object we defined earlier and using the spread operation "..." to pass it into our component */}
      <Header {...headerProps1}/>
      <Header
        // We can also pass in props like this, remember we need to use curly braces to use JavaScript inside our JSX
        title={headerTitle}
      />
      <Main />
      <Footer />
    </div>
  );
}

// Default export at work here
export default App;