import App from "./components/App.vue";
import Vue from "vue";
import "./style.scss";

new Vue({
  render(h) {
    return h(App);
  },
}).$mount("#app");
