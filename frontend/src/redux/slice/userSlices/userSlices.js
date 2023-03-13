import {createAsyncThunk,createSlice,createAction} from '@reduxjs/toolkit'
import axios from 'axios'

export const userCreatedAction=createAction('user/redirectfromlogin')
export const userRegisteredAction=createAction('user/redirectfromregister')




//register action
export const registerUserAction=createAsyncThunk(
    'user/register',
    async(userData,{rejectWithValue,getState,dispatch})=>{

        try {
          console.log(userData,'13')
           
            const {data}=await axios.post(
                `http://localhost:5000/api/user/register`,
                userData,
                )
               //dispatch
           dispatch(userRegisteredAction())
                return data
        } catch (error) {
            if(!error?.response){
                throw error
            }
            return rejectWithValue(error?.response?.data)
        }
})


//login
export const loginUserAction=createAsyncThunk(
    'user/login',
    async(userData,{rejectWithValue,getState,dispatch})=>{
        
        try {
            //make http call
           const {data}=await axios.post(
            `http://localhost:5000/api/user/`,
           userData,
       
           )
           //save user into local storage
           localStorage.setItem('userInfo',JSON.stringify(data))
           
            //dispatch
            dispatch(userCreatedAction())
           return data
        } catch (error) {
            if(!error?.response){
                throw error
            }
            return rejectWithValue(error?.response?.data)
        }
    }
)

//list

export const fetchUserListAction=createAsyncThunk(
  'user/fetch',async(category,{rejectWithValue,getState,dispatch})=>{
      //get user token
      const user=getState()?.admin
      const {userAuth}=user
      // console.log(userAuth?.token);
      // console.log(getState());
      const config={
          headers:{
              Authorization:`Bearer ${userAuth?.token}`
          }
      }
      //http call
      
      try {
          
          const {data}=await axios.get(`http://localhost:5000/api/user/list`,
          config
          )

          // console.log(data);
          return data
      } catch (error) {
          if(!error?.response){
              
              throw error
          }
          return rejectWithValue(error?.response?.data)
      }
  })

//logout
export const logoutAction=createAsyncThunk(
  'user/logout',
  async(payload,{rejectWithValue,getState,dispatch})=>{
    try {
      localStorage.removeItem('userInfo')
    } catch (error) {
      if(!error?.response){
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)


//get user from localstorage place into store
const userLoginFromStorage=localStorage.getItem('userInfo')
?JSON.parse(localStorage.getItem('userInfo'))   :null


//slices
const userSlices=createSlice({
    name:'users',
    initialState:{
     userAuth:userLoginFromStorage

    },
    extraReducers:(builder)=>{

      //register

      builder.addCase(registerUserAction.pending,(state,action)=>{
        state.loading=true
        state.appErr=undefined
        state.serverErr=undefined
      })

      builder.addCase(userRegisteredAction,(state,action)=>{
        state.userRegister=true
      })

      builder.addCase(registerUserAction.fulfilled,(state,action)=>{
        state.loading=false
        state.userRegister=false
        state.registered=action?.payload
        state.appErr=undefined
        state.serverErr=undefined
      })
      builder.addCase(registerUserAction.rejected,(state,action)=>{
   
        state.loading=false
        state.appErr=action?.payload?.message
        state.serverErr=action?.error?.message
      })

      builder.addCase(loginUserAction.pending,(state,action)=>{
        state.loading=true
        state.appErr=undefined
        state.serverErr=undefined
      })
      builder.addCase(userCreatedAction,(state,action)=>{
        state.userLogin=true
      })


      builder.addCase(loginUserAction.fulfilled,(state,action)=>{
        state.loading=false
        state.userLogin=false
        state.userAuth=action?.payload
        state.appErr=undefined
        state.serverErr=undefined
      })
      builder.addCase(loginUserAction.rejected,(state,action)=>{
        state.loading=false
        
        state.appErr=action?.payload?.message
        state.serverErr=action?.error?.message
      })

      //list
      builder.addCase(fetchUserListAction.pending,(state,action)=>{
        state.loading=true
    })
    builder.addCase(fetchUserListAction.fulfilled,(state,action)=>{
        state.userList=action?.payload
        state.loading=false
        state.appErr=undefined
        state.serverErr=undefined

    })
    builder.addCase(fetchUserListAction.rejected,(state,action)=>{    
        state.loading=false
        state.appErr=action?.payload?.message
        state.serverErr=action?.error?.message
    })

       //logout
       builder.addCase(logoutAction.pending,(state,action)=>{
        state.loading=false
        
      })
      builder.addCase(logoutAction.fulfilled,(state,action)=>{
        state.loading=false
        state.userAuth=undefined
        state.appErr=undefined
        state.serverErr=undefined
      })
      builder.addCase(logoutAction.rejected,(state,action)=>{
        state.loading=false
        
        state.appErr=action?.payload?.message
        state.serverErr=action?.error?.message
      })
}
})


export default userSlices.reducer