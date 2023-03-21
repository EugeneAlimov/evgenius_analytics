import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getTagsAndGroupsQuery = createAsyncThunk(
    'analytic/tagsAndGroupsLists', async () => {

        const arrayOfEndpoints = [
            'http://192.168.8.167/api/v1/analytics/',
            'http://192.168.8.167/api/v1/groups/'
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
