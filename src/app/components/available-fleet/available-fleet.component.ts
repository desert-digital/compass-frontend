// Core

import { Component } from '@angular/core';

// d3

import * as d3 from 'd3';

@Component({
  selector: 'app-available-fleet',
  templateUrl: './available-fleet.component.html',
  styleUrls: ['./available-fleet.component.scss']
})
export class AvailableFleetComponent {
  private data = [

    { "Framework": "Up", "Stars": "15"},
    { "Framework": "Down", "Stars": "12" },
    { "Framework": "Maybe", "Stars": "6" }
  ];
  private svg: any;
  private margin = 50;
  private width = 360;
  private height = 360;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.Stars.toString()))
      .range(["#C6FF00", "#FF3D00", "#FFA000"]);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(this.radius/3)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#aaaaaa")
      .style("stroke-width", "6px");

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius + 50);

    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data.Framework)
      .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 16)
      .style("color", "#FFFFFF");
  }
}
