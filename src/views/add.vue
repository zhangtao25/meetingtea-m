<template>
  <div>
    <el-upload
      action=""
      :http-request="fn"
      :show-file-list="false">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        imageUrl:""
      };
    },
    methods: {
      fn(val){
        console.log(val)

        let noteForm = {
          "id": "5c4685bc000000000d01bba3",
          "title": "ttttcolourpop goldie，一组live转的视频（用VUE就可以转）不知道",
          "type": "video",
          "desc": "",
          "likes": 298,
          "isLiked": false,
          "cover": {
            "url": "http:\u002F\u002Fci.xiaohongshu.com\u002Fa960ae9d-7be5-517c-9c47-d9d22ccc622d?imageView2\u002F2\u002Fw\u002F1080\u002Fformat\u002Fjpg",
            "original": "http:\u002F\u002Fci.xiaohongshu.com\u002Fa960ae9d-7be5-517c-9c47-d9d22ccc622d",
            "width": 960,
            "height": 1280,
            "fileid": "a960ae9d-7be5-517c-9c47-d9d22ccc622d"
          },
          "imagesList": [
            {
              "url": "http:\u002F\u002Fci.xiaohongshu.com\u002Fa960ae9d-7be5-517c-9c47-d9d22ccc622d?imageView2\u002F2\u002Fw\u002F1080\u002Fformat\u002Fjpg",
              "original": "http:\u002F\u002Fci.xiaohongshu.com\u002Fa960ae9d-7be5-517c-9c47-d9d22ccc622d",
              "width": 960,
              "height": 1280,
              "fileid": "a960ae9d-7be5-517c-9c47-d9d22ccc622d"
            }
          ],
          "user": {
            "id": "5a5eb0be11be105e04c4219c",
            "image": "https:\u002F\u002Fimg.xiaohongshu.com\u002Favatar\u002F5c2a1e0b3d16fc0001d53416.jpg@80w_80h_90q_1e_1c_1x.jpg",
            "nickname": "原始人的嗷呜呜",
            "officialVerified": false
          },
          "time": null
        }
        let formData = new FormData();
        formData.append('avatar', val.file);
        formData.append('noteForm', JSON.stringify(noteForm));
        axios.post('/api/notes/new',formData,{
          headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(res=>{
          // console.log(res,this.backendInterfaceAddress)
          console.log(res)
          // this.imageUrl = this.backendInterfaceAddress + res.data.filePath
        })
      }
    }
  }
</script>