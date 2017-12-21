const appConfig = {

  app: {
    homePage: 'page1',
    pages: {
      page1: {
        title: 'Page 1',
        componentList: ['nameTextBox', 'page2Forward']
      },
      page2: {
        title: 'Page 2',
        componentList: ['subsidiaryTextBox', 'page3Forward']
      },
      page3: {
        title: 'Page 3',
        componentList: ['contactNameTextBox', 'contactPhoneTextBox', 'contactAddressTextBox', 'contactRelationshipTextBox', 'page3SubmitButton']
      },
      page4: {
        title: 'Page 4',
        componentList: []
      }
    }
  },
  components: {
    'nameTextBox': {
      type: 'TextBox',
      name: 'name',
      label: 'Enter Name',
      placeholder: 'Firstname',
      parentRecord: 'Employee',
      fieldName: 'firstname',
      sublistName: ''
    },

    'ageTextBox': {
      type: 'TextBox',
      name: 'age',
      label: 'Enter Age',
      placeholder: 'Age',
      parentRecord: 'Employee',
      fieldName: 'age',
      sublistName: 'data'
    },

    'salTextBox': {
      type: 'TextBox',
      name: 'salary',
      label: 'Enter Salary',
      placeholder: 'Salary',
      parentRecord: '',
      fieldName: '',
      sublistName: ''
    },

    'deptTextBox': {
      type: 'TextBox',
      name: 'department',
      label: 'Enter Department',
      placeholder: 'Department',
      parentRecord: '',
      fieldName: '',
      sublistName: ''
    },

    'phoneTextBox': {
      type: 'TextBox',
      name: 'phone',
      label: 'Enter Phone',
      placeholder: 'Phone',
      parentRecord: 'Employee',
      fieldName: 'phone',
      sublistName: 'data2'
    },

    'subsidiaryTextBox': {
      type: 'TextBox',
      name: 'subsidiary',
      label: 'Enter Subsidiary',
      placeholder: 'subsidiary',
      parentRecord: 'Employee',
      fieldName: 'subsidiary',
      sublistName: ''
    },

    'page1Link': {
      type: 'ActionButton',
      name: 'Component 5',
      label: 'Go to Page 1',
      actionType: 'Navigation',
      params: {
        pageId: 'page1'
      },
      parentRecord: '',
      fieldName: '',
      sublistName: ''
    },

    'page2Forward': {
      type: 'ActionButton',
      name: 'Component 6',
      label: 'Go to Page 2',
      actionType: 'ForwardForm',
      params: {
        pageId: 'page2'
      },
      parentRecord: '',
      fieldName: '',
      sublistName: ''
    },

    'page3Forward': {
      type: 'ActionButton',
      name: 'page3Forward',
      label: 'Go to Page 3',
      actionType: 'ForwardForm',
      params: {
        pageId: 'page3'
      },
      parentRecord: '',
      fieldName: '',
      sublistName: ''
    },

    'page1ForwardLink': {
      type: 'ActionButton',
      name: 'Component 7',
      label: 'Forward to Page 1',
      actionType: 'ForwardForm',
      params: {
        pageId: 'page1'
      },
      parentRecord: '',
      fieldName: '',
      sublistName: ''
    },

    'page3SubmitButton': {
      type: 'ActionButton',
      name: 'EmpSubmitButton',
      label: 'Submit Form',
      actionType: 'SubmitForm',
      params: {
        pageId: 'page4'
      },
      parentRecord: '',
      fieldName: '',
      sublistName: '',
      submitAction: 'https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=127&deploy=1'
    },

    'contactAddressTextBox': {
      type: 'TextBox',
      name: 'address',
      label: 'Enter Emergency Contact Address',
      placeholder: 'Address',
      parentRecord: 'Employee',
      fieldName: 'address',
      sublistName: 'emergencycontact'
    },

    'contactRelationshipTextBox': {
      type: 'TextBox',
      name: 'relationship',
      label: 'Enter Emergency Contact Relationship',
      placeholder: 'Relationship',
      parentRecord: 'Employee',
      fieldName: 'relationship',
      sublistName: 'emergencycontact'
    },

    'contactNameTextBox': {
      type: 'TextBox',
      name: 'contactname',
      label: 'Enter Emergency Contact Name',
      placeholder: 'Name',
      parentRecord: 'Employee',
      fieldName: 'contact',
      sublistName: 'emergencycontact'
    },

    'contactPhoneTextBox': {
      type: 'TextBox',
      name: 'contactphone',
      label: 'Enter Emergency Contact Phone',
      placeholder: 'Phone',
      parentRecord: 'Employee',
      fieldName: 'phone',
      sublistName: 'emergencycontact'
    }

  }

}

export default appConfig
