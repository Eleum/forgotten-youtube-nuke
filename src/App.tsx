import './App.css';
import { YoutubeTracking } from './youtube-tracking';

function App() {
  const MISSING_PERMISSION_TAB = "Extension is missing \"tab\" permission";

  if (!chrome.tabs && process.env.NODE_ENV !== "development") {
    console.error(MISSING_PERMISSION_TAB);
    return(<>{MISSING_PERMISSION_TAB}</>);
  }

  return (
    <div className="App">
      <YoutubeTracking />
    </div>
  );
}

export default App;
