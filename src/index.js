import HelloWorld from "./components/HelloWorld.vue";
import MyButton from "./components/MyButton.vue";

export { HelloWorld, MyButton };

export default {
  install(app) {
    app.component("HelloWorld", HelloWorld);
    app.component("MyButton", MyButton);
  },
};
