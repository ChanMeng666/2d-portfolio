import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chan Meng",
  initials: "CM",
  url: "https://chanmeng.live/",
  location: "New Zealand",
  locationLink: "https://www.google.com/maps/place/newzealand",
  description:
    "🔧 Full Stack Developer | 🎨 UI/UX Designer | 📱 Web and Mobile Application Development | ✨ Incorporating Minimalist Aesthetics into the Web and Apps",
  summary:
    "I am a developer who blends simplicity with tech, developing sleek digital solutions. Check my [GitHub projects](https://github.com/ChanMeng666) and thoughts on minimalism and tech at my [Minimalist blog](https://minimalist-good-post.vercel.app/). I believe in creating user-centered designs that combine functionality with elegant simplicity.",
  avatarUrl: "/chanmeng.jpg",
  skills: [
    "React",
    "Next.js", 
    "React Native",
    "Web Development",
    "UI/UX Design",
    "Mobile Development",
    "Database Architecture",
    "Node.js",
    "TypeScript",
    "Python",
    "Geographic Information Systems",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chanmeng666@outlook.com",
    tel: "+64 028 8523 5858",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ChanMeng666",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chanmeng666",
        icon: Icons.linkedin,

        navbar: true,
      },
      Blog: {
        name: "Blog",
        url: "http://www.chanmeng.live/",
        icon: Icons.globe,
        navbar: true
      },
      email: {
        name: "Email",
        url: "mailto:chanmeng666@outlook.com",
        icon: Icons.email,
        navbar: false
      },
    },
  },

  work: [
    {
      company: "Forward with Her",
      href: "https://www.linkedin.com/company/taxing-mentorship/",
      badges: ["Part-time"],
      location: "Remote",
      title: "Mentor - Technology & Professional Development",
      logoUrl: "/ForwardwithHer_logo.jpg",
      start: "Oct 2024",
      end: "Present",
      description: "Selected as a mentor from a competitive pool of 200+ applicants (40% acceptance rate) for this UN Women-supported initiative focused on empowering women in STEM fields. Provided guidance and mentorship to early-career women navigating the challenges of the tech industry."
    },
    {
      company: "CORDE",
      href: "https://corde.nz/",
      badges: [],
      location: "Christchurch, New Zealand",
      title: "Full Stack Developer",
      logoUrl: "/CORDE_logo.jpg",
      start: "Jun 2024",
      end: "Present",
      description: "Skilled in crafting dynamic, user-friendly mobile and web applications with React Native, contributing to improved user engagement and satisfaction. Implemented responsive design principles and optimized performance across multiple platforms."
    },
  ],
  education: [
    {
      school: "Lincoln University (NZ)",
      href: "https://www.lincoln.ac.nz/",
      degree: "Master's Degree, Applied Computing",
      logoUrl: "/lincolnuni_logo.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Jiangsu Normal University",
      href: "http://www.jsnu.edu.cn/",
      degree: "Bachelor's Degree, Geography Science",
      logoUrl: "/jsnu.jpg",
      start: "2012",
      end: "2016",
    }
  ],
  projects: [
    {
      title: "3D Interactive Portfolio Website",
      href: "https://chanmeng.live",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "Independently designed and developed an immersive portfolio website showcasing professional experience through interactive 3D elements and modern web technologies. Built responsive SPA using React.js with Three.js integration for 3D visualization, implemented smooth animations and transitions using Framer Motion, and designed an intuitive mobile-first responsive interface with TailwindCSS.",
      technologies: [
        "React.js",
        "Three.js",
        "TailwindCSS", 
        "Framer Motion",
        "Frontend Development"
      ],
      links: [
        {
          type: "Website",
          href: "https://chanmeng.live/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ChanMeng666/3D-Portfolio",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "CORDE Mobile - Field Operations Management",
      href: "https://corde.nz/",
      dates: "Jun 2024 - Nov 2024",
      active: true,
      description:
        "Led end-to-end development of a mission-critical mobile application for CORDE, revolutionizing field operations data management. Architected a complete offline-first solution using React Native and TypeScript, designed intelligent SQLite database system, and implemented comprehensive GPS integration and real-time synchronization.",
      technologies: [
        "React Native",
        "TypeScript",
        "SQLite",
        "Mobile Development",
        "API Integration",
        "Native Base"
      ],
      links: [
        {
          type: "Website",
          href: "https://corde-mobile-application-4yw7mtt.gamma.site/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "CustomerInsight - Review Analysis System",
      href: "https://chanmeng666-customerinsight-app-oeiu2h.streamlit.app/",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "Built an end-to-end customer review analysis system powered by advanced NLP techniques, optimized for Chinese language content. Features multi-dimensional analysis pipeline, sentiment analysis, keyword extraction, topic modeling, interactive dashboards with Streamlit, and automated anomaly detection.",
      technologies: [
        "Natural Language Processing",
        "Python",
        "Streamlit",
        "Data Visualization",
        "Text Analysis"
      ],
      links: [
        {
          type: "Website",
          href: "https://chanmeng666-customerinsight-app-oeiu2h.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ChanMeng666/CustomerInsight",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "FriendScope - Scientific Friendship Assessment",
      href: "https://friendscope.vercel.app/",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "Led the development of an intelligent assessment system analyzing 10 key friendship dimensions including trust, emotional support, and communication patterns. Features interactive dashboards with Recharts for visualizing relationship dynamics.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Framer Motion"
      ],
      links: [
        {
          type: "Website",
          href: "https://friendscope.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ChanMeng666/friendscope",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Journey of Reincarnation - Interactive Life Simulation",
      href: "https://journey-of-reincarnation2.vercel.app/",
      dates: "Oct 2024 - Oct 2024",
      description: "Developed an innovative web application that simulates reincarnation experiences through interactive exploration of different life circumstances. Built a responsive world map system using react-simple-maps and created dynamic statistics dashboards with Chart.js.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Chart.js",
        "Framer Motion",
        "i18next"
      ],
      links: [
        {
          type: "Website",
          href: "https://journey-of-reincarnation2.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ChanMeng666/journey-of-reincarnation2",
          icon: <Icons.github className="size-3" />,
        }
      ]
    }
  ],
  volunteering: [
    {
      organization: "Forward with Her",
      role: "STEM Mentor",
      start: "Oct 2024",
      end: "Present",
      description: "As a volunteer mentor at Forward with Her (她行), a nonprofit initiative supporting women in STEM, I provide guidance and mentorship to early-career women navigating the challenges of the technology field. This role includes bi-weekly meetings with assigned mentees, during which we discuss career development, personal growth, and practical problem-solving strategies in STEM environments. Forward with Her (她行) was founded in 2020 and invented women in STEM through one-on-one mentorship, creating a supportive network that bridges generational gaps. With over 1,000 members and a newly launched podcast 'Her Voice,' the organization strives to amplify women's voices in the tech industry and promote gender equality through mentorship, networking, and skill development.",
      skills: ["Mentoring", "STEM Education", "Career Development", "Leadership"],
      logoUrl: "/ForwardwithHer_logo.jpg",
    },
    {
      organization: "Guilin Arts Festival",
      role: "Festival Translator and Cultural Exchange Volunteer",
      start: "Sep 2023",
      end: "Nov 2023",
      description: "During the 2023 Guilin Arts Festival, I had the unique opportunity to volunteer as a translator for a Maori dance troupe from New Zealand. This role enhanced my understanding and appreciation of Maori culture through direct engagement with traditional dance, music, and language. I provided translation support, facilitating a deeper cultural exchange between the performers and local audiences. This experience sharpened my skills in cross-cultural communication and demonstrated how technology can enhance cultural representation in an international setting. Leveraging IT tools, I contributed to enriching the presentation of Maori culture, making it accessible and engaging for diverse audiences.",
      skills: [
        "Business English",
        "Maori Language",
        "Maori Dance",
        "Maori Cultural Studies",
        "Cross-cultural Communication"
      ],
      logoUrl: "/GuilinArtsFestival.jpg",
    },
    {
      organization: "Cebu International Academy",
      role: "Volunteer Educator",
      start: "Mar 2023",
      end: "Sep 2023",
      description: "As a committed volunteer, I engaged in outreach programs focused on uplifting rural communities around Cebu, Philippines. My activities involved distributing essential supplies to children, women, and the elderly, as well as organizing interactive performances and games to create memorable, joyful experiences. Through these activities, I aimed to provide not only material support but also emotional connection and community spirit. This volunteering experience deepened my cultural awareness and strengthened my commitment to leveraging technology and business acumen to drive social change. It also reinforced my belief in the importance of giving back, fostering community, and creating lasting positive impacts in underserved areas.",
      skills: [
        "Community Outreach",
        "Event Organization",
        "Social English",
        "Cultural Awareness"
      ],
      logoUrl: "/cia.jpg",
    }
  ],
  recommendations: [
    {
      name: "Di Peng",
      title: "ShanghaiTech University Student",
      date: "November 29, 2024",
      content: "I recently had the opportunity to join Chan's AI-assisted development course through Forward with Her, where I created my first personal website using the Cursor editor, incorporating my own curated media elements. The experience introduced me to the fascinating world of web and app development. Chan's hands-on teaching approach and technical expertise made complex concepts approachable, particularly through interactive problem-solving sessions. I'm excited to see more of her innovative work in the tech space!"
    },
    {
      name: "Qiao Jun",
      title: "Tsinghua University Student",
      date: "November 25, 2024",
      content: "I had the pleasure of working alongside Chan, who is not only meticulous but also enthusiastic about exploring new technologies. She introduced me to the fascinating world of AI programming and showed me how creating personal web pages could be both simple and enjoyable. Her patience in debugging and her willingness to share the plugins and websites she developed greatly benefited our team. Chan’s passion for coding is contagious—working with her made me realize that programming can be both fun and immensely rewarding. I wholeheartedly recommend her for any role where innovation, collaboration, and technical expertise are valued."
    }
  ],
} as const;
