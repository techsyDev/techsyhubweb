import thumbnail from "@/assets/swiper1.svg";
import service from "@/assets/service.svg";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import profile from "@/assets/profile.png";
// import resume from "@/assets/resume.pdf";

// Services Assets
import mobile from "@/assets/icons/mobile.svg";
import web from "@/assets/icons/Globe.svg";
import laptop from "@/assets/icons/Laptop.svg";
import ai from "@/assets/icons/AI.svg";
import ui from "@/assets/icons/Ui.svg";
import digital from "./icons/digital.svg";

// Contacts Assets
import phone from "./icons/phone.svg";
import mail from "./icons/mail.svg";
import location from "./icons/location.svg";

// Latest Posts assets
import post1 from "./post1.png";
import post2 from "./post2.png";
import post3 from "./post3.png";

// Blogs Assets
import blog1 from "./blog1.png";
import blog2 from "./blog2.png";
import blog3 from "./blog3.png";

// Members assets
import member from "./member.png";
import member2 from "./member2.png";
import member3 from "./member3.png";
import member4 from "./member4.png";

// Collage Assets
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import grid5 from "../assets/grid5.png";
import grid6 from "../assets/grid6.png";

// Career Collage
import col1 from "../assets/col1.png";
import col2 from "../assets/col2.png";
import col3 from "../assets/col3.png";
import col4 from "../assets/col4.png";
import col5 from "../assets/col5.png";
import col6 from "../assets/col6.png";

// Management sidebar routes
import { MdOutlineDashboard } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { FaRegFileLines } from "react-icons/fa6";
import { BsChatLeftText } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import project from "@/assets/icons/projects.svg";

export const swiperData = [
  {
    heading: "Digital",
    sub: "Transformation",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque eros. Duis vitae ipsum libero.",
    btn: "Let's build your idea",
    image: thumbnail,
  },
  {
    heading: "Lorem Ipsum",
    sub: "Dolor Sit Amet",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque eros. Duis vitae ipsum libero.",
    btn: "Let's build your idea",
    image: thumbnail,
  },
  {
    heading: "Vitae ipsum",
    sub: "consectetur adipiscing",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque eros. Duis vitae ipsum libero.",
    btn: "Let's build your idea",
    image: thumbnail,
  },
];

export const services = [
  {
    bg: service,
    icon: mobile,
    title: "Mobile Applications",
  },
  {
    bg: service,
    icon: web,
    title: "Web Applications",
  },
  {
    bg: service,
    icon: laptop,
    title: "System Software",
  },
  {
    bg: service,
    icon: ai,
    title: "AI Agent and SASS Products",
  },
  {
    bg: service,
    icon: ui,
    title: "UI | UX Designing",
  },
  {
    bg: service,
    icon: digital,
    title: "Digital Marketing",
  },
];

export const partners = [
  partner1,
  partner2,
  partner1,
  partner2,
  partner1,
  partner2,
  partner1,
  partner2,
];

export const collage = [
  {
    title: "Traveling Tourism Hotels",
    sub: "RESERVATION AND BOOKINGS",
    bg: grid1,
  },
  {
    title: "ONLINE TRAINING AND LMS",
    bg: grid2,
  },
  {
    title: "HEALTHCARE  AND MEDICINES",
    bg: grid3,
  },
  {
    title: "LOGISTICS AND SUPPLY CHAIN",
    bg: grid4,
  },
  {
    title: "AI AGENT AND AI BASED PRODUCTS",
    bg: grid5,
  },
  {
    title: "BUSINESS DEVELOPMENT AUTOMATION GROWTH",
    bg: grid6,
  },
];

export const testimonials = [
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profile: profile,
    name: "Alex Smith",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profile: profile,
    name: "Alex Smith",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profile: profile,
    name: "Alex Smith",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profile: profile,
    name: "Alex Smith",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profile: profile,
    name: "Alex Smith",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    profile: profile,
    name: "Alex Smith",
  },
];

export const blogs = [
  {
    image: blog1,
    title: "UI/UX Designer",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
    content:
      "Lorem ipsum dolor sit amet, the consectetur to adipiscing elit, sed do eiusmod tempor  ",
  },
  {
    image: blog2,
    title: "UI/UX Designer",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
    content:
      "Lorem ipsum dolor sit amet, the consectetur to adipiscing elit, sed do eiusmod tempor  ",
  },
  {
    image: blog3,
    title: "UI/UX Designer",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
    content:
      "Lorem ipsum dolor sit amet, the consectetur to adipiscing elit, sed do eiusmod tempor  ",
  },
  {
    image: blog1,
    title: "UI/UX Designer",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
    content:
      "Lorem ipsum dolor sit amet, the consectetur to adipiscing elit, sed do eiusmod tempor  ",
  },
  {
    image: blog2,
    title: "UI/UX Designer",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
    content:
      "Lorem ipsum dolor sit amet, the consectetur to adipiscing elit, sed do eiusmod tempor  ",
  },
];

