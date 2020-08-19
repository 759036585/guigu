import { get } from '@/utils/http.js'

// 获取经纬度地址
export const getAddress = (params) => {
  return get(`/position/${params}`)
}

// 获取食品分类列表
export const getCategorys = (params) => {
  return get('/index_category', params)
}

// 根据经纬度获取商铺列表
export const getShops = (params) => {
  return get('/shops', params)
}
