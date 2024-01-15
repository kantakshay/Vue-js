# Vue js

**Vue.js** is a progressive JavaScript framework for building user interfaces and single-page applications. It is known for its **simplicity**, **flexibility**, and **reactivity**.

- Vue.js follows the _MVVM_ architecture, which separates the data (model) from the presentation (view) and provides a ViewModel that mediates between them.

- Vue.js applications are built from reusable components, making them maintainable and scalable.

- Vue.js automatically updates the DOM when the underlying data changes, making it easy to build dynamic and interactive applications.

## Why use Vue.js?

- **Simplicity:** Vue.js is known for its easy-to-learn syntax and gentle learning curve.

- **Flexibility:** Vue.js can be used to build a variety of applications, from simple SPAs (single-page applications) to complex enterprise applications.

- **reactivity:** Vue.js automatically updates the DOM when the underlying data changes, making it easy to build dynamic and interactive applications.

- **Performance:** Vue.js is lightweight and performant, making it a good choice for resource-constrained devices.

---

        There are two different ways to write code in Vue:
        The Options API and The Composition API.

- **Options API:**

  - The original and most common way to write Vue components.
  - Organizes component logic into distinct "options" within the component's JavaScript object.

- **Composition API:**
  - Introduced in Vue 3 as a more flexible and scalable way to structure component logic.
  - Utilizes functions and imports to organize code, promoting better reusability and testability.

#### We will learn Vue Js using Options API for now because it is considered to be more beginner-friendly, with a more recognizable structure.

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

**Step 2: Add a `<div>` .**

put a `<div>` tag inside `<body>` tag with `id="app"`

```HTML
<body>
  <div id="app"></div>
</body>
```

**Step 3: Add a link to Vue.**

To help our browser to interpret our Vue code, add this `<script>` tag.

```HTML
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

**Step 4: We Will also add our Js file in `<script>` tag**

```HTML
 <script src="app.js"></script>
```

---

### We will write our first App in Vue Js.

> lets create a counter App

**Step 1: lets create a templet inside our `<div>` tag.**

```HTML
<body>
    <!-- templet -->
  <div id="app">
     <h1>{{counter}}</h1>
  </div>
</body>
```

**Step 1: lets create the Root component, application instance, and view model instsance of component inside our `app.js` file.**

```javascript
// Root component options
const options = {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};

// application instance
const app = Vue.createApp(options);

//view model instsance of component
app.mount("#app");
```

---

## Interpolation

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

_OUTPUT_

        Hello Vue Js!!

#### Types of interpolation:

- **Text Interpolation:** As shown above, you can interpolate simple text values.

- **Javascript Expression:** You can use more complex expressions within the braces, involving arithmetic .

```HTML
      <h1>{{2+2}}</h1>
```

_OUTPUT_

        4

- **Raw HTML :** To render HTML code instead of escaping it, use the `v-html` **directive** along with interpolation.

- **Attribute Interpolation:** You can dynamically set element attributes using data expressions and the `v-bind` **directive**.

> Note: we will learn about **directive** later

#### Benefits of interpolation:

- **Reactivity** Changes in your data are automatically reflected in the UI.
- **Cleaner Templates:** By separating data from presentation, you keep your templates clean and organized.
- **Dynamic Content:** You can easily create dynamic content like lists, forms, and charts based on your data

---

## Directives

In Vue.js, directives are powerful tools that let you manipulate the DOM and conditionally render content based on data changes. They essentially provide instructions for Vue to do things in a specific way within your templates.

Vue directives are special HTML attributes with the prefix `v-` that give the HTML tag extra functionality.

Vue directives connect to the Vue instance to create dynamic and reactive user interfaces.

### Different Vue directives

**The different Vue directives we use are listed below.**

| Directives | Details                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`V-bind`](https://github.com/kantakshay/Vue-js/blob/8aa9b91d99261e0c6d9231d93b21a98d147d985d/Directive/Index.html#L15C2-L22C11)   | Connects an attribute in an HTML tag to a data variable inside the Vue instance.                                                                           |
| `V-html`   | It's used to dynamically insert raw HTML content into an element's innerHTML.                                                                              |
| `V-once`   | Renders an element and its children only once, during the initial component render.                                                                        |
| `V-if`     | Creates HTML tags depending on a condition. Directives `v-else-if` and `v-else` are used together with the `v-if` directive.                               |
| `V-show`   | Specifies if an HTML element should be visible or not depending on a condition.                                                                            |
| `V-for`    | Creates a list of tags based on an array in the Vue instance using a for-loop.                                                                             |
| `V-on`     | lets you bind event listeners to HTML elements. It's a powerful tool that can be used to add interactivity to your Vue applications                        |
| `v-model`  | Used in HTML forms with tags like `<form>`, `<input>` and `<button>`. Creates a two way binding between an input element and a Vue instance data property. |

---

### `V-bind` Directive

The `v-bind` directive lets us bind an HTML attribute to data in the Vue instance. This makes it easy to change the attribute value dynamically.

**Syntax**

```HTML
<div v-bind:[attribute]="[Vue data]"></div>
```

**Example**

> The `src` attribute value of an `<img>` tag is taken from the Vue instance data property `'url'`

```HTML
<img v-bind:src="url" alt="">
```

```javascript
  data() {
    return {
            url:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    };
  },
```


### Bind style

In-line styling with Vue is done by binding the style attribute to Vue with `v-bind`.

> As a value to the `v-bind` directive, we can write a JavaScript object with the CSS property and value:

**Example**

> The font size depends on the Vue data property 'size'.

```HTML
      <h1 v-bind:style="{fontSize: size}">{{text}}</h1>
```

```javascript
 data() {
    return {
      text: "Hello Vue Js  Directive!!",
      size: '28px',
    };
  },
```

> The color is set with a JavaScript conditional `(ternary) expression` depending on whether the `'isTrue'` data property value is `'true'` or `'false'`.

```HTML
      <h1 v-bind:style="{color:isTrue? 'green': 'red'}">v-bind</h1>
```

```javascript
 data() {
    return {
       text: "Hello Vue Js  Directive!!",
      size: '28px',
      isTrue: true,
    };
  },
```

### Bind class
We can use `v-bind` to change the class attribute.

The value of `v-bind:class` can be a variable:

>The `class` name is taken from the 'className' Vue data property:



**Example**

> The font size depends on the Vue data property 'size'.

```HTML
      <h1 v-bind:class="className">v-bind:class</h1>
```

```javascript
 data() {
    return {
      className: "myClass",
    };
  },
```

```CSS
   .myClass{
            color: aquamarine;
            font-size: 50px;
        }
```

https://github.com/kantakshay/Vue-js/blob/8aa9b91d99261e0c6d9231d93b21a98d147d985d/Directive/Index.html#L15C2-L22C11
