# Frontend for my Credit Simulation API

## About the Project

This is the a project of a Frontend for my Credit Simulation API. It consumes the RESTful API (.NET 8) to process financial calculations and displays the results in an intuitive and interactive manner.

Development focused on creating reusable components, strict typing for development safety, and a fluid User Experience (UX).

### Key Features

* **Real-Time Simulation:** Interactive form for Value and Term input with field validation.
* **Data Visualization:**
    * Clear display of calculated installments (Price and SAC tables).
    * Financial summary (Total Interest, Total Paid Amount).
* **Simulation History:** Listing of simulations persisted in the backend.
* **Design System:** Modular styling using **Styled Components**, ensuring CSS scope isolation and maintainability.
* **Responsiveness:** Adaptive layout for Desktop and Mobile devices.

---

## 🛠️ Tech Stack

* **Core:** React 18 (Hooks, Context API)
* **Language:** TypeScript (Strict Mode enabled)
* **Styling:** Styled Components (CSS-in-JS)
* **HTTP Communication:** Axios (with interceptors for error handling)
In this project I'm using REACT + TS

To run this project, first things first, run my [Credit Simulation API](https://github.com/LeonardoGarciaMelo/Credit-Simulation-API), then run:
```
npm run dev
```
