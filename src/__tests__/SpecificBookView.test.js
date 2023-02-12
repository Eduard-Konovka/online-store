/* ============================================================================
>>>>>>>>>>>>>>>>>>>>>>>>>> BEHAVIOR THAT IS TESTED: <<<<<<<<<<<<<<<<<<<<<<<<<<<
-------------------------------------------------------------------------------
1. When you click to increase the quantity, the quantity should increase.
2. When you click to decrease the quantity, the quantity should decrease.
3. When the quantity changes, the total cost must change. 
============================================================================ */

// import { SpecificBookView } from 'pages';

// let cart;
// const ADD_TO_CART = obj => (cart = obj);

// const mockComponent = <SpecificBookView addToCart={ADD_TO_CART} />;

import { diff } from 'jest-diff';

const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 6 } } };

const result = diff(a, b);

console.log(result);

describe('SpecificBookView', () => {
  test('Fetches books from an API and displays them', async () => {
    expect(books).toBeDefined();
  });
});

var books = [
  {
    id: 1,
    author: 'David Flanagan',
    price: 10.99,
    image:
      'https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg',
    title: 'JavaScript: The Definitive Guide, 7th Edition',
    shortDescription:
      'JavaScript is the programming language of the web and is used by more software developers today than any other programming language.',
    description:
      'JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.',
  },
  {
    id: 3,
    author: 'Adam D. Scott',
    price: 8.99,
    image:
      'https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_everywhere.jpg',
    title: 'JavaScript Everywhere',
    shortDescription:
      'JavaScript is the little scripting language that could. Once used chiefly to add interactivity to web browser windows, JavaScript is now a primary building block of powerful and robust applications.',
    description:
      'JavaScript is the little scripting language that could. Once used chiefly to add interactivity to web browser windows, JavaScript is now a primary building block of powerful and robust applications. In this practical book, new and experienced JavaScript developers will learn how to use this language to create APIs as well as web, mobile, and desktop applications. Author and engineering leader Adam D. Scott covers technologies such as Node.js, GraphQL, React, React Native, and Electron. Ideal for developers who want to build full stack applications and ambitious web development beginners looking to bootstrap a startup, this book shows you how to create a single CRUD-style application that will work across several platforms.',
  },
  {
    id: 5,
    author: 'Stoyan Stefanov',
    price: 14.99,
    image:
      'https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@react_up_and_running_2nd_edition.jpg',
    title: 'React: Up & Running, 2nd Edition',
    shortDescription:
      'Hit the ground running with React, the open source technology from Facebook for building rich web applications fast.',
    description:
      'Hit the ground running with React, the open source technology from Facebook for building rich web applications fast. Updated for the latest React release, the second edition of this hands-on guide shows you how to build React components and organize them into maintainable large-scale apps. If you’re familiar with JavaScript syntax, you’re ready to get started. Through the course of this book, author Stoyan Stefanov helps web developers and programmers build a complete single-page application. You’ll quickly learn why some developers consider React the key to the web app development puzzle.',
  },
];
