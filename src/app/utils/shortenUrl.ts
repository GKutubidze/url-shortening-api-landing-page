export default async function shortenUrl(longUrl: string): Promise<string | null> {
    try {
        const endpoint = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
        const response = await fetch(endpoint);
        if (response.ok) {
            const shortUrl = await response.text();
            return shortUrl;
        } else {
            console.error('Failed to shorten URL:', response.statusText);
            return null;
        }
    } catch (error: any) {
        console.error('Error occurred:', error.message);
        return null;
    }
}

