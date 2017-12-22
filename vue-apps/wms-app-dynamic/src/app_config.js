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
        componentList: ['warehouseDropdown', 'buttonGotoPO']
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
        componentList: []
      }

    }
  }

}

export default appConfig
