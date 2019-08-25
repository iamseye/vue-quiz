<template>
  <div>
    
    {{ quizIndex }}

    <div v-if="quizIndex === -1">
      Welcome to the simple quiz
      <button v-on:click="changeQuiz">Start</button>
    </div>

    <div v-for= "(quiz, index) in quizes" :key='index'>
      <div v-show="index === quizIndex">
        {{ quiz.question }}
        <ol>
          <li v-for="(answer, index) in quiz.answers" :key='index'>
            <label class="radio">
              <input type="radio" name="answer"/>
              {{ answer.text }}
            </label>
          </li>
        </ol>
        <button v-on:click="changeQuiz">Next</button>
      </div>
    </div>

    <div v-if="quizIndex === totalQuiz">
      Quiz Completed
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Quiz',
  computed: {
    ...mapGetters(['quizes', 'totalQuiz']),
    quizIndex() {
      return this.$store.state.quizIndex
    }
  },
  methods: {
    changeQuiz() {
      this.$store.commit('CHANGE_QUIZ')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
