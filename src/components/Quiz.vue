<template>
  <div>
    <div v-if="quizIndex === -1">
      Welcome to the simple quiz
      <button v-on:click="changeQuiz">Start</button>
    </div>

    <div v-for= "(quiz, index) in quizes" :key='index'>
      <div v-show="index === quizIndex">
        {{ quiz.question }}
        <div v-if="!submitedAnswer">
          <ol>
            <li v-for="(answer, index) in quiz.answers" :key='index'>
              <input type="radio" name="answer" :value="{ text: answer.text, correct: answer.correct }" v-model="userResponse" />
              <label class="radio"> {{ answer.text }} </label>

              {{ answer.correct ? correctAnswer = answer.text : '' }}
            </li>
          </ol>

          <button v-if="userResponse!== ''" v-on:click="clickSubmit">Submit</button>
        </div>

        <div v-if="submitedAnswer">
          <p v-if="userResponse.correct"> Your answer is Correct </p>
          <p v-else>
            Your answer is wrong!
            Your answer :  {{ userResponse.text }}
            The correct answer is : {{ correctAnswer }}
          </p>
          <button v-on:click="changeQuiz">Next</button>
        </div>
      </div>
    </div>

    <div v-if="quizIndex === totalQuiz">
      Quiz Completed

      Your score:
      {{ correctNumber }} / {{ totalQuiz }}
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Quiz',
  data() {
    return {
      userResponse: '',
      correctAnswer: '',
      submitedAnswer: false
    }
  },
  computed: {
    ...mapGetters(['quizes', 'totalQuiz']),
    quizIndex() {
      return this.$store.state.quizIndex
    },
    correctNumber() {
      return this.$store.state.correctNumber
    }
  },
  methods: {
    changeQuiz() {
      this.submitedAnswer = false
      this.$store.dispatch('changeQuiz')
    },
    clickSubmit() {
      this.submitedAnswer = true
      this.$store.dispatch('addUserResponse', this.userResponse)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
