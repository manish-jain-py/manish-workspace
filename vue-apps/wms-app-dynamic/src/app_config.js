const appConfig = {

  app: {
    homePage: 'pageSelectWarehouse',

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
        componentList: ['employeeRecordLink']
      },


      pageSelectWarehouse: {
        title: 'Select Your Location',
        componentList: ['warehouseDropdown', 'buttonGotoPO']
      },
      pageSelectPO: {
        title: 'Select Purchase Order',
        componentList: ['poTable', 'buttonGotoItems']
      },
      pageSelectItem: {
        title: 'Select Item',
        componentList: ['itemTable', 'buttonGotoItemDetails', 'postItemReceiptSubmitButton']
      },
      pageEnterItemDetails: {
        title: 'Enter Item Details',
        componentList: ['hiddenValArrayItemDetails', 'textBoxQuantity', 'textBoxSerial', 'buttonGotoItems', 'postItemReceiptSubmitButton']
      },
      pageSuccessInfo: {
        title: 'INFO',
        componentList: ['receiptRecordLink', 'warehouseMenuIcon']
      },
      mainMenuPage: {
        title: 'Select Menu',
        componentList: ['warehouseMenuIcon', 'receivingMenuIcon', 'pickingMenuIcon', 'inventoryMenuIcon', 'workOrderMenuIcon', 'exitMenuIcon']
      }

    }
  }

}

export default appConfig
