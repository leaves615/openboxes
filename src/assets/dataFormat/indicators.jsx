const indicatorsFetched = [
  {
    title: 'Expiration summary',
    type: 'line',
    id: Math.random(),
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Expiration summary',
        fill: true,
        data: [400, 380, 395, 375, 430, 370],
      }],
    },
  },
  {
    title: 'Fill rate',
    type: 'line',
    id: Math.random(),
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Line1 Dataset',
        data: [17, 23, 28, 45, 30, 40],
        fill: false,
        // borderColor: '#fcc169',
        // pointBorderColor: '#fcc169',
        // pointBorderWidth: 3,
        // pointBackgroundColor: '#fcc169',
        // pointHoverBackgroundColor: '#fcc169',
        // pointHoverBorderColor: '#fcc169',
        // pointHoverBorderWidth: 6
      }, {
        label: 'Line2 Dataset',
        data: [35, 30, 30, 35, 25, 30],
        fill: false,
        // borderColor: '#ee4540',
        // pointBorderColor: '#ee4540',
        // pointBorderWidth: 3,
        // pointBackgroundColor: '#ee4540',
        // pointHoverBackgroundColor: '#ee4540',
        // pointHoverBorderColor: '#ee4540',
        // pointHoverBorderWidth: 6
      }, {
        type: 'bar',
        label: 'Bar1 Dataset',
        data: [25, 20, 30, 40, 28, 35],
        // backgroundColor: '#6fb98f',
      }, {
        type: 'bar',
        label: 'Bar2 Dataset',
        data: [20, 23, 28, 45, 30, 40],
        // backgroundColor: '#004445',
      }],
    },
  },
  {
    title: 'Outgoing stock movements',
    type: 'numbers',
    id: Math.random(),
    data: {
      green: {
        value: 18,
        subtitle: 'Created < 4 days ago'
      },
      yellow: {
        value: 48,
        subtitle: 'Created > 4 days ago'
      },
      red: {
        value: 24,
        subtitle: 'Created > 7 days ago'
      }
    },
  },
  {
    title: 'Inventory Summary',
    type: 'horizontalBar',
    id: Math.random(),
    data: {
      labels: ['In stock', 'Above maximum', 'Below reorder', 'Below minimum', 'No longer in stock'],
      datasets: [{
        label: 'Inventory Summary',
        data: [348, 282, 126, 148, 218],
        // backgroundColor: [
        //   '#2c7873', '#52de97', '#a7e9af', '#ff0000', '#e89da2'
        // ],
      }],
    },
  },
  {
    title: 'Sent stock movements',
    type: 'bar',
    id: Math.random(),
    id: Math.random(),
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Inventory Summary',
        data: [24, 30, 26, 20, 18, 17],
        // backgroundColor: '#52de97',
        barThickness: 35,
      }],
    },
  },
  {
    title: 'Stock movements received',
    type: 'doughnut',
    id: Math.random(),
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Stock movements received',
        data: [12, 3, 26, 70, 18],
        // backgroundColor: [
        //   "#2c7873", "#52de97", "#c0ffb3", "#ffba5a", "#cf455c"
        // ]
      }],
    },
  },
  {
    title: 'Stock movements received',
    type: 'loading',
    id: Math.random(),
    data: {},
  }, {
    title: 'Stock movements received',
    type: 'loading',
    id: Math.random(),
    data: {},
  }, {
    title: 'Stock movements received',
    type: 'error',
    id: Math.random(),
    data: {},
  }, {
    title: 'Stock movements received',
    type: 'loading',
    id: Math.random(),
    data: {},
  }

];

export {
  indicatorsFetched
} ;