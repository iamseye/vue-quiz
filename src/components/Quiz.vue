<template>
  <div>
    
    {{ quizIndex }}

    <div v-if="quizIndex > 0"> 
      {{ quiz.question }}
      <ol>
        <li v-for="(answer, index) in quiz.answers" :key='index'>
          <label class="radio">
            <input type="radio" name="answer">
            {{ answer.text }}
          </label>
        </li>
      </ol>
      <button @click="changeQuiz(quizIndex)">Next</button>
    </div>

    <div v-else>
      Welcome to the simple quiz
      <button @click="changeQuiz(quizIndex)">Start</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Quiz',
  props: ['quiz', 'quizIndex'],
  methods: {
    changeQuiz(quizIndex) {
        this.$emit('changeQuiz', quizIndex +=1 );
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
