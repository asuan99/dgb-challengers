anychart.onDocumentReady(function () {
    // create pie chart with passed data
    var chart = anychart.pie([
      ['a', 1],
      ['b', 1],
      ['c', 1],
      ['d', 1],
      ['e', 1],
      ['f', 1],
      ['g', 1],
      ['h', 1],
      ['i', 1],
      ['others', 1],
    ]);

    // set chart title text settings
    chart
      .background({
        corners: 30,
        fill: 'transparent',
      })
      .legend({
        position: 'right',
        itemsLayout: 'vertical-expandable',
        height: '160px',
        align: 'middle',
     })
      .title({
        text: '내 포트폴리오',
        align: 'left',
        fontColor: 'white',
        fontSize: '32px',
      })
      // set chart radius
      .radius('45%')
      // create empty area in pie chart
      .innerRadius('40%');

    // set container id for the chart
    chart.container('my_portfolio_graph');
    // initiate chart drawing
    chart.draw();

    document.querySelector(".anychart-credits").innerHTML = "";
});