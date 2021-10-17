import {useState, useEffect} from 'react'
import './App.css';
import Stately from './components/Stately'

let renders = 0
 
function App() {
  renders += 1

  const [myState, setMyState] = useState(0)

  const increment = () => {
    setMyState(myState + 1)
  }

  const applyThisEffectOnEachRender = () => {
    const colors = ["#f9f", "#f99", "#ff9", "#9f9", "#9ff", "#99f"]
    const index = renders % colors.length
    const color = colors[index]
    document.body.style.backgroundColor = color
  }

  useEffect(applyThisEffectOnEachRender)

  return (
    <div id="App">
      <Stately
        renders={renders}
        myState={myState}
        action={increment}
      />

      <h1>Demo of useState and useEffect</h1>
      <p>
        The <code>App()</code> function is called for the first time by the <code>ReactDOM.render()</code> function in index.js. The first time it is called the <code>myState</code> constant is set to <code>0</code>.
      </p>
      <p>Each time you click on the <code>Stately div</code> above, the value of <code>myState</code> is incremented by 1. This change causes React to call the <code>App ()</code> function again, in order to render the <code>App</code> component one more time. This will have several effects:</p>
      <ul>
        <li>The value of the local variable <code>renders</code> will be incremented by 1</li>
        <li>The values of the <i>constants</i> <code>myState</code> and <code>setMyState</code> will be set inside the new function call. React will have stored the newly-changed value of <code>myState</code> internally, and will set the <i>constant</i> <code>myState</code> to this saved value.</li>
        <li>A new function <code>increment()</code> will be created, and passed as the <code>action</code> prop to the <code>Stately</code> component.</li>
        <li>The <code>useEffect</code> function will be triggered, which will generate a side-effect. In this example, the side-effect is a change of background-color for the body. In a real project, it could be any effect that is independent of the rendering logic, such as a <code>fetch</code> request, starting a timer, or updating the page title.</li>
      </ul>
      <h2>Note</h2>
      <p>When you create an app using <code>npx create-react-app</code>,by default, the <code>index.js</code> file will render using <a href="https://reactjs.org/docs/strict-mode.html"><code>&lt;React.StrictMode&gt;</code></a>. In development mode, this will call the <code>App()</code> function twice for each render, in order to activate additional checks and warnings, forhighlighting potential problems in an application.</p>
      <p>In this demo, <code>&lt;React.StrictMode&gt;</code> has been disabled, so each the <code>App()</code> function will only be called once per render.</p>
    </div>
  );
}

export default App;
