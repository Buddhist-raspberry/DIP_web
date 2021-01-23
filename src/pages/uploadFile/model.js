import generateEffect from '@/utils/generateEffect'
import generateReducer, {
  defaultArrayTransformer,
  defaultObjectTransformer,
} from '@/utils/generateReducer'
import * as CovidService from './service'
import moment from "moment";


const defaultState = {
  result: ''
}

const effects = {
  predict: generateEffect(function* ({ payload }, { call, put }) {
    const res = yield call(CovidService.predict)
    console.log("response", res)
    yield put({
      type: 'setResult',
      payload: res,
    })
  }),
}

const reducers = {
  setResult: generateReducer({
    attributeName: 'result',
    transformer: (payload) => payload,
    defaultState,
  }),
}


export default {
  namespace: 'covid',
  state: defaultState,
  effects,
  reducers,
}
