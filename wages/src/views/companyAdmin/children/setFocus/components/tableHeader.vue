<template>
  <div class="table-header">
    <el-row style='margin:10px 0;'>
      <el-col :span='8' style='padding-left:20px;box-sizing:border-box;'>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          size="mini"
        >
        </el-input>
      </el-col>
      <el-col :span='16' style='text-align:right;padding-right:20px;box-sizing:border-box;'>
        <el-button type="warning" size="mini" @click="dialogFormVisible = true">添加员工</el-button>
      </el-col>
    </el-row>
    <el-dialog title="添加员工信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth">
          <el-select v-model="form.team" placeholder="请选择部门">
            <el-option label="技术部" value="shanghai"></el-option>
            <el-option label="人事部" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-select v-model="form.position" placeholder="请选择职位">
            <el-option label="web前端" value="shanghai"></el-option>
            <el-option label="PHP工程师" value="beijing"></el-option>
            <el-option label="UI" value="shenzhen"></el-option>
            <el-option label="JAVA工程师" value="guangzhou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="薪资" :label-width="formLabelWidth">
          <el-input v-model="form.money" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.com"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.tel" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click='addStaff'>确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData5: [],
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: '',
        tel: '',
        com: '',
        type: '',
        money: '',
        team: '',
        position: '',
        teamId: ''
      }
    }
  },
  methods: {
    addStaff () {
      if (this.form.name !== '') {
        this.$http.post('/api/addStaff', this.form).then(res => {
          this.tableList = res
          console.log(res)
          this.dialogFormVisible = false
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
