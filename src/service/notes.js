import axios from 'axios'

function getAllNotes() {
  return new Promise((resolve, reject) => {
    axios.get('/api/notes/all').then((res) => {
      resolve(res)
    }, (err) => {
      console.log(err)
    })
  })
}
export default {
  getAllNotes
}