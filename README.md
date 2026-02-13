# ARS Survey

A modern survey application built with [Next.js](https://nextjs.org/), Typescript, and Tailwind CSS.

## 🚀 Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (Primitives), [Lucide React](https://lucide.dev/) (Icons)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Linting:** ESLint

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.17 or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ARS_Survey
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## 🏃‍♂️ Running the Project

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Other Scripts

- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

A brief overview of the project structure:

```
ARS_Survey/
├── app/                  # App Router pages and layouts
│   ├── dashboard/        # Dashboard feature routes
│   │   └── page.tsx      # Dashboard page content
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── layout/           # Layout components (e.g., DashboardLayout)
│   └── ui/               # UI components (e.g., Button)
├── lib/                  # Utility functions and libraries
├── public/               # Static assets
├── styles/               # Additional styles (if any)
├── .gitignore            # Git ignore file
├── next.config.mjs       # Next.js configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  **Make your changes** and commit them:
    ```bash
    git commit -m "feat: add new feature"
    ```
4.  **Push to your fork:**
    ```bash
    git push origin feature/your-feature-name
    ```
5.  **Create a Pull Request** against the `main` branch.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
