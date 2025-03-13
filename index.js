const temp = document.querySelector(".temp");
const info = document.querySelector(".info");
const loca = document.querySelector(".loca");
const apiKey = "자신의 키로 변경";

temp.addEventListener('mouseover', function() {
    this.classList.add('active');
})

fetch(`http://openapi.seoul.go.kr:8088/${apiKey}/json/WPOSInformationTime/1/1/`).then(response => response.json()).then
(json => {

    dataTemp = json.WPOSInformationTime.row[0].W_TEMP;
    dataDate = json.WPOSInformationTime.row[0].MSR_DATE;
    dataTime = json.WPOSInformationTime.row[0].MSR_TIME;
    dataLoca = json.WPOSInformationTime.row[0].SITE_ID;

    let dataYear = dataDate.substring(0,4);
    let dataMonth = dataDate.substring(4,6);
    let dataDay = dataDate.substring(6,8);
    let dataHour = dataTime.substring(0,2);
    let dataMin = dataTime.substring(3,5);

    console.log(dataLoca);

    // temp.innerHTML = `${dataTemp}°C`
    info.innerHTML = `${dataYear}년 ${dataMonth}월 ${dataDay}일 | ${dataHour}시 ${dataMin}분 측정`
    loca.innerHTML = `${dataLoca}에서 측정됨`
     
    let i = 0.0

    function upper() {
   
        if (i < dataTemp) {
            temp.innerHTML = `${i.toFixed(1)}°C`;
            i = i + 0.1;
            setTimeout(upper, 5);

        }
    }

    upper();

})
