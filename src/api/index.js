import axios from 'axios';

// https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary
export const getPlacesData = async(type , sw , ne) => {
    try{
        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return response.data.data;
    } catch(error) {
        console.log(error);
    }
}