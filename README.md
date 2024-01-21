<div align="center">

  <h1>Exercise: React Testing Lib</h1>

  ### Techs Used

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  
</div>

## Description

This test suite checks the behavior of the React PostComment component, which represents a comment form in an application. The first test ensures that the component is rendered correctly by checking whether the "Comment" button is present in the interface. The second test simulates adding two consecutive comments. It uses the @testing-library/react testing library to interact with DOM elements by entering text in comment fields and clicking the submit button. After adding comments, the test checks whether the number of comment elements rendered is equal to 2, thus validating the correct functioning of the comment addition functionality.

## How to Start the Project

- **Clone the repository:**
```bash
git clone https://github.com/your-username/repository-name.git
```
- **Open the project directory:**
```bash
cd repository-name
```
- **Install project dependencies:**
```bash
npm install
```
- **Start:**
```bash
npm start
```

## Contributing

We welcome and appreciate your contributions to this project! Whether you have suggestions, bug fixes, or new features you'd like to add, please feel free to fork this repository.

### How to Contribute

1. Fork the project.
2. Create a branch for your contribution: `git checkout -b my-contribution`.
3. Make your changes and commit: `git commit -m 'Add my contribution'`.
4. Push to your branch: `git push origin my-contribution`.
5. Open a pull request for review.

## Feedback and Issues

If you have contributions, suggestions, or feedback, feel free to open an issue.
