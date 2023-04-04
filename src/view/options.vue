<script setup>
import { NInput } from "naive-ui";
import { ref, computed } from "vue";

const value = ref("");

const letterCount = computed(() => {
  return value.value.length;
});

const wordCount = computed(() => {
  const words = value.value.match(/\b\w+\b/g);
  return words ? words.length : 0;
});
</script>
<template>
  <div>
    <nav>
      <h1>Word Counter App</h1>
    </nav>
    <div style="padding: 20px">
      <n-input
        v-model:value="value"
        type="textarea"
        placeholder="Basic Textarea"
        size="large"
        rows="24"
      />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />

    <footer>
      <div class="CountArea">
        <div>
          <span style="color: white; font-size: 40px; font-weight: bold"
            >{{ letterCount }} - Characters</span
          >
        </div>
        <div>
          <span style="color: white; font-size: 40px; font-weight: bold"
            >{{ wordCount }} - Word</span
          >
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
nav {
  background-color: #333;
  height: 100px;
  padding: 20px;
  box-sizing: border-box;
}
nav h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 42px;
}
footer {
  background-color: #333;
  height: 100px;
  box-sizing: border-box;
}
.CountArea {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20%;
  padding-top: 10px;
}
</style>