import axios from "axios";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const request = await axios.post(
      "http://127.0.0.1:8000/api/v1/pars-tags-list/",

      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return request;
  } catch (error) {
    console.log("error: ", error.response.data);
  }
};

export const setTagstoDashboard = async (tagsOnDashboard, accessToken) => {
  try {
    const request = await axios.put(
      "http://127.0.0.1:8000/tags-to-ws/",
      {
        label: tagsOnDashboard,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    return request;
  } catch (error) {
    console.log("error: ", error.response.data);
  }
};
