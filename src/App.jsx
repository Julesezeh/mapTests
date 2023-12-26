import LandingPage from '@dowelllabs/dowell-living-lab-maps/Pages/LandingPage';
import {  PreviewProvider } from '@dowelllabs/dowell-living-lab-maps/Context/PreviewContext';

function App() {
  return (
    <PreviewProvider>
      <LandingPage />
    </PreviewProvider>
  );
}

export default App;