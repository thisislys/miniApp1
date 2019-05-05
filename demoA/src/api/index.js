import request from '@/utils/request';

//首页接口
export let index=params=>{
    return request.post('https://jbiz.share1diantong.com/as/index/cate/v1',params)
}

//轮播
export let banner=params=>{
    return request.post('https://39916353.share1diantong.com/v1/home/index')
}

//热门搜索
export let search=params=>{
    return request.post('https://jbiz.share1diantong.com/fa053/search/recommendKw')
}

//..
//搜索关键字
export let keyWord=params=>{
    return request.post('https://jbiz.share1diantong.com/fa053/search/associateKw',params)
}

//..
//搜索列表
export let list=params=>{
    return request.post('https://jbiz.share1diantong.com/fa053/topic/search/v1',params)
}