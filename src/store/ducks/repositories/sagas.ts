import { call, put, delay } from 'redux-saga/effects'
import api from '../../../services/api'

import { loadSuccess, loadFailure } from './actions'

export function* load() {
    try {
        const response = yield call(api.get, ('users/victorwww/repos'))

        yield delay(1000)

        yield put(loadSuccess(response.data))
    } catch (err) {
        yield put(loadFailure())
    }
}