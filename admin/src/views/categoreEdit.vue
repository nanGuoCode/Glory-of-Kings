<!--
 * @Author: your name
 * @Date: 2020-12-02 11:36:20
 * @LastEditTime: 2020-12-08 10:25:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\categoreEdit.vue
-->
<template>
  <div class="about">
    <h1>{{id?"编辑":"新建"}}分类</h1>
    {{model}}
    <el-form  label-width=120px @submit.native.prevent="save()">
        <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id"
           :label="item.name" :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
    res=await this.$http.put(`rest/categories/${this.id}`,this.model)
     }else{
    res = await this.$http.post('rest/categories',{
      name:this.model.name,
      parent:this.model.parent
    })
     }
   
   console.log(res);
   this.$router.push('/categories/list')
   this.$message({
     type:'success',
     message:'保存成功'
   })
    },
    async fetch(){
      const {data} =await this.$http.get('rest/categories/'+this.id)
      console.log(data);
      this.model=data
      console.log(this.model);
    },
    async fetchParents(){
      const {data} = await this.$http.get('rest/categories')
      console.log(data);
      this.parents=data
      console.log(this.parents);
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