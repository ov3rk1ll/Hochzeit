export async function fetchPosts() {
    // 1. Grab all markdown files
    const postFiles = import.meta.glob('/src/lib/posts/*/index.md', { eager: true });

    // 2. Grab all JPG files in those same folders
    const assetFiles = import.meta.glob('/src/lib/posts/*/*.jpg', {
        eager: true,
        query: '?url', // Tells Vite to return the public URL string
        import: 'default'
    });

    const allPosts = Object.entries(postFiles).map(([path, module]) => {
        // Extract the folder name (e.g., "exploring-the-alps")
        const slug = path.split('/').slice(-2, -1)[0];

        // Find the image that belongs to this specific folder
        const imagePath = `/src/lib/posts/${slug}/image.jpg`;
        const imageUrl = assetFiles[imagePath];
        return {
            slug,
            meta: module.metadata,
            // If featured.jpg doesn't exist, you can provide a fallback
            image: imageUrl || '/fallback-default.jpg',
            content: module.default
        };
    }).sort((a, b) => a.meta.title.localeCompare(b.meta.title));

    return allPosts;
}