import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './views/Home'
import Servicios from './views/Servicios'
import SobreNosotros from './views/SobreNosotros'
import ScrollToTop from './components/ScrollToTop'

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Suspense fallback={<p>Cargando</p>}>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/servicios' element={<Servicios />}/>
                    <Route path='/sobre-nosotros' element={<SobreNosotros />}/>
                </Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}
