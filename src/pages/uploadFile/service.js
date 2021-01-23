import { API_PREFIX } from '@/url-prefixes'
import request from '@/utils/request'

export const predict = (params) => {
  return request('/api/process', {
    method: 'GET',
  }).catch(function (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return error
  })
}
