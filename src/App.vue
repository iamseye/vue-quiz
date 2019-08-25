<template>
  <div id="app">
    <div class="container">
      <div class="column is-half is-offset-one-quarter">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              Simple quiz
            </p>
          </div>
          <div class="card-content">
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'

export default {
  name: 'app',
  components: {
    Quiz
  }
}
</script>

<style>
</style>
