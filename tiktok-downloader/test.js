const { requestDownload } = require('./index');

async function test() {
    const videoUrl = 'https://www.tiktok.com/@quraan_recit/video/7249454055133596933';
    try {
        const result = await requestDownload(videoUrl);
        console.log('Download Information:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

test();