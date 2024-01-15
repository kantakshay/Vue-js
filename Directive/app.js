const options = {
  data() {
    return {
      text: "Hello Vue Js  Directive!!",
      size: '28px',
      isTrue: true,
      className: "myClass",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    };
  },
};

const App = Vue.createApp(options);
App.mount("#app");
