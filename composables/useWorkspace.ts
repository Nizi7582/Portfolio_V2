export const useWorkspace = () => {
  const showProjects = useState('showProjects', () => false)
  return { showProjects }
}
