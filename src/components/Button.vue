<script lang="tsx">
import Vue from "vue";

export default Vue.extend({
  methods: {
    print() {
      alert("HI");
    },
  },

  render() {
    return <button onClick={this.print}>Click me</button>;
  },
});
</script>
