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
    this.chart.resize(200,400);
  }

  createChart() {
    this.chart = new Chart("BarChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2023-05-10', '2023-05-11', '2023-05-12', '2023-05-13','2023-05-14'],
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



