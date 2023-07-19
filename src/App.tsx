import { ThemeProvider, createTheme } from '@mui/material';
import { DummyTracking } from './tabs-tracking/context/dummy-tracking/dummy-tracking';
import { YoutubeTracking } from './tabs-tracking/context/youtube-tracking/youtube-tracking';
import './App.css';
import './styles/youtube-tracking/youtube-tracking.css';
import './styles/dummy-tracking/dummy-tracking.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const MISSING_PERMISSION_TAB = "Extension is missing \"tab\" permission";
  let missingPermissons = false;

  console.log(process.env.NODE_ENV);

  if (!chrome.tabs) {
    missingPermissons = true;
    console.error(MISSING_PERMISSION_TAB);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        {missingPermissons ? (
          <DummyTracking />
        ) : (
          <YoutubeTracking />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
