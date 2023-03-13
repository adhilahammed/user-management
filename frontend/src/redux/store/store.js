import {configureStore} from '@reduxjs/toolkit'

import userSlices from '../slice/userSlices/userSlices'


const store=configureStore({
    reducer:{
      
      admin:userSlices
    }
})

export default store