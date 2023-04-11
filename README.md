# React-Router-v5-Practice

This concept is the oldest way to write the react-router-dom

Steps to implement Router :

**Step 1 : install**

to use the react router first you need to install 

`npm i react-router-dom`

**Step 2 : import**

```jsx
import {BrowserRouter, Routes, Route} from "react-router-dom"
```

**Step 3 : wrap the BrowserRouter in which you want to apply**

```jsx
import Navbar from "./Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About.js";
import Pictures from "./Pictures";
import Videos from "./Videos";

export default function App() {
  return (<>
  <BrowserRouter>
    <Navbar/>
  </BrowserRouter>
  </>)
}
```

**Step 4 : provide the path you want to apply for the component**

```jsx
import Navbar from "./Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About.js";
import Pictures from "./Pictures";
import Videos from "./Videos";

export default function App() {
  return (<>
  <BrowserRouter>
    <Navbar/>
		<Route path = "/about" exact element = {<About/>}/>
    <Route path = "/pictures" exact element = {<Pictures/>}/>
    <Route path = "/videos" exact element = {<Videos/>}/>
  </BrowserRouter>
  </>)
}
```

if exact is not provided then it also applies for the `/` and also `/pictures` and whichever has the slash. so be specific and add exact before which element component you meant.

**Step 5 : Wrap with Routes inorder to switch between the route**

on changing the path it will leave the previous and apply to the specific one.

```jsx
import Navbar from "./Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About.js";
import Pictures from "./Pictures";
import Videos from "./Videos";

export default function App() {
  return (<>
  <BrowserRouter>
    <Navbar/>
    
    <Routes>
        <Route path = "/about" exact element = {<About/>}/>
        <Route path = "/pictures" exact element = {<Pictures/>}/>
        <Route path = "/videos" exact element = {<Videos/>}/>
    </Routes>

  </BrowserRouter>
  </>)
}
```

**Step 6 : Linking - import**

```jsx
import {Link} from "react-router-dom";
```

**Step 7 : Linking the path to the element**

```jsx
import React from "react";
import {Link} from "react-router-dom";
function Navbar()
{
  return(<>
  <ul>
    <Link to = "/about"><li>About</li></Link>
    <Link to = "/pictures"><li>Pictures</li></Link>
    <Link to = "/videos"><li>Videos</li></Link>
  </ul></>)
}

export default Navbar;
```

**The Example :**

```jsx
//App.js
import Navbar from "./Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About.js";
import Pictures from "./Pictures";
import Videos from "./Videos";

export default function App() {
  return (<>
  <BrowserRouter>
    <Navbar/>
    
    <Routes>
        <Route path = "/about" exact element = {<About/>}/>
        <Route path = "/pictures" exact element = {<Pictures/>}/>
        <Route path = "/videos" exact element = {<Videos/>}/>
    </Routes>

  </BrowserRouter>
  </>)
}
```

```jsx
//Navbar.js
import React from "react";
import {Link} from "react-router-dom";
function Navbar()
{
  return(<>
  <ul>
    <Link to = "/about"><li>About</li></Link>
    <Link to = "/pictures"><li>Pictures</li></Link>
    <Link to = "/videos"><li>Videos</li></Link>
  </ul></>)
}

export default Navbar;
```

```jsx
//About.js
import React from "react";
function About()
{
  return(<>
  <h1>This is the about page</h1>
  </>)
}

export default About;
```

```jsx
//Pictures.js
function Pictures ()
{
  return(<>
  <h1>This is the pictures page</h1>
  </>)
}

export default Pictures;
```

```jsx
//Videos.js
function Videos ()
{
  return(<>
  <h1>This is the videos page</h1>
  </>)
}

export default Videos;
```

**Codesandbox link :**

