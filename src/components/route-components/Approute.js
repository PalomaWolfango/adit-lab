import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from '../../page/AboutPage';
import Home from '../../page/Home';
import HomeV2 from '../../page/Home-v2';
import PricingPage from '../../page/PricingPage';
import ProjectPage from '../../page/ProjectPage';
import ServiceDetails from '../../page/ServiceDetails';
import ServicePage from '../../page/ServicePage';
import TeamDetails from '../../page/TeamDetails';
import TeamPageCollaborator from '../../page/TeamPageCollaborator';
import TeamPageExecutiveBoard from '../../page/TeamPageExecutiveBoard';
import TeamPageScholarshipHolder from '../../page/TeamPageScholarshipHolder';
import ErrorPage from '../../page/Error.jsx'
import ContactPage from '../../page/ContactPage';
import BlogDetails from '../../page/BlogDetails';
import ResearchAreasPage from '../../page/ResearchAreasPage';
import NewsPage from '../../page/NewsPage';

function AppRoute() {

    return (
        < BrowserRouter >
            < Switch >
                < Route path = '/' exact component = { Home } />
                < Route path = '/home-v2' exact component = { HomeV2 } />
                < Route path = '/about' exact component = { AboutPage } />
                < Route path = '/service' exact component = { ServicePage } />
                < Route path = '/service-details' exact component = { ServiceDetails } />
                < Route path = '/project' exact component = { ProjectPage } />
                < Route path = '/team-executive-board' exact component = { TeamPageExecutiveBoard } />
                < Route path = '/team-scholarship-holder' exact component = { TeamPageScholarshipHolder } />
                < Route path = '/team-collaborator' exact component = { TeamPageCollaborator } />
                <Route
  exact
  path="/team-details/:user_id"
  component={TeamDetails}
/>
                < Route path = '/pricing' exact component = { PricingPage } />
                < Route path = '/contact' exact component = { ContactPage } />
                < Route path = '/blog-details' exact component = { BlogDetails } />
                < Route path = '/research-areas' exact component = { ResearchAreasPage } />
                < Route path = '/news' exact component = { NewsPage } />
                {/* < Route path = '*' exact component = { ErrorPage } /> */}
            </ Switch> 
        </ BrowserRouter>
    )
        
    
}
export default AppRoute;