# orbifold
An orbifold inspired UI for Mesos.

Orbifold UI is a DC/OS inspired Marathon-laden Standalone GUI for Container 2.0: Realistically, delivering container services means delivering a platform that can run application logic along with the gamut of backend services on shared infrastructure, combining all workloads onto a single platform that improves efficiency and simplifies complex operations. The collection of capabilities that modern applications require includes monitoring, continuous deployment, relational databases, web servers, virtual networking and more.

This is a fully customizable standalone UI for Mesos which Propagates metadata from Clusters, allows for Task execution, data persistence between sessions with cluster-store, scheduling via Marathon, Dispatching to sockets and stylistic automation via Gulp, comprising a dynamic UI which presents the User with an Alternative interface to Mesosphere.

Mesos cedes much of its scheduling authority over to the frameworks (in DC/OS, we call them “services”) that are running on it. This means that all of the services running on DC/OS can have their own scheduler and that each scheduler can be specifically optimized for unique kinds of workloads and constraints. Furthermore, these schedulers are customized to simplify “Day 2” operations by making services easy to install, scale and upgrade without downtime, among other benefits.

Material-UI is available as an npm package.

react-tap-event-plugin

Our components use react-tap-event-plugin to listen for touch / tap / clickevents. This dependency is temporary and will go away once the official React version is released. Until then, be sure to inject this plugin at the start of your app.

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
react-tap-event-plugin provides onTouchTap() to all React Components. It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.

Roboto Font

Material-UI was designed with the Roboto font in mind

Running multiple schedulers on the same cluster—simultaneously, multi-tenant on shared nodes is the only way to maximize resource utilization and accommodate the wide range of Container 2.0 workloads. Container 1.0 systems, including Kubernetes and Docker Swarm, use a single monolithic scheduler. And because there is no single scheduler that can optimize for all workloads, users end up with non-optimal operating constraints, including being forced to create separate clusters for each service. The overall structure of 'Orbifold-UI' is dependent on the recent breakthroughs at Facebook React: We exploit this state-of-the-art 'stateful component' element 
which forces developers to compartmentalize, automate, and template using promises; masking or hashing functions which work efficiently on the DOM. 

This entire project has been written for most modern browsers, thus exposing well-known practices in web-development. Further improvements shall concentrate on cryptographic concerns 
with data parsing and oversight(priviledges) between accounts. Threats in tokenized security issues dealing with cookies can enable MiTM Attacks and DDoS by spoofing the tubing. Thus said,
The ability to parse data structures via JSON makes for tidy workplaces: routes and end-points between meso-clusters and the end-user or admin, can only be implemented in what seems to be a reactive callback/feedback system of constant communication between scripts. 

