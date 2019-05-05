import request from '@/utils/request';
//功能菜单
export let manu = params => {
  return request.get('/Api/index_tab')
}
//首页轮播图
export let lunbo = params => {
  return request.get('/Common/slides?type=wx-ask-home')
}
//分类导航
export let nav = params => {
  return request.get('/Question/category', params)
}
//列表接
export let list = params => {
  return request.get('/Question/index', params)
}
//详情
export let detail = params => {
  return request.get('/Question/detail', params)
}
