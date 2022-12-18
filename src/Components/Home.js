import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { home } from './store'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const Name = useSelector((val)=>{
        return val.Home.Name
    })
    const Email = useSelector((val)=>{
        return val.Home.Email
    })
    const Tel = useSelector((val)=>{
        return val.Home.Tel
    })
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    dispatch(home.changeNumber('1'))
    function focus(e){
        e.target.style.border='1px solid hsl(243, 100%, 62%)'
    }  
    function noFocus(e){
        e.target.style.border='1px solid grey'
    }
    function nextPage(){
        if(Name.length ===0 || Email.length ===0 || Tel.length=== 0){
            if(Name.length ===0){
                document.getElementById('name-error').style.display='inline-block'
                document.getElementById('name').style.border='1px solid hsl(354, 84%, 57%)'
                
            }
            else if (Email.length=== 0){
                document.getElementById('email-error').style.display='inline-block'
                document.getElementById('email').style.border='1px solid hsl(354, 84%, 57%)'
                
            }
            else if (Tel.length === 0){
                document.getElementById('phone-error').style.display='inline-block'
                document.getElementById('number').style.border='1px solid hsl(354, 84%, 57%)'
            }
            else{}
        }
        else{
            document.getElementById('name-error').style.display='none'
            document.getElementById('email-error').style.display='none'
            document.getElementById('phone-error').style.display='none'
            Navigate('/plans')
        }
    }
    return (
    <div className='home'>
        <h1>Personal info</h1>
        <p>Please provide Your name,email address and phone number.</p>
        <section>
            <label htmlFor="name">Name</label>
            <span id='name-error'>This field is required</span>
            <input onBlur={noFocus} onFocus={focus} onChange={(e)=>{
                dispatch(home.fillName(e.target.value))
                document.getElementById('name-error').style.display='none'
            }} id='name' type="text" placeholder='e.g Stephen King'/>
        </section>
        <section>
            <label htmlFor="email">Email Address</label>
            <span id='email-error'>This field is required</span>
            <input  onBlur={noFocus} onFocus={focus} onChange={(e)=>{
                dispatch(home.fillEmail(e.target.value))
                document.getElementById('email-error').style.display='none'
            }} id='email' type="text" placeholder='e.g StephenKing@Lorem.com'/>
        </section>
        <section>
            <label htmlFor="number">Phone Number</label>
            <span id='phone-error'>This field is required</span>
            <input   onBlur={noFocus} onFocus={focus} onChange={(e)=>{
                dispatch(home.fillTel(e.target.value))
                document.getElementById('phone-error').style.display='none'
            }} id='number'  type="tel" placeholder='e.g +1 234 567 890'/>
        </section>
        <button onClick={nextPage}>Next Step</button>
        <div className='hidden'></div>
    </div>

  )
}

export default Home