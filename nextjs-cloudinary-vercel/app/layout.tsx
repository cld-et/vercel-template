import './globals.css';

export const metadata = {
  title: 'Next.js Cloudinary Vercel',
  description: 'A simple Next.js app displaying a Cloudinary image',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}