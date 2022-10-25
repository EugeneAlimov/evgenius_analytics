import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Tag } from '@mui/icons-material'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'
axios.defaults.timeout = 1500

// export const registrate = createAsyncThunk(
//     'auth/registrate', async (credentials) => {
//         try {
//             const request = await axios.post('auth/users/', credentials)
//             const user = JSON.parse(request.config.data)
//             const token = JSON.parse(request.data)
//             console.log('dyhvjbjkb');
//             return {user, token}
//         } catch (error) {}
// // {
// //     "email": "",
// //     "username": "",
// //     "password": ""
// // }
//     }
// ) 

const token = {
  set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
      axios.defaults.headers.common.Authorization = ''
    }
}

export const login = createAsyncThunk(
    'auth/login', async (credentials) => {
        try {
            const request = await axios.post('token/', credentials)
            const user = request.config.data
            const authToken = request.data
            token.set(authToken.access)
            return {user, authToken}
        } catch (error) {console.log('error: ', error)}
    }
)

export const logout = createAsyncThunk(
    'auth/logout', async (credentials) => {
        try {
            await axios.post('token/blacklist/', credentials)
            token.unset()
            return
        } catch (error) {}
    }
)

export const getUserDatasetCollection = createAsyncThunk(
    'auth/userDataset', async (credentials) => {
    try {
      const request = await axios.get('user-dataset/',
      {
          headers: 
          {
            Authorization: `Bearer ${credentials}`,
          }
        }
      )
      console.log('tags: ', request.data);

      return request.data
    } catch (error) {console.log('error: ', error.response.data)}
  }
)

export const userDatasetSave = async (
    credentials,
    image,
    selectedTags,
    dateTimeStart,
    dateTimeEnd,
    isHistorical,
  ) => {
    const imageName = image.name
  const formData = new FormData()

  const tagsArr = selectedTags.map((tag) => tag.name_tag)
  const qw = {tag: tagsArr}
  // const tagsArr = selectedTags.map((tag) => tag.id)
console.log('qw: ', qw);
console.log('API tagsArr: ', tagsArr);
  console.log('JSON tagsArr: ', JSON.stringify(tagsArr));

      tagsArr.forEach(element => {
        formData.append('tag', element)
      });

      // formData.append("tag", qw)
      // formData.append("tag", tagsArr)
      // formData.append("tag", JSON.stringify(tagsArr))
      formData.append("name", imageName)
      formData.append("is_historical", isHistorical)
      // formData.append("date_time_start_diapason", JSON.stringify(dateTimeStart))
      // formData.append("date_time_end_diapason", JSON.stringify(dateTimeEnd))
      // formData.append("url", imageName)
      formData.append("dataset_image", image)
    try {
      const request = await axios.post('user-dataset/',
        formData,
          {
            headers: 
            {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${credentials}`,
            },
              
          }
        )
      return request.data
    } catch (error) {console.log('error: ', error.response.data)}

      //   {
      //     headers: 
      //     {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${credentials}`,
      //       // tag: 'test',
      //       // name: 'test',
      //       // is_historical: true,
      //       // url: 'test',
      //       // dataset_image: image,
      //     },
      //     "parses": [
      //       "application/json",
      //       "application/x-www-form-urlencoded",
      //       "multipart/form-data"
      //   ],
      //     // url: 'test',
      //     // dataset_image: formData,
      //     // dataset_image: image,
      // }
      // ).then((response) => console.log(response))
    // }
    // catch (error) {console.log('error', error)}
  }
