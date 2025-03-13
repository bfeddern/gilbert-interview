# Town of Gilbert Events

The Town of Gilbert Events app is a Node/React/[Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Technical Details

The production site utilizes AWS.
- Hosting: AWS Amplify
- DNS: Route 53

AWS Amplify is connected to the GitHub repo.  Upon pushing to the `main` branch, the application will provision, then build, then deploy.



## Getting Started

This assumes that  Node (current version tested: v22.14.0) and npm (current version tested: v10.9.2) are installed locally.

Once the repo is pulled to your local environment, make sure all the application packages are installed locally. Navigate to the directory where the code lives, and run the following:
```bash
npm install
```

Once the required packages are installed, run the following to run the application locally using the development server:
```bash
npm run dev
```
Once the dev server has started, open [http://localhost:3000](http://localhost:3000) in your browser of choice to see the site.

---

## Testing Application

In order to test components, [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) have been installed. 

To run the full suite of unit tests, use the following:
```bash
npm run test
```

To run a specific unit test, use the following:
```bash
npm test -- event.test.js
```
Make sure to change `event.test.js` to the test file of the component you want to test.

To find out the code coverage provided by the tests, use the following:
```bash
npm run coverage
```


In order to make sure the code isn't awful, ESLint is also incorporated into this project.  ESLint is a tool for identifying and reporting on patterns found in JavaScript code, with the goal of making code more consistent and avoiding bugs.
```bash
npm run lint
```

---


## Project ToDo List

This project is very much a work-in-progress.  There are still several outstanding things that need to be done before this experiment is production-ready.  Beyond that, there are some "nice to have" things, too.

### Required ToDo
1. Add unit tests for pages
1. Add more eslint rules
1. Create end-to-end tests with Cypress
1. Create error handler/page
1. Accessibility Audit
1. Event filtering
1. Add Google Tag Manager (GTM)
1. Add Google Analytics (GA4)


### Nice-To-Have ToDo
1. SEO improvements/research
1. Dynamic sitemap
1. Create Customer Journey Maps
1. Implement microtransactions on the card buttons
1. Incorporate GA4 Event Tracking on all button clicks

