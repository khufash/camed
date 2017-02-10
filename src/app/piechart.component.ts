import { Component } from '@angular/core';

interface Data {
  country: string;
  visits: number;
  color: string;
}

interface Configuration {
  dataProvider: Array<Data>;
  fillColors: string;
}

const makeChart = ({ dataProvider, fillColors } : Configuration) => {
  return {
	"type": "pie",
	"theme": "light",
	"dataProvider": [{
	"country": "Lithuania",
	"litres": 501.9
	}, {
	"country": "Czech Republic",
	"litres": 301.9,
	"color": "#ff0000"
	}, {
	"country": "Ireland",
	"litres": 201.1
	}, {
	"country": "Germany",
	"litres": 165.8,
	"color": "#00ff00"
	}],
	"valueField": "litres",
	"titleField": "country",
	"colorField": "color",
	"balloon": {
	"fixedPosition": true
	}
  };
};

@Component({
  selector: 'piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  private id: string = "chartdiv";

  private data: any = [{
    country: "USA",
    visits: 3025,
    color: "#FF0F00"
  }, {
    country: "China",
    visits: 1882,
    color: "#FF6600"
  }, {
    country: "Japan",
    visits: 1809,
    color: "#FF9E01"
  }, {
    country: "Germany",
    visits: 1322,
    color: "#FCD202"
  }, {
    country: "UK",
    visits: 1122,
    color: "#F8FF01"
  }, {
    country: "France",
    visits: 1114,
    color: "#B0DE09"
  }, {
    country: "India",
    visits: 984,
    color: "#04D215"
  }, {
    country: "Spain",
    visits: 711,
    color: "#0D8ECF"
  }, {
    country: "Netherlands",
    visits: 665,
    color: "#0D52D1"
  }, {
    country: "Russia",
    visits: 580,
    color: "#2A0CD0"
  }, {
    country: "South Korea",
    visits: 443,
    color: "#8A0CCF"
  }, {
    country: "Canada",
    visits: 441,
    color: "#CD0D74"
  }];

  private chart: any = makeChart({
    dataProvider: this.data,
    fillColors: "red"
  });

  change() {
    this.chart = makeChart({
      dataProvider: this.data.map((x: Data) => {
        return {
          country: x.country,
          visits: Math.floor(Math.random() * 100),
          color: x.color
        };
      }),
      fillColors: "green"
    });
  }
}
