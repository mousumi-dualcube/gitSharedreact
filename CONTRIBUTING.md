#Contributing

## Getting Started

Clone the repository available at - https://gitlab.kineodev.com/NGP/MLS_GAP_SHARED_REACT

Install the dependencies:

```bash
$ npm install
```

## Basic usage

To view an overview of all the components, there is a page that will build to demonstrate how all of the components will currently display. To compile the components run: 

```bash
$ npm start
``` 

This will start a web server where you can view all the components accessible VIA <a href="https://localhost:8080">https://localhost:8080</a>
 
There will also be a watch process that looks for changes within `./components`. If you make a change to the component's source then you'll see in the terminal where you are running `npm start` that Webpack will rebuild the components and when that is done they will be immediately available on `localhost:8080`. If you have the page open already, it should hot reload the new components. 


## Modifying a component

Modifying a component is very straight forward. Within `./components`, find the folder that relates to the component/sub-component you want to update (i.e. `./components/button` for the BrowseButton component) and within there will be the class that renders the component (`BrowseButton.js`) and the associated parent style (`theme.css`). Editing the render method withing the component will alter the component.

When making modifications, the best way to check the component would be to have the npm process running and using the generated page on `localhost:8080` to see what the component looks like.
 
## Creating a new component

If the component doesn't fit into one of the already defined groups, then you will need to create a new group within `./components`
  
  
<h4>Creating a new group</h4>
 - Copy the `./compononents/_base_component` folder into a new folder in `./components`, and rename to match the component name
 - Rename the files/classes/imports to match the component name
 
<h4>Adding to an existing group</h4>
 - Copy the group's main component inside the folder
 - Add sub component type to import.js (see `./components/button/index.js` for an example)
 
<h4>Adding to the component test page</h4>
 - Copy and paste `./spec/components/base_component.js` into `./spec/components`
 - Import the component, replacing the BaseComponent import with the group 
 - Replace `<BaseComponent />` with the new component
 - Import the component spec in `./spec/root.js` (note this is from `./spec/components/` and not the component src) and add to Root's render method 
