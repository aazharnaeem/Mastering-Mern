import axios from 'axios'
import { config } from '../config/http';
import sha1 from 'sha1'

const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_SECRET;
export const uploadImage = async (image) => {
    try {
        const data = new FormData();

        data.append("file", image);
        data.append("upload_preset", "postss");
        data.append("cloud_name", "dqdrievmp");

        const das = await axios.post(`${CLOUDINARY_URL}/image/upload`,
            data,
            config
        )
        return das.data
    }

    catch (err) {
        alert('Network Error')
        console.log('Network Error')
    }
}


export const deleteImage = async (publicId) => {
    try {

        const data = new FormData();
        const timestamp = new Date().getTime()
        const string = `public_id=${publicId}&timestamp=${timestamp}${api_secret}`
        const signature = await sha1(string)

        data.append("public_id", publicId);
        data.append('api_key', api_key)
        data.append('signature', signature)
        data.append('timestamp', timestamp)

        const del = await axios.post(`${CLOUDINARY_URL}/image/destroy`, data, config)
    }

    catch (err) {
        alert('Network Error')
    }

}