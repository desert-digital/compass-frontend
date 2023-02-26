import { Component } from '@angular/core';

// d3

import * as d3 from 'd3';

@Component({
  selector: 'app-charter-chart',
  templateUrl: './charter-chart.component.html',
  styleUrls: ['./charter-chart.component.scss']
})
export class CharterChartComponent {
  private data = [
    { "date": "18 March", "sail": "12" },
    { "date": "19 March", "sail": "13" },
    { "date": "20 March", "sail": "15" },
    { "date": "21 March", "sail": "14" },
    { "date": "22 March", "sail": "10" },
    { "date": "23 March", "sail": "1" },
    { "date": "24 March", "sail": "2" },

  ];
  private svg: any;
  private x: any;
  private y: any;
  private layersBarArea: any;
  private layersBar: any;
  private stackedSeries: any;
  private margin = 40;
  private width = 600 - (this.margin * 2);
  private height = 320 - (this.margin * 2);

  private colors = ["#C9D6DF", "#F7EECF", "#E3E1B2", "#F9CAC8"];


  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#charters")
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
      .domain(data.map(d => d.date))
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
      .domain([0, 30])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.date))
      .attr("y", (d: any) => y(d.sail))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.sail))
      .attr("fill", "#d04a35");
  }
}



