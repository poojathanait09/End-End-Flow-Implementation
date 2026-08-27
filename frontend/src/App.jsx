import {Routes, Route} from "react-router-dom";
import Signup from "./components/signUp";
import Confirmation from "./components/Confirmation";

function App () {
  return (
    <Routes>
      <Route
      path="/"
      element={<Signup/>}
      />

      <Route
          path="/confirmation/:id"
          element={<Confirmation/>}
          />

    </Routes>
  );
}

export default App;