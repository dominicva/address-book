# Address Book

Practicing JS ES6 OOP including

- **class** syntax
- inheritance with **extends** and **super**
- **static** properties and methods
- lexical scoping of 'this' assignment with **arrow functions**

## Run on your local machine

1. Get the code
2. If you don't have Parcel installed globally, run npm install -g parcel-bundler
3. Run npm install
4. Run parcel index.html to get dev build and localhost dev server. That's it :)

## A few details

1. The majority of classes inherit from Component. Note the **this.domEl** property which gets initialised when a component instance renders.
2. Component has an empty method **initEventListeners** which gets called when a component renders. Component subclasses override initEventListeners with their specific event listener needs.
3. The App class contains the static properties and methods that bring everything together.
