import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Articles } from '../Pages/Articles/Articles';
export default function AppRoutes(){

return(
<div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Articles/>}/>



</Routes>
</BrowserRouter>
</div>

)

}
