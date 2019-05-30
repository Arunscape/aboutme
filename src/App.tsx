import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const Header = React.lazy(() => import('./components/Header/Header'));
const Resume = React.lazy(() => import('./pages/Resume/Resume'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));

const externalRedirect = (path: string, url: string) => (
  <Route path={path} exact component={() => {
    window.location.replace(url);
    return null
  }} 
  key={path}
  />
);

const redirectRoutes = [
  ["/github", "https://github.com/Arunscape"],
  ["/linkedin", "https://linkedin.com/in/arun-woosaree"],
  ["/email", "mailto:arun@woosaree.xyz"],
]

const App: React.FC =  () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
      <Header />
        <Route path="/" exact component={AboutPage} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/projects" exact component={Projects} />
        {redirectRoutes.map((x) => externalRedirect(x[0], x[1]))}
      </Router>
    </Suspense>
  );
}

export default App;