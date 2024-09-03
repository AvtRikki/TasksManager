
# Tasks Manager

**Tasks Manager** is a web application built using Next.js, TypeScript, and Tailwind CSS. It provides a simple and efficient way to manage and track tasks.

## Project Structure

- **app/**: Contains the core application files, including pages and components.
- **public/**: Houses static assets such as images and icons.
- **prisma/**: Manages database schemas and migrations using Prisma ORM.
- **styles/**: Tailwind CSS configuration and custom styles.
- **.env**: Environment variables for configuration.
- **middleware.ts**: Middleware for handling requests.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Prisma](https://www.prisma.io/)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:AvtRikki/TasksManager.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd TasksManager
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```

### Running the Project

1. **Apply Migrations and Update Database**:
   ```bash
   npx prisma migrate dev
   ```
2. **Start the Development Server**:
   ```bash
   npm run dev
   ```

The application will be hosted on `http://localhost:3000/`.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
