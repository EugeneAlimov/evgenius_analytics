import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getTagsAndGroupsQuery = createAsyncThunk(
    'auth/tagsAndGroupsLists', async () => {

        const arrayOfEndpoints = [
            'http://127.0.0.1:8000/api/v1/analytics/',
            'http://127.0.0.1:8000/api/v1/groups/'
        ]

    const tagsAndGroupsLists = await Promise
        .all(arrayOfEndpoints
        .map(endpoint => axios.get(endpoint)))
    
    const request = {...tagsAndGroupsLists}
    const tags = request[0].data
    const groups = request[1].data

    return {tags, groups}

    }
)
