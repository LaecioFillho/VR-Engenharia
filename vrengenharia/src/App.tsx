import AbautIndex from './components/AbautIndex.tsx'
import ContatctIndex from './components/ContatctIndex.tsx'
import FooterIndex from './components/FooterIndex.tsx'
import HeaderIndex from './components/HeaderIndex.tsx'
import ProjectsIndex from './components/ProjectsIndex.tsx'
import ServicesIndex from './components/ServicesIndex.tsx'


function App() {
    return (
      <>
        <main>
          <HeaderIndex />
          <AbautIndex />
          <ServicesIndex />
          <ProjectsIndex />
          <ContatctIndex />
        </main>
        <footer>
          <FooterIndex />
        </footer>
      </>
    )
  }
  
  export default App