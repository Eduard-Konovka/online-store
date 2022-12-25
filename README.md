# Web application of a book online store (course project)

A single-page web application of a simple online store that allows you to select
the necessary product from the proposed range in the right quantity with
automatic calculation of the order amount.

## Завдання проєкту: [Ciklum - Курсовий проєкт - Книжковий інтернет-магазин](https://github.com/Eduard-Konovka/FEB101-course-task/Ciklum_Курсовий_проєкт__Книжковий_інтернет-магазин_.pdf)

The project was created using the "React" framework in combination with the
"Node.js" back end on the basis of a server on the "Express" framework connected
to the "MongoDB" database.

The web server project is located
[here](https://github.com/Eduard-Konovka/eliftech-school--delivery-app-api).

## Application launch instructions

This app uses a back end server at
[https://delivery-app-eduard-konovka.herokuapp.com](https://delivery-app-eduard-konovka.herokuapp.com).

Accordingly, the REACT_APP_URL environment variable equal to
https://delivery-app-eduard-konovka.herokuapp.com is used as the base URL for
accessing the API.

- The `/api/shops` endpoint is used to get the list of stores
- The `/api/products` endpoint is used to get the list of stores
- The `/api/orders` endpoint is used to send orders

## Script commands in console:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run deploy`

Deploy development files to Netlify.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.
