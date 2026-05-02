import imgAllocasions from '~/assets/projects/bg-allocasions.png'
import imgDrawin from '~/assets/projects/bg-drawin.PNG'
import imgDropkit from '~/assets/projects/bg-dropkit.PNG'
import imgGachat from '~/assets/projects/bg-gachat.png'
import imgGetafish from '~/assets/projects/bg-getafish.PNG'
import imgUnsacpourtous from '~/assets/projects/bg-unsacpourtous.PNG'
import imgTroi from '~/assets/projects/bg-troi.png'
import imgEpouvante from '~/assets/projects/bg-epouvante.png'
import imgJexplore from '~/assets/projects/bg-jexplore.png'

export const useProjects = () => {
  const projects = [
    {
      id: 'jexplore',
      title: 'Jexplore',
      role: 'Full Stack Developer',
      status: 'private',
      descriptionKey: 'projects.jexplore.description',
      tags: ['ExpressJS', 'Nuxt.js', 'Vue.js', 'React', 'Next', 'Firebase', 'Supabase', 'GCP', 'GitLab CI/CD', 'SonarCloud', 'Vitest', 'Playwright', 'Tailwind CSS', 'Vercel'],
      link: '#',
      github: '#',
      image: imgJexplore
    },
    {
      id: 'maison-epouvante',
      title: "La Maison de l'Épouvante",
      role: 'Full Stack Developer',
      status: 'local',
      descriptionKey: 'projects.epouvante.description',
      tags: ['NestJS', 'Nuxt.js', 'PostgreSQL', 'Prisma ORM', 'Keycloak', 'Stripe', 'Docker', 'GitLab CI/CD', 'SonarCloud', 'Jest', 'Vitest', 'Playwright', 'Tailwind CSS'],
      link: '#',
      github: '#',
      image: imgEpouvante
    },
    {
      id: 'dropkit',
      title: 'Dropkit.app',
      role: 'Frontend Developer',
      status: 'private',
      descriptionKey: 'projects.dropkit.description',
      tags: ['Nuxt.js 2', 'Vue 2', 'GraphQL', 'Apollo', 'Tailwind CSS 2', 'Vue Chartjs', 'Tiptap', 'Remixicon', 'Google Maps API'],
      link: '#',
      github: '#',
      image: imgDropkit
    },
    {
      id: 'un-sac-pour-tous',
      title: 'UnSacPourTous',
      role: 'Full Stack Developer ',
      status: 'online',
      descriptionKey: 'projects.unsac.description',
      tags: ['Nuxt.js 2', 'Tailwind CSS', 'Vuex', 'PWA', 'AOS', 'Google Maps', 'Cropper'],
      link: 'https://www.unsacpourtous.com/',
      github: '#',
      image: imgUnsacpourtous
    },
    {
      id: 'troi-io',
      title: 'Troi.io',
      role: 'Full Stack Developer ',
      status: 'private',
      descriptionKey: 'projects.troi.description',
      tags: ['Nuxt.js', 'Tailwind CSS', 'Algolia', 'Elasticsearch', 'AWS', 'CometChat', 'PHP'],
      link: '#',
      github: '#',
      image: imgTroi
    },
    {
      id: 'gachat',
      title: 'Gachat',
      role: 'Fullstack Developer',
      status: 'online',
      descriptionKey: 'projects.gachat.description',
      tags: ['Nuxt 3', 'Vue 3', 'Supabase', 'Tailwind CSS', 'Pinia', 'GSAP', 'TypeScript'],
      link: 'https://gachat-game.vercel.app/login',
      github: '#',
      image: imgGachat
    },
    {
      id: 'allocasions',
      title: 'Allocasions',
      role: 'Full Stack Developer',
      status: 'online',
      descriptionKey: 'projects.allocasions.description',
      tags: ['Nuxt.js 2', 'Ionic Vue', 'Capacitor', 'PHP', 'TypeScript', 'Tailwind CSS', 'Stripe', 'AWS', 'Stream Chat'],
      link: 'https://carviz.com/',
      github: '#',
      image: imgAllocasions
    },
    {
      id: 'drawin',
      title: 'Drawin',
      role: 'Fullstack Developer',
      status: 'local',
      descriptionKey: 'projects.drawin.description',
      tags: ['Vue 3', 'Nuxt 3', 'Pinia', 'Tailwind CSS', 'PHP', 'phpMyAdmin'],
      link: '#',
      github: '#',
      image: imgDrawin
    },
    {
      id: 'getafish',
      title: 'Getafish',
      role: 'Full Stack Developer',
      status: 'local',
      descriptionKey: 'projects.getafish.description',
      tags: ['Vue 3', 'Nuxt 3', 'Pinia', 'Tailwind CSS', 'PHP', 'phpMyAdmin', 'Stripe'],
      link: '#',
      github: '#',
      image: imgGetafish
    }
  ]

  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id)
  }

  return {
    projects,
    getProjectById
  }
}
