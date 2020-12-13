<!--
 * @Author: your name
 * @Date: 2020-12-02 11:36:20
 * @LastEditTime: 2020-12-11 22:55:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\categoreEdit.vue
-->
<template>
  <div class="about">
    <h1>{{id?"编辑":"新建"}}广告位</h1>
    {{model}}
    <el-form  label-width=120px @submit.native.prevent="save()">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

 <el-button type="text" @click="model.items.push({})" style="margin-left:4rem">
            <i class="el-icon-plus"></i> 添加广告位</el-button>

          <el-row type="flex" style="flex-wrap: wrap" class="skillRow">
            <el-col :md="11" v-for="(item, index) in model.items" :key="index" class="skillCol"> 
              <el-form-item label="跳转链接:">
                <el-input v-model="item.url"></el-input>
              </el-form-item>
              <el-form-item label="图片:">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + 'upload'"
                  :headers='getAuthHeaders()'
                  :show-file-list="false"
                  :on-success="res => $set(item,'image',res.url)"
                >
                  <img
                    v-if="item.image"
                    :src="item.image"
                    class="avatar"
                  />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
          <el-button type="danger" size="small" @click="model.items.splice(index,1)" style="margin:1rem 0 0 15rem">删除</el-button>
            </el-col>
          </el-row>
        

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
  id:{}
  },
  data() { 
    return {
      model:{
        items:[]
      },
    }
  },
  methods:{
   async save(){
     let res
     if(this.id){
       console.log(this.model);
    res=await this.$http.put(`rest/ads/${this.id}`,this.model)
     }else{
    res = await this.$http.post('rest/ads',this.model)
     }
   
   console.log(res);
   this.$router.push('/ads/list')
   this.$message({
     type:'success',
     message:'保存成功'
   })
    },
    async fetch(){
      const {data} =await this.$http.get('rest/ads/'+this.id)
      console.log(data);
      this.model=data
      console.log(this.model);
    },
    // async fetchParents(){
    //   const {data} = await this.$http.get('rest/ads')
    //   console.log(data);
    //   this.parents=data
    //   console.log(this.parents);
    // }
  },
  created(){
     this.id&&this.fetch();
    //  this.fetchParents()
  } 
  }
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 160px;
  height: 160px;
  display: block;
}

.skillCol {

  margin-top: 3rem;
  // margin-left: 1rem;
}
</style>