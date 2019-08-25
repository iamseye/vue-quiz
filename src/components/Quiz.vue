<template>
  <div>
    
    {{ quizIndex }}

    <div v-if="quizIndex >= 0">
      {{ quiz.question }}
      <ol>
        <li v-for="(answer, index) in quiz.answers" :key='index'>
          <label class="radio">
            <input type="radio" name="answer" />
            {{ answer.text }}
          </label>
        </li>
      </ol>
      <button @click="changeQuiz()">Next</button>
    </div>

    <div v-else>
      Welcome to the simple quiz
      <button @click="changeQuiz()">Start</button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Quiz',
  computed: {
    ...mapGetters({
      quiz: 'currentQuiz'
    }),
    quizIndex() {
      return this.$store.state.quizIndex
    }
  },
  methods: {
    changeQuiz() {
      this.$store.state.quizIndex += 1
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
