# Next.js Cloudinary Vercel Project

This project is a simple Next.js application that displays a "Hello World" message and an image from Cloudinary. It is set up for deployment on Vercel using the Next Cloudinary plugin.

## Project Structure

```
nextjs-cloudinary-vercel
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── CloudinaryImage.tsx
├── public
├── next.config.js
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nextjs-cloudinary-vercel
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to see the application in action.

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import your GitHub repository.
3. Follow the prompts to deploy your application.

## Features

- Displays a "Hello World" message.
- Shows an image from Cloudinary using the Next Cloudinary plugin.

## License

This project is licensed under the MIT License.