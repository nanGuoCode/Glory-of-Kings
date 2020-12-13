<!--
 * @Author: your name
 * @Date: 2020-12-02 11:36:20
 * @LastEditTime: 2020-12-11 15:40:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\views\categoreEdit.vue
-->
<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    {{ model }}
    <el-form label-width="120px" @submit.native.prevent="save()">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + 'upload'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item of categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              :max="10"
              style="margin-top: 0.6rem"
              show-score
              v-model="model.scores.difficult"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              :max="10"
              style="margin-top: 0.6rem"
              show-score
              v-model="model.scores.skill"
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              :max="10"
              style="margin-top: 0.6rem"
              show-score
              v-model="model.scores.attack"
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              :max="10"
              style="margin-top: 0.6rem"
              show-score
              v-model="model.scores.survive"
            ></el-rate>
          </el-form-item>

          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option
                v-for="item of items"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option
                v-for="item of items"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input type="textarea" v-model="model.temTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能">
          <el-button type="text" @click="model.skills.push({})">
            <i class="el-icon-plus"></i> 添加技能</el-button>

          <el-row type="flex" style="flex-wrap: wrap" class="skillRow">
            <el-col :md="11" v-for="(item, index) in model.skills" :key="index" class="skillCol"> 
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="技能图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + 'upload'"
                  :show-file-list="false"
                  :on-success="res => $set(item,'icon',res.url)"
                >
                  <img
                    v-if="item.icon"
                    :src="item.icon"
                    class="avatar"
                  />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="技能描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
                 <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
          <el-button type="danger" size="small" @click="model.skills.splice(index,1)" style="margin-top:1rem">删除</el-button>
              </el-form-item>
        
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

      <el-form-item style="margin-top: 1rem">
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
      model: {
        name: "",
        avatar: "",
        scores: {},
        skills: [
         
        ],
      },
      categories: [],
      items: [],
    };
  },
  methods: {
    afterUpload(res) {
      console.log(res);
      this.model.avatar = res.url;
    },

    async save() {
      let res;
      if (this.id) {
        console.log(this.model);
        res = await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heroes", {
          name: this.model.name,
          avatar: this.model.avatar,
        });
      }

      console.log(res);
      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const { data } = await this.$http.get("rest/heroes/" + this.id);
      this.model = Object.assign({}, this.model, data);
      console.log(this.model);
    },
    async fetchCategories() {
      const { data } = await this.$http.get("rest/categories");
      this.categories = data;
      console.log(this.categories);
    },
    async fetchItems() {
      const { data } = await this.$http.get("rest/items");
      this.items = data;
    },
    // async fetchParents(){
    //   const {data} = await this.$http.get('rest/heroes')
    //   console.log(data);
    //   this.parents=data
    //   console.log(this.parents);
    // }
  },
  created() {
    this.fetchItems();
    this.fetchCategories();
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