import Vue from 'vue'
import Vuex from 'vuex'
import quizesData from "@/assets/test-quiz.json"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        quizIndex: -1,
        quizes: quizesData.quizes,
        userResponses: [],
        correctNumber: 0
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
        },
        ADD_USER_RESPONSE: (state, userResponse) => {
            state.userResponses.push(userResponse)
        },
        UPDATE_CORRECT_NUMBER: (state) => {
            state.correctNumber += 1
        }
    },
    actions: {
        changeQuiz: ({commit, state}) => {
            commit('CHANGE_QUIZ')
            return state.quizIndex
        },
        addUserResponse: ({commit}, payload) => {
            commit('ADD_USER_RESPONSE', payload)
        },
        updateCorrectNumber: ({commit}, payload) => {
            if (payload.correct) {
                commit('UPDATE_CORRECT_NUMBER')
            }
        }
    }
})