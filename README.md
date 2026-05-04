Name: SkillSphere

Description: SkillSphere is a modern online learning platform built with Next.js where users can explore courses, view course details, and manage their profile after authentication.

Purpose: SkillSphere is a web app created to demonstrate how a real-world course platform works  using modern Next.js framework. It used Server Components for fast performance and authentication with protected routes. Clean, responsive UI. The goal is to provide a professional learning platform experience similar to real websites.

Key Features: 

1. Authentication System: Email and Password login using Better Auth. Session handling with cookies. Redirect to intended page after login using search params. Logout with toast notification. Protected routes using proxy.

2. Route Protection: Certain route can't be accessed without login . Route like course details can't be accessed without authentication.

3. Courses System: There is section like popular courses which shows most popular courses and new releases which shows new courses. Courses page shows all course you can learn. There is a search functionality with title .

4. Modern UI: This app used modern UI , page navigation are user friendly . People can browse through sections with ease. No complex layout and built on modern library and framework.

5. Performance Optimizations: Server Components are utilized wherever possible to improve performance. Images are optimized using the Next.js Image component for faster loading and better layout stability.

6. Responsive Design: Custom Tailwind breakpoints are implemented to handle unique screen sizes. Flexible grids ensure a responsive layout across all devices. A navbar dropdown is included to provide easy navigation on small screens.

Tech and NPM package used:

1. The Next.js (App Router): It utilizes file-based routing and a server
and client component architecture. It includes built-in loading UI via loading.js,
proxy for route protection, and dynamic routes for course details.

2. Tailwind CSS: It provides a utility-first styling approach with responsive
breakpoints. This allows for a custom design system with clean, maintainable
classes and modern UI.

3. HeroUI: It offers prebuilt, accessible components like Avatars, Buttons, Forms,
Cards, to maintain a consistent design.

4. Better Auth: It  manages email and password authentication, session handling,
and cookie-based auth, integrating  with Next.js middleware.

5. Motion: It is used for smooth animations on cards hover effects,
scroll progress indicators.

6. React Hook Form: It handles form validation, error handling, and clean form state management.

7. React Toastify: It provides toast messages for  logout action and in Enroll Now button in course details page, positioned at the top-center of the screen.

Live URL:

https://b13-a08.vercel.app