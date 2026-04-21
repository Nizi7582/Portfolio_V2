export const useProjects = () => {
  const projects = [
    {
      id: 'modern-portfolio-v2',
      title: 'Modern Portfolio V2',
      description: 'A cutting-edge developer portfolio built with Nuxt 3, Tailwind CSS, and glassmorphism. Featuring full internationalization and buttery smooth GSAP animations.',
      tags: ['Nuxt 3', 'Tailwind', 'Vueuse', 'GSAP'],
      link: '#',
      github: 'https://github.com/Nizi7582/Portfolio_V2',
      image: '/img/Nizaar_serious.jpg'
    },
    {
      id: 'project-alpha',
      title: 'Project Alpha',
      description: 'A revolutionary web application designed to simplify complex workflows with an elegant and highly responsive User Interface.',
      tags: ['Vue 3', 'Node.js', 'PostgreSQL'],
      link: '#',
      github: '#',
      image: '/img/Nizaar_states.jpg'
    },
    {
      id: 'project-beta',
      title: 'Project Beta',
      description: 'A data-driven dashboard providing real-time insights and analytics for tech enthusiasts. Built with performance in mind.',
      tags: ['Nuxt', 'Chart.js', 'Firebase'],
      link: '#',
      github: '#',
      image: '/img/Nizaar_serious.jpg'
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
