<!--
 * @Author: your name
 * @Date: 2020-12-02 08:23:10
 * @LastEditTime: 2020-12-08 18:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\categoreList.vue
-->
<template>
 <div class="about">
     <h1>英雄列表</h1>
      <el-table :data="heroes">
        <el-table-column prop="_id" label="ID" width="220">
        </el-table-column>
          <!-- <el-table-column prop="parent.name" label="英雄名称" width="220">
        </el-table-column> -->
        <el-table-column prop="name" label="英雄名称" width="220">
        </el-table-column>
        <el-table-column prop="avatar" label="图标" width="220">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="" style="height: 3rem"> 
          </template>
        </el-table-column>
         <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="$router.push(`/heroes/edit/${scope.row._id}`)">编辑</el-button>
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
        heroes:[]
    }
  },
  created(){
   this.fetch()
  },
  methods:{
    async fetch(){
      const {data} =await this.$http.get('rest/heroes')
      console.log(data);
      this.heroes=data
    },
  async  remove(row){
        this.$confirm(`是否确认删除该分类"${row.heroes}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
            const res=await this.$http.delete(`rest/heroes/${row._id}`)
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
