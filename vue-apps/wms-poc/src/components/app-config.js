const pages = [

  {
    pageTitle: 'Experiment',
    components: [
      {
        type: 'grid',
        labels: ['item', 'received', 'remaining'],
        sourceDataAction: 'https://system.na2.netsuite.com/app/site/hosting/scriptlet.nl?script=125&deploy=1',
        onRowClickAction: 'doSomething'
      }
    ]
  }

]

export default pages
