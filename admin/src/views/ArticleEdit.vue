<!--
 * @Author: your name
 * @Date: 2020-12-02 11:36:20
 * @LastEditTime: 2020-12-11 09:15:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\categoreEdit.vue
-->
<template>
  <div class="about">
    <h1>{{id?"编辑":"新建"}}文章</h1>
    {{model}}
    <el-form  label-width=120px @submit.native.prevent="save()">
        <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id"
           :label="item.name" :value="item._id" 
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
       <el-form-item label="详情">
      <vue-editor v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: '',
  props:{
  id:{}
  },
  components: {
    VueEditor
  },
  data() { 
    return {
      model:{
        
      },
      categories:[]
    }
  },
  methods:{
   async save(){
     let res
     if(this.id){
    res=await this.$http.put(`rest/articles/${this.id}`,this.model)
     }else{
    res = await this.$http.post('rest/articles',this.model)
     }
   
   console.log(res);
   this.$router.push('/articles/list')
   this.$message({
     type:'success',
     message:'保存成功'
   })
    },
    async fetch(){
      const {data} =await this.$http.get('rest/articles/'+this.id)
      console.log(data);
      this.model=data
      console.log(this.model);
    },
    async fetchParents(){
      const {data} = await this.$http.get('rest/categories')
      console.log(data);
      this.categories=data
    }
  },
  created(){
     this.id&&this.fetch();
     this.fetchParents()
  } 
  }
</script>

<style lang="" scoped>
</style>