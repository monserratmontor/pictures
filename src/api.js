import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unplash.com/search/photos/?client_id=BL9W2c-Dnra_HFr-WfH_aLSEr1BElM1Uo52f3OVLb7s'

 const response = await axios.get(url,{
 params: {
    query: term
 }
})

console.log(response)
return response.data.results
}

export default searchImages