interface WorkType {
  id: string
  name: string
  image: string
  description: string
  tags: string
  page?: boolean
  github?:string
  demo?: string
}

const serialWorks: WorkType[] = [
  {
    id: 'redesigned_inari',
    name: 'Inari Manga (Redesigned theme)',
    image: '/projects/redesigned_inari.webp',
    description: 'A redesign was carried out using the bases of another template and adding other features in relation to the design provided and everything was done in the shortest possible time so as not to affect the site.',
    tags: 'PHP, JavaScript, CSS, HTML',
  },
  {
    id: 'funatire',
    name: 'Funatire (In progress)',
    image: '/projects/funatire.webp',
    description: 'Panel to facilitate distribution of tasks and payments corresponding to it, managing permissions on the site and roles for the tasks.',
    tags: 'SvelteKit, PHP, TypeScript, TailwindCSS, Laravel',
  },
]

const funWorks: WorkType[] = [
  {
    id: 'password_generator',
    name: 'Password Generator',
    image: '/projects/password_generator.webp',
    demo: 'https://password-generated.pages.dev/',
    github: 'https://github.com/dazh-dv/password-generated',
    description: 'Simple application made with Astro to generate passwords based on the length of the password and the types of characters to use.',
    tags: 'Astro, JavaScript, CSS, HTML',
  },
  {
    id: 'twitter_clone_sveltekit',
    name: 'Twitter Clone with Supabase',
    image: '/projects/twitter_clone_sveltekit.webp',
    description: 'Simple clone of X made in svelki with the actions and database in supabase and login with github.',
    github: 'https://github.com/dazh-dv/twitter-clone-sveltekit',
    tags: 'Supabase, TypeScript, TailwindCSS, Svelte, SvelteKit',
  },
  {
    id: 'travel_app',
    name: 'Travel App',
    image: '/projects/travel_app.webp',
    description: 'Simple app made in react native as an interface to search and rate tourist places presenting reviews and ratings.',
    github: 'https://github.com/dazh-dv/expo-app-travelers',
    tags: 'React Native, TypeScript',
  },
]

export {
  serialWorks,
  funWorks
}
