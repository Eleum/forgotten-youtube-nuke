import { Typography } from '@mui/material';
import { YoutubeTracking } from './tabs-tracking/context/youtube-tracking/youtube-tracking';
import './App.css';

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
                <Typography variant="h4">
                    {"hello there :)"}
                </Typography>
            ) : (
                <YoutubeTracking />
            )}
        </div>
    );
}

export default App;
