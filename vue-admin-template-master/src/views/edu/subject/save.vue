<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="信息描述">
        <el-tag type="info">excel模板</el-tag>
        <el-tag>
          <i class="el-icon-download"/>
          <a :href="'https://edu-sq.oss-cn-hangzhou.aliyuncs.com/2020/05/09/1a1838934b5f4d3b80fdaeb3b316738f01.xlsx'">点击下载模板</a>
        </el-tag>
      </el-form-item>
      <el-form-item label="选取Excel">
        <el-upload
          ref="upload"
          :on-success="fileUploadSuccess"
          :on-error="fileUploadError"
          :limit="1"
          :action="BASE_API+'/eduService/subject/addSubject'"
          name="file"
          accept="application/vnd.ms-excel"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        BASE_API: process.env.BASE_API,
        importBtnDisabled: false,
        loading: false
      }
    },
    methods: {
      submitUpload() {
        this.importBtnDisabled = true
        this.loading = true
        this.$refs.upload.submit()
      },
      fileUploadSuccess() {
        this.loading = false,
          this.$message({
            type: 'success',
            message: '导入成功'
          })
        this.$router.push({path:'/subject/list'})
      },
      fileUploadError() {
        this.loading = false,
          this.$message({
            type: 'error',
            message: '导入失败'
          })
      }
    }
  }
</script>

<style scoped>

</style>
