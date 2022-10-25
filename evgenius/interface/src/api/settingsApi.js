import axios from 'axios'
    // const  headers  =  { "X-CSRFTOKEN" :  csrftoken }

export const uploadFile = async function (file, credentials) {
    const formData = new FormData()
    formData.append("file", file)
    
    await axios
    .post(
        "pars-tags-list/", 
        // {
        //     headers: 
        //     {
        //       Authorization: `Bearer ${credentials}`,
        //      "X-CSRFTOKEN" :  csrftoken,
        //     },
        // },
        formData,
    )
    .then(response => response)
};