import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

function Home() {
  return <h2>Home</h2>;
}

/* function Signin() {
  return <h2>Signin</h2>;
} */

/* function Signup() {
  return <h2>Signup</h2>;
}
 */
export default App;
