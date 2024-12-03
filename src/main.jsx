import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';


// const router = Routes([
//   {
//    path:'/' ,
//    element:<Layout />,
//    children: [
//     {
//       path:"",
//       element: <Home />
//     },
//     {
//       path:"about",
//       element:<About />
//     },
//     {
//       path:"contact",
//       element:<Contact />
//     }
//    ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutersFromElements(
//     <Route path='/' element={<Layout />}>
//           <Route path='' element={<Home />} />
//           <Route path='about' element={<About />} />
//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
   
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Router>
            <Routes>
              <Route path='' element={<Layout />}>
                  <Route path='' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='contact' element={<Contact />} />
                  <Route path='user/:userid' element={<User />} />       
                  <Route 
                  // loader = {githubInfoLoader}
                  path='github'
                   element={<Github />} 

                   />
              </Route>
            </Routes>
        </Router>
  </StrictMode>,
)
