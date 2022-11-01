import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getTagsQuery = createAsyncThunk(
    'auth/tagsList', async () => {
        try {
            const request = await axios.get('analytics/')
            return request.data
        } catch (error) {console.log(error)}
    }
)

export const getGroupsQuery = createAsyncThunk(
    'auth/groupsList', async () => {
        try {
            const request = await axios.get('groups/')

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