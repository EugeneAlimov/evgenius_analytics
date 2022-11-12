import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getTagsQuery = createAsyncThunk(
    'auth/tagsList', async () => {
        try {
            const request = await axios.get('http://127.0.0.1:8000/api/v1/analytics/')
            return request.data
        } catch (error) {console.log(error)}
    }
)

export const getGroupsQuery = createAsyncThunk(
    'auth/groupsList', async () => {
        try {
            const request = await axios.get('http://127.0.0.1:8000/api/v1/groups/')

            const groupsRequest = request.data
            const groups = groupsRequest.map((el) => {
                let obj = {
                  id: el.id,
                  label: el.name,
                }
                return obj
              })
            return groups
        } catch (error) {console.log(error);}
    }
)