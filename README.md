# People Counter

A simple React application that allows counting people in two groups: **Students** and **Employees**.
The app demonstrates the concept of **lifting state up** and using **props to control child components**.

## Features

- Count **Students** and **Employees** separately
- Prevent values from going below **0**
- Prevent values from exceeding the **maximum limit**
- Display the **total number of people**
- Reusable counter component

## Concept Demonstrated

### Single Source of Truth

The state for both counters is stored in the **parent component (`App`)**.
Child components (`PeopleCounter`) receive data and functions via props.

This ensures:

- Centralized state management
- Predictable data flow
- Better component reusability

### Lifting State Up

Instead of each counter managing its own state, the state is lifted to the parent component.
The parent then passes:

- the current value (`count`)
- the maximum value (`max`)
- functions to modify the state (`increment`, `decrement`)

## Technologies

- React
- TypeScript
- Functional Components
- React Hooks (`useState`)


## How It Works

1. The **App component** stores the number of students and employees in state.
2. The **PeopleCounter component** receives the values and functions as props.
3. Clicking **+** or **-** triggers functions defined in the parent component.
4. The **total number of people** is calculated dynamically.

## Example Logic

- Maximum number of people per group: **20**
- Minimum value: **0**
- Total = **students + employees**

## Learning Purpose

This project is useful for understanding:

- Controlled components
- State lifting
- Props communication
- Reusable UI components in React

## Possible Improvements

- Add input fields for manual values
- Add reset button
- Add dynamic number of counters
- Persist data in localStorage
