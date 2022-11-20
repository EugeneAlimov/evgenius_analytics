import { createSlice } from '@reduxjs/toolkit'
import {
    getTagsAndGroupsQuery,
} from '../api/analitycApi'
import { 
    login, 
    logout,
    getUserDatasetCollection,
    refreshTokenHandler,
} from '../api/userApi'

const initialState = {
    user: {username: null, password: null},
    token: { refresh: null, access: null },
    isLoggedIn: false,
    userDatasets: [],
    tags: [],
    groups: [],
    selectedTags: [],
}

// const initialStateTags = {
//     tags: [],
//     groups: [],
//     selectedTags: [],
// }

// const slice1 = createSlice({
//     name: 'tags',
//     initialStateTags,
//     reducers: {

//     },
//     extraReducers: {
//         [getUserDatasetCollection.fulfilled]: (state, action) => {
//             state.userDatasets = action.payload
//         },
//     }
// })

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    checkTags: (state, action) => {
        state.selectedTags = action.payload
    },
    accessTokenSetter: (state, action) => {
        state.token.access = action.payload
    },
    //     // increment: (state) => {
    //     //     state.value += 1

    //     // },
    //     // decrement: (state) => {
    //     //     state.value -= 1
    //     // },
    //     // incrementByAmount: (state, action) => {
    //     //     state.value += action.payload
    //     // },
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            const user = JSON.parse(action.payload.user)
            const token = action.payload.authToken
            state.user = user
            state.token = token
            state.isLoggedIn = true
        },
        [login.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [logout.fulfilled]: (state) => {
            console.log('logout');
            state.user = {username: null, password: null}
            state.token = { refresh: null, access: null }
            state.isLoggedIn = false
            state.userDatasets = []
            state.selectedTags = []
        },
        [refreshTokenHandler.fulfilled]: (state, action) => {
            const accessToken = action.payload.access
            state.token.access = accessToken
            state.isLoggedIn = true
        },
        [getUserDatasetCollection.fulfilled]: (state, action) => {
            state.userDatasets = action.payload
        },
        // [getTagsAndGroupsQuery.fulfilled]: (state, action) => {
        //     state.tags = action.payload.tags
        //     state.groups = action.payload.groups.map((el) => {
        //         let obj = {
        //           id: el.id,
        //           label: el.name,
        //         }
        //         return obj
        //       })
        // }
    }
})

// JSON.parse(action.payload.user)
// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//       dispatch(incrementByAmount(amount))
//     }, 1000)
//   }

export default slice.reducer
export const { checkTags, accessTokenSetter } = slice.actions
