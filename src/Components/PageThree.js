import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mark from './images/icon-checkmark.svg'
import { NavLink } from 'react-router-dom'
import { home, phasetwo } from './store'
const PageThree = () => {
  const dispatch = useDispatch()
  const selected = useSelector((val)=>{
    return val.phasetwo.plan
  })
  const add_on = useSelector((val)=>{
    return val.phasetwo.add_on
  })
  const positions = useSelector((val)=>{
    return val.phasetwo.positions
  })
  useEffect(()=>{
    positions.map((val)=>{
      add_on.map((value)=>{
        if ( val === value.position){
          const elem =  document.getElementById(val)
          elem.style.backgroundColor ='hsl(243, 100%, 62%)'
          elem.parentElement.style.backgroundColor='hsl(217, 100%, 97%)'
        }

      })
    })
  },[])
  dispatch(home.changeNumber('3'))
  function checkmate(e){
    const element = e.target.style.backgroundColor
    const parent = e.target.parentElement
    let array =Array.prototype.slice.call(parent.querySelectorAll('*'))
    if(element ==='' || element === 'white'){
        e.target.style.backgroundColor= ' hsl(243, 100%, 62%)'
        e.target.parentElement.style.border ='1px solid hsl(228, 100%, 84%)'
        e.target.parentElement.style.backgroundColor ='hsl(217, 100%, 97%)'
        dispatch(phasetwo.AddON({
          service:array[2].innerHTML,
          price:array[4].innerHTML,
          value:array[4].getAttribute('data-price'),
          position:array[4].getAttribute('data-position')
        }))
    }
    else{
        e.target.style.backgroundColor='white'
        e.target.parentElement.style.border='1px solid hsl(217, 100%, 97%)'
        e.target.parentElement.style.backgroundColor ='white'
        dispatch(phasetwo.Delete(array[2].innerHTML))
    }
  }
  return (
    <div className='add-ons'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      { selected ==='monthly'?
        <section>
        <div>
          <span id='one' onClick={checkmate} className='marker'> <img src={mark} alt="" /></span>
          <h4>Online service</h4>
          <p>Access to multiplayer games</p>
          <span className='float' data-position='one' data-price='1'>+$1/mo</span>
        </div>
        <div>
           <span id='two'  onClick={checkmate} className='marker'><img src={mark} alt="" /></span>
           <h4>Larger service</h4>
           <p>Extra 1TB of cloud save</p>
           <span className='float' data-position='two' data-price='2'>+2/mo</span>
        </div>
        <div>
          <span id='three'  onClick={checkmate} className='marker'><img src={mark} alt="" /></span>
           <h4>Customizable profile</h4>
           <p>Custom theme on your profile</p>
           <span className='float' data-position='three'data-price='2'>+2/mo</span>
        </div>
      </section>:
      <section>
      <div>
        <span  id='four' onClick={checkmate} className='marker'> <img src={mark} alt="" /></span>
        <h4>Online service</h4>
        <p>Access to multiplayer games</p>
        <span data-position='four' className='float' data-price='10'>+$10/yr</span>
      </div>
      <div>
         <span id='five'  onClick={checkmate} className='marker'><img src={mark} alt="" /></span>
         <h4>Larger service</h4>
         <p>Extra 1TB of cloud save</p>
         <span data-position='five' className='float' data-price='20'>+20/yr</span>
      </div>
      <div>
        <span id='six'  onClick={checkmate} className='marker'><img src={mark} alt="" /></span>
         <h4>Customizable profile</h4>
         <p>Custom theme on your profile</p>
         <span className='float' data-position='six' data-price='20'>+20/yr</span>
      </div>
    </section>
      }
        <div className='hidden'></div>
      <footer>
          <NavLink className='back button' to='/plans'>Go Back</NavLink>
          <NavLink className='next button' to='/summary'>Next Step</NavLink>
        </footer>
    </div>
  )
}

export default PageThree;