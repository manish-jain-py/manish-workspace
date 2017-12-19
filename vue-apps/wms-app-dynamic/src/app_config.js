const appConfig = {

  app: {
    homePage: 'page1',
    pages: {
      page1: {
        title: 'Page 1',
        componentList: ['nameTextBox', 'ageTextBox', 'page2Link']
      },
      page2: {
        title: 'Page 2',
        componentList: ['salTextBox', 'deptTextBox', 'page1Link']
      }
    }
  },
  components: {
    'nameTextBox': {
      type: 'TextBox',
      name: 'name',
      label: 'Enter Name',
      placeholder: 'Firstname'
    },
    'ageTextBox': {
      type: 'TextBox',
      name: 'age',
      label: 'Enter Age',
      placeholder: 'Age'
    },
    'salTextBox': {
      type: 'TextBox',
      name: 'salary',
      label: 'Enter Salary',
      placeholder: 'Salary'
    },
    'deptTextBox': {
      type: 'TextBox',
      name: 'department',
      label: 'Enter Department',
      placeholder: 'Department'
    },
    'page1Link': {
      type: 'ActionButton',
      name: 'Component 5',
      label: 'Go to Page 1',
      actionType: 'Navigation',
      params: {
        pageId: 'page1'
      }
    },
    'page2Link': {
      type: 'ActionButton',
      name: 'Component 6',
      label: 'Go to Page 2',
      actionType: 'Navigation',
      params: {
        pageId: 'page2'
      }
    }
  }

}

export default appConfig
