import React  from "react";
import Main from "./pages/main/Main";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import Layout from "./routes/Layout";
function App() {

  const routesFromElements = createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Main/>} />
      <Route path="/" element={<Main/>} errorElement={ErrorBoundary} />
    </Route>
  );
  
  const router = createBrowserRouter(routesFromElements);
  
  


  return (
    
      <div id="app" className="App">
        <RouterProvider router={router}/>
 
      </div>
   
  );
}

export default App;
