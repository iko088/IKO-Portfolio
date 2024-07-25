import { link } from "fs";
import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    fakeLink: "/casecobra.com",
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/case.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://case-cobra2-zpwh.vercel.app/",
  },
  {
    id: 2,
    fakeLink: "/brainwave.com",
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/brainwave.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://brain-wave-ashen.vercel.app/",
  },
  {
    id: 3,
    fakeLink: "/casecobra.com",
    title: "AI imagee SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    fakeLink: "/iphoneremake.com",
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://apple-iphone-seven.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Ikram on our SaaS project was an absolute pleasure. His ability to understand our needs and deliver tailored solutions was remarkable. Ikram's professionalism, promptness, and dedication ensured that our software was both innovative and user-friendly. If you're looking to elevate your software and brand, Ikram is the ideal partner.",
    name: "Sana Khan",
    image: "/sana.jpeg",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with Ikram on our full stack website was a fantastic experience. His expertise in both frontend and backend development made the project seamless. Ikram's commitment to delivering high-quality results and his ability to meet deadlines were impressive. For anyone looking to enhance their website and brand, Ikram is the perfect choice.",
    name: "Anita Mehta",
    image: "/anita.png",
    title: "",
  },
  {
    quote:
      "Ikram did an outstanding job on our frontend development project. His eye for detail and creativity in designing an intuitive user interface were exceptional. Ikram's enthusiasm and dedication to perfection were evident throughout the project. If you need to boost your website's frontend and brand, Ikram is the go-to professional.",
    name: "James Thompson",
    image: "/james.jpg",
    title: "Head of design at MapleTech Solution",
  },
  {
    quote:
      "Ikram's work on our backend development project was exemplary. His technical expertise and problem-solving skills ensured that our system was robust and efficient. Ikram's professionalism and dedication to delivering top-notch results were clear from start to finish. For anyone aiming to strengthen their backend and brand, Ikram is the ideal partner.",
    name: "Sarah Lee",
    image: "/sarah.jpg",
    title: "CTO of FutureWeb Inc",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "React Native Developer Intern",
    desc: "Contributed to the development of a cross-platform mobile app using React Native, improving user experience and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer - JSM Tech",
    desc: "Engineered robust backend systems with Node.js and Express, integrated RESTful APIs, and optimized database performance with MongoDB.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Spearheaded the development of a web application, managing both front-end and back-end tasks from concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    Myurl: "https://github.com/wizardofcode8",
    id: 1,
    img: "/git.svg",
  },
  {
    Myurl: "https://www.facebook.com/ikram.webdev",
    id: 2,
    img: "/fac.svg",
  },
  {
    Myurl: "https://www.linkedin.com/in/ikram-khan-iko802",
    id: 3,
    img: "/link.svg",
  },
];
