import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footeer';
import Namvar from '@/components/Namvar';
import Projects from '@/components/projects';
import Skills from '@/components/Skills';


const Page = () => {
  return (
    <div>
      <Namvar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Page;