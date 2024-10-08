# DevOverflow

DevOverflow is a sophisticated platform inspired by the functionality of StackOverflow. It provides developers with a space to ask and answer questions, interact with a community, and manage their personal collections of questions and tags. The platform offers various features such as a light/dark mode toggle, a badge system, and a customizable profile page, all aimed at enhancing the user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Code Quality](#code-quality)
- [Contact](#contact)

## Features

### Home Page

![Home Page](./constants/screenshots/homepage_dark.png) ![Home Page](./constants/screenshots/homepage_light.png)

- **Sign Up/Sign In**: Users can create an account or log in using their credentials.
- **Search**: Search for questions locally within the any page.
- **Filters**: Sort questions by "Newest", "Recommended", "Frequent", "Unanswered".
- **Light/Dark Mode**: Switch between light and dark themes.

### Ask-a-Question Page

![Ask a question](./constants/screenshots/ask_question_dark.png)

- **Post Questions**: Users can ask questions and provide detailed descriptions.
- **Answer Questions**: Users can contribute by answering others' questions.
- **Tags**: Add relevant tags to questions and answers.
- **Search**: Perform both local and global searches.
- **Code Blocks**: Support for code snippets in any programming language.

### Community Page

![Community Page](./constants/screenshots/community_page_dark.png)

- **User Search**: Search for active users on the platform.
- **Filters**: Filter users by "New Users", "Old Users", "Top Contributors".

### Collections Page

![Collections Page](./constants/screenshots/collections_page_dark.png)

- **Saved Questions**: View and manage a list of all questions saved by the user.

### Tag Page

![Tag Page](./constants/screenshots/tag_page_dark.png)

- **Tag Management**: View and manage the tags the user has used.

### Profile Page

![Profile Page](./constants/screenshots/profile_page_dark.png)

- **Profile Editing**: Customize personal information and settings.
- **Badges System**: Earn Bronze, Silver, or Gold Badges based on platform activity.
- **Popular Content**: View currently popular questions and tags.

## Technologies Used

- **Next.js**: Frontend framework for server-side rendering and static site generation.
- **MongoDB & Mongoose**: Database and ODM for managing and interacting with data.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strict syntactical superset of JavaScript.
- **Clerk**: Authentication service for secure user sign-up and sign-in.
- **Various Third-Party Libraries**: Small libraries for additional functionalities.

## Installation

To get started with DevOverflow, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Yazid04/stack_overflow_nextjs.git
   cd DevOverflow
   ```

2. **Install dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Environment Variables**:
   Create a `.env.local` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the variables needed.

4. **Run the application**:
   For development:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```
   or
   ```bash
   yarn build
   yarn start
   ```

## Usage

After installation, you can access the application locally via `http://localhost:3000`.

- Navigate to the **Home Page** to explore and search for questions.
- Use the **Ask-a-Question** page to post your queries.
- Check the **Community** page to connect with other developers.
- Visit the **Collections** page to manage your saved content.
- Use the **Tag** page to manage your tags.
- Go to the **Profile** page to update your personal information and track your badges.

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature/your-feature`).
3. **Commit** your changes (`git commit -m 'Add some feature'`).
4. **Push** to the branch (`git push origin feature/your-feature`).
5. **Open a Pull Request**.

Please ensure your code adheres to the project's coding standards and passes all tests.

## Code Quality

The project prioritizes easy-to-scale, reusable, and clear code. Ensure to:

- Write meaningful commit messages.
- Follow best practices and coding standards.
- Keep the codebase clean and well-organized.

## Contact

For any inquiries or feedback, feel free to reach out at [yazidramadan04@gmail.com].
