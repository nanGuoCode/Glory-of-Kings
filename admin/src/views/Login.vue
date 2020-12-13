<!--
 * @Author: your name
 * @Date: 2020-12-02 08:23:10
 * @LastEditTime: 2020-12-11 20:14:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\Login.vue
-->
<template>
  <div class="login">
<el-card header="请登录" class="login-card">
<el-form @submit.native.prevent="login">
  <el-form-item label="用户名：" >
    <el-input v-model="model.username"></el-input>
  </el-form-item>
    <el-form-item label="密码：">
    <el-input v-model="model.password" type="password"></el-input>
  </el-form-item>
    <el-form-item >
  <el-button type="primary" native-type="submit">登录</el-button>
  </el-form-item>
</el-form>
</el-card>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name:'Login',
  components: {
  
  },
  data(){
    return{
   model:{}
    }
  },
  methods:{
  async  login(){
      const {data}=await this.$http.post('login',this.model)
      console.log(data);
      localStorage.token=data;
      console.log(  localStorage.token);
      this.$router.push('/')
      this.$message({
        type:'success',
        message:'登录成功'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-card{
   width: 30rem;
   margin: 10rem auto;
}
</style>
