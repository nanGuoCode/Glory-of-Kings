<!--
 * @Author: your name
 * @Date: 2020-12-02 11:36:20
 * @LastEditTime: 2020-12-08 18:34:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\categoreEdit.vue
-->
<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save()">
      <!-- <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id"
           :label="item.name" :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+'upload'"
          :show-file-list="false"
          :on-success="afterUpload"
          
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
   afterUpload(res){
     console.log(res);
     this.$set(this.model,'icon',res.url)
    //  this.model=res.url
   },

    async save() {
      let res;
      if (this.id) {
        console.log(this.model);
        res = await this.$http.put(`rest/items/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/items", {
          name: this.model.name,
          icon: this.model.icon,
        });
      }

      console.log(res);
      this.$router.push("/item/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const { data } = await this.$http.get("rest/items/" + this.id);
      console.log(data);
      this.model = data;
      console.log(this.model);
    },
    // async fetchParents(){
    //   const {data} = await this.$http.get('rest/items')
    //   console.log(data);
    //   this.parents=data
    //   console.log(this.parents);
    // }
  },
  created() {
    this.id && this.fetch();
    //  this.fetchParents()
  },
};
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
    border-color: #409EFF;
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
    width: 178px;
    height: 178px;
    display: block;
  }
</style>