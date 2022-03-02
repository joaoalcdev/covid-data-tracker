<div align="center">
  <h1>
    <p text-align="">Covid - Data Tracker Forecast</p> <img alt="Logo" height="80" title="Plant Manager" src="https://marianazorron.com.br/site/wp-content/uploads/2020/04/corona-4931132_1280.png" /> 
  </h1>
</div>

<p align="center">
  <img 
    src="https://img.shields.io/cocoapods/l/m?color=%23000000&label=license&logo=license&logoColor=%23ffffff" 
    alt="License" 
  />
  <img 
    src="https://img.shields.io/badge/Tests-Total%3A%207%20%7C%207%20%E2%9C%85%20%7C%200%20%E2%9D%8C%20%7C-%23000000"
    alt="Tests" 
   />
</p>

## 📷 Demonstration:

<div align="center">
  <h1 align="center">

[Click here](https://youtu.be/xZ-4Mbft59Q) to watch the project demo video.

<img 
    src="./assets/cover.gif?style=flat"
    alt="Cover Project" 
  />

  </h1>
</div>

## 💻 Project:

Application developed to have a basis to predict a possible contagion of covid during the next few days.

## 🔺 NOTE:

In case the application does not show results, please check the latest data entry data on the website: [ourworldindata](https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=2020-03-01..latest&facet=none&pickerSort=asc&pickerMetric=location&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Color+by+test+positivity=false&country=USA~GBR~CAN~DEU~ITA~IND)
The site must present data that is a given day unless it is our current one.
Example: 
- Last dice roll (2022-02-09).
- Current date (2022-02-10).

- 🔺 | Commits inserted at once without modification, were automatically developed and tested on localhost using terminal interface with Node.Js and tested with Jest.


## :hammer_and_wrench: Features:

- [x] OurWolrdInData API's Covid19.
- [x] Connection to OurWolrdInData Covid19 Database;
- [x] Node.js application console input;
- [x] Node.js application result on console;
- [x] Covid 19 contagion forecast in the world.

## ✨ Technologies:

- [x] Javascript
- [x] Node.js
- [x] Yarn
- [x] Jest
- [x] Axios
- [x] Dayjs
- [x] Readline Sync

## ⌛️ Times destined for Application times:

- Total hours since the first folder was created ≅ 35 hours, 0 minutes.
- Total hours worked on the project ≅ 25 hours, 0 minutes.
- Total hours worked directly ≅ 8 hours, 20 minutes with intervals of two to three hours.

## 🔨 Architecture and Infrastructure for the Project:

- Architecture:
  I would choose serverless as a viable option for this job. I would use a 'Function as a Service' (FaaS) like AWS Lambda. Serverless is a software and application design approach that allows developers to create and run services without having to manage and "configure" the work environment, as serverless as a cloud provider can predict and configure servers for future execution of their applications. , database and cloud storage systems as a function of scale.

- Infrastructure:
  An application's infrastructure is based on performance, user experience, user interface experience, and structuring. Given this, a current application infrastructure would have a graphical interface for a better experience and usability of the system, thus improving the user experience. So for that, the interface would call a serverless function that can serve, Cloud Functions or Lambda Functions with a cache like a Redis, for example, for in-memory data. We can use React.Js or Next.Js and Node.js with libraries to create graphs with the result values entered and executed in the backend by the APIs. Hosting by Vercel is interesting, as the platform creates and configures the serverless environment. I would use centry to capture possible errors that can happen in the application and together with that, we could use Jest to create automated testing services and code verification.

## ⚙️ Running the project:

Use **yarn** or **npm install** to install project dependencies.
Then start the project.

After installing the dependencies, use

```cl
yarn start
```

or

```cl
npm init
```

## 📄 License

This project is under MIT license. See the file [LICENSE](./LICENSE) for more details.

<br />

---

Made with 🤍 by [João Alcântara](https://github.com/joaoalcdev) 👋🏻
