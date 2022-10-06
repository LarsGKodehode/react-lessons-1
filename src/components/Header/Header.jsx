/**
 * Multiple exports, props and arrow function
 */

// In this file we are using arrow fucntion instead of normal function
// There are differences between normal function and arrow function but there is also some overlapp
// Inside one project choose one way, and stick with it for that project
// Sticking to on convention makes it far easier for other people to read, this include your future self

// This component accepts an incomming props object which we can use to customize the returned component
const Header = (props) => {
  // Here we are logging the props object
  console.log(props)

  // We can define variables inside our React components which we can later use
  const title = "Mye Header stored in a variable"

  // An arrow function is also possible here
  const makeTitle = (name) => {
    // We are using a string literal here to dynamically create a string
    return `This is my custom title, ${name}`
  }

  // Here we are returning JSX, note the parentheses around the HTML
  return(
    <h1
      className={props.className}
    >
      {
      /* We can add JavaScript inside JSX by wrapping it inside curly brackets
       * Here we are using this to call our function makeTitle to dynamically make our h1 content
       * By using a ternary operator, we check if this components prop contains a title variable
       * if so then we use that, if not we provide a default value
       */
       }
      {makeTitle(props.title ? props.title : {title})}
    </h1>
  )
};

// This is a basic component just returning some text
const Main = () => {
  return(
    <main>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi, accusamus rerum deserunt molestias unde delectus molestiae facilis ratione perspiciatis maiores assumenda cum autem quam quas earum obcaecati magnam sapiente?</p>
    </main>
  )
}

// We are wrapping all the functional components in one object and exporting that object
export {
  Header,
  Main,
}