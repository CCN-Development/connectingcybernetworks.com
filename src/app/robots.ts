import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://connectingcybernetworks.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Prevent Google from indexing internal dashboards or API routes
            disallow: ['/dashboard/', '/api/', '/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}