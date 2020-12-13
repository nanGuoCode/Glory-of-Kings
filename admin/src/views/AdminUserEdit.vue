<!--
 * @Author: your name
 * @Date: 2020-12-02 11:36:20
 * @LastEditTime: 2020-12-11 16:51:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\categoreEdit.vue
-->
<template>
  <div class="about">
    <h1>{{id?"编辑":"新建"}}管理员</h1>
    {{model}}
    <el-form  label-width=120px @submit.native.prevent="save()">
      <el-form-item label="账号：">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
       <el-form-item label="密码：">
        <el-input  v-model="model.password"></el-input>
      </el-form-item>
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
        
      },
      parents:[]
    }
  },
  methods:{
   async save(){
     let res
     if(this.id){
       console.log(this.model);
    res=await this.$http.put(`rest/admin_users/${this.id}`,this.model)
     }else{
    res = await this.$http.post('rest/admin_users',this.model)
     }
   
   console.log(res);
   this.$router.push('/admin_users/list')
   this.$message({
     type:'success',
     message:'保存成功'
   })
    },
    async fetch(){
      const {data} =await this.$http.get('rest/admin_users/'+this.id)
      console.log(data);
      this.model=data
      console.log(this.model);
    },
    // async fetchParents(){
    //   const {data} = await this.$http.get('rest/admin_users')
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

<style lang="" scoped>
</style>