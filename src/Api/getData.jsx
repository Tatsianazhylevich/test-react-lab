import axios from 'axios';

export default class PostService {
    static async getData() {
        const response = await axios.get('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json');
        return response;
    }
}