export const contacts = [
  {
    icon: phone,
    title: "Phone Number",
    value: "+92 334 0028 299",
  },
  {
    icon: mail,
    title: "Email Address",
    value: "hello@tecsyhub.com",
  },
  {
    icon: location,
    title: "Location",
    value: "123 Street 200  Don",
  },
];

export const blogsCategories = [
  {
    title: "Web Designs",
    number: 14,
  },
  {
    title: "digital agency",
    number: 32,
  },
  {
    title: "wordpress",
    number: 27,
  },
  {
    title: "UI designs",
    number: 18,
  },
  {
    title: "marketing",
    number: 15,
  },
  {
    title: "web template",
    number: 29,
  },
];

export const careerCollage = [col1, col2, col3, col4, col5, col6];

export const members = [
  {
    image: member,
    name: "amira yerden",
    designation: "Founder",
  },
  {
    image: member2,
    name: "amira yerden",
    designation: "Developer",
  },
  {
    image: member3,
    name: "amira yerden",
    designation: "Product Engineer",
  },
  {
    image: member4,
    name: "amira yerden",
    designation: "Software Engineer",
  },
];

export const opportunities = [
  {
    designation: "MERN Stack Developer",
    experience: "1+ years",
    type: "Full Time",
    location: "Karachi",
    description:
      "We are looking for a 1+ years of experience developer in JavaScript. Who  expertise in ReactJs nextjs tailwindcss material u",
    keywords: [
      "React",
      "Node JS",
      "Javascript",
      "Next JS",
      "Tailwind",
      "MongoDB",
    ],
  },
  {
    designation: "MERN Stack Developer",
    experience: "1+ years",
    type: "Full Time",
    location: "Karachi",
    description:
      "We are looking for a 1+ years of experience developer in JavaScript. Who  expertise in ReactJs nextjs tailwindcss material u",
    keywords: [
      "React",
      "Node JS",
      "Javascript",
      "Next JS",
      "Tailwind",
      "MongoDB",
    ],
  },
  {
    designation: "MERN Stack Developer",
    experience: "1+ years",
    type: "Full Time",
    location: "Karachi",
    description:
      "We are looking for a 1+ years of experience developer in JavaScript. Who  expertise in ReactJs nextjs tailwindcss material u",
    keywords: [
      "React",
      "Node JS",
      "Javascript",
      "Next JS",
      "Tailwind",
      "MongoDB",
    ],
  },
  {
    designation: "MERN Stack Developer",
    experience: "1+ years",
    type: "Full Time",
    location: "Karachi",
    description:
      "We are looking for a 1+ years of experience developer in JavaScript. Who  expertise in ReactJs nextjs tailwindcss material u",
    keywords: [
      "React",
      "Node JS",
      "Javascript",
      "Next JS",
      "Tailwind",
      "MongoDB",
    ],
  },
  {
    designation: "MERN Stack Developer",
    experience: "1+ years",
    type: "Full Time",
    location: "Karachi",
    description:
      "We are looking for a 1+ years of experience developer in JavaScript. Who  expertise in ReactJs nextjs tailwindcss material u",
    keywords: [
      "React",
      "Node JS",
      "Javascript",
      "Next JS",
      "Tailwind",
      "MongoDB",
    ],
  },
];

export const latestPosts = [
  {
    image: post1,
    title: "Post Title here",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
  },
  {
    image: post2,
    title: "Post Title here",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
  },
  {
    image: post3,
    title: "Post Title here",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
  },
  {
    image: post1,
    title: "Post Title here",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
  },
  {
    image: post2,
    title: "Post Title here",
    date: "23-02-2023",
    author: "John Smith",
    slug: "ui-ux-designer",
  },
];

export const routes = [
  {
    title: "Dashboard",
    route: { pathname: "/management", query: { route: "dashboard" } },
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Projects",
    route: { pathname: "/management", query: { route: "projects" } },
    icon: <MdOutlineDashboard />,
  },

  {
    title: "Customers",
    route: { pathname: "/management", query: { route: "customers" } },
    icon: <GrGroup />,
  },
  {
    title: "Team",
    route: { pathname: "/management", query: { route: "team" } },
    icon: <RiTeamLine />,
  },
  {
    title: "CMS",
    route: { pathname: "/management", query: { route: "cms" } },
    icon: <FaRegFileLines />,
  },
  {
    title: "Inquiries",
    route: { pathname: "/management", query: { route: "inquiries" } },
    icon: <BsChatLeftText />,
  },
  {
    title: "Blogs",
    route: { pathname: "/management", query: { route: "blogs" } },
    icon: <GrGroup />,
  },
  {
    title: "Career",
    route: { pathname: "/management", query: { route: "career" } },
    icon: <GrGroup />,
  },
  {
    title: "Settings",
    route: { pathname: "/management", query: { route: "settings" } },
    icon: <GiSettingsKnobs />,
  },
];

