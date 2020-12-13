<!--
 * @Author: your name
 * @Date: 2020-12-02 08:23:10
 * @LastEditTime: 2020-12-08 10:28:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\categoreList.vue
-->
<template>
 <div class="about">
    <h1>This is an about page</h1>   
      <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="220">
        </el-table-column>
          <el-table-column prop="parent.name" label="上级分类" width="220">
        </el-table-column>
        <el-table-column prop="name" label="分类名称" width="220">
        </el-table-column>
         <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="$router.push(`/categories/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
    
  </div>
</template>

<script>
export default {
  data() { 
    return {
        items:[]
    }
  },
  created(){
   this.fetch()
  },
  methods:{
    async fetch(){
      const {data} =await this.$http.get('rest/categories')
      console.log(data);
      this.items=data
    },
  async  remove(row){
        this.$confirm(`是否确认删除该分类"${row.categories}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
            const res=await this.$http.delete(`rest/categories/${row._id}`)
          this.fetch()
          this.$message({
            type: 'success',
            message: '删除成功!'
          });           
        }).catch(() => {
        
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
 }
</script>

<style lang="" scoped>
</style>
