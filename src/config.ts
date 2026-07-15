export const config = {
    developer: {
        name: "Alok",
        fullName: "Alok Kumar Singh",
        title: "Senior Full Stack Engineer",
        description: "Senior Full Stack Engineer and Startup Builder. Specialized in designing high-throughput relational databases, scaling REST APIs, and developing responsive frontend applications."
    },
    social: {
        github: "almostalok",
        email: "almostalok@gmail.com",
        location: "Noida, Uttar Pradesh, India"
    },
    about: {
        title: "About Me",
        description: "I am a Senior Full Stack Engineer, Incubated Startup Founder, and Product Thinker. Currently a B.Tech Computer Science Engineering student (2023-2027) with a GPA of 8.4/10. I serve as President of E-Cell, Social Service & Project Management Club, and was the Head Coordinator for the Smart India Hackathon 2024-25 pre-qualifiers. I focus on engineering quality, scalability, and solving difficult startup problems."
    },
    experiences: [
        {
            position: "Full Stack Developer",
            company: "Gaea Gold Harvest",
            period: "Apr 2026 - Present",
            location: "Noida, India",
            description: "Architected and deployed scalable Node.js REST APIs with Redis caching, reducing latency by 40%. Designed optimized PostgreSQL schemas with composite indexing.",
            responsibilities: [
                "Architected and deployed scalable Node.js REST APIs with Redis caching",
                "Reduced API latency by 40% under concurrent production load",
                "Designed optimized PostgreSQL schemas with composite indexing for high-throughput inventory/finance systems",
                "Built React dashboards and introduced Docker & CI/CD workflows, reducing production issues"
            ],
            technologies: ["Node.js", "Redis", "PostgreSQL", "React", "Docker", "CI/CD"]
        },
        {
            position: "Founder & CTO",
            company: "Hospate",
            period: "Dec 2025 - Present",
            location: "Noida, India",
            description: "Incubated Startup & Grant Recipient. Built a complete hospital ERP covering patient records, inventory, billing, and staff workflows.",
            responsibilities: [
                "Built a complete hospital ERP covering patient records, inventory, billing, and staff workflows",
                "Optimized PostgreSQL queries, reducing dashboard load time from 4.2s to 0.6s across 500K+ records",
                "Implemented WebSockets and Redis for real-time hospital operations",
                "Secured a government grant and incubated the startup to operational stage"
            ],
            technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "WebSockets", "Docker"]
        },
        {
            position: "Full Stack Developer",
            company: "The Boring Education",
            period: "Nov 2024 - May 2025",
            location: "Remote",
            description: "Developed reusable React components and REST APIs using Node.js. Delivered course management features end-to-end.",
            responsibilities: [
                "Developed reusable React components and REST APIs using Node.js",
                "Delivered course management features end-to-end from database schema to UI",
                "Improved application performance through lazy loading and backend optimizations"
            ],
            technologies: ["React", "Node.js", "Express.js", "Database Schema", "Performance"]
        },
        {
            position: "Freelance Full Stack Developer",
            company: "Self-Employed",
            period: "2023 - Present",
            location: "Noida, India",
            description: "Delivered production-grade web applications with custom APIs and relational databases, managing the entire lifecycle independently.",
            responsibilities: [
                "Delivered production-grade web applications with custom APIs and relational databases",
                "Managed architecture, development, deployment, and maintenance independently",
                "Consulted clients on database optimization and server deployment strategies"
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "MongoDB", "Deployment", "REST APIs"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Hospate",
            category: "Hospital ERP",
            technologies: "React.js, Node.js, PostgreSQL, Redis, WebSockets, Docker",
            image: "/images/hospate.png",
            description: "Comprehensive multi-module hospital ERP with OPD, IPD, pharmacy, inventory, billing, and staff modules. Features automated backups and Dockerized services."
        },
        {
            id: 2,
            title: "MrngFlow",
            category: "Productivity Platform",
            technologies: "Next.js 16, React 19, TypeScript, NestJS, Prisma, PostgreSQL, Redis",
            image: "/images/mrngflow.png",
            description: "Aesthetic habit tracking and journaling platform featuring printable Flow Sheets with analytics. Monorepo architecture with BullMQ and PWA support."
        },
        {
            id: 3,
            title: "Rakshak",
            category: "Safety App",
            technologies: "React Native, TypeScript, NestJS, PostgreSQL, Redis, AWS S3",
            image: "/images/rakshak.png",
            description: "Emergency safety mobile application with encrypted cloud video streaming, live GPS tracking, emergency notifications, and integrity-verified AWS S3 storage."
        },
        {
            id: 4,
            title: "SAARTHI",
            category: "EdTech Learning Platform",
            technologies: "React.js, Node.js, PostgreSQL, Redis, Gemini API, Tailwind CSS",
            image: "/images/saarthi.png",
            description: "Complete learning platform with analytics and quizzes. Reduces database load by 60% using Redis caching and integrates Gemini API for AI questions."
        }
    ],
    contact: {
        email: "almostalok@gmail.com",
        github: "https://github.com/almostalok",
        linkedin: "https://linkedin.com/in/almostalok",
        twitter: "https://x.com/almostalok",
        facebook: "https://facebook.com/almostalok",
        instagram: "https://instagram.com/almostalok"
    },
    skills: {
        develop: {
            title: "BACKEND & DEV-OPS",
            description: "High-throughput and scalable systems",
            details: "Architecting REST APIs, designing optimized schemas, and setting up Docker containers and CI/CD pipelines. Proficient in Node.js, NestJS, PostgreSQL, Redis, Docker, and AWS.",
            tools: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "Redis", "Docker", "AWS", "WebSockets", "CI/CD", "Linux", "REST APIs", "GraphQL"]
        },
        design: {
            title: "FRONTEND & PRODUCT",
            description: "Premium user interfaces and full product life cycles",
            details: "Building high-performance interactive interfaces with React, Next.js, and React Native. Focusing on performance optimization, lazy loading, and modern responsive layouts.",
            tools: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Redux", "Figma", "Performance Optimization", "System Design", "JavaScript (ES6+)"]
        }
    }
};
