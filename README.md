# Web application of a book online store (course project)

A single-page web application of an online bookstore that allows you to filter
the selection of books with automatic calculation of the order amount.

The web application is implemented according to the "Mobile First" strategy with
an adaptive-responsive layout with the following breakpoints:

- 320 px - for smartphones with a screen width of 200...320 px;
- 420 px - for smartphones with a screen width of 320...420 px;
- 800 px - for tablets with a screen width of 420...800 px;
- 1024 px - for desktop computers or laptops with a screen width of 800...1024
  px;
- 1600 px - for desktop computers or laptops with a screen width of 1024...1600
  px;
- default value - for desktop computers, laptops, TVs, projectors with a screen
  width of more than 1600 px.

## Tasks of the project: [Ciklum - Курсовий проєкт - Книжковий інтернет-магазин](https://github.com/Eduard-Konovka/feb101-course-task/blob/main/Ciklum_%D0%9A%D1%83%D1%80%D1%81%D0%BE%D0%B2%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82__%D0%9A%D0%BD%D0%B8%D0%B6%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD_.pdf)

The project was created using the "React" framework in combination with the
"Node.js" back end on the basis of a server on the "Express" framework connected
to the "MongoDB" database.

The web server project is located
[here](https://github.com/Eduard-Konovka/feb101-course-task-api).

## Application launch instructions

This app uses a back end server at
[https://feb101-course-task-api-eduard-konovka.onrender.com](https://feb101-course-task-api-eduard-konovka.onrender.com).

Accordingly, the REACT_APP_URL environment variable equal to
https://feb101-course-task-api-eduard-konovka.onrender.com is used as the base
URL for accessing the API.

- The `/api/books` endpoint is used to get the list of books
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
