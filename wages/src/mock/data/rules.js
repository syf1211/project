export default [
  {
    id: 1,
    text: '管理员',
    data: [
      {
        name: 'AuthorityDistribution',
        text: '权限分配'
      },
      {
        name: 'SalaryBill',
        text: '工资条',
        children: [
          {
            name: 'salaryAdmin',
            text: '工资条管理'
          }
        ]
      },
      {
        name: 'CompanyAdmin',
        text: '企业管理',
        children: [
          {
            name: 'admin',
            text: '账户管理'
          },
          {
            name: 'setFocus',
            text: '员工管理'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    text: '老板',
    data: [
      {
        name: 'CompanyAdmin',
        text: '企业管理',
        children: [
          {
            name: 'admin',
            text: '账户管理'
          },
          {
            name: 'setFocus',
            text: '员工管理'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    text: '财务',
    data: [
      {
        name: 'SalaryBill',
        text: '工资条',
        children: [
          {
            name: 'salaryAdmin',
            text: '工资条管理'
          }
        ]
      },
      {
        name: 'CompanyAdmin',
        text: '企业管理',
        children: [
          {
            name: 'admin',
            text: '账户管理'
          },
          {
            name: 'setFocus',
            text: '员工管理'
          }
        ]
      }
    ]
  }
]
