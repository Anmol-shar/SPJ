import { VStack } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/card/ServiceGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <><VStack
      w="100%"
      h="100vh"
      gap={0}
    >   
      <HeroSection />
    </VStack><ServicesGrid />

    <ContactForm/>
    <Footer/>
</>
  );
}

export default App;
