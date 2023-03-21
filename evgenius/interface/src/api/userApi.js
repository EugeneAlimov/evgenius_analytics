import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'http://192.168.8.167/api/v1/'
// axios.defaults.timeout = 1500

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

// const token = {
//   set(token) {
//       axios.defaults.headers.common.Authorization = `Bearer ${token}`
//     },
//     unset() {
//       axios.defaults.headers.common.Authorization = ''
//     }
// }

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const request = await axios.post("http://192.168.8.167/api/v1/token/", credentials);
    const user = request.config.data;
    const authToken = request.data;
    // token.set(authToken.access)
    return { user, authToken };
  } catch (error) {
    console.log("error: ", error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (refreshToken) => {
  try {
    console.log("kjhgfdzdxfcg");
    await axios.post("http://192.168.8.167/api/v1/token/blacklist/", {
      refresh: refreshToken,
    });
    return;
  } catch (error) {}
});

export const refreshTokenHandler = createAsyncThunk("auth/refreshToken", async (refreshToken) => {
  try {
    const request = await axios.post("http://192.168.8.167/api/v1/token/refresh/", {
      refresh: refreshToken,
    });
    const authToken = request.data;
    return authToken;
  } catch (error) {
    console.log("error: ", error.response.data);
  }
});

export const getUserDatasetCollection = createAsyncThunk(
  "auth/userDataset",
  async (accessToken) => {
    try {
      const request = await axios.get("http://192.168.8.167/api/v1/user-dataset/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return request.data;
    } catch (error) {
      console.log("error: ", error.response.data);
    }
  }
);

export const userDatasetSave = async (
  accessToken,
  image,
  selectedTags,
  dateTimeStart,
  dateTimeEnd,
  isHistorical,
  setName
) => {
  const formData = new FormData();
  const dtStart = dateTimeStart.toISOString();
  const dtSend = dateTimeEnd.toISOString();

  selectedTags.forEach((element) => {
    formData.append("tag", element.name_tag);
  });

  formData.append("name", setName);
  formData.append("is_historical", isHistorical);
  formData.append("date_time_start_diapason", dtStart);
  formData.append("date_time_end_diapason", dtSend);
  formData.append("url", setName);
  formData.append("dataset_image", image);

  try {
    const request = await axios.post("http://192.168.8.167/api/v1/user-dataset/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return request.data;
  } catch (error) {
    console.log("error: ", error.response.data);
  }
};

export const tokenUpdater = async (refreshToken) => {
  const response = await axios.post("http://192.168.8.167/api/v1/token/refresh/", {
    refresh: refreshToken,
  });

  return response.data.access;
};
