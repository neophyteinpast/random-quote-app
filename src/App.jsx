import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import QuoteViewer from "./components/QuoteViewer";
import ColorPlayer from './components/ColorPlayer';

library.add(faTwitter,faSquareTwitter,faQuoteLeft);

export default function App() {
    return (
        <>
            <QuoteViewer />
        </>
    );
}