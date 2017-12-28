const components = {

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

  'page4Forward': {
    type: 'ActionButton',
    name: 'page4Forward',
    label: 'Add more contacts',
    actionType: 'ForwardForm',
    params: {
      pageId: 'page4'
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
  },

  'employeeRecordLink': {
    type: 'Anchor',
    linkType: 'recordLink',
    label: 'Employee Record'
  },



  'warehouseDropdown': {
    type: 'DropDown',
    name: 'warehouse',
    label: 'Select Warehouse',
    placeholder: '',
    parentRecord: '',
    fieldName: '',
    sublistName: '',
    getDataAction: 'https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=121&deploy=1',
    extraParam: true  // this value should be stored as extra param in the state
  },

  'buttonGotoPO': {
    type: 'ActionButton',
    name: 'buttonGotoPO',
    label: 'Next',
    actionType: 'ForwardForm',
    params: {
      pageId: 'mainMenuPage'
    },
    parentRecord: '',
    fieldName: '',
    sublistName: ''
  },

  'poTable': {
    type: 'DataTable',
    name: 'poTable',
    label: 'Select Purchase Order',
    placeholder: '',
    parentRecord: '',
    fieldName: '',
    sublistName: '',
    tableColumns: ['poId', 'name'],
    getDataAction: 'https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=123&deploy=1',
    getDataActionParamsType: 'extraParams',
    getDataActionParamsKeys: ['warehouse'],
    extraParam: true  // this value should be stored as extra param in the state
  },

  'buttonGotoItems': {
    type: 'ActionButton',
    name: 'buttonGotoItems',
    label: 'Next',
    actionType: 'ForwardForm',
    params: {
      pageId: 'pageSelectItem'
    },
    parentRecord: '',
    fieldName: '',
    sublistName: ''
  },

  'itemTable': {
    type: 'DataTable',
    name: 'itemTable',
    label: 'Select Item',
    placeholder: '',
    parentRecord: '',
    fieldName: '',
    sublistName: '',
    tableColumns: ['item', 'received', 'remaining'],
    getDataAction: 'https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=125&deploy=1',
    getDataActionParamsType: 'extraParams',
    getDataActionParamsKeys: ['poTable'],
    extraParam: true  // this value should be stored as extra param in the state
  },

  'buttonGotoItemDetails': {
    type: 'ActionButton',
    name: 'buttonGotoItemDetails',
    label: 'Next',
    actionType: 'ForwardForm',
    params: {
      pageId: 'pageEnterItemDetails'
    },
    parentRecord: '',
    fieldName: '',
    sublistName: ''
  },

  'textBoxQuantity': {
    type: 'TextBox',
    name: 'textBoxQuantity',
    label: 'Enter Quantity to be received',
    placeholder: 'Quantity',
    parentRecord: 'itemreceipt',
    fieldName: 'quantity',
    sublistName: 'item'
  },

  'textBoxSerial': {
    type: 'TextBox',
    name: 'textBoxSerial',
    label: 'Enter LOT Number',
    placeholder: 'Lot Number',
    parentRecord: 'itemreceipt',
    fieldName: 'serialnumbers',
    sublistName: 'item'
  },

  'hiddenValArrayItemDetails': {
    type: 'HiddenValuesSet',
    name: 'hiddenValArrayItemDetails',
    hiddenFieldsArray: ['line', 'item'],
    getDataAction: 'https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=131&deploy=1',
    getDataActionParamsType: 'state',
    getDataActionParamsKeys: ['dataRecord'],
    parentRecord: 'itemreceipt',
    fieldName: 'hiddenfields',
    sublistName: 'item'
  },

  'postItemReceiptSubmitButton': {
    type: 'ActionButton',
    name: 'postItemReceiptSubmitButton',
    label: 'Post Item Receipt',
    actionType: 'SubmitForm',
    params: {
      pageId: 'pageSuccessInfo'
    },
    parentRecord: '',
    fieldName: '',
    sublistName: '',
    submitAction: 'https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=126&deploy=1'
  },

  'receiptRecordLink': {
    type: 'Anchor',
    linkType: 'recordLink',
    label: 'Receipt Record'
  },

  'warehouseMenuIcon': {
    type: 'MenuIcon',
    label: 'Warehouse',
    src: 'https://system.netsuite.com/core/media/media.nl?id=235&c=4919667&h=c1c8eca482760e66b34a',
    targetPageId: 'pageSelectWarehouse'
  },

  'receivingMenuIcon': {
    type: 'MenuIcon',
    label: 'Receiving',
    src: 'https://system.netsuite.com/core/media/media.nl?id=220&c=4919667&h=5e78fff7979a997a75df',
    targetPageId: 'pageSelectPO'
  },

  'pickingMenuIcon': {
    type: 'MenuIcon',
    label: 'Picking',
    src: 'https://system.netsuite.com/core/media/media.nl?id=217&c=4919667&h=f2eff15ba93125b1a313',
    targetPageId: 'pageSelectWarehouse'
  },

  'inventoryMenuIcon': {
    type: 'MenuIcon',
    label: 'Inventory',
    src: 'https://system.netsuite.com/core/media/media.nl?id=203&c=4919667&h=67cb8514ed86400a26f8',
    targetPageId: 'pageSelectWarehouse'
  },

  'workOrderMenuIcon': {
    type: 'MenuIcon',
    label: 'Work Orders',
    src: 'https://system.netsuite.com/core/media/media.nl?id=219&c=4919667&h=4989656d58c68d8783c9',
    targetPageId: 'pageSelectWarehouse'
  },

  'exitMenuIcon': {
    type: 'MenuIcon',
    label: 'Exit',
    src: 'https://system.netsuite.com/core/media/media.nl?id=204&c=4919667&h=257f4d357ae85bbf7dc1',
    targetPageId: 'pageSelectWarehouse'
  }

}

export default components
