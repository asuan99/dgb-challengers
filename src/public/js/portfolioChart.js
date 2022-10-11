anychart.onDocumentReady(function () {
    // create pie chart with passed data
    const chart1 = anychart.pie([
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
    chart1
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

    const chart2 = chart1;
    chart2.title({
      fontSize: '24px',
    })

    // set container id for the chart
    chart1.container('my_portfolio_graph');
    chart2.container('my_portfolio_graph_for_comparison')
    // initiate chart drawing
    chart1.draw();
    chart2.draw();
});

anychart.onDocumentReady(function () {
  // create pie chart with passed data
  var chart = anychart.pie([
    ['a', 5],
    ['b', 2],
    ['c', 3],
    ['d', 1],
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
      text: '유저 포트폴리오',
      align: 'left',
      fontColor: 'white',
      fontSize: '24px',
    })
    // set chart radius
    .radius('45%')
    // create empty area in pie chart
    .innerRadius('40%');

  // set container id for the chart
  chart.container('user_portfolio_graph');
  // initiate chart drawing
  chart.draw();

  const removeAD = () => {
    credits = document.querySelectorAll(".anychart-credits");
  
    console.log(credits);
    credits.forEach(credit => {
      credit.innerHTML = "";
    })
  }
  removeAD();
});