[https://codesandbox.io/s/react-router-forked-mru32q?file=/src/Navbar.js](https://codesandbox.io/s/react-router-forked-mru32q?file=/src/Navbar.js)

**Note :**

Earlier it used to <Switch> to wrap the routes but now it doesnt change.

It was changed to <Routes>

## Navigate component :

while we are making the multi page applications on clicking the button it should be redirected to the particular page which can be done using the <Navigate> from “react-router-dom”.

its path should be given to which it wants to go 

example : on clicking the button in home which redirectes us to about page.

the real life example is when we login if the authentication is correct it will be redirected to dashboard. 

**Syntax :**

```jsx
import {Navigate} from "react-router-dom";

<Navigate to= "/path"></Navigate>
```

Now there occurs a problem if directly provide the <Navigate> tag in the return like the code below.

```jsx
//Home.js

import {Navigate} from "react-router-dom";

function Home() {

  return (<>
	<Navigate to = "/about"></Navigate>
  <h1>Welcome to the home page</h1>
  <button>Go to About page</button>
  </>);
}

export default Home;
```

if we have done so 

on going to the /home immedietly it will redirect to the /about path.

which is not we have expected 

we want this to happen when we make an event. 

so we provide it when we click on button.

```jsx
//Home.js

import {Navigate} from "react-router-dom";

function Home() {

  return (<>
	
  <h1>Welcome to the home page</h1>
  <button onClick = {
	()=>{
	return <Navigate to = "/about"></Navigate>
	}>Go to About page</button>
  </>);
}

export default Home;
```

now this has to work but it still doesnt work because there is no state change.

The correct way is to :

```jsx
import {useState} from "react";
import {Navigate} from "react-router-dom";

function Home() {
  let [goTo , setGoTo] = useState(false);
  if (goTo)
  {
    return <Navigate to = "/about"></Navigate>
  }
  
  return (<>
  <h1>Welcome to the home page</h1>
  <button onClick = {()=>{
    setGoTo(true);
  }}>Go to About page</button>
  </>);
}

export default Home;
```

now on clicking the button ⇒ go to about page

the state is changed to true

condition gets qualified 

it will be navigated.

**CodeSandBox Link :**

[https://codesandbox.io/s/navigate-react-router-kytx8m](https://codesandbox.io/s/navigate-react-router-kytx8m)

**Note :**

Earlier to navigate between the pages the component was called as Redirect component.

which was later changed to the <Navigate>

Instead of creating useState multiple times and giving a condition to check we can follow a different procedure to navigate between the pages which is using the hook called useNavigate.

## useNavigate Hook : (Imperative method)

By this method we create a useNavigate hook and provide the path inside it and attach it to the event handler 

**Syntax :**

```jsx
import {useNavigate} from "router-react-dom";
let nav = useNavigate();

//setting the path 
nav("/about")
```

**The Example :**

```jsx
//App.js
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About.js";
import Pictures from "./Pictures";
import Videos from "./Videos";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path= "/" exact element ={<Home/>}/>
          <Route path= "/home" exact element ={<Home/>}/>
          <Route path="/about" exact element={<About />} />
          <Route path="/pictures" exact element={<Pictures />} />
          <Route path="/videos" exact element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
```

```jsx
//Home.js
import {useNavigate} from "react-router-dom";
function Home()
{
  const nav = useNavigate();
  return (<>
  <h1>Welcome to the home page</h1>
  <button onClick = {()=>{
      nav("/about"); //setting to the hook
    }
  }>Go to About page</button>
  </>);
}

export default Home;
```

```jsx
//About.js
import React from "react";
function About()
{
  return(<>
  <h1>This is the about page</h1>
  </>)
}

export default About;
```

```jsx
//Navbar.js
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <ul>
        <Link to="/home">
        <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/pictures">
          <li>Pictures</li>
        </Link>
        <Link to="/videos">
          <li>Videos</li>
        </Link>
      </ul>
    </>
  );
}

export default Navbar;
```

**CodeSandBox Link :**

[https://codesandbox.io/s/navigate-react-router-kytx8m?file=/src/Navbar.js:0-443](https://codesandbox.io/s/navigate-react-router-kytx8m?file=/src/Navbar.js:0-443)

## Nested Routes :

[https://codesandbox.io/s/nested-routes-f631rc](https://codesandbox.io/s/nested-routes-f631rc)

[https://www.youtube.com/watch?v=WNScOybyOhg&list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG&index=8](https://www.youtube.com/watch?v=WNScOybyOhg&list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG&index=8)

## No change Route :

[https://codesandbox.io/s/nested-routes-f631rc](https://codesandbox.io/s/nested-routes-f631rc)
