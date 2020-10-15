import React from 'react';
import ReactDOM from 'react-dom';

// import {items, sellers} from './data';
import * as data from './data';

import App from './components/App';

const rootElement = document.getElementById('root');

ReactDOM.render(<App 
					sellers={data.sellers}
					items={data.items}
				/>, rootElement);
