import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Main } from './layouts/Main'
import { Employee } from "./pages/Employee";
import { Employees } from "./pages/Employees";
import { AgroProvider } from './context/AgroContext';
import { Home } from './pages/Home'

function App() {

  return (    
    <AgroProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/agrology' replace />} />
          <Route path="/" element={<Main />}>
            <Route index element={<Home />}/>
            <Route path="employees" element={<Employees />}/>
            <Route path="employees/:id" element={<Employee />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AgroProvider>
  );
}

export default App;
