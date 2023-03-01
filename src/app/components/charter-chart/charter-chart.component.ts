// Core

import { Component } from '@angular/core';

// Chartjs

import { Chart } from 'chart.js';


@Component({
  selector: 'app-charter-chart',
  templateUrl: './charter-chart.component.html',
  styleUrls: ['./charter-chart.component.scss']
})

export class CharterChartComponent {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("BarChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13','2022-05-14'],
        datasets: [
          {
            label: "Power",
            data: ['13', '15', '14', '12', '8'],
            backgroundColor: 'blue'
          },
          {
            label: "Sail",
            data: ['6', '5', '5', '3', '4'],
            backgroundColor: '#61D800'
          }
        ]
      },
      options: { 
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true
          }
        },
        plugins: {
          legend: {
            display: true, 
            position: 'bottom',
          }
        }
      }
    });
  }
}



