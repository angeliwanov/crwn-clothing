import { Route, Routes} from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Route>
    </Routes>
    
  )
}

const Shop = () => {
  return (
    <h1>Shop</h1>
  )
}

export default App;
