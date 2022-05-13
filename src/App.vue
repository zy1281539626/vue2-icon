<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 其中icon-class对应图标svg文件的名称；className对应图标的css样式属性 -->
    <svg-icon icon-class="apple1" className="aaa"></svg-icon>
    <svg-icon icon-class="b"></svg-icon>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.aaa {
  color: red;
  font-size: 30px;
}
</style>
