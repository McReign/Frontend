import { put, takeEvery, all } from 'redux-saga/effects'
import getLotsSaga from '../containers/CardHolder/sagas'

export default function* rootSaga() {
        yield all([
            getLotsSaga()
        ])
    }