/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nsnauxhyxxhzpmaepntf.supabase.co"
            },
        ],
    },
};

export default nextConfig;
