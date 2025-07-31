import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jaskirat Singh",
  initials: "JS",
  url: "https://jaskirat.vercel.app",
  location: "Ludhiana,Punjab,India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Computer Science student passionate about building scalable web apps, exploring new technologies, and solving real-world problems through code.",
  summary:
    "I'm currently pursuing a B.Tech in Computer Science (since 2023) and have been actively building full-stack projects around cloud file management, streaming, and real-time systems. Recently, I built a full demo of CollabTube — a browser-only file manager simulating cloud storage using IndexedDB and localStorage. I'm enthusiastic about open-source, cloud systems, and distributed computing.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Kafka",
    "Redis",
    "MongoDB",
    "AWS (S3, Lambda, CloudFront, Fargate)",
    "WebSockets",
    "FFmpeg",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "jaskirat0623@gmail.com",
    tel: "+91 98554 28591",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jas011",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jaskirat-singh-54a00127b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X (Twitter)",
        url: "https://x.com/Jaskirat___0623", // Optional
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jaskirat0623@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "shoopy",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Banglore (Remote)",
      title: "Web Dev Intern",
      logoUrl: "/shoopy_logo.jfif",
      start: "June 2025",
      end: "July 2025",
      description:
        "At Shoopy, I created dynamic catalogue templates using Handlebars (HBS), built reusable React components for customization, and configured a server to generate downloadable PDF catalogues—enabling seamless export of product listings for merchants.",
    },
  ],
  education: [
    {
      school: "Guru Nanak Foundation Public School",
      href: "https://uwaterloo.ca",
      degree: "High School Diploma",
      logoUrl: "/gnips.png",
      start: "2011",
      end: "2023",
    },
    {
      school: "Guru Nanak Dev Engineering College",
      href: "https://gndec.ac.in/",
      degree: "Btech CSE",
      logoUrl: "/gndec.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "udp oreantation visualizer",
      href: "https://github.com/jas011/udp-oreantation-visualizer",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A tool developed by me for visualizing orientation data received over UDP, combining Arduino (udpmpu.ino), a web front-end (index.html, index.js), and Node.js packages.",
      technologies: [
        "Dgram.js",
        "javascript",
        "Express",
        "C++ (Arduino)",
        "Three.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jas011/udp-oreantation-visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/UDP.gif",
      video: "",
    },

    {
      title: "Cloud File Manager (A local cached Version)",
      href: "http://colab-tube.vercel.app/",
      dates: "june 2025 - July 2025",
      active: true,
      description:
        "Built a fully local cloud file manager using Next.js, with file storage in IndexedDB and metadata in localStorage. Supports folder creation, file operations, and mock authentication — all running entirely in the browser without any backend or sync.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "http://colab-tube.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/colabtube.png",
      video: "",
    },
    {
      title: "Cloud File Manager (Full Version)",
      href: "https://youtu.be/akqGAP744xQ", // Replace with actual URL
      dates: "December 2023 - March 2024",
      active: true,
      description:
        "Built a cloud-based file manager supporting real-time collaboration, cloud storage (via AWS S3), and scalable folder operations. Designed an event-driven backend with Kafka for syncing file changes, Redis for caching, and MongoDB for folder structure. Integrated WebSockets for real-time team updates and YouTube API for video publishing workflows.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Kafka",
        "Redis",
        "AWS S3",
        "WebSockets",
      ],
      links: [
        {
          type: "Youtube",
          href: "https://youtu.be/akqGAP744xQ", // Replace
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/Full_version.gif", // Replace with actual image
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hackathon 3.0 (8 hours)",
      dates: "October 7th, 2024",
      location: "GNDEC , Ludhiana, India",
      description:
        "This was my first hackathon in my very first semester. We couldn’t complete the build in time, but it became a defining moment for me. That day lit the spark — it pushed me to start building, learning, and taking development seriously.",

      image: "/gndec.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/Hackthon3.0.pdf",
        },
      ],
    },

    {
      title: "Co-Design Hackathon",
      dates: "October 29, 2016",
      location: "Causmic Club (GNDEC)",
      description:
        "At the Co-Design Hackathon held on Feburary 05, 2024, at GNDEC, I worked collaboratively in a team to design and develop key user interfaces for a clothing app. The project involved creating both a payments page and a sleek landing page to provide users with a seamless shopping experience. My role focused on developing the functionality and design of the payment system, ensuring ease of use and a secure, intuitive checkout process. The landing page was crafted with user engagement in mind, aiming to highlight the app's features and create an inviting space for users to explore products.",
      image: "/causmicClub.jfif",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/Co-Design.pdf",
        },
      ],
    },
  ],
} as const;
