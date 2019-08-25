<template>
  <div>
    <div v-if="quizIndex === -1">
      <div class="subtitle">Welcome to the simple quiz</div>
      <b-button v-on:click="changeQuiz">Start</b-button>
    </div>

    <div v-for= "(quiz, index) in quizes" :key='index'>
      <div v-show="index === quizIndex">
        <div class="subtitle">{{ quiz.question }}</div>

        <div v-if="!submitedAnswer">
            <section class="is-medium" v-for="(answer, index) in quiz.answers" :key='index'>
              <div class="field">
                <b-radio
                  v-model="userResponse"
                  name="answer"
                  :native-value="{ text: answer.text, correct: answer.correct }"
                >
                  {{ answer.text }}
                </b-radio>
              </div>
            </section>
          <b-button v-if="userResponse!== ''" v-on:click="clickSubmit">Submit</b-button>
        </div>

        <div v-else>
          <div>
            Your answer ( {{ userResponse.text }} ) is
            <b-tag v-if="userResponse.correct" type="is-info">Correct</b-tag>
            <b-tag v-else type="is-danger">Not correct</b-tag>
          </div>
          <b-button v-on:click="changeQuiz">Next</b-button>
        </div>

      </div>
    </div>

    <div v-if="quizIndex === totalQuiz">
      <div class="subtitle"> Quiz Completed </div>

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
      this.$store.dispatch('updateCorrectNumber', this.userResponse)
      this.$store.dispatch('addUserResponse', this.userResponse)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
