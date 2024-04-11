import Github from "../components/icons/github.astro";
import Mail from "../components/icons/mail.astro";

interface DataType {
  name: string
  position: string
  avatar: string
  bio: string
  page: string
  siteTitle: string
  social: {
    name: string
    url?: string
    github?: string
    demo?: string
    icon: (_props: Record<string, any>) => any
  }[]
}

const data: DataType = {
  name: 'Brandon Garcia',
  position: 'Full Stack & Mobile Dev',
  avatar: '/headshot.webp',
  page: import.meta.env.PUBLIC_PAGE_URL,
  siteTitle: 'Portfolio Dazh Dev',
  bio: "Full Stack and mobile developer with React Native. With a passion for creating innovative solutions, I have worked on a variety of projects. My focus on good user experience and solid functionality has allowed me to deliver high quality products. I'm excited to share my work with you and discuss how I can contribute to your projects.",
  social: [
    {
      name: 'Github',
      url: 'https://github.com/dazh-dv',
      icon: Github
    },
    // {
    //   name: 'Youtube',
    //   url: '',
    //   icon: Youtube
    // },
    {
      name: 'Mail',
      url: '#contact',
      icon: Mail
    },
    // {
    //   name: 'Linkedin',
    //   url: '',
    //   icon: Linkedin
    // },
    // {
    //   name: 'CodePen',
    //   url: '',
    //   icon: Codepen
    // },
  ]
}

export default data