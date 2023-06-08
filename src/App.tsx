import './App.css';
import { DummyTracking } from './tabs-tracking/context/dummy-tracking/dummy-tracking';
import { YoutubeTracking } from './tabs-tracking/context/youtube-tracking/youtube-tracking';

function App() {
  const MISSING_PERMISSION_TAB = "Extension is missing \"tab\" permission";
  let missingPermissons = false;

  console.log(process.env.NODE_ENV);

  if (!chrome.tabs) {
    missingPermissons = true;
    console.error(MISSING_PERMISSION_TAB);
  }

  return (
    <div className="App">
      {missingPermissons ? (
        <DummyTracking />
      ) : (
        <YoutubeTracking />
      )}
    </div>
  );
}

export default App;
