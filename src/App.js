import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PhoneCatalogue from './components/PhoneCatalogue';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/layout.scss';
import './App.scss';

class App extends Component {

    render() {

        return (            
            <Router>
                <div>
                    <main>
                        <Switch>
                            <Route path="/" exact component={PhoneCatalogue} />                            
                            <Route path="/catalogue" component={PhoneCatalogue} />                            
                        </Switch>
                    </main>
                    <div className="layout-mask"></div>
                </div>
            </Router>
        );
    }
}

export default App;
