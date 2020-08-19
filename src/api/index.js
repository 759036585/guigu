import { get } from '@/utils/http.js'

// 获取经纬度地址
export const getPosition = (params) => {
  return get(`/position/${params}`)
}
