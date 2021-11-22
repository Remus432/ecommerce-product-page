# Frontend Mentor - E-commerce Product Page (React+Redux)

![Design preview for the Todo app
 coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Today's challenge was building this clean and minimalist Ecommerce product page. It's the first React project I've build using the most recent version of React Redux and Redux.

[Live Site](https://ecommerce-product-page-five.vercel.app/)

## Technologies Used

* **HTML5**
* **SCSS**
* **React**
* **Redux**
* **React Redux**


* **

## Development

The project offers a seemingly simple design to code. Since it had multiple features that concerned the rendering of the UI, I decided to implement Redux and connect it to React using the React Redux library. 

If you've used the Context API, then you'll find Redux not entirely alien. It shares similar paradigms, mainly the data flow. 

Given we have:
* Image gallery - carousel slider on mobile and lightbox on desktop
* Product quantity input
* Add to cart button
* Cart notification 
* Cart modal
* Mobile menu

I figured it's best to split them into three groups and use separate pieces of states that can then be combined into one overarching state in the Redux store. Therefore, maintaining a coherent data structure and an organized code structure becomes much more easy.

If you're only starting out with React and Redux, I suggest checking out the **[documentation](https://react-redux.js.org/introduction/getting-started)**

It's easy to follow, presents the theory in a digestable manner, and offers solid examples on how to get started with your first React-Redux project.

Coding out the UI itself was an incredibly pleasant experience. I had the change to practice with some more SCSS best practices and improve the maintanabiliy and reusability of my code.

In retrospect, I found that implementing the different reducers was one of the most challenging tasks. After a few failed attemps, I was able to get a better grasp of how Redux and the reducers work. Thus, I managed to pick up the pace afterwards and successfuly finish the rest of the feature implementation.

Both the lightbox and slider galleries were manually built. Yes, I "reinvented the wheel". I wanted to challenge my React and Redux skills by manually building those components instead of just using a third-party library.

All in all, this was a fun project that I enjoyed from beginning to end. I recommend you give it a shot. Don't be scared by the number of features you have to implement. Before coding, think about how you want your UI and data to be structured. It'll be much easier to build off of that.
 
* **

You can join this and many other challenges on [Frontend Mentor](https://www.frontendmentor.io/)

## My work

You can find more challenges that I've completed [here](https://www.frontendmentor.io/profile/Remus432)