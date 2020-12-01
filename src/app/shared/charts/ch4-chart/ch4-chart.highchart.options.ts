/**
 * -----------------------------------------------
 * -- CH4 HighChart Settings Options Generator ---
 * -----------------------------------------------
 */
export class HighChartOptions {

  // Properties
  private pTitle: string;
  private pPath: any;
  private pXAxisTitle: string;
  private pYAxisTitle: string;
  private pUseUTC: boolean;

  private pRangeSelectorButtons: any[];
  private pRangeSelectorInputEnable: boolean;
  private pRangeSelectorSelected: number;

  private pSeries: any[];


  constructor() {

    // Default Properties

    this.pTitle = 'High Chart Settings Dahboard';

    this.pPath = {};

    this.pXAxisTitle = 'X Axis';
    this.pYAxisTitle = 'Y Axis';

    this.pUseUTC = false;

    this.pRangeSelectorInputEnable = false;
    this.pRangeSelectorSelected = 0;
    this.pRangeSelectorButtons = [
      {
      type: 'all',
      text: 'All',
      events: {
        click: () => { }
      }
    }, {
      count: 1,
      type: 'minute',
      text: '1M',
      events: {
        click: () => { }
      }
    }, {
      count: 5,
      type: 'minute',
      text: '5M',
      events: {
        click: () => { }
      }
    }, {
      count: 10,
      type: 'minute',
      text: '10M',
      events: {
        click: () => { }
      }
    }, {
      count: 1,
      type: 'hour',
      text: '1h',
      events: {
        click: () => { }
      }
    }, {
      count: 24,
      type: 'hour',
      text: '24h',
      events: {
        click: () => { }
      }
    }, {
      count: 168,
      type: 'hour',
      text: '1wk',
      events: {
        click: () => { }
      }
    }
    
  ];

    this.pSeries = [{ name: '', data: [] }];

  }
  // Methods
  setTitle(title: string) { this.pTitle = title; }
  getTitle() { return this.pTitle; }
  getPath() { return this.pPath; }
  setPath(path) {this.pPath = path;}
  setXAxisTitle(title: string) { this.pXAxisTitle = title; }
  getXAxisTitle() { return this.pXAxisTitle; }
  setYAxisTitle(title: string) { this.pYAxisTitle = title; }
  getYAxisTitle() { return this.pYAxisTitle; }
  setSeriesData(series: any[]) { this.pSeries = series;}
  getSeriesData() {return this.pSeries;}

  setSensors(sensors: any) {

    let pSeries, _pSeries;
    pSeries = [];

    for (let k = 0; k < sensors.length; k++) {
      for (let j = 0; j < 3; j++) {
        const _id = sensors[k].location.id + ':' + sensors[k].channels[j].id;
        _pSeries = {
          id: _id,
          stage: sensors[k].layout.containerIndex,
          enable: sensors[k].channels[j].enable,
          channel: sensors[k].channels[j].id,
          location: {
            description: sensors[k].location.description,
            id: _id.split(':')[0]
          },
          name: sensors[k].location.description + ' Channel : ' + sensors[k].channels[j].id,
          data: []
        };
        pSeries.push(_pSeries);
      }
    }
    this.setSeriesData(pSeries);
  }

  getOptions() {
    return {
      title: {
        text: this.pTitle
      },
      chart: {
        height: '650px'
      },
      boost: {
        enabled: true,
        useGPUTranslations: true,
        usePreAllocated: true
      },
      zoomType: 'xy',
      xAxis: {
        title: {
          text: this.pXAxisTitle
        },
        ordinal: false
      },
      yAxis: [{
        title: {
          text: this.pYAxisTitle
        },
        labels: {
          format: '{value:.2f}'
        },
        min: 0, minRange: 0.1,
        opposite: false
      }],
      time: {
        useUTC: this.pUseUTC
      },
      rangeSelector: {
        inputEnabled: this.pRangeSelectorInputEnable,
        selected: this.pRangeSelectorSelected,
        buttons: this.pRangeSelectorButtons
      },
      navigator: {
        enabled: true
      },
      scrollbar: {
        enabled: true
      },
      series: this.pSeries,
      legend: {
        enabled: true,
        floating: false,
        borderWidth: 0,
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
        labelFormatter: function() {
          return this.name ? '<span style="color:' + this.color + '"> Device UID : ' + this.name + ': </span><br/>' : '';
        }
      },
    };
  }

  setInitData(series) {
  return new Promise((resolve, reject) => {
    const _series = JSON.parse(JSON.stringify(series) + '');
    const series_sorted = _series.map(serie => {
      return {
        name: serie.name,
        uid: serie.name,
        data: serie.data.sort(function (a, b) { return a[0] - b[0]; })
      }
    });
    this.pSeries = series_sorted;

    console.warn('  ')
    console.warn('  series ')
    console.warn(series)
    console.warn('  ')

    setTimeout(() => {
      resolve(true)
    }, 1000)
  } )
  }




}