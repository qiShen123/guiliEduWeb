<template>
  <div>

    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="courseQuery.title" placeholder="课程名称"/>
      </el-form-item>

      <el-form-item>
        <el-select v-model="courseQuery.status" clearable placeholder="课程状态">
          <el-option :value="'Draft'" label="未发布"/>
          <el-option :value="'Normal'" label="已发布"/>
        </el-select>
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>
    <el-table
      :data="list"
      border
      fit
      highlight-current-row>

      <el-table-column
        label="序号"
        width="100"
        align="center">
        <template slot-scope="scope">
          {{ (current - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="title" label="课程名称" width="80"/>
      <el-table-column prop="lessonNum" label="课时数" width="80"/>
      <el-table-column prop="gmtCreate" label="发布时间" width="180"/>
      <el-table-column prop="viewCount" label="浏览数量" width="80"/>

      <el-table-column label="课程状态" width="100">
        <template slot-scope="scope">
          {{ scope.row.status==='Draft'?'未发布':'已发布' }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="500" align="center">
        <template slot-scope="scope">
          <router-link :to="'/course/info/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改基础信息</el-button>
          </router-link>
          <router-link :to="'/course/chapter/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改课程内容</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :current-page="current"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
  </div>
</template>


<script>
  import course from '@/api/edu/course'

  export default {
    name: 'list',
    data() {
      return {
        list: null,
        total: 0,
        current: 1,
        limit: 6,
        courseQuery: {}
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList(current = 1) {
        this.current = current
        course.getCourseListPage(this.current, this.limit, this.courseQuery).then(response => {
          this.list = response.data.coursePage.records
          this.total = response.data.coursePage.total
        }).catch(error => {
          console.log(error)
        })
      },
      resetData() {
        this.courseQuery = {}
        this.getList()
      },
      removeDataById(courseId) {
        this.$confirm('此操作将永久删除章节记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          course.removeDataById(courseId)
            .then(response=>{
              this.$message({
                type: 'success',
                message: '删除小节成功'
              })
              this.getList()
            })
        })

      }
    }
  }

</script>


<style scoped>

</style>
