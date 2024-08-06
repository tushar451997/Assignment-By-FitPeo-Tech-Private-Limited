import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Container, Row, Col } from 'react-bootstrap';

const BarChart = () => {
  const ref = useRef();

  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 10, left: 20 };
    const width = ref.current.offsetWidth - margin.left - margin.right;
    const height = 150 - margin.top - margin.bottom;
    const svg = d3.select(ref.current).html("")
      .append('svg')
      .attr('width', '100%')
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xValues = d3.range(1, 27);

    // Generate corresponding y-axis values
    const data = xValues.map((x, i) => ({
      category: x,
      value: Math.floor(Math.random() * 1500) + 1
    }));

    // Set the x-axis scale
    const xScale = d3.scaleBand()
      .domain(xValues)
      .range([0, width])
      .padding(0.2);

    // Set the y-axis scale
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0])
      .nice();

    // Add horizontal lines for every y-axis reading
    svg.selectAll('line')
      .data(yScale.ticks())
      .enter()
      .append('line')
      .attr('x1', 0)
      .attr('y1', d => yScale(d))
      .attr('x2', width)
      .attr('y2', d => yScale(d))
      .attr('stroke', 'lightgray') // Change the stroke color to lightgray
      .attr('stroke-width', 0.5);

    // Add the x-axis
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale)
        .tickFormat(function(d){
          if (d % 3 === 0) {
            return d
          }
        })
        .tickSize(0) // set the tick size
        .tickPadding(10) // add top padding to the tick labels
      );

    // Add the y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale).tickFormat(function(d) {
        if (d === 0) {
          return 0
        }
        if(d%5000){
          return d / 1000 + 'k';
        }
      })
        .tickSize(0) // set the tick size
      );

    svg.selectAll('text')
      .attr('fill', 'white')

    // Add the bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(d.category) + (xScale.step() - xScale.bandwidth()) / 2)
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.value))
      .attr('fill', 'blue') // set the fill color to light blue
      .attr('rx', 10) // set the corner radius to 5
      .attr('ry', 15); // set the corner radius to 5
  }, []);

  return (
    <Container fluid>
        <h4 style={{color:'white'}}>Activity</h4>
      <Row>
        <Col xs={12} md={18} lg={12}  className="mx-auto">
          <div ref={ref} className="m-0 p-0" style={{ height: 150 }} />
        </Col>
      </Row>
    </Container>
  );
};

export default BarChart;