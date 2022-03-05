import App from "./components/App.vue";
import Vue from "vue";
import "./style.css";

new Vue({
  render(h) {
    return h(App);
  },
}).$mount("#app");
