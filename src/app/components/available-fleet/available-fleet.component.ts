// Core

import { Component } from '@angular/core';

// Chartjs

import { Chart } from 'chart.js';

@Component({
  selector: 'app-available-fleet',
  templateUrl: './available-fleet.component.html',
  styleUrls: ['./available-fleet.component.scss']
})
export class AvailableFleetComponent {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("DonutChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Down', 'Up', 'Maybe'],
        datasets: [{
          label: 'Fleet Availability',
          data: [25, 37, 10],
          backgroundColor: [
            '#F50057',
            '#61D800',
            '#FF9E22',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        responsive: true,
        layout: {
          padding: 5
        }
      }
    });
  }
}
