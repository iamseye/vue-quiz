import Vue from 'vue'
import Vuex from 'vuex'
import quizes from "@/assets/test-quiz.json"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        quizIndex: -1,
        quizes: quizes.quizes
    },
    getters: {
        currentQuiz(state) {
            if (state.quizIndex < 0 || state.quizIndex >= state.quizes.length) {
                return []
            }

            return state.quizes[state.quizIndex];
        }
    }
})