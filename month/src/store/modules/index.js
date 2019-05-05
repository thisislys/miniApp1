let state = {
  nav: ['热榜', '推荐', '原创', '视频','车模','车家号码','其他'],
  nav2: ['车型大全', '车型pk', '购车计算机', '双十一福利','秒杀活动'],
  // nav: ['全部', '猫猫', '狗狗', '其他'],
  // con: [{
  //   name: '我叫大妹',
  //   type: 'cat'
  // }, {
  //   name: '我叫二妹',
  //   type: 'dog'
  // }, {
  //   name: '我叫三妹',
  //   type: 'cat'
  // }, {
  //   name: '我叫四妹',
  //   type: 'dog'
  // }, {
  //   name: '我叫五妹',
  //   type: 'rest'
  // }],
  // cons: [{
  //   name: '我叫大妹',
  //   type: 'cat'
  // }, {
  //   name: '我叫二妹',
  //   type: 'dog'
  // }, {
  //   name: '我叫三妹',
  //   type: 'cat'
  // }, {
  //   name: '我叫四妹',
  //   type: 'dog'
  // }, {
  //   name: '我叫五妹',
  //   type: 'rest'
  // }],
  // type:''
}

let actions = {

}

let mutations = {
  // type(state, payload) {
  //   if (payload == '猫猫') {
  //     state.cons = state.con.filter(item => item.type == 'cat')

  //   } else if (payload == '狗狗') {
  //     state.cons = state.con.filter(item => item.type == 'dog')

  //   } else if (payload == '其他') {
  //     state.cons = state.con.filter(item => item.type == 'rest')

  //   } else {
  //     state.cons = state.con
  //   }
  // },
  // add(state,payload){
  //     state.con=[...state.con,payload]
  // },
  // changeType(state,payload){
  //     state.type=payload
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
