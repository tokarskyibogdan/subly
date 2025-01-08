# Subly Frontend Test

### Some code/architecture decisions

1. I split up the projects code into smaller components to make them more reusable and easier to maintain.
2. I used a combination of MUI components and custom components to build the UI demonstrating the ability to use both (
   MUI for primitives like: Buttons, Multiselect & Icons, etc. Custom SASS modules for complex css logic).
5. The Deployment is done using GitHub pages with command `npm run deploy` and can be eventually automated via CI/CD
   pipeline.
6. To demonstrate code quality understanding, I added ESLint and Prettier to the project, it's also can be added to the
   CI/CD pipeline.
7. I used React hooks to manage the state and side effects instead of global storage like Redux or MobX for simplicity
   in that specific case.
8. While thinking of the requirements, I decided to use pagination for the list of items, to make it more user-friendly
   and to avoid loading all the items at once, I personally prefer in such cases server side pagination to avoid loading
   all the data at once. We can also use virtualized lists to make it more performant to render large lists.
9. To prevent UI breaks I predicted long titles in the Media names and used ellipsis for that case.
10. I checked the existing Subly application and noticed that it doesn't have a responsive design, I didn't focus on it
    too much but added some initial responsiveness for UI, so it looks fine on mobile devices.
11. I used The media Images as a background image, to prevent the image from blocking page rendering and to make it more
    performant.
12. I added some placeholders to various scenarios like "loading", "empty list" & "no matching results" to make the user
    experience better.
13. Added filters to the list of media to make it more user-friendly and to make it easier to find the desired media.
14. In terms of Languages amount on cards I went a bit beyond the requirements and added flags as indication of existing
    languages as implemented on current Subly application.
15. To handle query errors I added a simple error handling with a debug message to the console but also can be done for users.
16. During the development I used Chrome, Safari & Firefox to check the compatibility and make sure the application works
    fine on all of them.

### Tests

I added initial tests to demonstrate unit testing with Jest.
Testing the small component & util functions.

To run the tests use command: `npm run test`.

In addition and for complex components, I would add e2e tests with Cypress or Playwright.

### How to run the project

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How to deploy the project

1. Checkout to the main branch (or any other branch you want to deploy)
2. Run `npm run deploy`
2. Open [https://tokarskyibogdan.github.io/subly/](https://tokarskyibogdan.github.io/subly/) to view it in the browser.
3. The deployment action can be found on the repo details [page](https://github.com/tokarskyibogdan/subly/deployments)

### How to run quality checks

1. Run `npm run check:lint` to check the code style
2. Run `npm run lint-fix` to fix the code style issues
3. Run `npm run check:format` to check the code formatting
4. Run `npm run reformat` to format the code

PS: The project was created using Create React App and TypeScript as per the requirements. To eject the project and have
more control over the configuration, you can run `npm run eject`. Despite that I'm quite familiar with Vite and Next.js,
as well as configuring Webpack from scratch.
