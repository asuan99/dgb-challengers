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
      fontColor: '#ffffff',
    })
    // set chart radius
    .radius('45%')
    // create empty area in pie chart
    .innerRadius('30%');


  // set container id for the chart
  chart.container('my_portfolio_graph');
  // initiate chart drawing
  chart.draw(true);
}

function drawDupleChart() {
  let chart = anychart.pie([
    ['삼성전자', 3],
    ['네이버', 4],
    ['루닛', 1],
    ['DGB 금융지주', 1],
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
      fontColor: '#ffffff',
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
    ['LG화학', 5],
    ['대한항공', 2],
    ['포스코', 3],
    ['카카오', 1],
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
      fontColor: '#ffffff',
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