<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Hello-react-front-end <a name="about-project"></a>

**Hello-react-front-end** is the frontend part of a full-stack application built with rails as an api  &react for the front end

Follow this [Link](https://github.com/Peter1907/hello-rails-back-end) for the backend repo

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- React (create-react-app)
- Redux for state management

### Key Features <a name="key-features"></a>

- FullStack Application
- Using React with Rails in different repos

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Basic knowledge of the command line.
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed on your device.
- [Ruby on Rails](https://guides.rubyonrails.org/v5.0/getting_started.html) installed on your device.
- Postgresql Database, you can follow this [link](https://www.postgresql.org/download/), choose your system & follow the provided instructions.
- Node.js installed to use ```npm```

### Setup

- Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone git@github.com:Peter1907/hello-react-front-end.git
```

- Clone the backend repository **IN THE SAME** folder:

```sh
  cd my-folder
  git clone git@github.com:Peter1907/hello-rails-back-end.git
```

### Install

- Navigate to forntend repo & run:
```sh
  npm i
```

- Navigate to the backend repo & run:
```sh
  bundle
```

- Add the "foreman" gem globally using this command:
```sh
  gem install foreman
```
**DON'T ADD THE FOREMAN GEM TO THE GEMFILE**

<hr>

### Usage

To run the project, follow these steps:

- Modify the "database.yml" file to adjust the username & password if needed

- Create database, run migration & populate the database **in the backend cloned repo**
```sh
  rails db:create
  rails db:migrate
  rails db:seed
```
- To run the project in your browser, run:
```sh
  foreman start
```

<hr>

### Run tests

- No tests provided at the moment

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Peter Beshara**

- GitHub: [@Peter1907](https://github.com/Peter1907)
- Twitter: [@Peter_Beshara_](https://twitter.com/Peter_Beshara_)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/peter-beshara-b33681241/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- N/A

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Peter1907/hello-react-front-end/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Microverse for overseeing the project.
- Learning, Resarch & Dedication. 🚀

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
