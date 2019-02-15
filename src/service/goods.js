import axios from 'axios'

function getLv1CateList(categoryId) {
  return new Promise((resolve, reject) => {
    axios.get('/api/mobile-goods/lv1-list', {params: {categoryId}}).then((res) => {
      resolve(res)
    }, (err) => {
      console.log(err)
    })
  })
}

function getLv2CateList(categoryId, subCategoryId) {
  return new Promise((resolve, reject) => {
    axios.get('/api/mobile-goods/lv2-list', {params: {categoryId, subCategoryId}}).then((res) => {
      resolve(res)
    }, (err) => {
      console.log(err)
    })
  })
}

function getGoodsDetail(id) {
  return new Promise((resolve, reject) => {
    axios.get('/api/mobile-goods/detail', {params: {id}}).then((res) => {
      resolve(res)
    }, (err) => {
      console.log(err)
    })
  })
}

function getLv1Category(id) {
  return new Promise((resolve, reject) => {
    axios.get('/api/mobile-goods/lv1-category', {params: {id}}).then((res) => {
      resolve(res)
    }, (err) => {
      console.log(err)
    })
  })
}

function getHomepage() {
  return new Promise((resolve, reject) => {
    axios.get('/api/mobile-goods/homepage').then((res) => {
      resolve(res)
    }, (err) => {
      console.log(err)
    })
  })
}

export default {
  getLv1CateList,
  getLv2CateList,
  getGoodsDetail,
  getLv1Category,
  getHomepage
}