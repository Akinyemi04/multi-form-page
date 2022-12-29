import { configureStore,createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:'Date',
    initialState:{
        Name:'',
        Email:'',
        Tel:'',
        number:'1'
    },
    reducers:{
        fillName(state,action){
            return{
                ...state,
                Name:action.payload
            }
        },
        fillEmail(state,action){
            return{
                ...state,
                Email:action.payload
            }
        },
        fillTel(state,action){
            return{
                ...state,
                Tel:action.payload
            }
        },
        changeNumber(state,action){
            return{
                ...state,
                number:action.payload
            }
        }
    }
})
const phasetwoSlice= createSlice({
    name:'Phasetwo',
    initialState:{
        plan:'monthly',
        plan_price:'9',
        purchase:{name:'Arcade',price:'$9/mo',},
        add_on:[],
        positions:['one','two','three','four','five','six']
    },
    reducers:{
        changePlan(state,action){
            return{
                ...state,
                plan:action.payload
            }
        },
        changePurchase(state,action){
            return{
                ...state,
                purchase:{
                    name:action.payload.name,
                    price:action.payload.price
                }
            }
        },
        AddON(state,action){
            return{
                ...state,
                add_on:[...state.add_on,action.payload]
            }
        },
        Delete(state,action){
            state.add_on.map((val,index)=>{
                if(action.payload === val.service){
                    console.log(val.service)
                    return{
                        ...state,
                        add_on:state.add_on.splice(index,1)

                    }
                }
                else{
                    return{
                        
                    }
                }
            })
            
        },
        changePlanPrice(state,action){
            console.log(action.payload)
            return{
                ...state,
                plan_price:action.payload
            }
        }
    }
})

export const home =dataSlice.actions
export const phasetwo = phasetwoSlice.actions
const store = configureStore({reducer:{
    Home:dataSlice.reducer,
    phasetwo :phasetwoSlice.reducer,
}})
export default store