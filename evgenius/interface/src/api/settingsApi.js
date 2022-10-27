import axios from 'axios'
    // const  headers  =  { "X-CSRFTOKEN" :  csrftoken }

export const uploadFile = async (file) => {

    const formData = new FormData()
    formData.append("file", file)

        try {
        const request = await axios.post('pars-tags-list/',

            formData,
                {
                    headers: 
                    {
                        "Content-Type": "multipart/form-data",
                        // Authorization: `Bearer ${credentials}`,
                    },
                }
            )
            return request
        } catch (error) {console.log('error: ', error.response.data)}
}
    // const arr = ['1hgh', 'hg2', '3gh', '4ghg', 'hg5', '6ghg']

    // arr.forEach(element => {
    //     console.log(element);
    //     formData.append("name", element)
    // })
    // // formData.append('name', arr)
    //     // formData.append('name', '1element')
    //     // formData.append('name', '2element')
    //     // formData.append('name', '3element')
    //     // formData.append('name', '4element')
    //     // formData.append('name', '5element')
    // try {
    //     const request = await axios.post('groups/',
    //         formData,
    //             {
    //                 headers: 
    //                 {
    //                     "Content-Type": "multipart/form-data",
    //                     // Authorization: `Bearer ${credentials}`,
    //                 },
    //             }
    //         )
    //         console.log('tags: ', request.data)
    //         return request
    //     } catch (error) {console.log('error: ', error.response.data)}
    
    
        
    //     {
    //         headers: 
    //         {
    //           Authorization: `Bearer ${credentials}`,
    //          "X-CSRFTOKEN" :  csrftoken,
    //         },
    //     },
        
    // const formData = new FormData()
    // formData.append("file", file)
    
    // await axios
    // .post(
    //     "pars-tags-list/", 
    //     // {
    //     //     headers: 
    //     //     {
    //     //       Authorization: `Bearer ${credentials}`,
    //     //      "X-CSRFTOKEN" :  csrftoken,
    //     //     },
    //     // },
    //     formData,
    // )
    // .then(response => response)


export const test = async (file, credentials) => {

    const formData = new FormData()

    formData.append('name_tag', '1element')
    formData.append('tag_table', '2element')
    formData.append('address', '3element')
    formData.append('data_type', '4element')
    formData.append('comment', '5element')
    formData.append('name', '12313')

    const arr = ['1hgh', 'hg2', '3gh', '4ghg', 'hg5', '6ghg']

    arr.forEach(element => {
        console.log(element);
        formData.append("name", element)})

        try {
        const request = await axios.post('groups/',

            formData,
                {
                    headers: 
                    {
                        "Content-Type": "multipart/form-data",
                        // Authorization: `Bearer ${credentials}`,
                    },
                }
            )
            console.log('tags: ', request.data)
            return request
        } catch (error) {console.log('error: ', error.response.data)}
}
