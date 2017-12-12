<template>
  <div class="table-bar">
    <el-table
      :data="tableList.data"
      size="mini"
      :header-row-style='{background: "#F09D55", color: "#fff"}'
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="手机号"
        prop="tel">
      </el-table-column>
      <el-table-column
        label="员工状态"
        prop="state"
        :formatter='getTeam'
      >
      </el-table-column>
      <el-table-column
        label="部门"
        prop="team">
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            @click.native='removeStaff(scope.row, "2")'
            type="text"
            size="small">
            开除
          </el-button>
          <el-button
            @click.native='removeStaff(scope.row, "1")'
            type="text"
            size="small">
            离职
          </el-button>
          <el-button
            type="text"
            size="small">
            修改密码
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableList.count">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['tableList'],
  data () {
    return {
      msg: '',
      currentPage4: 1
    }
  },
  methods: {
    getTeam (...rest) {
      let arrTeam = ['在职', '离职', '开除']
      return arrTeam[rest[2]]
    },
    removeStaff (item, state) {
      this.$http.post('/api/removeStaff', {
        state,
        id: item.id
      }).then(res => {
        console.log(res)
        item.state = state
      })
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.$emit('getStaffList', {
        pageSize: val
      })
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.$emit('getStaffList', {
        page: val
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

