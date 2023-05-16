import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import arcade from './images/icon-arcade.svg'
import advance from './images/icon-advanced.svg'
import pro from './images/icon-pro.svg'
import { NavLink } from 'react-router-dom';
import { home, phasetwo } from './store';
const Pagetwo = () => {
  const plan = useSelector((val)=>{
    return val.phasetwo.plan
  })
  const dispatch = useDispatch()
  dispatch(home.changeNumber('2'))
  
  const width = window.screen.availWidth
  useEffect(()=>{
    const ball = document.getElementsByClassName('ball')[0]
  const left = document.getElementsByClassName('left')[0]
  const right = document.getElementsByClassName('right')[0]
  if(!plan === 'monthly'){
    ball.style.float= 'right'
    dispatch(phasetwo.changePlan('yearly'))
    left.style.fontWeight ='400'
    right.style.fontWeight='700'

   }
   else{
    ball.style.float = 'left'
    dispatch(phasetwo.changePlan('monthly'))
    left.style.fontWeight ='700'
    right.style.fontWeight='400'
   }
},[])


  function select(e){
    const content = e.target
    let array =Array.prototype.slice.call(content.querySelectorAll('*'))
    dispatch(phasetwo.changePlanPrice(array[2].getAttribute('data-price')))
    dispatch(phasetwo.changePurchase({name:array[1].innerHTML,price:array[2].innerHTML}))
    content.style.border='1px solid  hsl(228, 100%, 84%)'
    content.style.backgroundColor='hsl(217, 100%, 97%)'
     let previous = content.previousElementSibling
    let next = content.nextElementSibling
    while(previous !== null){
      previous.style.border='1px solid hsl(220, 8%, 85%)'
      previous.style.backgroundColor='white'
      previous= previous.previousElementSibling
    }
    while(next !== null){
      next.style.border='1px solid hsl(220, 8%, 85%)'
      next.style.backgroundColor='white'
      next = next.nextElementSibling
    }

  }
  function change(){
     const ball = document.getElementsByClassName('ball')[0]
     const left = document.getElementsByClassName('left')[0]
     const right = document.getElementsByClassName('right')[0]
     const style = ball.style.transform
     if(style === '' || style==='translateX(0px)'){
      if( width > 500){
        ball.style.transform = 'translateX(40px)';
      }
      else{
        ball.style.transform = 'translateX(45px)';
      }
      ball.style.transform = 'translateX(40px)';
      dispatch(phasetwo.changePlan('yearly'))
      left.style.fontWeight ='400'
      right.style.fontWeight='700'

     }
     else{
      ball.style.transform = 'translateX(0px)';
      dispatch(phasetwo.changePlan('monthly'))
      left.style.fontWeight ='700'
      right.style.fontWeight='400'
     }
  }
  return (
    <div className='Select-plan'>
      <h1>Select your plan</h1>
      <p>you have the option of monthly or yearly billing</p>
      {
        plan ==='monthly'?<main>
        <div onClick={select} className='option'>
          <img src={arcade} alt="" />
          <span className='big-text'>Arcade</span>
          <span data-price= '9'>
            $9/mo
          </span>
        </div>
        <div onClick={select} className='option'>
            <img src={advance} alt="" />
            <span className='big-text'>Advanced</span>
            <span data-price='12'>$12/mo</span>
        </div>
        <div onClick={select} className='option'>
            <img src={pro} alt="" />
            <span className='big-text'>Pro</span>
            <span data-price='15'>$15/mo</span>
        </div>
      </main>:
      <main>
        <div onClick={select} className='option'>
          <img src={arcade} alt="" />
          <span className='big-text'>Arcade</span>
          <span data-price='90'>
            $90/yr
          </span>
          <span className='last'>2 months free</span>
        </div>
        <div onClick={select} className='option'>
            <img src={advance} alt="" />
            <span className='big-text'>Advanced</span>
            <span data-price='120'>$120/yr</span>
            <span className='last'>2 months free</span>
        </div>
        <div onClick={select} className='option'>
            <img src={pro} alt="" />
            <span className='big-text'>Pro</span>
            <span data-price='150'>$150/yr</span>
            <span className='last'>2 months free</span>
        </div>
      </main>
      }
        <section>
          <span className='left'>Monthly</span>
          <div onClick={change} className='switch'><p className='ball'></p></div>
          <span className='right'>Yearly</span>
        </section>
        <div className='hidden'></div>
        <footer>
          <NavLink className='back button' to='/'>Go Back</NavLink>
          <NavLink className='next button' to='/add-ons'>Next Step</NavLink>
        </footer>
    </div>
  )
}

export default Pagetwo;