// Core

import { Component } from '@angular/core';

// d3

import * as d3 from 'd3';

@Component({
  selector: 'app-service-orders-chart',
  templateUrl: './service-orders-chart.component.html',
  styleUrls: ['./service-orders-chart.component.scss']
})
export class ServiceOrdersChartComponent {
  private data = [
    { "Date": "18 March", "Orders": "12" },
    { "Date": "19 March", "Orders": "13" },
    { "Date": "20 March", "Orders": "15" },
    { "Date": "21 March", "Orders": "14" },
    { "Date": "22 March", "Orders": "10" },
    { "Date": "23 March", "Orders": "9" },
    { "Date": "24 March", "Orders": "8" },

  ];
  private svg: any;
  private margin = 40;
  private width = 600 - (this.margin * 2);
  private height = 320 - (this.margin * 2);

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#service-orders")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Date))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 20])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.Date))
      .attr("y", (d: any) => y(d.Orders))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.Orders))
      .attr("fill", "#3F51B5");
  }
}

