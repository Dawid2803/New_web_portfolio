import { BrowserRouter } from "react-router-dom"
import { initializeApp } from "firebase/app";

import { About,
   Contact,
  Experience,
  Feedbacks, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas } from './components'

  const firebaseConfig = {
    apiKey: "AIzaSyBL6Mzyl0x_auXnofJxRdBzcOkVkklZzgk",
    authDomain: "portfolio-f3934.firebaseapp.com",
    projectId: "portfolio-f3934",
    storageBucket: "portfolio-f3934.appspot.com",
    messagingSenderId: "840282072144",
    appId: "1:840282072144:web:6c4d4e8504ce4ae21d9d55"
  };

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
