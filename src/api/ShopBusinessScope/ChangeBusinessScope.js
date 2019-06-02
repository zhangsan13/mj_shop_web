import { $axios } from '../../config/axios'

/**
 * 修改经营范围
 * @param obj
 * @returns {*|Promise<any>}
 */
export default function (obj) {
  return $axios.call(this, 'api/BusinessScope/ChangeBusinessScope', obj, 'post')
}
