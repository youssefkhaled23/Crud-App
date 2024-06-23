# CRUD App

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

CRUD App is a web application built with React that demonstrates basic CRUD operations (Create, Read, Update, Delete) using the Context API for state management and MockAPI for backend services.

## Features

- Create new items
- Read and display items
- Update existing items
- Delete items
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend:**
  - React
  - JavaScript (ES6+)
  - HTML5
  - CSS3
- **State Management:**
  - React Context API
- **HTTP Client:**
  - Axios (or fetch API)
- **Backend:**
  - [MockAPI](https://mockapi.io/)

## API

This project uses [MockAPI](https://mockapi.io/) to simulate backend services. You can create your own MockAPI project and get the base URL to use in the application.

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/youssefkhaled23/Crud-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Crud-App
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or if you're using Yarn:
   ```bash
   yarn install
   ```

### Setting Up the API URL

1. Create a `.env` file in the root directory of the project.
2. Add your MockAPI base URL to the `.env` file:
   ```
   REACT_APP_API_URL=https://your-mockapi-url.com
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
   or with Yarn:
   ```bash
   yarn start
   ```
2. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Creating an Item:**
   - Navigate to the "Add Item" page.
   - Fill in the item details and submit.

2. **Reading Items:**
   - The homepage displays a list of all items fetched from the API.

3. **Updating an Item:**
   - Click on the edit icon next to an item.
   - Modify the details and submit the form.

4. **Deleting an Item:**
   - Click on the delete icon next to an item to remove it.

## Project Structure

```
crud-app/
├── public/
├── src/
│   ├── components/
│   │   ├── ItemForm.js
│   │   ├── ItemList.js
│   │   └── ...
│   ├── context/
│   │   ├── AppContext.js
│   │   └── AppReducer.js
│   ├── pages/
│   │   ├── AddItem.js
│   │   ├── EditItem.js
│   │   ├── Home.js
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Author:** Youssefkhaled
- **Email:** khaledalsbaa2@gmail.com
- **GitHub:** [youssefkhaled23](https://github.com/youssefkhaled23)

---

Feel free to customize this template according to your specific project details, such as adding any additional features, dependencies, or instructions relevant to your CRUD application.
