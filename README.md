# Boilerplate & Starter for NextJS, TypeScript and Redux Toolkit

An Opinionated Next Starter Template with DX focus, Customize-First, Predictable Pattern, easy to Maintain & Scale codebase that can get you started immediately! Most suitable for medium-sized projects!

## Why again ?
Having the nightmare working on spaghetti frontend, We have developed few opinions on how the codebase can much easy on the eyes

- Avoid bloated .tsx, 100 lines of should be maximum
- Single JSX file should only export single component, with exception of styling
- Avoid having className and styles in JSX
- Avoid having JavaScript in JSX (except for rendering logics)
- Have a consistent way of managing state by having everything in Redux Store
- Meaningful name the variable, component and hooks
- Use custom hook to refactor logics
- Identify which is base component and feature components(modules) 
- Clean & Less Imports
- Many More...

Aside to that, there's a rise of developer productivity tool on horizon that could speed up development even more. So, we're keeping this up to date!

## Features
Main Stacks:
- 🔥 Next.js for Static Site Generator, Server Side Rendering & built-in Routing System
- 🥽 Type Safe with TypeScript
- ⚛ Redux Toolkit + Saga for predictable state management
- 🎨 Styled Component, avoid className at all cost

Speed up the development with:
- 💧 Plop CLI Code generator for Redux Store, Modules, Test and Pages
- 🎭 JSON-Server is awesome for mocking up backend 
- 🍦 React-Icons should suffice
- 🏠 Absolute Imports

Things We Already Done For You:
- 💼 Redux Store for User and Todo. It's already wrapped for SSR too.
- 💡 Styled Component Global Style and Theme Configuration for light and dark theme
- 📜 A generic home-page with Nav, Main and Footer
- 🏃‍♀️ Concurrently that runs both Next & JSON-Server on development mode
- ✅ Todo App Example to showcase Redux, Redux-Saga, JSON-Server
- ✒ Roboto font

## Folder Structure
Here comes the opinionated part.
```
├── .plop-templates							# Folder for Plop Code Templates
├── plopfile.mjs							# plop CLI execution
├── json-server								# Folder for mockup json.db
├── src				
│	├── hooks								# General purpose reusable hooks
│	├── components							# Basic & totally reusable components
│	│	├── Forms							# Home for forms and controls components
│	│	├── Typography						#  Home for typography components
│	│	├── Layout							# Home for layout component
│	│	└── Icons							# Home for icon component
│	├── modules								# A Reusable Feature composed of multiple components
│	│	├── Navbar							# Example for Navbar
│	│	└── Footer							# Example for Footer
│	├── services							# Collection of API calls
│	├── store								# Redux Store 
│	│	├── todo							# Example for Todo
│	│	│	├── todo.initialState.ts		# todo store's initialState
│	│	│	│	├── todo.saga.ts			# todo sagas (API calls & side effects)
│	│	│	├── todo.selector.ts			# todo list of selector
│	│	│	│	├── todo.slice.ts			# todo slice and reducer functions
│	│	│	│	└── todo.types.ts			# todo types
│	│	│	├── user						# Example for User, same file pattern as todo
│	│	│	└── index.ts					# store configuration
│	├── styles								# no component here, only themes and style provider 
│	│	├── themes							# Customize/add more themes here
│	│	│	├── light.ts					# todo store's initialState
│	│	│	├── dark.ts						# todo sagas (API calls & side effects)
│	│	└── GlobalStyles.tsx				# Customize your global styles here
│	└── utils								# collection of utilities 
├── public									# All the public resource from image, gif, files, to font
├── .env.sample								# share with your team how .env.local looks like
```

## Getting Started
Run the following command on your local environment, preferably, use yarn :

```
git clone --depth=1 https://github.com/ibrahimyaacob92/miy-next-boilerplate.git my-project-name
cd my-project-name
yarn install
...
yarn dev
```

## Inspiration
Inspired by all the other React & Next Boilerplate out there
