# Todo App (React + Context API + Local Storage)

## Overview

This project is a Todo List Application built using React.

It demonstrates core React concepts:

- State Management (useState)
- Side Effects (useEffect)
- Global State (Context API)
- Controlled Components
- Local Storage Persistence

The app allows users to:

- Add todos
- Edit todos
- Delete todos
- Mark todos as completed
- Save todos in browser (localStorage)

---

## Core Logic

### Global State (Context API)

We use Context API to manage global data.

- createContext() creates global store
- Provider wraps the app
- useContext() accesses data

---

### State Structure

Todos are stored as an array of objects:

```js
{
  id: number,
  toDo: string,
  completed: boolean
}
````

---

### Add Todo

- Adds new todo at the beginning of array
- Uses Date.now() for unique ID
- Uses spread operator

---

### Update Todo

- Uses map()
- Replaces only matched todo
- Keeps others unchanged

---

### Delete Todo

- Uses filter()
- Removes matched todo by ID

---

### Toggle Completed

- Flips completed value (true/false)
- Uses spread operator to update object

---

### Local Storage

#### Load Data (on start)

- useEffect runs once
- Loads todos using JSON.parse()

#### Save Data (on change)

 Runs when todos change
 Saves using JSON.stringify()

---

### Controlled Form

 Input is controlled using useState
 Prevents page reload using e.preventDefault()
 Clears input after submission

---

### Todo Item Features

 Edit todo
 Delete todo
 Mark as completed
 Disable editing when completed

---

## Important Concepts

 useState for state management
 useEffect for side effects
 Context API for global state
 map() for updating items
 filter() for deleting items
 Spread operator for object updates
 Controlled inputs for forms
 LocalStorage for persistence

---

## Important Notes

 Do not mutate state directly
 Always use map() or filter() for updates
 Context API prevents prop drilling
 JSON.stringify() is used to store data
 JSON.parse() is used to retrieve data

---

## Folder Structure

``
src/
  components/
    TodoForm.jsx
    TodoItem.jsx

  contexts/
    TodoContext.js

  App.jsx
  main.jsx
``

---

## Summary

This project demonstrates:

- CRUD operations in React
- Global state management using Context API
- Data persistence using localStorage
- Clean and scalable component structure

This is a beginner to intermediate level React project.
