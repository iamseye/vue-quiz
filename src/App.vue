<template>
  <div id="app">
    <h1>Simpe quiz</h1>
    <Quiz v-if="quizIndex <= quizes.length-1" :quiz="quizes[quizIndex]" :quizIndex="quizIndex" @changeQuiz="changeQuiz"/>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'

export default {
  name: 'app',
  data() {
    return {
      quizIndex: 0,
      quizes: [
        {
          "question": "What is Finn's favourite color?",
          "answers": [
                {
                    "text": "Red",
                    "id": 1,
                    "correct": true
                },
                {
                    "text": "Green",
                    "id": 2,
                    "correct": false
                },
                {
                    "text": "Blue",
                    "id": 3,
                    "correct": false
                }
            ]
        },
        {
          "question": "What is Jake's favourite Food?",
          "answers": [
                {
                    "text": "ApplePie",
                    "id": 1,
                    "correct": false
                },
                {
                    "text": "Curry",
                    "id": 2,
                    "correct": true
                },
                {
                    "text": "Peabut butter",
                    "id": 3,
                    "correct": false
                }
            ]
        },
        {
          "question": "What is BMO's favourite place?",
          "answers": [
              {
                  "text": "Home",
                  "id": 1,
                  "correct": false
              },
              {
                  "text": "Kingdom",
                  "id": 2,
                  "correct": false
              },
              {
                  "text": "Hill",
                  "id": 3,
                  "correct": true
              }
          ]
        }
      ]
    }
  },
  methods: {
    changeQuiz(quizIndex) {
      this.quizIndex = quizIndex;
    }
  },
  components: {
    Quiz
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
