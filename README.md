# Vue js

**Vue.js** is a progressive JavaScript framework for building user interfaces and single-page applications. It is known for its **simplicity**, **flexibility**, and **reactivity**.

- Vue.js follows the *MVVM* architecture, which separates the data (model) from the presentation (view) and provides a ViewModel that mediates between them.

- Vue.js applications are built from reusable components, making them maintainable and scalable.

- Vue.js automatically updates the DOM when the underlying data changes, making it easy to build dynamic and interactive applications.



## Why use Vue.js?

- **Simplicity:** Vue.js is known for its easy-to-learn syntax and gentle learning curve.

- **Flexibility:** Vue.js can be used to build a variety of applications, from simple SPAs (single-page applications) to complex enterprise applications.

- **reactivity:** Vue.js automatically updates the DOM when the underlying data changes, making it easy to build dynamic and interactive applications.

- **Performance:**  Vue.js is lightweight and performant, making it a good choice for resource-constrained devices.



---


        There are two different ways to write code in Vue: 
        The Options API and The Composition API.


- **Options API:**

    - The original and most common way to write Vue components.
    - Organizes component logic into distinct "options" within the component's JavaScript object.

- **Composition API:**    
   
   - Introduced in Vue 3 as a more flexible and scalable way to structure component logic.
   - Utilizes functions and imports to organize code, promoting better reusability and testability.


#### We will learn Vue Js  using Options API for now because it is considered to be more beginner-friendly, with a more recognizable structure.



> We will now learn how we can create our very first Vue web page,

**Step 1: HTML page**

Start with a simple HTML page:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Learn Vue Js</title>
</head>
<body>

</body>
</html>
```

**Step 2: Add a ``<div>`` .**

put a ``<div>`` tag inside ``<body>`` tag with ``id="app"``

```HTML
<body>
  <div id="app"></div>
</body>
```

**Step 3: Add a link to Vue.**

To help our browser to interpret our Vue code, add this ``<script>`` tag.

```HTML
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```


**Step 4: We Will also add our Js file in ``<script>`` tag**

```HTML
 <script src="app.js"></script>
```

---

### We will write our first App in Vue Js.

> lets create a counter App


**Step 1: lets create a templet inside our ``<div>`` tag.**


```HTML
<body>
    <!-- templet -->
  <div id="app">
     <h1>{{counter}}</h1> 
  </div> 
</body>
```
**Step 1: lets create the Root component,  application instance, and view model instsance of component inside our ``app.js`` file.**


```javascript
// Root component options
const options = {
  data() {
    return {
      counter:0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement(){
      this.counter--;
    }
  }
};

// application instance
const app = Vue.createApp(options);

//view model instsance of component
app.mount("#app");

```


## InterPolation

> interpolation is a powerful feature that allows you to dynamically inject data into your HTML templates.

**Syntax:**

Interpolation uses the "**mustache syntax**", which involves double curly braces `{{ }}`. You place these braces around an expression that references your data in the template.

```HTML
<div id="app">
      <h1>{{text}}</h1>
    </div>
```

[View in codes](https://github.com/kantakshay/Vue-js/blob/0fb976bc473a6e17d935a4b318e642a2dadc5f62/Interpolation/Index.html#L11C1-L13C11)

In this example, the `{{ text }}` expression will be replaced with the actual value of the username property defined in your **data object**.

```javascript
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
      const options = {
        data() {
          return {
            text: "Hello Vue Js!!",
          };
        },
      };

      const App = Vue.createApp(options);
      App.mount("#app");
    </script>
```
[View in codes](https://github.com/kantakshay/Vue-js/blob/0fb976bc473a6e17d935a4b318e642a2dadc5f62/Interpolation/Index.html#L18C1-L29C14)



#### Types of interpolation:

- **Text Interpolation:** As shown above, you can interpolate simple text values.

- **Javascript Expression:** You can use more complex expressions within the braces, involving arithmetic . 
```HTML
      <h1>{{2+2}}</h1>
```
*OUTPUT*

        4


- **Raw HTML :** To render HTML code instead of escaping it, use the `v-html` **directive** along with interpolation.


- **Attribute Interpolation:** You can dynamically set element attributes using data expressions and the `v-bind` **directive**.

> we will learn about **directive** later


#### Benefits of interpolation:

- **Reactivity**  Changes in your data are automatically reflected in the UI.
- **Cleaner Templates:** By separating data from presentation, you keep your templates clean and organized.
- **Dynamic Content:**  You can easily create dynamic content like lists, forms, and charts based on your data
