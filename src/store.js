import Vue from 'vue'
import Vuex from 'vuex'
import quizesData from "@/assets/test-quiz.json"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        quizIndex: -1,
        quizes: quizesData.quizes
    },
    getters: {
        quizes(state) {
            return state.quizes;
        },
        totalQuiz(state) {
            return state.quizes.length
        }
    },
    mutations: {
        CHANGE_QUIZ: (state) => {
            state.quizIndex += 1
        }
    }
})