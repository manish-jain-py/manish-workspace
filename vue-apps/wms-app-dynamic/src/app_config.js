const appConfig = {

  app: {
    homePage: 'page1',
    pages: {
      page1: {
        title: 'Page 1',
        componentList: ['comp1', 'comp2']
      },
      page2: {
        title: 'Page 2',
        componentList: ['comp3', 'comp4']
      }
    }
  },
  components: {
    'comp1': {
      type: 'TextBox',
      name: 'name',
      label: 'Enter Name',
      placeholder: 'Firstname'
    },
    'comp2': {
      type: 'TextBox',
      name: 'age',
      label: 'Enter Age',
      placeholder: 'Age'
    },
    'comp3': {
      type: 'TextBox',
      name: 'Component 3',
      label: 'Component 3',
      placeholder: 'Finally something worked'
    },
    'comp4': {
      type: 'TextBox',
      name: 'Component 4',
      label: 'Component 4',
      placeholder: 'Finally something worked'
    }
  }

}

export default appConfig
