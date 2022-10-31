const reference_content = document.querySelector(".retirement-reference-content");
const retirement_table = document.querySelector(".retirement-info-table");

function checkSpace(str) {
	if(str.search(/\s/) != -1) {
		return true;
	} else {
		return false;
	}
}

function checkPattern(str) {
	var pattern2 = /[a-zA-Z]/;			// 문자
	var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;	// 특수문자

	if(pattern2.test(str) || pattern3.test(str)) {
		return true;
	} else {
		return false;
	}
}

function resetRef(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

function commaNumber(num) {
    let conversion_num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    return conversion_num;
}

function clickMonth() {
    const target_month_revenue = document.querySelector("#target_month_revenue").value;

    if(checkSpace(target_month_revenue) || checkPattern(target_month_revenue)) {
        alert('숫자만 입력해주세요.');
        return null;
    }

    if(parseInt(target_month_revenue) < 500000) {
        alert('500,000원 이상 입력해주세요.');
        return null;
    }
    resetRef(reference_content);
    
    const table = document.createElement("table");

    table.setAttribute('class', 'retirement-reference-table');

    const tr1 = document.createElement("tr");
    let td1_1 = document.createElement("td");
    let td1_2 = document.createElement("td");

    td1_1.setAttribute('rowspan', '2');
    td1_2.setAttribute('colspan', '3');

    td1_1.innerHTML = "(은퇴 후) 목표<br>월 수익";
    td1_2.innerHTML = "연간수익률";

    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    table.appendChild(tr1);

    const tr2 = document.createElement("tr");
    let td2_1 = document.createElement("td");
    let td2_2 = document.createElement("td");
    let td2_3 = document.createElement("td");

    td2_1.innerHTML = "3.8%";
    td2_2.innerHTML = "4.6%";
    td2_3.innerHTML = "11.2%";

    tr2.appendChild(td2_1);
    tr2.appendChild(td2_2);
    tr2.appendChild(td2_3);
    table.appendChild(tr2);

    const tr3 = document.createElement("tr");
    let td3_1 = document.createElement("td");
    let td3_2 = document.createElement("td");
    let td3_3 = document.createElement("td");
    let td3_4 = document.createElement("td");

    td3_1.innerHTML = `${commaNumber(target_month_revenue)}원`;
    td3_2.innerHTML = `${commaNumber(Math.round(target_month_revenue * 12 / 0.038))}원`;
    td3_3.innerHTML = `${commaNumber(Math.round(target_month_revenue * 12 / 0.046))}원`;
    td3_4.innerHTML = `${commaNumber(Math.round(target_month_revenue * 12 / 0.112))}원`;

    tr3.appendChild(td3_1);
    tr3.appendChild(td3_2);
    tr3.appendChild(td3_3);
    tr3.appendChild(td3_4);
    table.appendChild(tr3);

    reference_content.appendChild(table);
}

function clickAnnual() {
    const target_month_revenue = document.querySelector("#target_month_revenue").value;
    const annual_earn_rate = document.querySelector("#annual_earn_rate").value;

    if(checkSpace(annual_earn_rate) || checkPattern(annual_earn_rate)) {
        alert('숫자만 입력해주세요.');
        return null;
    }

    if(parseInt(annual_earn_rate) <= 0) {
        alert('1 이상의 숫자를 입력해주세요.');
        return null;
    }
    resetRef(reference_content);
    
    const table = document.createElement("table");

    table.setAttribute('class', 'retirement-reference-table');

    const tr1 = document.createElement("tr");
    let td1_1 = document.createElement("td");
    let td1_2 = document.createElement("td");

    td1_1.setAttribute('rowspan', '2');
    td1_2.setAttribute('colspan', '3');

    td1_1.innerHTML = "(은퇴 후) 목표<br>월 수익";
    td1_2.innerHTML = "연간수익률";

    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    table.appendChild(tr1);

    const tr2 = document.createElement("tr");
    let td2 = document.createElement("td");

    td2.innerHTML = `${annual_earn_rate}%`;

    tr2.appendChild(td2);
    table.appendChild(tr2);

    const tr3 = document.createElement("tr");
    let td3_1 = document.createElement("td");
    let td3_2 = document.createElement("td");

    td3_2.setAttribute('colspan', '3');

    td3_1.innerHTML = `${commaNumber(target_month_revenue)}원`;
    td3_2.innerHTML = `${commaNumber(Math.round(target_month_revenue * 12 / (parseFloat(annual_earn_rate) / 100)))}원`;

    tr3.appendChild(td3_1);
    tr3.appendChild(td3_2);
    table.appendChild(tr3);

    let hTag = document.createElement("h2");

    hTag.innerHTML = `${commaNumber(Math.round(target_month_revenue * 12 / (parseFloat(annual_earn_rate) / 100)))}원 달성하기 위해서는 00년이 걸립니다.`;

    reference_content.appendChild(table);
    reference_content.appendChild(hTag);
}

function clickPayment() {
    const month_payment = document.querySelector("#month_payment").value;
    
    const target_month_revenue = document.querySelector("#target_month_revenue").value;
    const annual_earn_rate = document.querySelector("#annual_earn_rate").value;

    resetRef(retirement_table);

    if(checkSpace(annual_earn_rate) || checkPattern(annual_earn_rate)) {
        alert('숫자만 입력해주세요.');
        return null;
    }

    if(parseInt(annual_earn_rate) >= 100000) {
        alert('100,000원 이상 입력해주세요.');
        return null;
    }

    const table = document.createElement("table");

    const tr1 = document.createElement("tr");
    let td1_1 = document.createElement("td");
    let td1_2 = document.createElement("td");
    let td1_3 = document.createElement("td");
    let td1_4 = document.createElement("td");
    let td1_5 = document.createElement("td");
    let td1_6 = document.createElement("td");
    
    td1_1.innerHTML = "";
    td1_2.innerHTML = "3.8%";
    td1_3.innerHTML = "4.6%";
    td1_4.innerHTML = "7%";
    td1_5.innerHTML = "9.4%";
    td1_6.innerHTML = "11.2%";

    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    tr1.appendChild(td1_3);
    tr1.appendChild(td1_4);
    tr1.appendChild(td1_5);
    tr1.appendChild(td1_6);
    table.appendChild(tr1);

    const tr2 = document.createElement("tr");
    let td2_1 = document.createElement("td");
    let td2_2 = document.createElement("td");
    let td2_3 = document.createElement("td");
    let td2_4 = document.createElement("td");
    let td2_5 = document.createElement("td");
    let td2_6 = document.createElement("td");

    td2_1.innerHTML = "1년";
    td2_2.innerHTML = "---";
    td2_3.innerHTML = "---";
    td2_4.innerHTML = "---";
    td2_5.innerHTML = "---";
    td2_6.innerHTML = "---";

    tr2.appendChild(td2_1);
    tr2.appendChild(td2_2);
    tr2.appendChild(td2_3);
    tr2.appendChild(td2_4);
    tr2.appendChild(td2_5);
    tr2.appendChild(td2_6);
    table.appendChild(tr2);

    const tr3 = document.createElement("tr");
    let td3_1 = document.createElement("td");
    let td3_2 = document.createElement("td");
    let td3_3 = document.createElement("td");
    let td3_4 = document.createElement("td");
    let td3_5 = document.createElement("td");
    let td3_6 = document.createElement("td");

    td3_1.innerHTML = "2년";
    td3_2.innerHTML = "---";
    td3_3.innerHTML = "---";
    td3_4.innerHTML = "---";
    td3_5.innerHTML = "---";
    td3_6.innerHTML = "---";

    tr3.appendChild(td3_1);
    tr3.appendChild(td3_2);
    tr3.appendChild(td3_3);
    tr3.appendChild(td3_4);
    tr3.appendChild(td3_5);
    tr3.appendChild(td3_6);
    table.appendChild(tr3);

    const tr4 = document.createElement("tr");
    let td4_1 = document.createElement("td");
    let td4_2 = document.createElement("td");
    let td4_3 = document.createElement("td");
    let td4_4 = document.createElement("td");
    let td4_5 = document.createElement("td");
    let td4_6 = document.createElement("td");

    td4_1.innerHTML = "5년";
    td4_2.innerHTML = "---";
    td4_3.innerHTML = "---";
    td4_4.innerHTML = "---";
    td4_5.innerHTML = "---";
    td4_6.innerHTML = "---";

    tr4.appendChild(td4_1);
    tr4.appendChild(td4_2);
    tr4.appendChild(td4_3);
    tr4.appendChild(td4_4);
    tr4.appendChild(td4_5);
    tr4.appendChild(td4_6);
    table.appendChild(tr4);

    const tr5 = document.createElement("tr");
    let td5_1 = document.createElement("td");
    let td5_2 = document.createElement("td");
    let td5_3 = document.createElement("td");
    let td5_4 = document.createElement("td");
    let td5_5 = document.createElement("td");
    let td5_6 = document.createElement("td");

    td5_1.innerHTML = "10년";
    td5_2.innerHTML = "---";
    td5_3.innerHTML = "---";
    td5_4.innerHTML = "---";
    td5_5.innerHTML = "---";
    td5_6.innerHTML = "---";

    tr5.appendChild(td5_1);
    tr5.appendChild(td5_2);
    tr5.appendChild(td5_3);
    tr5.appendChild(td5_4);
    tr5.appendChild(td5_5);
    tr5.appendChild(td5_6);
    table.appendChild(tr5);

    const tr6 = document.createElement("tr");
    let td6_1 = document.createElement("td");
    let td6_2 = document.createElement("td");
    let td6_3 = document.createElement("td");
    let td6_4 = document.createElement("td");
    let td6_5 = document.createElement("td");
    let td6_6 = document.createElement("td");

    td6_1.innerHTML = "20년";
    td6_2.innerHTML = "---";
    td6_3.innerHTML = "---";
    td6_4.innerHTML = "---";
    td6_5.innerHTML = "---";
    td6_6.innerHTML = "---";

    tr6.appendChild(td6_1);
    tr6.appendChild(td6_2);
    tr6.appendChild(td6_3);
    tr6.appendChild(td6_4);
    tr6.appendChild(td6_5);
    tr6.appendChild(td6_6);
    table.appendChild(tr6);

    retirement_table.appendChild(table);
}