import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        "name": "connecting cyber networks",
        "short_name": "CCN",
        "description": "Connecting Cyber Networks (CCN) is a leading provider of cybersecurity solutions, specializing in penetration testing, vulnerability assessments, and security consulting services. With a team of highly skilled professionals and a commitment to excellence, CCN helps organizations identify and mitigate security risks to protect their digital assets and maintain compliance with industry standards.",
        "start_url": "/",
        "icons": [
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ],
        "theme_color": "#000000",
        "background_color": "#000000",
        "display": "standalone"
    }
}