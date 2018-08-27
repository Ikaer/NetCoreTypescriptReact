# NetCoreTypescriptReact

This is a very simple and basic boilerplate for a website with .net core, typescript and react.

# npm

npm is used to handle typescript definition files of react (@types/react and @types/react-dom)

An npm install must be done in folder root.

    npm install

# libman 

libman is used to handle client side libraries (react, react-dom and requirejs)

In visual studio, to restore libman packages (react/reactdom/requirejs), right click on libman.json then "Restore client-side libraries" 

You can use following command line in NetCoreTSReact folder

    libman restore

NB: require you have installed libman CLI (https://github.com/aspnet/LibraryManager/wiki/Using-LibMan-CLI)

# Typescript

In visual studio, build will create the javascript files from tsx files in wwwroot.

You can also manually run tsc.exe in NetCoreTSReact folder

# Run

Then you can run the project and browse /index.html. If everything is ok, you should see "Here is component1" which is a react component.
