import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import { Layout } from './components/Layout.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      {/*<PageScrollToTop/>*/}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<App/>}/>
{/*          <Route path='services'>
            <Route index element={<ServiceHome/>}/>
            <Route path=':service' element={<ServiceInfo/>}/>
          </Route>
          <Route path='contact'>
            <Route index element={<ContactHome/>}/>
          </Route>
          <Route path='pricing'>
            <Route index element={<PricingHome/>}/>
          </Route>
          <Route path='portfolio'>
            <Route index element={<PorfolioHome/>}/>
          </Route>
          <Route path='about'>
            <Route index element={<AboutHome/>}/>
          </Route>
          <Route path='faq'>
            <Route index element={<FAQ/>}/>
          </Route>
           <Route path='error'>
            <Route index element={<Error/>}/>
          </Route>*/}
        </Route>
      </Routes>
 {/*     <ScrollToTop/>
      <Whatsapp/>*/}
    </BrowserRouter>
  </StrictMode>,
)
