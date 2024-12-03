

# Lab 2: Data Representation & Querying

## Exercise 1: Setting up Git Repository

**Create a Git Repository:** First, create a folder for your React project and initialize it as a Git repository using `git init`. This will allow you to track changes to your project and collaborate effectively.

```bash
git init
```

Stage all files and create the first commit:

```bash
git add .
git commit -m "Initial commit"
```

After staging and committing, rename the default branch to `main` (since Git now uses `main` as the default branch name for new repositories):

```bash
git branch -M main
```

Finally, push the repository to GitHub by linking it to a remote GitHub repository:

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Exercise 2: Creating and Modifying a React Application

**Set Up React Application:** Use the command `npx create-react-app` to create a new React app. This will scaffold the project structure, installing all necessary dependencies automatically. For more details, check out the official [Create React App documentation](https://create-react-app.dev/docs/getting-started/).

```bash
npx create-react-app my-app
cd my-app
npm start
```

**Displaying "Hello World":** Modify the `App.js` file inside the `src` directory to display a basic "Hello World" message in the browser:

```jsx
return (
  <div>
    <h1>Hello World!</h1>
  </div>
);
```

**Displaying Current Time:** Dynamically display the current time using JavaScript's `new Date()` method. The `.toLocaleTimeString()` method is used to format the time as a string:

```jsx
return (
  <div>
    <h1>Hello World!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);
```

## Exercise 3: Componentization

**Create `Content.js`:** Move the "Hello World" and time logic into a reusable component, `Content.js`, which is placed inside a `components/` folder. This separates concerns and makes your app modular:

```jsx
import React from 'react';

const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;
```

**Create `Header.js` and `Footer.js`:** Create separate header and footer components to further modularize the app:

```jsx
const Header = () => {
  return <h1>My Header in another component</h1>;
};

export default Header;
```

```jsx
const Footer = () => {
  return <h3>My Footer in another component</h3>;
};

export default Footer;
```

**Update `App.js`:** Finally, import the components into `App.js` and compose them together in the return block:

```jsx
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
```

## Exercise 4: Adding Bootstrap

**Install Bootstrap:** Use npm to install Bootstrap and React-Bootstrap. This will allow you to use prebuilt Bootstrap styles and components in your React app:

```bash
npm install react-bootstrap bootstrap
```

After installing, import Bootstrap's CSS in the `src/index.js` file:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

For more details, refer to the [official React Bootstrap documentation](https://react-bootstrap.github.io/docs/getting-started/introduction).

## Exercise 5: Navigation Bar and Routing

**Add a Bootstrap Navbar:** Use React-Bootstrap's `Navbar` component to create a responsive navigation bar. Use React Router's `Link` to handle navigation between different pages. You can find more information on the `Navbar` in the [Navbar component section of the React Bootstrap documentation](https://react-bootstrap.github.io/docs/components/navbar).

Update the `Navbar` to use a dark theme by changing the background color to `primary` and adding `data-bs-theme="dark"`:

```jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;
```

**Set up Routing:** Install React Router to enable navigation between different pages. Wrap the app in `BrowserRouter` and use `Routes` and `Route` components to define different routes for the app:

```bash
npm install react-router-dom
```

Update the `App.js` file to include the routing logic. Each route will display a different component when its respective link is clicked:

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
```
## Exercise 6: Client Side Routing

React Router enables "client side routing".

In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

Update the App so that it display the Footer component when the URL changes to localhost:3000/read and Header component when the URL of the App changes to localhost:3000/create under the Navigation bar.
