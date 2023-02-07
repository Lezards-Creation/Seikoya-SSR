import axios from 'axios';

const fetchPosts = async () => {
    try {
        const { data } = await axios.get('https://example.com/wp-json/wp/v2/posts');
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default fetchPosts;
