# AI Call Management Dashboard

A modern, dark-themed admin dashboard built with **React**, **Tailwind CSS**, and **DaisyUI**.
Designed to monitor call activity, AI-handled calls, repair requests, and operational trends with a clean SaaS-style UI.

---

## Features
<img href>
* **Stat Cards**

  * Key metrics (Total Calls, AI Handled Calls, Missed Calls, etc.)
  * Trend indicators with success and error states
  * Gradient icon badges using `react-icons`

* **Call Trends Chart**

  * Visual call history overview
  * Blue to transparent gradient styling

* **Recent Activity**

  * Timeline-based activity feed
  * Status indicators using colored dots:

    * Green: Success
    * Yellow: Warning
    * Red: Error
  * Timestamp displayed under each activity

* **Top Repair Requests**

  * Ranked list of most frequent repair issues
  * Linear gradient progress bars (blue to light blue)
  * Quick visual comparison of request volume

* **Pagination**

  * Center-aligned layout
  * Subtle page buttons
  * Condensed format: `1–5 … last`
  * Previous and Next navigation

---

## Tech Stack

* React (Functional Components)
* Tailwind CSS
* DaisyUI
* React Icons
* Chart library (optional, for trends visualization)

---

## Project Structure

```
src/
├── components/
│   ├── StatCard.jsx
│   ├── RecentActivity.jsx
│   ├── TopRepairRequests.jsx
│   ├── CallTrendsChart.jsx
│   └── Pagination.jsx
├── pages/
│   └── Dashboard.jsx
└── App.jsx
```

---

## Getting Started

1. Clone the repository

   ```
   git clone <repository-url>
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

---

## Design Principles

* Signal over noise
* Subtle visual hierarchy
* Calm, readable dark UI
* Components built for scalability and real data

This dashboard focuses on clarity, usability, and operational awareness.

---

## Future Enhancements

* Live activity updates
* Animated progress indicators
* Dynamic pagination logic
* API integration
* Role-based dashboard views

---

## License

This project is intended for learning and internal use.
You are free to modify and extend it.
