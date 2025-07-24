Demo Component Library

<!-- Or whatever your license is -->

A collection of reusable Vue.js components designed to be easily integrated into your Vue 3 projects.

Table of Contents
Introduction

Installation

Usage

Global Registration (Plugin)

Individual Component Import

Importing Styles

Available Components

Development

Project Setup

Compiles and Hot-Reloads for Development

Compiles and Minifies for Production

Contributing

License

Introduction
This repository contains the source code for the demo-component-library, a Vue.js component library built using Vite's library mode. It provides a set of reusable UI components that can be easily integrated into any Vue 3 application.

Installation
You can install demo-component-library via npm or yarn:

npm install demo-component-library

# OR

yarn add demo-component-library

Usage
This library provides flexible ways to use its components: you can register all components globally as a plugin, or import individual components for better tree-shaking.

Global Registration (Plugin)
This method registers all components from the library globally, making them available throughout your application without needing to import them individually in each component file.

src/main.js (or main.ts) in your Vue application:

import { createApp } from 'vue';
import App from './App.vue';
import DemoComponentLibrary from 'demo-component-library'; // Import the default export
import 'demo-component-library/dist/jh-demo-component-library.css'; // Don't forget to import the styles!

const app = createApp(App);

app.use(DemoComponentLibrary); // Use the library as a plugin

app.mount('#app');

Now you can use HelloWorld and MyButton directly in your templates:

<!-- YourApp.vue -->
<template>
  <div id="app">
    <HelloWorld msg="Welcome to my app!" />
    <MyButton @click="handleClick">Click me!</MyButton>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
}
</script>

Individual Component Import
For better tree-shaking and to only include the components you actually use, you can import them individually.

Any .vue component file in your Vue application (e.g., src/App.vue):

<script setup>
// If using <script setup>
import { HelloWorld, MyButton } from 'demo-component-library';
// Styles should ideally be imported once in your main entry point (e.g., src/main.js)
// import 'demo-component-library/dist/jh-demo-component-library.css'; 
</script>

<template>
  <div id="app">
    <HelloWorld msg="Hello from individual import!" />
    <MyButton @click="handleClick">Individual Button</MyButton>
  </div>
</template>

<script>
// If not using <script setup>
import { HelloWorld, MyButton } from 'demo-component-library';
// Ensure styles are imported globally or once in your main entry point

export default {
  components: {
    HelloWorld,
    MyButton
  },
  methods: {
    handleClick() {
      alert('Individual button clicked!');
    }
  }
}
</script>

Importing Styles
It's crucial to import the library's CSS file into your application. This ensures that the styles (including scoped styles from components) are properly applied.

Add the following line to your application's main entry file (e.g., src/main.js or a global stylesheet that is imported):

// In src/main.js or a similar entry file
import 'demo-component-library/dist/jh-demo-component-library.css';

Available Components
Here's a list of components provided by this library:

HelloWorld: A simple component that displays a message.

Props:

msg (Type: String, Default: 'Hello, Vue Component Library!'): The message to display.

MyButton: A basic button component.

Events:

click: Emitted when the button is clicked.

Slots:

default: Content placed inside the button (e.g., Click Me).

(Feel free to expand this section with more details about props, events, slots, and examples for each component.)

Development
If you wish to contribute to or develop this component library locally, follow these steps:

Project Setup
Clone the repository:

git clone https://your-repo-link.git
cd demo-component-library

Install dependencies:

npm install

# OR

yarn install

Compiles and Hot-Reloads for Development
To work on the components and see changes live:

npm run dev

# OR

yarn dev

(Note: This starts the default Vite development server for the library itself, which usually shows the App.vue example. To test thoroughly in a consumer app, use npm link or npm pack as described below.)

Compiles and Minifies for Production
To build the library for production (outputs to the dist/ folder):

npm run build

# OR

yarn build

After building, you can test the production-ready package by using npm pack and installing the generated .tgz file in another project:

In the library's root (demo-component-library):

npm run build
npm pack

This will create a .tgz file (e.g., demo-component-library-0.1.0.tgz) in your library's root.

In your consuming test application:

npm uninstall demo-component-library # If previously linked or installed
npm install /path/to/your/demo-component-library/demo-component-library-0.1.0.tgz

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.

Create a new branch for your feature or bug fix (git checkout -b feature/your-feature-name).

Commit your changes (git commit -m 'feat: Add new component').

Push to your branch (git push origin feature/your-feature-name).

Create a pull request describing your changes.

License
This project is licensed under the MIT License.
