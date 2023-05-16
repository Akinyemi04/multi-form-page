import './App.css';
import Home from './Components/Home';
import Pagetwo from './Components/Pagetwo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import PageThree from './Components/PageThree';
import Checkout from './Components/Checkout';
import PageFour from './Components/PageFour';
function App() {
  const display = useSelector((val)=>{
    return val.Home.number
})
  useEffect(()=>{
    if(display ==='1'){
       const  one = document.getElementsByClassName('one')[0]
       console.log(one.style.color)
       one.style.color='black'
       one.style.backgroundColor='hsl(206, 94%, 87%)'
       one.style.border='1px solid hsl(206, 94%, 87%)'
    }
    else{
      const  one = document.getElementsByClassName('one')[0]
       one.style.color='white'
       one.style.backgroundColor='inherit'
       one.style.border='1px solid white'
    }
    if(display ==='2'){
      const  one = document.getElementsByClassName('two')[0]
      one.style.color='black'
      one.style.backgroundColor='hsl(206, 94%, 87%)'
      one.style.border='1px solid hsl(206, 94%, 87%)'
   }
   else{
     const  one = document.getElementsByClassName('two')[0]
      one.style.color='white'
      one.style.backgroundColor='inherit'
      one.style.border='1px solid white'
   }
   if(display ==='3'){
    const  one = document.getElementsByClassName('three')[0]
    one.style.color='black'
    one.style.backgroundColor='hsl(206, 94%, 87%)'
    one.style.border='1px solid hsl(206, 94%, 87%)'
 }
 else{
   const  one = document.getElementsByClassName('three')[0]
    one.style.color='white'
    one.style.backgroundColor='inherit'
    one.style.border='1px solid white'
 }
 if(display ==='4'){
  const  one = document.getElementsByClassName('four')[0]
  one.style.color='black'
  one.style.backgroundColor='hsl(206, 94%, 87%)'
  one.style.border='1px solid hsl(206, 94%, 87%)'
}
else{
 const  one = document.getElementsByClassName('four')[0]
  one.style.color='white'
  one.style.backgroundColor='inherit'
  one.style.border='1px solid white'
}
  },[display])
  return (
    <div className="App">
      <BrowserRouter>
      <aside className='side'>
          <div className="number">
            <span className="active one">1</span>
            <aside className="aside">
            <p className="small">STEP 1</p>
            <p>YOUR INFO</p>
            </aside>
            
          </div>
          <div className="number">
            <span className="active two">2</span>
            <aside  className="aside">
              <p className="small">STEP 2</p>
            <p>SELECT PLAN</p>
            </aside>
            
          </div>
          <div className="number">
            <span className="active three">3</span>
            <aside  className="aside">
              <p className="small"> STEP 3</p>
              <p>ADD-ONS</p>
            </aside>
            
          </div>
          <div className="number">
            <span className="active four">4</span>
            <aside  className="aside">
              <p className="small"> STEP 4</p>
              <p>SUMMARY</p>
            </aside>
          </div>
      </aside>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/plans' element={<Pagetwo/>}/>
        <Route path='/add-ons' element={<PageThree/>}/>
        <Route path='/summary' element={<PageFour/>}/>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
