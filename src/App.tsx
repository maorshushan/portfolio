import Navbar, { type NavLink } from './components/navbar'
import Home from './pages/home'
import { Route, Routes } from 'react-router'
import Projects, { type Project } from './pages/projects'
import About from './pages/about'
import DesignSystem from './pages/projects/design-system'

const links: NavLink[] = [
  { label: 'Home', href: '/', element: <Home /> },
  { label: 'About', href: '/about', element: <About /> }
]

const projects: Project[] = [
  {
    name: 'Ofek Design System',
    description: 'A nice description for the project',
    categories: ['Product Design', 'Team Lead', 'Dev', 'Design System'],
    image: 'https://dummyimage.com/600x360',
    href: 'ofek-design-system',
    element: <DesignSystem />
  },
]

function App() {

  return (
    <>
      <Navbar links={[...links, { label: 'Projects', href: '/projects' }]} />
      <Routes>
        {links.map((link) => (
          <Route key={link.href} path={link.href} element={link.element} />
        ))}
        <Route path="/projects">
          <Route index element={<Projects projects={projects} />} />
          {projects.map((project) => (
            <Route key={project.href} path={ project.href} element={project.element} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App
