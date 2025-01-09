const axios = require('axios');

async function requestDownload(videoUrl) {
    try {
        const apiUrl = `https://bk9.fun/download/tiktok?url=${encodeURIComponent(videoUrl)}`;
        const response = await axios.get(apiUrl);

        if (response.data.status) {
            return {
                downloadLink: response.data.BK9.BK9,
                description: response.data.BK9.desc,
                likes: response.data.BK9.likes_count,
                comments: response.data.BK9.comment_count,
                owner: 'Reiker', // Hardcoded owner name
                nickname: 'Al',  // Hardcoded nickname
                musicTitle: response.data.BK9.music_info.title,
            };
        } else {
            throw new Error('Failed to fetch data from the API.');
        }
    } catch (error) {
        throw new Error(`Error fetching download link: ${error.message}`);
    }
}

module.exports = {
    requestDownload,
};