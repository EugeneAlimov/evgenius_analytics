import axios from "axios";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const request = await axios.post(
      "api/v1/pars-tags-list/",

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

export const setTagstoDashboard = async (tagsOnDashboard) => {
  try {
    const request = await axios.put(
      "tags-to-ws/",
      {
        label: tagsOnDashboard,
        headers: {
          // Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    return request;
  } catch (error) {
    console.log("error: ", error.response.data);
  }
};