export const customers = [
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    quotations: 4,
    activeProjects: 2,
    status: "Active",
    id: "C_2003",
  },
];

export const team = [
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
  {
    name: "Moeez Ahmed",
    phone: "+92 123 4567890",
    email: "Acme@gmail.com",
    address: "Saeedabad, Karachi, Pakistan, Earth",
    activeProjects: 2,
    status: "Active",
    role: "Designer",
    id: "TE_1609",
  },
];

export const cmsPages = [
  {
    page: "Home",
    sections: [
      "Banner",
      "Services",
      "About",
      "Client Logos",
      "Industries",
      "Client Testimonials",
      "Blogs",
    ],
  },
  {
    page: "Contact",
  },
  {
    page: "Blog",
    // sections: ["B", "L", "O", "G"],
  },
  {
    page: "Career",
    // sections: ["C", "A", "R", "E", "E", "R"],
  },
];

export const webNotifications = [
  {
    time: "20231202",
    note: "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    isRead: false,
  },
  {
    time: "20231202",
    note: "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    isRead: false,
  },
  {
    time: "20231002",
    note: "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    isRead: false,
  },
  {
    time: "20221202",
    note: "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    isRead: false,
  },
  {
    time: "20231124",
    note: "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    isRead: false,
  },
  {
    time: "20230602",
    note: "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    isRead: false,
  },
  {
    time: "20231028",
    note: "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    isRead: false,
  },
];

export const personalInformation = {
  father: "Saeed Ahmed",
  phone: "+92 311 3868525",
  dob: "16th September 2003",
  email: "moeezahmed.saeed@gmail.com",
  gender: "Male",
  linkedIn: "linkedIn/moeez",
  address: "Saeedabad, Karachi",
  behance: "behance/moeez",
};

export const employeeInformation = {
  designation: "MERN Stack Developer",
  perosnalGithub: "https://github.com/smith",
  joining: "22nd Jan 2023",
  workGithub: "https://github.com/techsydev",
  jobMode: "Hybrid",
  workEmail: "moeezhamed.saeed@gmail.com",
  jobType: "Part Time",
  salary: "40,000 PKR",
  skills:
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
  resume: "resume",
};

export const bankDetails = {
  bank: "HBL",
  title: "Moeez Ahmed",
  iban: "IBN2342349123123",
  account: "0123123134123",
};

export const projects = [
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
  {
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Pending",
    deadline: "Tomorrow",
  },
];

export const EODHistory = [
  {
    date: "Yesterday",
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Completed",
    deadline: "Tomorrow",
  },
  {
    date: "Yesterday",
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Completed",
    deadline: "Tomorrow",
  },
  {
    date: "Yesterday",
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Completed",
    deadline: "Tomorrow",
  },
  {
    date: "Yesterday",
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Completed",
    deadline: "Tomorrow",
  },
  {
    date: "Yesterday",
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Completed",
    deadline: "Tomorrow",
  },
  {
    date: "Yesterday",
    id: "12-PN-a1",
    name: "Project Name",
    summary:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book...",
    status: "Completed",
    deadline: "Tomorrow",
  },
];

export const messages = [
  {
    message:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallywhen an unknown printer took a galley of type and zscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallywhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining emaining essentiallywhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
    sender: "John Smith",
    designation: "Manager",
    time: "12 mins ago",
    user: false,
  },
  {
    message: "when an unknown printer took a galley of type and scrambled",
    sender: "Moeez Ahmed",
    designation: "Developer",
    time: "10 mins ago",
    user: true,
  },
  {
    message:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallywhen an unknown printer took a galley of type and zscrambled it to make a type specimen book. It has survived not only five centuries",
    sender: "John Smith",
    designation: "Manager",
    time: "9 mins ago",
    user: false,
  },
  {
    message: "when an unknown printer ",
    sender: "John Smith",
    designation: "Manager",
    time: "9 mins ago",
    user: false,
  },
  {
    message:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallywhen an unknown printer took a galley of type and zscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallywhen an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    sender: "Moeez Ahmed",
    designation: "Developer",
    time: "5 mins ago",
    user: true,
  },
  {
    message: "when",
    sender: "John Smith",
    designation: "Manager",
    time: "2 mins ago",
    user: false,
  },
];
