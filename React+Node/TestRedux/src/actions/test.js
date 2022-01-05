import axios from 'axios';


const getData = async (dispatch) => {
    const { data } = await axios.get('/userCab');
    dispatch(await getData)
}

export { getData}