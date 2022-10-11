anychart.onDocumentReady(function () {

  drawMyChart();
  drawDupleChart();
  drawUserChart();
});

function drawMyChart() {
  // create pie chart with passed data
  let chart = anychart.pie([
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
  chart.draw(true);
}

function drawDupleChart() {
  let chart = anychart.pie([
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
      fontSize: '24px',
    })
    // set chart radius
    .radius('45%')
    // create empty area in pie chart
    .innerRadius('40%');

  chart.container('my_portfolio_graph_for_comparison');
  chart.draw();
}

function drawUserChart() {
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
  
    credits.forEach(credit => {
      credit.innerHTML = "";
    })
  }
  removeAD();
}