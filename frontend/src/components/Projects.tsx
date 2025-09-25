import shell from '../assets/shell/shell.jpg'
import career_gate_hero from '../assets/career_gate/career_gate_hero.jpg'
import career_gate_about_us from '../assets/career_gate/career_gate_about_us.jpg'
import career_gate_dashboard from '../assets/career_gate/career_gate_dashboard.jpg'
import career_gate_login from '../assets/career_gate/career_gate_login.jpg'
import career_gate_meet_the_team from '../assets/career_gate/career_gate_meet_the_team.jpg'
import career_gate_signup from '../assets/career_gate/career_gate_signup.jpg'

import revtax_hero from '../assets/revtax/revtax.jpg'
import revtax_video from '../assets/revtax/rev_tax_video.mp4'
import edusync_dashboard_video from '../assets/edusync/edusync.mp4'
import simple_shell_image from '../assets/shell/shell.jpg'


const projects = [
    {
      "title": "RevTax",
      "subtitle": "Revolutionizing Revenue Collection",
      "description": "RevTax is a revenue payment and collection web application. With RevTax, government and agencies can collect and track revenue payment with ease. RevTax is developed with the intention of eliminating the issues of extortion, harassment and corruption that plague manual revenue collection methods.",
      "key_features": [
        "Secure registration and login",
        "Business registration",
        "Secure tax payment and tracking",
        "Intuitive dashboard for users, admin and adhoc staff"
      ],
      "videos": [revtax_video],
      "images": [revtax_hero],
      "tech_stack": {
        "frontend": ["HTML", "CSS (Tailwind)", "TypeScript (React)"],
        "backend": ["Node.js"],
        "database": ["MongoDB"]
      },
      "github_link": "https://github.com/Rashnotech/RevTax",
      "website": "",
    },
    {
      "title": "Career Gate",
      "subtitle": "Your Pathway to Professional Success",
      "description": "Career Gate is an engaging career development platform designed to help professionals find their place in their respective industries with ease. Our platform offers a range of services to support career growth, from resume reviews by expert consultants to one-on-one interview sessions and personalized feedback.",
      "key_features": [
        "User Signups and Login: Secure and easy registration process.",
        "User-Friendly Dashboard: Intuitive interface for managing career development activities.",
        "Resume Uploading: Seamlessly submit your resume for expert review.",
        "Booking System: Effortlessly book sessions with career consultants for interviews and feedback."
      ],
      "videos": [],
      "images": [career_gate_hero, career_gate_signup, career_gate_login, career_gate_dashboard, career_gate_meet_the_team, career_gate_about_us],
      "tech_stack": {
        "frontend": ["HTML", "CSS (Materialize)"],
        "backend": ["Python (Flask, Jinja2)"],
        "database": ["MySQL"]
      },
      "github_link": "https://github.com/Inialpha/Career_Gate",
      "website": "",
    },
    {
      "title": "EduSync",
      "subtitle": "School Management & Assessment Platform",
      "description": "EduSync is a comprehensive, all-in-one school management and assessment platform specifically designed for the Nigerian educational ecosystem. It addresses the urgent need for digital transformation in schools by providing a modern, efficient, and transparent system accessible to all tiers of educational institutions across Nigeria.",
      "mission": "To drastically reduce administrative burden, increase data accuracy, and enable real-time access to academic records while transforming traditional school operations into a modern digital ecosystem.",
      "key_features": [
        "Digital Assessment Management: Create and manage exam content digitally, support online and printable formats, automated grading, instant feedback, and AI-powered question bank.",
        "Advanced Analytics & Reporting: Auto-generation of report cards, real-time insights, early intervention alerts, academic progress tracking.",
        "Complete Student Lifecycle Management: Centralized student/staff management, admission to graduation tracking, parent portal.",
        "Flexible Access & Operations: Online/offline functionality, multi-role dashboards, mobile-responsive design, real-time alerts.",
        "Enterprise-Grade Security: Role-based access control, secure authentication, encryption, backups, Nomba payment integration."
      ],
      "videos": [edusync_dashboard_video],
      "images": [],
      "tech_stack": {
        "frontend": [
          "React 19",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "Radix UI",
          "React Router",
          "React Query",
          "Zustand"
        ],
        "backend": [
          "FastAPI (Python)",
          "Motor",
          "Pydantic",
          "JWT Authentication",
          "APScheduler",
          "FastAPI Mail"
        ],
        "database_storage": [
          "MongoDB",
          "Cloudinary",
          "GeoIP2"
        ],
        "devops_monitoring": [
          "Uvicorn",
          "Pytest",
          "Sentry",
          "Docker"
        ]
      },
      "github_link": "https://github.com/Rashnotech/EduSync",
      "website": ""
    },
    {
      "title": "simple_shell",
      "subtitle": "Command Interpreter Project",
      "description": "This is a school project aimed at building a simple command interpreter (shell) with the objective of understanding how a shell works behind the scenes.",
      "key_features": [
        "Execution of non built-in commands via /bin directory (e.g., ls, pwd).",
        "Support for executing commands with or without full paths.",
        "In-built commands implemented manually (exit, env, setenv, unsetenv, cd).",
        "Command separator support (e.g., /bin/ls ; env).",
        "Logical operators support (AND &&, OR ||).",
        "Passing commands through a file in non-interactive mode."
      ],
      "inbuilt_commands": {
        "exit": "Exit the shell. Usage: exit or exit <status>",
        "env": "List all environment variables.",
        "setenv": "Set or reset an environment variable. Usage: setenv <VARIABLE_NAME> <value>",
        "unsetenv": "Unset an environment variable. Usage: unsetenv <VARIABLE_NAME>",
        "cd": "Change directory. Usage: cd <DIR_NAME>, cd -, or cd (home)"
      },
      "videos": [],
      "images": [simple_shell_image],
      "tech_stack": {
        "language": ["C"],
        "system": ["Linux Kernel", "POSIX system calls"]
      },
      "github_link": ""
    },
    {
      "title": "TabManager Chrome Extension",
      "subtitle": "Manage and organize your browser tabs with ease",
      "description": "TabManager is a powerful Chrome extension designed to help you manage and organize your browser tabs with ease. Built with React, TypeScript, and Vite, this extension aims to reduce tab overload, improve productivity, and make browsing less stressful.",
      "key_features": [
        "Group Tabs by Window: Easily group your open tabs by window or domain.",
        "Search Tabs: Quickly find any tab with a built-in search functionality.",
        "Delete Tabs: Remove tabs that are no longer needed with a simple click.",
        "New Window Creation: Create new windows and group your tabs automatically.",
        "Automatic Tab Closure: Automatically closes duplicate tabs with the same URL.",
        "Max Tab Limit: Set a maximum number of open tabs, auto-close least recently used tabs when exceeded."
      ],
      "videos": [],
      "images": [],
      "tech_stack": {
        "frontend": ["React", "TypeScript", "Vite", "Tailwind CSS"],
        "platform": ["Chrome Extension (Manifest V3)"]
      },
      "github_link": "https://github.com/Inialpha/TabManager"
    }
]

function Project() {
  return ()
}
