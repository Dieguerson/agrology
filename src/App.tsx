import { HashRouter, Routes, Route } from "react-router-dom";
import { Main } from './layouts/Main'
import { Employee } from "./pages/Employee";
import { Employees } from "./pages/Employees";
import { AgroProvider } from './context/AgroContext';
import { Home } from './pages/Home'
import { FourOFour } from "./pages/FourOFour";

function App() {

  return (    
    <AgroProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />}/>
            <Route path="/employees" element={<Employees />}/>
            <Route path="/employees/:id" element={<Employee />}/>
            <Route path='*' element={<FourOFour />} />
          </Route>
        </Routes>
      </HashRouter>
    </AgroProvider>
  );
}

export default App;
