import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { home } from './store';
import { NavLink } from 'react-router-dom';
const PageFour = () => {
  const dispatch = useDispatch()
  dispatch(home.changeNumber('4'))
  const plan = useSelector((val)=>{
      return val.phasetwo.plan
  })
  const purchase = useSelector((val)=>{
    return val.phasetwo.purchase
  })
  const add_on = useSelector((val)=>{
    return val.phasetwo.add_on
  })
   let value= useSelector((val)=>{
    return parseInt(val.phasetwo.plan_price)
   })

  
  return (
    <div className='summary'>
      <h1>Finishing up</h1>
      <p>Double check everything looks OK before confirming. </p>
      <main>
        <section>
          <p className='pricing'><span>{purchase.name}</span><span>{plan ==='monthly'?'(Monthly)':'(Yearly)'}</span></p>
          <span className='floater'>{purchase.price}</span>
          <NavLink className='link' to='/plans'> change</NavLink>
        </section>
        <hr />
        <section>
          {
            add_on.map((val)=>{
              value = value + parseInt(val.value)
              return(
                <p className='list'><span>{val.service}</span><span className='right'>{val.price}</span></p>
              )
            })
          }
        </section>
      </main>
      <p className='underx'><span>Total({plan ==='monthly'? 'per month':'per year'})</span ><span className='right'>+${value}/{plan ==='monthly'? 'mo':'yr'}</span></p>
      <footer>
          <NavLink className='back button' to='/add-ons'>Go Back</NavLink>
          <NavLink className='next button' to='/checkout'>Next Step</NavLink>
        </footer>
    </div>
  )
}

export default PageFour;