/*!
 Maybe you're thinking, why so many lines of codes? Okay, You know what ! I could build the app within 24hrs but I tried to make the project kinda different, that's why it takes a whole week!!! I started working on this project first in 22 August,2020 and I finally able to build this in 29 August,2020.
 However, I made all things manually, and that's why you can see sooooo many lines of codes. But there's nothing to be worry about the code, it's well documented. Special Thanks to covid19api.com for their super updated and open source covid 19 API. Thanks ♥
 */

$(document).ready(function () {
//tofayel islam
  // Search Box Functions

  // Search Box0 Functions
  $("#table0Input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table0 tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Search Button0 Function

  $("#searchBtn0").on("click", function () {
    $("#table0InputFormField").toggle("fast");
  });

  // Search Box1 Functions
  $("#table1Input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table1 tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Search Button1 Function

  $("#searchBtn1").on("click", function () {
    $("#table1InputFormField").toggle("fast");
  });

  // Search Box2 Functions
  $("#table2Input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table2 tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Search Button2 Function

  $("#searchBtn2").on("click", function () {
    $("#table2InputFormField").toggle("fast");
  });

  // Search Box3 Functions
  $("#table3Input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table3 tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Search Button3 Function

  $("#searchBtn3").on("click", function () {
    $("#table3InputFormField").toggle("fast");
  });

  // Search Box4 Functions
  $("#table4Input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table4 tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Search Button4 Function

  $("#searchBtn4").on("click", function () {
    $("#table4InputFormField").toggle("fast");
  });

  // Search Box5 Functions
  $("#table5Input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table5 tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Search Button5 Function

  $("#searchBtn5").on("click", function () {
    $("#table5InputFormField").toggle("fast");
  });

  // End of Search Box0 Functions

  // API Integration
  var url = "https://api.covid19api.com/summary";

  $.get(url, function (data) {
    // variables of global data for at a glance cards
    var sumTotalCases, sumNewCases, sumTotalRecov, sumTotalDeath;

    // At A Glance Section Live Data. sum is stand for Summary.
    sumTotalCases = Number(data.Global.TotalConfirmed).toLocaleString();
    sumTotalRecov = Number(data.Global.TotalRecovered).toLocaleString();
    sumNewCases = Number(data.Global.NewConfirmed).toLocaleString();
    sumTotalDeath = Number(data.Global.TotalDeaths).toLocaleString();

    $("#sumTotalCases").html(sumTotalCases + "+");
    $("#sumTotalRecov").html(sumTotalRecov + "+");
    $("#sumNewCases").html(sumNewCases + "+");
    $("#sumTotalDeath").html(sumTotalDeath + "+");
    // End of At A Glance Section

    // Countries Data from API

    // Tc stands for TotalConfirmed
    // Nc stands for NewConfirmed
    // Tr stands for TotalRecovered
    // Nr stands for NewRecovered
    // Td stands for TotalDeaths
    // Nd stands for NewDeaths

    // Afghanistan [0]
    var afTc, afNc, afTr, afNr, afTd, afNd;

    afTc = Number(data.Countries[0].TotalConfirmed).toLocaleString();
    afNc = Number(data.Countries[0].NewConfirmed).toLocaleString();
    afTr = Number(data.Countries[0].TotalRecovered).toLocaleString();
    afNr = Number(data.Countries[0].NewRecovered).toLocaleString();
    afTd = Number(data.Countries[0].TotalDeaths).toLocaleString();
    afNd = Number(data.Countries[0].NewDeaths).toLocaleString();

    $("#afTc").html(afTc + "+");
    $("#afNc").html(afNc + "+");
    $("#afTr").html(afTr + "+");
    $("#afNr").html(afNr + "+");
    $("#afTd").html(afTd + "+");
    $("#afNd").html(afNd + "+");

    // Albania [1]
    var alTc, alNc, alTr, alNr, alTd, alNd;

    alTc = Number(data.Countries[1].TotalConfirmed).toLocaleString();
    alNc = Number(data.Countries[1].NewConfirmed).toLocaleString();
    alTr = Number(data.Countries[1].TotalRecovered).toLocaleString();
    alNr = Number(data.Countries[1].NewRecovered).toLocaleString();
    alTd = Number(data.Countries[1].TotalDeaths).toLocaleString();
    alNd = Number(data.Countries[1].NewDeaths).toLocaleString();

    $("#alTc").html(alTc + "+");
    $("#alNc").html(alNc + "+");
    $("#alTr").html(alTr + "+");
    $("#alNr").html(alNr + "+");
    $("#alTd").html(alTd + "+");
    $("#alNd").html(alNd + "+");

    // Algeria [2]
    var dzTc, dzNc, dzTr, dzNr, dzTd, dzNd;

    dzTc = Number(data.Countries[2].TotalConfirmed).toLocaleString();
    dzNc = Number(data.Countries[2].NewConfirmed).toLocaleString();
    dzTr = Number(data.Countries[2].TotalRecovered).toLocaleString();
    dzNr = Number(data.Countries[2].NewRecovered).toLocaleString();
    dzTd = Number(data.Countries[2].TotalDeaths).toLocaleString();
    dzNd = Number(data.Countries[2].NewDeaths).toLocaleString();

    $("#dzTc").html(dzTc + "+");
    $("#dzNc").html(dzNc + "+");
    $("#dzTr").html(dzTr + "+");
    $("#dzNr").html(dzNr + "+");
    $("#dzTd").html(dzTd + "+");
    $("#dzNd").html(dzNd + "+");

    // Andorra [3]
    var adTc, adNc, adTr, adNr, adTd, adNd;

    adTc = Number(data.Countries[3].TotalConfirmed).toLocaleString();
    adNc = Number(data.Countries[3].NewConfirmed).toLocaleString();
    adTr = Number(data.Countries[3].TotalRecovered).toLocaleString();
    adNr = Number(data.Countries[3].NewRecovered).toLocaleString();
    adTd = Number(data.Countries[3].TotalDeaths).toLocaleString();
    adNd = Number(data.Countries[3].NewDeaths).toLocaleString();

    $("#adTc").html(adTc + "+");
    $("#adNc").html(adNc + "+");
    $("#adTr").html(adTr + "+");
    $("#adNr").html(adNr + "+");
    $("#adTd").html(adTd + "+");
    $("#adNd").html(adNd + "+");

    // Angola [4]
    var aoTc, aoNc, aoTr, aoNr, aoTd, aoNd;

    aoTc = Number(data.Countries[4].TotalConfirmed).toLocaleString();
    aoNc = Number(data.Countries[4].NewConfirmed).toLocaleString();
    aoTr = Number(data.Countries[4].TotalRecovered).toLocaleString();
    aoNr = Number(data.Countries[4].NewRecovered).toLocaleString();
    aoTd = Number(data.Countries[4].TotalDeaths).toLocaleString();
    aoNd = Number(data.Countries[4].NewDeaths).toLocaleString();

    $("#aoTc").html(aoTc + "+");
    $("#aoNc").html(aoNc + "+");
    $("#aoTr").html(aoTr + "+");
    $("#aoNr").html(aoNr + "+");
    $("#aoTd").html(aoTd + "+");
    $("#aoNd").html(aoNd + "+");

    // Antigua & Barbuda [5]
    var agTc, agNc, agTr, agNr, agTd, agNd;

    agTc = Number(data.Countries[5].TotalConfirmed).toLocaleString();
    agNc = Number(data.Countries[5].NewConfirmed).toLocaleString();
    agTr = Number(data.Countries[5].TotalRecovered).toLocaleString();
    agNr = Number(data.Countries[5].NewRecovered).toLocaleString();
    agTd = Number(data.Countries[5].TotalDeaths).toLocaleString();
    agNd = Number(data.Countries[5].NewDeaths).toLocaleString();

    $("#agTc").html(agTc + "+");
    $("#agNc").html(agNc + "+");
    $("#agTr").html(agTr + "+");
    $("#agNr").html(agNr + "+");
    $("#agTd").html(agTd + "+");
    $("#agNd").html(agNd + "+");

    // Argentina [6]
    var arTc, arNc, arTr, arNr, arTd, arNd;

    arTc = Number(data.Countries[6].TotalConfirmed).toLocaleString();
    arNc = Number(data.Countries[6].NewConfirmed).toLocaleString();
    arTr = Number(data.Countries[6].TotalRecovered).toLocaleString();
    arNr = Number(data.Countries[6].NewRecovered).toLocaleString();
    arTd = Number(data.Countries[6].TotalDeaths).toLocaleString();
    arNd = Number(data.Countries[6].NewDeaths).toLocaleString();

    $("#arTc").html(arTc + "+");
    $("#arNc").html(arNc + "+");
    $("#arTr").html(arTr + "+");
    $("#arNr").html(arNr + "+");
    $("#arTd").html(arTd + "+");
    $("#arNd").html(arNd + "+");

    // Armenia [7]
    var amTc, amNc, amTr, amNr, amTd, amNd;

    amTc = Number(data.Countries[7].TotalConfirmed).toLocaleString();
    amNc = Number(data.Countries[7].NewConfirmed).toLocaleString();
    amTr = Number(data.Countries[7].TotalRecovered).toLocaleString();
    amNr = Number(data.Countries[7].NewRecovered).toLocaleString();
    amTd = Number(data.Countries[7].TotalDeaths).toLocaleString();
    amNd = Number(data.Countries[7].NewDeaths).toLocaleString();

    $("#amTc").html(amTc + "+");
    $("#amNc").html(amNc + "+");
    $("#amTr").html(amTr + "+");
    $("#amNr").html(amNr + "+");
    $("#amTd").html(amTd + "+");
    $("#amNd").html(amNd + "+");

    // Australia [8]
    var auTc, auNc, auTr, auNr, auTd, auNd;

    auTc = Number(data.Countries[8].TotalConfirmed).toLocaleString();
    auNc = Number(data.Countries[8].NewConfirmed).toLocaleString();
    auTr = Number(data.Countries[8].TotalRecovered).toLocaleString();
    auNr = Number(data.Countries[8].NewRecovered).toLocaleString();
    auTd = Number(data.Countries[8].TotalDeaths).toLocaleString();
    auNd = Number(data.Countries[8].NewDeaths).toLocaleString();

    $("#auTc").html(auTc + "+");
    $("#auNc").html(auNc + "+");
    $("#auTr").html(auTr + "+");
    $("#auNr").html(auNr + "+");
    $("#auTd").html(auTd + "+");
    $("#auNd").html(auNd + "+");

    // Austraia [9]
    var atTc, atNc, atTr, atNr, atTd, atNd;

    atTc = Number(data.Countries[9].TotalConfirmed).toLocaleString();
    atNc = Number(data.Countries[9].NewConfirmed).toLocaleString();
    atTr = Number(data.Countries[9].TotalRecovered).toLocaleString();
    atNr = Number(data.Countries[9].NewRecovered).toLocaleString();
    atTd = Number(data.Countries[9].TotalDeaths).toLocaleString();
    atNd = Number(data.Countries[9].NewDeaths).toLocaleString();

    $("#atTc").html(atTc + "+");
    $("#atNc").html(atNc + "+");
    $("#atTr").html(atTr + "+");
    $("#atNr").html(atNr + "+");
    $("#atTd").html(atTd + "+");
    $("#atNd").html(atNd + "+");

    // Azerbaijan [10]
    var azTc, azNc, azTr, azNr, azTd, azNd;

    azTc = Number(data.Countries[10].TotalConfirmed).toLocaleString();
    azNc = Number(data.Countries[10].NewConfirmed).toLocaleString();
    azTr = Number(data.Countries[10].TotalRecovered).toLocaleString();
    azNr = Number(data.Countries[10].NewRecovered).toLocaleString();
    azTd = Number(data.Countries[10].TotalDeaths).toLocaleString();
    azNd = Number(data.Countries[10].NewDeaths).toLocaleString();

    $("#azTc").html(azTc + "+");
    $("#azNc").html(azNc + "+");
    $("#azTr").html(azTr + "+");
    $("#azNr").html(azNr + "+");
    $("#azTd").html(azTd + "+");
    $("#azNd").html(azNd + "+");

    // Bahamas [11]
    var bsTc, bsNc, bsTr, bsNr, bsTd, bsNd;

    bsTc = Number(data.Countries[11].TotalConfirmed).toLocaleString();
    bsNc = Number(data.Countries[11].NewConfirmed).toLocaleString();
    bsTr = Number(data.Countries[11].TotalRecovered).toLocaleString();
    bsNr = Number(data.Countries[11].NewRecovered).toLocaleString();
    bsTd = Number(data.Countries[11].TotalDeaths).toLocaleString();
    bsNd = Number(data.Countries[11].NewDeaths).toLocaleString();

    $("#bsTc").html(bsTc + "+");
    $("#bsNc").html(bsNc + "+");
    $("#bsTr").html(bsTr + "+");
    $("#bsNr").html(bsNr + "+");
    $("#bsTd").html(bsTd + "+");
    $("#bsNd").html(bsNd + "+");

    // Bahrain [12]
    var bhTc, bhNc, bhTr, bhNr, bhTd, bhNd;

    bhTc = Number(data.Countries[12].TotalConfirmed).toLocaleString();
    bhNc = Number(data.Countries[12].NewConfirmed).toLocaleString();
    bhTr = Number(data.Countries[12].TotalRecovered).toLocaleString();
    bhNr = Number(data.Countries[12].NewRecovered).toLocaleString();
    bhTd = Number(data.Countries[12].TotalDeaths).toLocaleString();
    bhNd = Number(data.Countries[12].NewDeaths).toLocaleString();

    $("#bhTc").html(bhTc + "+");
    $("#bhNc").html(bhNc + "+");
    $("#bhTr").html(bhTr + "+");
    $("#bhNr").html(bhNr + "+");
    $("#bhTd").html(bhTd + "+");
    $("#bhNd").html(bhNd + "+");

    // Bangladesh [13]
    var bdTc, bdNc, bdTr, bdNr, bdTd, bdNd;

    bdTc = Number(data.Countries[13].TotalConfirmed).toLocaleString();
    bdNc = Number(data.Countries[13].NewConfirmed).toLocaleString();
    bdTr = Number(data.Countries[13].TotalRecovered).toLocaleString();
    bdNr = Number(data.Countries[13].NewRecovered).toLocaleString();
    bdTd = Number(data.Countries[13].TotalDeaths).toLocaleString();
    bdNd = Number(data.Countries[13].NewDeaths).toLocaleString();

    $("#bdTc").html(bdTc + "+");
    $("#bdNc").html(bdNc + "+");
    $("#bdTr").html(bdTr + "+");
    $("#bdNr").html(bdNr + "+");
    $("#bdTd").html(bdTd + "+");
    $("#bdNd").html(bdNd + "+");

    // Barbados [14]
    var bbTc, bbNc, bbTr, bbNr, bbTd, bbNd;

    bbTc = Number(data.Countries[14].TotalConfirmed).toLocaleString();
    bbNc = Number(data.Countries[14].NewConfirmed).toLocaleString();
    bbTr = Number(data.Countries[14].TotalRecovered).toLocaleString();
    bbNr = Number(data.Countries[14].NewRecovered).toLocaleString();
    bbTd = Number(data.Countries[14].TotalDeaths).toLocaleString();
    bbNd = Number(data.Countries[14].NewDeaths).toLocaleString();

    $("#bbTc").html(bbTc + "+");
    $("#bbNc").html(bbNc + "+");
    $("#bbTr").html(bbTr + "+");
    $("#bbNr").html(bbNr + "+");
    $("#bbTd").html(bbTd + "+");
    $("#bbNd").html(bbNd + "+");

    // Belarus [15]
    var byTc, byNc, byTr, byNr, byTd, byNd;

    byTc = Number(data.Countries[15].TotalConfirmed).toLocaleString();
    byNc = Number(data.Countries[15].NewConfirmed).toLocaleString();
    byTr = Number(data.Countries[15].TotalRecovered).toLocaleString();
    byNr = Number(data.Countries[15].NewRecovered).toLocaleString();
    byTd = Number(data.Countries[15].TotalDeaths).toLocaleString();
    byNd = Number(data.Countries[15].NewDeaths).toLocaleString();

    $("#byTc").html(byTc + "+");
    $("#byNc").html(byNc + "+");
    $("#byTr").html(byTr + "+");
    $("#byNr").html(byNr + "+");
    $("#byTd").html(byTd + "+");
    $("#byNd").html(byNd + "+");

    // Belgium [16]
    var beTc, beNc, beTr, beNr, beTd, beNd;

    beTc = Number(data.Countries[16].TotalConfirmed).toLocaleString();
    beNc = Number(data.Countries[16].NewConfirmed).toLocaleString();
    beTr = Number(data.Countries[16].TotalRecovered).toLocaleString();
    beNr = Number(data.Countries[16].NewRecovered).toLocaleString();
    beTd = Number(data.Countries[16].TotalDeaths).toLocaleString();
    beNd = Number(data.Countries[16].NewDeaths).toLocaleString();

    $("#beTc").html(beTc + "+");
    $("#beNc").html(beNc + "+");
    $("#beTr").html(beTr + "+");
    $("#beNr").html(beNr + "+");
    $("#beTd").html(beTd + "+");
    $("#beNd").html(beNd + "+");

    // Belize [17]
    var bzTc, bzNc, bzTr, bzNr, bzTd, bzNd;

    bzTc = Number(data.Countries[17].TotalConfirmed).toLocaleString();
    bzNc = Number(data.Countries[17].NewConfirmed).toLocaleString();
    bzTr = Number(data.Countries[17].TotalRecovered).toLocaleString();
    bzNr = Number(data.Countries[17].NewRecovered).toLocaleString();
    bzTd = Number(data.Countries[17].TotalDeaths).toLocaleString();
    bzNd = Number(data.Countries[17].NewDeaths).toLocaleString();

    $("#bzTc").html(bzTc + "+");
    $("#bzNc").html(bzNc + "+");
    $("#bzTr").html(bzTr + "+");
    $("#bzNr").html(bzNr + "+");
    $("#bzTd").html(bzTd + "+");
    $("#bzNd").html(bzNd + "+");

    // Benin [18]
    var bjTc, bjNc, bjTr, bjNr, bjTd, bjNd;

    bjTc = Number(data.Countries[18].TotalConfirmed).toLocaleString();
    bjNc = Number(data.Countries[18].NewConfirmed).toLocaleString();
    bjTr = Number(data.Countries[18].TotalRecovered).toLocaleString();
    bjNr = Number(data.Countries[18].NewRecovered).toLocaleString();
    bjTd = Number(data.Countries[18].TotalDeaths).toLocaleString();
    bjNd = Number(data.Countries[18].NewDeaths).toLocaleString();

    $("#bjTc").html(bjTc + "+");
    $("#bjNc").html(bjNc + "+");
    $("#bjTr").html(bjTr + "+");
    $("#bjNr").html(bjNr + "+");
    $("#bjTd").html(bjTd + "+");
    $("#bjNd").html(bjNd + "+");

    // Bhutan [19]
    var btTc, btNc, btTr, btNr, btTd, btNd;

    btTc = Number(data.Countries[19].TotalConfirmed).toLocaleString();
    btNc = Number(data.Countries[19].NewConfirmed).toLocaleString();
    btTr = Number(data.Countries[19].TotalRecovered).toLocaleString();
    btNr = Number(data.Countries[19].NewRecovered).toLocaleString();
    btTd = Number(data.Countries[19].TotalDeaths).toLocaleString();
    btNd = Number(data.Countries[19].NewDeaths).toLocaleString();

    $("#btTc").html(btTc + "+");
    $("#btNc").html(btNc + "+");
    $("#btTr").html(btTr + "+");
    $("#btNr").html(btNr + "+");
    $("#btTd").html(btTd + "+");
    $("#btNd").html(btNd + "+");

    // Bolivia [20]
    var boTc, boNc, boTr, boNr, boTd, boNd;

    boTc = Number(data.Countries[20].TotalConfirmed).toLocaleString();
    boNc = Number(data.Countries[20].NewConfirmed).toLocaleString();
    boTr = Number(data.Countries[20].TotalRecovered).toLocaleString();
    boNr = Number(data.Countries[20].NewRecovered).toLocaleString();
    boTd = Number(data.Countries[20].TotalDeaths).toLocaleString();
    boNd = Number(data.Countries[20].NewDeaths).toLocaleString();

    $("#boTc").html(boTc + "+");
    $("#boNc").html(boNc + "+");
    $("#boTr").html(boTr + "+");
    $("#boNr").html(boNr + "+");
    $("#boTd").html(boTd + "+");
    $("#boNd").html(boNd + "+");

    // Bosnia and Herzegovina [21]
    var baTc, baNc, baTr, baNr, baTd, baNd;

    baTc = Number(data.Countries[21].TotalConfirmed).toLocaleString();
    baNc = Number(data.Countries[21].NewConfirmed).toLocaleString();
    baTr = Number(data.Countries[21].TotalRecovered).toLocaleString();
    baNr = Number(data.Countries[21].NewRecovered).toLocaleString();
    baTd = Number(data.Countries[21].TotalDeaths).toLocaleString();
    baNd = Number(data.Countries[21].NewDeaths).toLocaleString();

    $("#baTc").html(baTc + "+");
    $("#baNc").html(baNc + "+");
    $("#baTr").html(baTr + "+");
    $("#baNr").html(baNr + "+");
    $("#baTd").html(baTd + "+");
    $("#baNd").html(baNd + "+");

    // Botswana [22]
    var bwTc, bwNc, bwTr, bwNr, bwTd, bwNd;

    bwTc = Number(data.Countries[22].TotalConfirmed).toLocaleString();
    bwNc = Number(data.Countries[22].NewConfirmed).toLocaleString();
    bwTr = Number(data.Countries[22].TotalRecovered).toLocaleString();
    bwNr = Number(data.Countries[22].NewRecovered).toLocaleString();
    bwTd = Number(data.Countries[22].TotalDeaths).toLocaleString();
    bwNd = Number(data.Countries[22].NewDeaths).toLocaleString();

    $("#bwTc").html(bwTc + "+");
    $("#bwNc").html(bwNc + "+");
    $("#bwTr").html(bwTr + "+");
    $("#bwNr").html(bwNr + "+");
    $("#bwTd").html(bwTd + "+");
    $("#bwNd").html(bwNd + "+");

    // Brazil [23]
    var brTc, brNc, brTr, brNr, brTd, brNd;

    brTc = Number(data.Countries[23].TotalConfirmed).toLocaleString();
    brNc = Number(data.Countries[23].NewConfirmed).toLocaleString();
    brTr = Number(data.Countries[23].TotalRecovered).toLocaleString();
    brNr = Number(data.Countries[23].NewRecovered).toLocaleString();
    brTd = Number(data.Countries[23].TotalDeaths).toLocaleString();
    brNd = Number(data.Countries[23].NewDeaths).toLocaleString();

    $("#brTc").html(brTc + "+");
    $("#brNc").html(brNc + "+");
    $("#brTr").html(brTr + "+");
    $("#brNr").html(brNr + "+");
    $("#brTd").html(brTd + "+");
    $("#brNd").html(brNd + "+");

    // Brunei [24]
    var bnTc, bnNc, bnTr, bnNr, bnTd, bnNd;

    bnTc = Number(data.Countries[24].TotalConfirmed).toLocaleString();
    bnNc = Number(data.Countries[24].NewConfirmed).toLocaleString();
    bnTr = Number(data.Countries[24].TotalRecovered).toLocaleString();
    bnNr = Number(data.Countries[24].NewRecovered).toLocaleString();
    bnTd = Number(data.Countries[24].TotalDeaths).toLocaleString();
    bnNd = Number(data.Countries[24].NewDeaths).toLocaleString();

    $("#bnTc").html(bnTc + "+");
    $("#bnNc").html(bnNc + "+");
    $("#bnTr").html(bnTr + "+");
    $("#bnNr").html(bnNr + "+");
    $("#bnTd").html(bnTd + "+");
    $("#bnNd").html(bnNd + "+");

    // Bulgaria [25]
    var bgTc, bgNc, bgTr, bgNr, bgTd, bgNd;

    bgTc = Number(data.Countries[25].TotalConfirmed).toLocaleString();
    bgNc = Number(data.Countries[25].NewConfirmed).toLocaleString();
    bgTr = Number(data.Countries[25].TotalRecovered).toLocaleString();
    bgNr = Number(data.Countries[25].NewRecovered).toLocaleString();
    bgTd = Number(data.Countries[25].TotalDeaths).toLocaleString();
    bgNd = Number(data.Countries[25].NewDeaths).toLocaleString();

    $("#bgTc").html(bgTc + "+");
    $("#bgNc").html(bgNc + "+");
    $("#bgTr").html(bgTr + "+");
    $("#bgNr").html(bgNr + "+");
    $("#bgTd").html(bgTd + "+");
    $("#bgNd").html(bgNd + "+");

    // Burkina Faso [26]
    var bfTc, bfNc, bfTr, bfNr, bfTd, bfNd;

    bfTc = Number(data.Countries[26].TotalConfirmed).toLocaleString();
    bfNc = Number(data.Countries[26].NewConfirmed).toLocaleString();
    bfTr = Number(data.Countries[26].TotalRecovered).toLocaleString();
    bfNr = Number(data.Countries[26].NewRecovered).toLocaleString();
    bfTd = Number(data.Countries[26].TotalDeaths).toLocaleString();
    bfNd = Number(data.Countries[26].NewDeaths).toLocaleString();

    $("#bfTc").html(bfTc + "+");
    $("#bfNc").html(bfNc + "+");
    $("#bfTr").html(bfTr + "+");
    $("#bfNr").html(bfNr + "+");
    $("#bfTd").html(bfTd + "+");
    $("#bfNd").html(bfNd + "+");

    // Burundi [27]
    var biTc, biNc, biTr, biNr, biTd, biNd;

    biTc = Number(data.Countries[27].TotalConfirmed).toLocaleString();
    biNc = Number(data.Countries[27].NewConfirmed).toLocaleString();
    biTr = Number(data.Countries[27].TotalRecovered).toLocaleString();
    biNr = Number(data.Countries[27].NewRecovered).toLocaleString();
    biTd = Number(data.Countries[27].TotalDeaths).toLocaleString();
    biNd = Number(data.Countries[27].NewDeaths).toLocaleString();

    $("#biTc").html(biTc + "+");
    $("#biNc").html(biNc + "+");
    $("#biTr").html(biTr + "+");
    $("#biNr").html(biNr + "+");
    $("#biTd").html(biTd + "+");
    $("#biNd").html(biNd + "+");

    // Cambodia [28]
    var khTc, khNc, khTr, khNr, khTd, khNd;

    khTc = Number(data.Countries[28].TotalConfirmed).toLocaleString();
    khNc = Number(data.Countries[28].NewConfirmed).toLocaleString();
    khTr = Number(data.Countries[28].TotalRecovered).toLocaleString();
    khNr = Number(data.Countries[28].NewRecovered).toLocaleString();
    khTd = Number(data.Countries[28].TotalDeaths).toLocaleString();
    khNd = Number(data.Countries[28].NewDeaths).toLocaleString();

    $("#khTc").html(khTc + "+");
    $("#khNc").html(khNc + "+");
    $("#khTr").html(khTr + "+");
    $("#khNr").html(khNr + "+");
    $("#khTd").html(khTd + "+");
    $("#khNd").html(khNd + "+");

    // Cameroon [29]
    var cmTc, cmNc, cmTr, cmNr, cmTd, cmNd;

    cmTc = Number(data.Countries[29].TotalConfirmed).toLocaleString();
    cmNc = Number(data.Countries[29].NewConfirmed).toLocaleString();
    cmTr = Number(data.Countries[29].TotalRecovered).toLocaleString();
    cmNr = Number(data.Countries[29].NewRecovered).toLocaleString();
    cmTd = Number(data.Countries[29].TotalDeaths).toLocaleString();
    cmNd = Number(data.Countries[29].NewDeaths).toLocaleString();

    $("#cmTc").html(cmTc + "+");
    $("#cmNc").html(cmNc + "+");
    $("#cmTr").html(cmTr + "+");
    $("#cmNr").html(cmNr + "+");
    $("#cmTd").html(cmTd + "+");
    $("#cmNd").html(cmNd + "+");

    // Canada [30]
    var caTc, caNc, caTr, caNr, caTd, caNd;

    caTc = Number(data.Countries[30].TotalConfirmed).toLocaleString();
    caNc = Number(data.Countries[30].NewConfirmed).toLocaleString();
    caTr = Number(data.Countries[30].TotalRecovered).toLocaleString();
    caNr = Number(data.Countries[30].NewRecovered).toLocaleString();
    caTd = Number(data.Countries[30].TotalDeaths).toLocaleString();
    caNd = Number(data.Countries[30].NewDeaths).toLocaleString();

    $("#caTc").html(caTc + "+");
    $("#caNc").html(caNc + "+");
    $("#caTr").html(caTr + "+");
    $("#caNr").html(caNr + "+");
    $("#caTd").html(caTd + "+");
    $("#caNd").html(caNd + "+");

    // Cape Verde [31]
    var cvTc, cvNc, cvTr, cvNr, cvTd, cvNd;

    cvTc = Number(data.Countries[31].TotalConfirmed).toLocaleString();
    cvNc = Number(data.Countries[31].NewConfirmed).toLocaleString();
    cvTr = Number(data.Countries[31].TotalRecovered).toLocaleString();
    cvNr = Number(data.Countries[31].NewRecovered).toLocaleString();
    cvTd = Number(data.Countries[31].TotalDeaths).toLocaleString();
    cvNd = Number(data.Countries[31].NewDeaths).toLocaleString();

    $("#cvTc").html(cvTc + "+");
    $("#cvNc").html(cvNc + "+");
    $("#cvTr").html(cvTr + "+");
    $("#cvNr").html(cvNr + "+");
    $("#cvTd").html(cvTd + "+");
    $("#cvNd").html(cvNd + "+");

    // Cameroon [32]
    var cfTc, cfNc, cfTr, cfNr, cfTd, cfNd;

    cfTc = Number(data.Countries[32].TotalConfirmed).toLocaleString();
    cfNc = Number(data.Countries[32].NewConfirmed).toLocaleString();
    cfTr = Number(data.Countries[32].TotalRecovered).toLocaleString();
    cfNr = Number(data.Countries[32].NewRecovered).toLocaleString();
    cfTd = Number(data.Countries[32].TotalDeaths).toLocaleString();
    cfNd = Number(data.Countries[32].NewDeaths).toLocaleString();

    $("#cfTc").html(cfTc + "+");
    $("#cfNc").html(cfNc + "+");
    $("#cfTr").html(cfTr + "+");
    $("#cfNr").html(cfNr + "+");
    $("#cfTd").html(cfTd + "+");
    $("#cfNd").html(cfNd + "+");

    // Chad [33]
    var tdTc, tdNc, tdTr, tdNr, tdTd, tdNd;

    tdTc = Number(data.Countries[33].TotalConfirmed).toLocaleString();
    tdNc = Number(data.Countries[33].NewConfirmed).toLocaleString();
    tdTr = Number(data.Countries[33].TotalRecovered).toLocaleString();
    tdNr = Number(data.Countries[33].NewRecovered).toLocaleString();
    tdTd = Number(data.Countries[33].TotalDeaths).toLocaleString();
    tdNd = Number(data.Countries[33].NewDeaths).toLocaleString();

    $("#tdTc").html(tdTc + "+");
    $("#tdNc").html(tdNc + "+");
    $("#tdTr").html(tdTr + "+");
    $("#tdNr").html(tdNr + "+");
    $("#tdTd").html(tdTd + "+");
    $("#tdNd").html(tdNd + "+");

    // Chile [34]
    var clTc, clNc, clTr, clNr, clTd, clNd;

    clTc = Number(data.Countries[34].TotalConfirmed).toLocaleString();
    clNc = Number(data.Countries[34].NewConfirmed).toLocaleString();
    clTr = Number(data.Countries[34].TotalRecovered).toLocaleString();
    clNr = Number(data.Countries[34].NewRecovered).toLocaleString();
    clTd = Number(data.Countries[34].TotalDeaths).toLocaleString();
    clNd = Number(data.Countries[34].NewDeaths).toLocaleString();

    $("#clTc").html(clTc + "+");
    $("#clNc").html(clNc + "+");
    $("#clTr").html(clTr + "+");
    $("#clNr").html(clNr + "+");
    $("#clTd").html(clTd + "+");
    $("#clNd").html(clNd + "+");

    // China [35]
    var cnTc, cnNc, cnTr, cnNr, cnTd, cnNd;

    cnTc = Number(data.Countries[35].TotalConfirmed).toLocaleString();
    cnNc = Number(data.Countries[35].NewConfirmed).toLocaleString();
    cnTr = Number(data.Countries[35].TotalRecovered).toLocaleString();
    cnNr = Number(data.Countries[35].NewRecovered).toLocaleString();
    cnTd = Number(data.Countries[35].TotalDeaths).toLocaleString();
    cnNd = Number(data.Countries[35].NewDeaths).toLocaleString();

    $("#cnTc").html(cnTc + "+");
    $("#cnNc").html(cnNc + "+");
    $("#cnTr").html(cnTr + "+");
    $("#cnNr").html(cnNr + "+");
    $("#cnTd").html(cnTd + "+");
    $("#cnNd").html(cnNd + "+");

    // Colombia [36]
    var coTc, coNc, coTr, coNr, coTd, coNd;

    coTc = Number(data.Countries[36].TotalConfirmed).toLocaleString();
    coNc = Number(data.Countries[36].NewConfirmed).toLocaleString();
    coTr = Number(data.Countries[36].TotalRecovered).toLocaleString();
    coNr = Number(data.Countries[36].NewRecovered).toLocaleString();
    coTd = Number(data.Countries[36].TotalDeaths).toLocaleString();
    coNd = Number(data.Countries[36].NewDeaths).toLocaleString();

    $("#coTc").html(coTc + "+");
    $("#coNc").html(coNc + "+");
    $("#coTr").html(coTr + "+");
    $("#coNr").html(coNr + "+");
    $("#coTd").html(coTd + "+");
    $("#coNd").html(coNd + "+");

    // Comoros [37]
    var kmTc, kmNc, kmTr, kmNr, kmTd, kmNd;

    kmTc = Number(data.Countries[37].TotalConfirmed).toLocaleString();
    kmNc = Number(data.Countries[37].NewConfirmed).toLocaleString();
    kmTr = Number(data.Countries[37].TotalRecovered).toLocaleString();
    kmNr = Number(data.Countries[37].NewRecovered).toLocaleString();
    kmTd = Number(data.Countries[37].TotalDeaths).toLocaleString();
    kmNd = Number(data.Countries[37].NewDeaths).toLocaleString();

    $("#kmTc").html(kmTc + "+");
    $("#kmNc").html(kmNc + "+");
    $("#kmTr").html(kmTr + "+");
    $("#kmNr").html(kmNr + "+");
    $("#kmTd").html(kmTd + "+");
    $("#kmNd").html(kmNd + "+");

    // Congo (Brazzaville) [38]
    var cgTc, cgNc, cgTr, cgNr, cgTd, cgNd;

    cgTc = Number(data.Countries[38].TotalConfirmed).toLocaleString();
    cgNc = Number(data.Countries[38].NewConfirmed).toLocaleString();
    cgTr = Number(data.Countries[38].TotalRecovered).toLocaleString();
    cgNr = Number(data.Countries[38].NewRecovered).toLocaleString();
    cgTd = Number(data.Countries[38].TotalDeaths).toLocaleString();
    cgNd = Number(data.Countries[38].NewDeaths).toLocaleString();

    $("#cgTc").html(cgTc + "+");
    $("#cgNc").html(cgNc + "+");
    $("#cgTr").html(cgTr + "+");
    $("#cgNr").html(cgNr + "+");
    $("#cgTd").html(cgTd + "+");
    $("#cgNd").html(cgNd + "+");

    // Congo (Kinshasa) [39]
    var cdTc, cdNc, cdTr, cdNr, cdTd, cdNd;

    cdTc = Number(data.Countries[39].TotalConfirmed).toLocaleString();
    cdNc = Number(data.Countries[39].NewConfirmed).toLocaleString();
    cdTr = Number(data.Countries[39].TotalRecovered).toLocaleString();
    cdNr = Number(data.Countries[39].NewRecovered).toLocaleString();
    cdTd = Number(data.Countries[39].TotalDeaths).toLocaleString();
    cdNd = Number(data.Countries[39].NewDeaths).toLocaleString();

    $("#cdTc").html(cdTc + "+");
    $("#cdNc").html(cdNc + "+");
    $("#cdTr").html(cdTr + "+");
    $("#cdNr").html(cdNr + "+");
    $("#cdTd").html(cdTd + "+");
    $("#cdNd").html(cdNd + "+");

    // Costa Rica [40]
    var crTc, crNc, crTr, crNr, crTd, crNd;

    crTc = Number(data.Countries[40].TotalConfirmed).toLocaleString();
    crNc = Number(data.Countries[40].NewConfirmed).toLocaleString();
    crTr = Number(data.Countries[40].TotalRecovered).toLocaleString();
    crNr = Number(data.Countries[40].NewRecovered).toLocaleString();
    crTd = Number(data.Countries[40].TotalDeaths).toLocaleString();
    crNd = Number(data.Countries[40].NewDeaths).toLocaleString();

    $("#crTc").html(crTc + "+");
    $("#crNc").html(crNc + "+");
    $("#crTr").html(crTr + "+");
    $("#crNr").html(crNr + "+");
    $("#crTd").html(crTd + "+");
    $("#crNd").html(crNd + "+");

    // Croatia [41]
    var hrTc, hrNc, hrTr, hrNr, hrTd, hrNd;

    hrTc = Number(data.Countries[41].TotalConfirmed).toLocaleString();
    hrNc = Number(data.Countries[41].NewConfirmed).toLocaleString();
    hrTr = Number(data.Countries[41].TotalRecovered).toLocaleString();
    hrNr = Number(data.Countries[41].NewRecovered).toLocaleString();
    hrTd = Number(data.Countries[41].TotalDeaths).toLocaleString();
    hrNd = Number(data.Countries[41].NewDeaths).toLocaleString();

    $("#hrTc").html(hrTc + "+");
    $("#hrNc").html(hrNc + "+");
    $("#hrTr").html(hrTr + "+");
    $("#hrNr").html(hrNr + "+");
    $("#hrTd").html(hrTd + "+");
    $("#hrNd").html(hrNd + "+");

    // Cuba [42]
    var cuTc, cuNc, cuTr, cuNr, cuTd, cuNd;

    cuTc = Number(data.Countries[42].TotalConfirmed).toLocaleString();
    cuNc = Number(data.Countries[42].NewConfirmed).toLocaleString();
    cuTr = Number(data.Countries[42].TotalRecovered).toLocaleString();
    cuNr = Number(data.Countries[42].NewRecovered).toLocaleString();
    cuTd = Number(data.Countries[42].TotalDeaths).toLocaleString();
    cuNd = Number(data.Countries[42].NewDeaths).toLocaleString();

    $("#cuTc").html(cuTc + "+");
    $("#cuNc").html(cuNc + "+");
    $("#cuTr").html(cuTr + "+");
    $("#cuNr").html(cuNr + "+");
    $("#cuTd").html(cuTd + "+");
    $("#cuNd").html(cuNd + "+");

    // Cyprus [43]
    var cyTc, cyNc, cyTr, cyNr, cyTd, cyNd;

    cyTc = Number(data.Countries[43].TotalConfirmed).toLocaleString();
    cyNc = Number(data.Countries[43].NewConfirmed).toLocaleString();
    cyTr = Number(data.Countries[43].TotalRecovered).toLocaleString();
    cyNr = Number(data.Countries[43].NewRecovered).toLocaleString();
    cyTd = Number(data.Countries[43].TotalDeaths).toLocaleString();
    cyNd = Number(data.Countries[43].NewDeaths).toLocaleString();

    $("#cyTc").html(cyTc + "+");
    $("#cyNc").html(cyNc + "+");
    $("#cyTr").html(cyTr + "+");
    $("#cyNr").html(cyNr + "+");
    $("#cyTd").html(cyTd + "+");
    $("#cyNd").html(cyNd + "+");

    // Czech Republic [44]
    var czTc, czNc, czTr, czNr, czTd, czNd;

    czTc = Number(data.Countries[44].TotalConfirmed).toLocaleString();
    czNc = Number(data.Countries[44].NewConfirmed).toLocaleString();
    czTr = Number(data.Countries[44].TotalRecovered).toLocaleString();
    czNr = Number(data.Countries[44].NewRecovered).toLocaleString();
    czTd = Number(data.Countries[44].TotalDeaths).toLocaleString();
    czNd = Number(data.Countries[44].NewDeaths).toLocaleString();

    $("#czTc").html(czTc + "+");
    $("#czNc").html(czNc + "+");
    $("#czTr").html(czTr + "+");
    $("#czNr").html(czNr + "+");
    $("#czTd").html(czTd + "+");
    $("#czNd").html(czNd + "+");

    // Côte d'Ivoire [45]
    var ciTc, ciNc, ciTr, ciNr, ciTd, ciNd;

    ciTc = Number(data.Countries[45].TotalConfirmed).toLocaleString();
    ciNc = Number(data.Countries[45].NewConfirmed).toLocaleString();
    ciTr = Number(data.Countries[45].TotalRecovered).toLocaleString();
    ciNr = Number(data.Countries[45].NewRecovered).toLocaleString();
    ciTd = Number(data.Countries[45].TotalDeaths).toLocaleString();
    ciNd = Number(data.Countries[45].NewDeaths).toLocaleString();

    $("#ciTc").html(ciTc + "+");
    $("#ciNc").html(ciNc + "+");
    $("#ciTr").html(ciTr + "+");
    $("#ciNr").html(ciNr + "+");
    $("#ciTd").html(ciTd + "+");
    $("#ciNd").html(ciNd + "+");

    // Denmark [46]
    var dkTc, dkNc, dkTr, dkNr, dkTd, dkNd;

    dkTc = Number(data.Countries[46].TotalConfirmed).toLocaleString();
    dkNc = Number(data.Countries[46].NewConfirmed).toLocaleString();
    dkTr = Number(data.Countries[46].TotalRecovered).toLocaleString();
    dkNr = Number(data.Countries[46].NewRecovered).toLocaleString();
    dkTd = Number(data.Countries[46].TotalDeaths).toLocaleString();
    dkNd = Number(data.Countries[46].NewDeaths).toLocaleString();

    $("#dkTc").html(dkTc + "+");
    $("#dkNc").html(dkNc + "+");
    $("#dkTr").html(dkTr + "+");
    $("#dkNr").html(dkNr + "+");
    $("#dkTd").html(dkTd + "+");
    $("#dkNd").html(dkNd + "+");

    // Djibouti [47]
    var djTc, djNc, djTr, djNr, djTd, djNd;

    djTc = Number(data.Countries[47].TotalConfirmed).toLocaleString();
    djNc = Number(data.Countries[47].NewConfirmed).toLocaleString();
    djTr = Number(data.Countries[47].TotalRecovered).toLocaleString();
    djNr = Number(data.Countries[47].NewRecovered).toLocaleString();
    djTd = Number(data.Countries[47].TotalDeaths).toLocaleString();
    djNd = Number(data.Countries[47].NewDeaths).toLocaleString();

    $("#djTc").html(djTc + "+");
    $("#djNc").html(djNc + "+");
    $("#djTr").html(djTr + "+");
    $("#djNr").html(djNr + "+");
    $("#djTd").html(djTd + "+");
    $("#djNd").html(djNd + "+");

    // Dominica [48]
    var dmTc, dmNc, dmTr, dmNr, dmTd, dmNd;

    dmTc = Number(data.Countries[48].TotalConfirmed).toLocaleString();
    dmNc = Number(data.Countries[48].NewConfirmed).toLocaleString();
    dmTr = Number(data.Countries[48].TotalRecovered).toLocaleString();
    dmNr = Number(data.Countries[48].NewRecovered).toLocaleString();
    dmTd = Number(data.Countries[48].TotalDeaths).toLocaleString();
    dmNd = Number(data.Countries[48].NewDeaths).toLocaleString();

    $("#dmTc").html(dmTc + "+");
    $("#dmNc").html(dmNc + "+");
    $("#dmTr").html(dmTr + "+");
    $("#dmNr").html(dmNr + "+");
    $("#dmTd").html(dmTd + "+");
    $("#dmNd").html(dmNd + "+");

    // Dominican Republic [49]
    var doTc, doNc, doTr, doNr, doTd, doNd;

    doTc = Number(data.Countries[49].TotalConfirmed).toLocaleString();
    doNc = Number(data.Countries[49].NewConfirmed).toLocaleString();
    doTr = Number(data.Countries[49].TotalRecovered).toLocaleString();
    doNr = Number(data.Countries[49].NewRecovered).toLocaleString();
    doTd = Number(data.Countries[49].TotalDeaths).toLocaleString();
    doNd = Number(data.Countries[49].NewDeaths).toLocaleString();

    $("#doTc").html(doTc + "+");
    $("#doNc").html(doNc + "+");
    $("#doTr").html(doTr + "+");
    $("#doNr").html(doNr + "+");
    $("#doTd").html(doTd + "+");
    $("#doNd").html(doNd + "+");

    // Ecuador [50]
    var ecTc, ecNc, ecTr, ecNr, ecTd, ecNd;

    ecTc = Number(data.Countries[50].TotalConfirmed).toLocaleString();
    ecNc = Number(data.Countries[50].NewConfirmed).toLocaleString();
    ecTr = Number(data.Countries[50].TotalRecovered).toLocaleString();
    ecNr = Number(data.Countries[50].NewRecovered).toLocaleString();
    ecTd = Number(data.Countries[50].TotalDeaths).toLocaleString();
    ecNd = Number(data.Countries[50].NewDeaths).toLocaleString();

    $("#ecTc").html(ecTc + "+");
    $("#ecNc").html(ecNc + "+");
    $("#ecTr").html(ecTr + "+");
    $("#ecNr").html(ecNr + "+");
    $("#ecTd").html(ecTd + "+");
    $("#ecNd").html(ecNd + "+");

    // Egypt [51]
    var egTc, egNc, egTr, egNr, egTd, egNd;

    egTc = Number(data.Countries[51].TotalConfirmed).toLocaleString();
    egNc = Number(data.Countries[51].NewConfirmed).toLocaleString();
    egTr = Number(data.Countries[51].TotalRecovered).toLocaleString();
    egNr = Number(data.Countries[51].NewRecovered).toLocaleString();
    egTd = Number(data.Countries[51].TotalDeaths).toLocaleString();
    egNd = Number(data.Countries[51].NewDeaths).toLocaleString();

    $("#egTc").html(egTc + "+");
    $("#egNc").html(egNc + "+");
    $("#egTr").html(egTr + "+");
    $("#egNr").html(egNr + "+");
    $("#egTd").html(egTd + "+");
    $("#egNd").html(egNd + "+");

    // El Salvador [52]
    var svTc, svNc, svTr, svNr, svTd, svNd;

    svTc = Number(data.Countries[52].TotalConfirmed).toLocaleString();
    svNc = Number(data.Countries[52].NewConfirmed).toLocaleString();
    svTr = Number(data.Countries[52].TotalRecovered).toLocaleString();
    svNr = Number(data.Countries[52].NewRecovered).toLocaleString();
    svTd = Number(data.Countries[52].TotalDeaths).toLocaleString();
    svNd = Number(data.Countries[52].NewDeaths).toLocaleString();

    $("#svTc").html(svTc + "+");
    $("#svNc").html(svNc + "+");
    $("#svTr").html(svTr + "+");
    $("#svNr").html(svNr + "+");
    $("#svTd").html(svTd + "+");
    $("#svNd").html(svNd + "+");

    // Equatorial Guinea [53]
    var gqTc, gqNc, gqTr, gqNr, gqTd, gqNd;

    gqTc = Number(data.Countries[53].TotalConfirmed).toLocaleString();
    gqNc = Number(data.Countries[53].NewConfirmed).toLocaleString();
    gqTr = Number(data.Countries[53].TotalRecovered).toLocaleString();
    gqNr = Number(data.Countries[53].NewRecovered).toLocaleString();
    gqTd = Number(data.Countries[53].TotalDeaths).toLocaleString();
    gqNd = Number(data.Countries[53].NewDeaths).toLocaleString();

    $("#gqTc").html(gqTc + "+");
    $("#gqNc").html(gqNc + "+");
    $("#gqTr").html(gqTr + "+");
    $("#gqNr").html(gqNr + "+");
    $("#gqTd").html(gqTd + "+");
    $("#gqNd").html(gqNd + "+");

    // Eritrea [54]
    var erTc, erNc, erTr, erNr, erTd, erNd;

    erTc = Number(data.Countries[54].TotalConfirmed).toLocaleString();
    erNc = Number(data.Countries[54].NewConfirmed).toLocaleString();
    erTr = Number(data.Countries[54].TotalRecovered).toLocaleString();
    erNr = Number(data.Countries[54].NewRecovered).toLocaleString();
    erTd = Number(data.Countries[54].TotalDeaths).toLocaleString();
    erNd = Number(data.Countries[54].NewDeaths).toLocaleString();

    $("#erTc").html(erTc + "+");
    $("#erNc").html(erNc + "+");
    $("#erTr").html(erTr + "+");
    $("#erNr").html(erNr + "+");
    $("#erTd").html(erTd + "+");
    $("#erNd").html(erNd + "+");

    // Estonia [55]
    var eeTc, eeNc, eeTr, eeNr, eeTd, eeNd;

    eeTc = Number(data.Countries[55].TotalConfirmed).toLocaleString();
    eeNc = Number(data.Countries[55].NewConfirmed).toLocaleString();
    eeTr = Number(data.Countries[55].TotalRecovered).toLocaleString();
    eeNr = Number(data.Countries[55].NewRecovered).toLocaleString();
    eeTd = Number(data.Countries[55].TotalDeaths).toLocaleString();
    eeNd = Number(data.Countries[55].NewDeaths).toLocaleString();

    $("#eeTc").html(eeTc + "+");
    $("#eeNc").html(eeNc + "+");
    $("#eeTr").html(eeTr + "+");
    $("#eeNr").html(eeNr + "+");
    $("#eeTd").html(eeTd + "+");
    $("#eeNd").html(eeNd + "+");

    // Ethiopia [56]
    var etTc, etNc, etTr, etNr, etTd, etNd;

    etTc = Number(data.Countries[56].TotalConfirmed).toLocaleString();
    etNc = Number(data.Countries[56].NewConfirmed).toLocaleString();
    etTr = Number(data.Countries[56].TotalRecovered).toLocaleString();
    etNr = Number(data.Countries[56].NewRecovered).toLocaleString();
    etTd = Number(data.Countries[56].TotalDeaths).toLocaleString();
    etNd = Number(data.Countries[56].NewDeaths).toLocaleString();

    $("#etTc").html(etTc + "+");
    $("#etNc").html(etNc + "+");
    $("#etTr").html(etTr + "+");
    $("#etNr").html(etNr + "+");
    $("#etTd").html(etTd + "+");
    $("#etNd").html(etNd + "+");

    // Fiji [57]
    var fjTc, fjNc, fjTr, fjNr, fjTd, fjNd;

    fjTc = Number(data.Countries[57].TotalConfirmed).toLocaleString();
    fjNc = Number(data.Countries[57].NewConfirmed).toLocaleString();
    fjTr = Number(data.Countries[57].TotalRecovered).toLocaleString();
    fjNr = Number(data.Countries[57].NewRecovered).toLocaleString();
    fjTd = Number(data.Countries[57].TotalDeaths).toLocaleString();
    fjNd = Number(data.Countries[57].NewDeaths).toLocaleString();

    $("#fjTc").html(fjTc + "+");
    $("#fjNc").html(fjNc + "+");
    $("#fjTr").html(fjTr + "+");
    $("#fjNr").html(fjNr + "+");
    $("#fjTd").html(fjTd + "+");
    $("#fjNd").html(fjNd + "+");

    // Finland [58]
    var fiTc, fiNc, fiTr, fiNr, fiTd, fiNd;

    fiTc = Number(data.Countries[58].TotalConfirmed).toLocaleString();
    fiNc = Number(data.Countries[58].NewConfirmed).toLocaleString();
    fiTr = Number(data.Countries[58].TotalRecovered).toLocaleString();
    fiNr = Number(data.Countries[58].NewRecovered).toLocaleString();
    fiTd = Number(data.Countries[58].TotalDeaths).toLocaleString();
    fiNd = Number(data.Countries[58].NewDeaths).toLocaleString();

    $("#fiTc").html(fiTc + "+");
    $("#fiNc").html(fiNc + "+");
    $("#fiTr").html(fiTr + "+");
    $("#fiNr").html(fiNr + "+");
    $("#fiTd").html(fiTd + "+");
    $("#fiNd").html(fiNd + "+");

    // France [59]
    var frTc, frNc, frTr, frNr, frTd, frNd;

    frTc = Number(data.Countries[59].TotalConfirmed).toLocaleString();
    frNc = Number(data.Countries[59].NewConfirmed).toLocaleString();
    frTr = Number(data.Countries[59].TotalRecovered).toLocaleString();
    frNr = Number(data.Countries[59].NewRecovered).toLocaleString();
    frTd = Number(data.Countries[59].TotalDeaths).toLocaleString();
    frNd = Number(data.Countries[59].NewDeaths).toLocaleString();

    $("#frTc").html(frTc + "+");
    $("#frNc").html(frNc + "+");
    $("#frTr").html(frTr + "+");
    $("#frNr").html(frNr + "+");
    $("#frTd").html(frTd + "+");
    $("#frNd").html(frNd + "+");

    // Gabon [60]
    var gaTc, gaNc, gaTr, gaNr, gaTd, gaNd;

    gaTc = Number(data.Countries[60].TotalConfirmed).toLocaleString();
    gaNc = Number(data.Countries[60].NewConfirmed).toLocaleString();
    gaTr = Number(data.Countries[60].TotalRecovered).toLocaleString();
    gaNr = Number(data.Countries[60].NewRecovered).toLocaleString();
    gaTd = Number(data.Countries[60].TotalDeaths).toLocaleString();
    gaNd = Number(data.Countries[60].NewDeaths).toLocaleString();

    $("#gaTc").html(gaTc + "+");
    $("#gaNc").html(gaNc + "+");
    $("#gaTr").html(gaTr + "+");
    $("#gaNr").html(gaNr + "+");
    $("#gaTd").html(gaTd + "+");
    $("#gaNd").html(gaNd + "+");

    // Gambia [61]
    var gmTc, gmNc, gmTr, gmNr, gmTd, gmNd;

    gmTc = Number(data.Countries[61].TotalConfirmed).toLocaleString();
    gmNc = Number(data.Countries[61].NewConfirmed).toLocaleString();
    gmTr = Number(data.Countries[61].TotalRecovered).toLocaleString();
    gmNr = Number(data.Countries[61].NewRecovered).toLocaleString();
    gmTd = Number(data.Countries[61].TotalDeaths).toLocaleString();
    gmNd = Number(data.Countries[61].NewDeaths).toLocaleString();

    $("#gmTc").html(gmTc + "+");
    $("#gmNc").html(gmNc + "+");
    $("#gmTr").html(gmTr + "+");
    $("#gmNr").html(gmNr + "+");
    $("#gmTd").html(gmTd + "+");
    $("#gmNd").html(gmNd + "+");

    // Georgia [62]
    var geTc, geNc, geTr, geNr, geTd, geNd;

    geTc = Number(data.Countries[62].TotalConfirmed).toLocaleString();
    geNc = Number(data.Countries[62].NewConfirmed).toLocaleString();
    geTr = Number(data.Countries[62].TotalRecovered).toLocaleString();
    geNr = Number(data.Countries[62].NewRecovered).toLocaleString();
    geTd = Number(data.Countries[62].TotalDeaths).toLocaleString();
    geNd = Number(data.Countries[62].NewDeaths).toLocaleString();

    $("#geTc").html(geTc + "+");
    $("#geNc").html(geNc + "+");
    $("#geTr").html(geTr + "+");
    $("#geNr").html(geNr + "+");
    $("#geTd").html(geTd + "+");
    $("#geNd").html(geNd + "+");

    // Germany [63]
    var deTc, deNc, deTr, deNr, deTd, deNd;

    deTc = Number(data.Countries[63].TotalConfirmed).toLocaleString();
    deNc = Number(data.Countries[63].NewConfirmed).toLocaleString();
    deTr = Number(data.Countries[63].TotalRecovered).toLocaleString();
    deNr = Number(data.Countries[63].NewRecovered).toLocaleString();
    deTd = Number(data.Countries[63].TotalDeaths).toLocaleString();
    deNd = Number(data.Countries[63].NewDeaths).toLocaleString();

    $("#deTc").html(deTc + "+");
    $("#deNc").html(deNc + "+");
    $("#deTr").html(deTr + "+");
    $("#deNr").html(deNr + "+");
    $("#deTd").html(deTd + "+");
    $("#deNd").html(deNd + "+");

    // Ghana [64]
    var ghTc, ghNc, ghTr, ghNr, ghTd, ghNd;

    ghTc = Number(data.Countries[64].TotalConfirmed).toLocaleString();
    ghNc = Number(data.Countries[64].NewConfirmed).toLocaleString();
    ghTr = Number(data.Countries[64].TotalRecovered).toLocaleString();
    ghNr = Number(data.Countries[64].NewRecovered).toLocaleString();
    ghTd = Number(data.Countries[64].TotalDeaths).toLocaleString();
    ghNd = Number(data.Countries[64].NewDeaths).toLocaleString();

    $("#ghTc").html(ghTc + "+");
    $("#ghNc").html(ghNc + "+");
    $("#ghTr").html(ghTr + "+");
    $("#ghNr").html(ghNr + "+");
    $("#ghTd").html(ghTd + "+");
    $("#ghNd").html(ghNd + "+");

    // Greece [65]
    var grTc, grNc, grTr, grNr, grTd, grNd;

    grTc = Number(data.Countries[65].TotalConfirmed).toLocaleString();
    grNc = Number(data.Countries[65].NewConfirmed).toLocaleString();
    grTr = Number(data.Countries[65].TotalRecovered).toLocaleString();
    grNr = Number(data.Countries[65].NewRecovered).toLocaleString();
    grTd = Number(data.Countries[65].TotalDeaths).toLocaleString();
    grNd = Number(data.Countries[65].NewDeaths).toLocaleString();

    $("#grTc").html(grTc + "+");
    $("#grNc").html(grNc + "+");
    $("#grTr").html(grTr + "+");
    $("#grNr").html(grNr + "+");
    $("#grTd").html(grTd + "+");
    $("#grNd").html(grNd + "+");

    // Grenada [66]
    var gdTc, gdNc, gdTr, gdNr, gdTd, gdNd;

    gdTc = Number(data.Countries[66].TotalConfirmed).toLocaleString();
    gdNc = Number(data.Countries[66].NewConfirmed).toLocaleString();
    gdTr = Number(data.Countries[66].TotalRecovered).toLocaleString();
    gdNr = Number(data.Countries[66].NewRecovered).toLocaleString();
    gdTd = Number(data.Countries[66].TotalDeaths).toLocaleString();
    gdNd = Number(data.Countries[66].NewDeaths).toLocaleString();

    $("#gdTc").html(gdTc + "+");
    $("#gdNc").html(gdNc + "+");
    $("#gdTr").html(gdTr + "+");
    $("#gdNr").html(gdNr + "+");
    $("#gdTd").html(gdTd + "+");
    $("#gdNd").html(gdNd + "+");

    // Guatemala [67]
    var gtTc, gtNc, gtTr, gtNr, gtTd, gtNd;

    gtTc = Number(data.Countries[67].TotalConfirmed).toLocaleString();
    gtNc = Number(data.Countries[67].NewConfirmed).toLocaleString();
    gtTr = Number(data.Countries[67].TotalRecovered).toLocaleString();
    gtNr = Number(data.Countries[67].NewRecovered).toLocaleString();
    gtTd = Number(data.Countries[67].TotalDeaths).toLocaleString();
    gtNd = Number(data.Countries[67].NewDeaths).toLocaleString();

    $("#gtTc").html(gtTc + "+");
    $("#gtNc").html(gtNc + "+");
    $("#gtTr").html(gtTr + "+");
    $("#gtNr").html(gtNr + "+");
    $("#gtTd").html(gtTd + "+");
    $("#gtNd").html(gtNd + "+");

    // Guinea [67]
    var gnTc, gnNc, gnTr, gnNr, gnTd, gnNd;

    gnTc = Number(data.Countries[68].TotalConfirmed).toLocaleString();
    gnNc = Number(data.Countries[68].NewConfirmed).toLocaleString();
    gnTr = Number(data.Countries[68].TotalRecovered).toLocaleString();
    gnNr = Number(data.Countries[68].NewRecovered).toLocaleString();
    gnTd = Number(data.Countries[68].TotalDeaths).toLocaleString();
    gnNd = Number(data.Countries[68].NewDeaths).toLocaleString();

    $("#gnTc").html(gnTc + "+");
    $("#gnNc").html(gnNc + "+");
    $("#gnTr").html(gnTr + "+");
    $("#gnNr").html(gnNr + "+");
    $("#gnTd").html(gnTd + "+");
    $("#gnNd").html(gnNd + "+");

    // Guinea-Bissau [69]
    var gwTc, gwNc, gwTr, gwNr, gwTd, gwNd;

    gwTc = Number(data.Countries[69].TotalConfirmed).toLocaleString();
    gwNc = Number(data.Countries[69].NewConfirmed).toLocaleString();
    gwTr = Number(data.Countries[69].TotalRecovered).toLocaleString();
    gwNr = Number(data.Countries[69].NewRecovered).toLocaleString();
    gwTd = Number(data.Countries[69].TotalDeaths).toLocaleString();
    gwNd = Number(data.Countries[69].NewDeaths).toLocaleString();

    $("#gwTc").html(gwTc + "+");
    $("#gwNc").html(gwNc + "+");
    $("#gwTr").html(gwTr + "+");
    $("#gwNr").html(gwNr + "+");
    $("#gwTd").html(gwTd + "+");
    $("#gwNd").html(gwNd + "+");

    // Guyana [70]
    var gyTc, gyNc, gyTr, gyNr, gyTd, gyNd;

    gyTc = Number(data.Countries[70].TotalConfirmed).toLocaleString();
    gyNc = Number(data.Countries[70].NewConfirmed).toLocaleString();
    gyTr = Number(data.Countries[70].TotalRecovered).toLocaleString();
    gyNr = Number(data.Countries[70].NewRecovered).toLocaleString();
    gyTd = Number(data.Countries[70].TotalDeaths).toLocaleString();
    gyNd = Number(data.Countries[70].NewDeaths).toLocaleString();

    $("#gyTc").html(gyTc + "+");
    $("#gyNc").html(gyNc + "+");
    $("#gyTr").html(gyTr + "+");
    $("#gyNr").html(gyNr + "+");
    $("#gyTd").html(gyTd + "+");
    $("#gyNd").html(gyNd + "+");

    // Haiti [71]
    var htTc, htNc, htTr, htNr, htTd, htNd;

    htTc = Number(data.Countries[71].TotalConfirmed).toLocaleString();
    htNc = Number(data.Countries[71].NewConfirmed).toLocaleString();
    htTr = Number(data.Countries[71].TotalRecovered).toLocaleString();
    htNr = Number(data.Countries[71].NewRecovered).toLocaleString();
    htTd = Number(data.Countries[71].TotalDeaths).toLocaleString();
    htNd = Number(data.Countries[71].NewDeaths).toLocaleString();

    $("#htTc").html(htTc + "+");
    $("#htNc").html(htNc + "+");
    $("#htTr").html(htTr + "+");
    $("#htNr").html(htNr + "+");
    $("#htTd").html(htTd + "+");
    $("#htNd").html(htNd + "+");

    // Holy See (Vatican City State) [72]
    var vaTc, vaNc, vaTr, vaNr, vaTd, vaNd;

    vaTc = Number(data.Countries[72].TotalConfirmed).toLocaleString();
    vaNc = Number(data.Countries[72].NewConfirmed).toLocaleString();
    vaTr = Number(data.Countries[72].TotalRecovered).toLocaleString();
    vaNr = Number(data.Countries[72].NewRecovered).toLocaleString();
    vaTd = Number(data.Countries[72].TotalDeaths).toLocaleString();
    vaNd = Number(data.Countries[72].NewDeaths).toLocaleString();

    $("#vaTc").html(vaTc + "+");
    $("#vaNc").html(vaNc + "+");
    $("#vaTr").html(vaTr + "+");
    $("#vaNr").html(vaNr + "+");
    $("#vaTd").html(vaTd + "+");
    $("#vaNd").html(vaNd + "+");

    // Honduras [73]
    var hnTc, hnNc, hnTr, hnNr, hnTd, hnNd;

    hnTc = Number(data.Countries[73].TotalConfirmed).toLocaleString();
    hnNc = Number(data.Countries[73].NewConfirmed).toLocaleString();
    hnTr = Number(data.Countries[73].TotalRecovered).toLocaleString();
    hnNr = Number(data.Countries[73].NewRecovered).toLocaleString();
    hnTd = Number(data.Countries[73].TotalDeaths).toLocaleString();
    hnNd = Number(data.Countries[73].NewDeaths).toLocaleString();

    $("#hnTc").html(hnTc + "+");
    $("#hnNc").html(hnNc + "+");
    $("#hnTr").html(hnTr + "+");
    $("#hnNr").html(hnNr + "+");
    $("#hnTd").html(hnTd + "+");
    $("#hnNd").html(hnNd + "+");

    // Hungary [74]
    var huTc, huNc, huTr, huNr, huTd, huNd;

    huTc = Number(data.Countries[74].TotalConfirmed).toLocaleString();
    huNc = Number(data.Countries[74].NewConfirmed).toLocaleString();
    huTr = Number(data.Countries[74].TotalRecovered).toLocaleString();
    huNr = Number(data.Countries[74].NewRecovered).toLocaleString();
    huTd = Number(data.Countries[74].TotalDeaths).toLocaleString();
    huNd = Number(data.Countries[74].NewDeaths).toLocaleString();

    $("#huTc").html(huTc + "+");
    $("#huNc").html(huNc + "+");
    $("#huTr").html(huTr + "+");
    $("#huNr").html(huNr + "+");
    $("#huTd").html(huTd + "+");
    $("#huNd").html(huNd + "+");

    // Iceland [75]
    var isTc, isNc, isTr, isNr, isTd, isNd;

    isTc = Number(data.Countries[75].TotalConfirmed).toLocaleString();
    isNc = Number(data.Countries[75].NewConfirmed).toLocaleString();
    isTr = Number(data.Countries[75].TotalRecovered).toLocaleString();
    isNr = Number(data.Countries[75].NewRecovered).toLocaleString();
    isTd = Number(data.Countries[75].TotalDeaths).toLocaleString();
    isNd = Number(data.Countries[75].NewDeaths).toLocaleString();

    $("#isTc").html(isTc + "+");
    $("#isNc").html(isNc + "+");
    $("#isTr").html(isTr + "+");
    $("#isNr").html(isNr + "+");
    $("#isTd").html(isTd + "+");
    $("#isNd").html(isNd + "+");

    // India [76]
    var inTc, inNc, inTr, inNr, inTd, inNd;

    inTc = Number(data.Countries[76].TotalConfirmed).toLocaleString();
    inNc = Number(data.Countries[76].NewConfirmed).toLocaleString();
    inTr = Number(data.Countries[76].TotalRecovered).toLocaleString();
    inNr = Number(data.Countries[76].NewRecovered).toLocaleString();
    inTd = Number(data.Countries[76].TotalDeaths).toLocaleString();
    inNd = Number(data.Countries[76].NewDeaths).toLocaleString();

    $("#inTc").html(inTc + "+");
    $("#inNc").html(inNc + "+");
    $("#inTr").html(inTr + "+");
    $("#inNr").html(inNr + "+");
    $("#inTd").html(inTd + "+");
    $("#inNd").html(inNd + "+");

    // Indonesia [77]
    var idTc, idNc, idTr, idNr, idTd, idNd;

    idTc = Number(data.Countries[77].TotalConfirmed).toLocaleString();
    idNc = Number(data.Countries[77].NewConfirmed).toLocaleString();
    idTr = Number(data.Countries[77].TotalRecovered).toLocaleString();
    idNr = Number(data.Countries[77].NewRecovered).toLocaleString();
    idTd = Number(data.Countries[77].TotalDeaths).toLocaleString();
    idNd = Number(data.Countries[77].NewDeaths).toLocaleString();

    $("#idTc").html(idTc + "+");
    $("#idNc").html(idNc + "+");
    $("#idTr").html(idTr + "+");
    $("#idNr").html(idNr + "+");
    $("#idTd").html(idTd + "+");
    $("#idNd").html(idNd + "+");

    // Iran, Islamic Republic of [78]
    var irTc, irNc, irTr, irNr, irTd, irNd;

    irTc = Number(data.Countries[78].TotalConfirmed).toLocaleString();
    irNc = Number(data.Countries[78].NewConfirmed).toLocaleString();
    irTr = Number(data.Countries[78].TotalRecovered).toLocaleString();
    irNr = Number(data.Countries[78].NewRecovered).toLocaleString();
    irTd = Number(data.Countries[78].TotalDeaths).toLocaleString();
    irNd = Number(data.Countries[78].NewDeaths).toLocaleString();

    $("#irTc").html(irTc + "+");
    $("#irNc").html(irNc + "+");
    $("#irTr").html(irTr + "+");
    $("#irNr").html(irNr + "+");
    $("#irTd").html(irTd + "+");
    $("#irNd").html(irNd + "+");

    // Iraq [79]
    var iqTc, iqNc, iqTr, iqNr, iqTd, iqNd;

    iqTc = Number(data.Countries[79].TotalConfirmed).toLocaleString();
    iqNc = Number(data.Countries[79].NewConfirmed).toLocaleString();
    iqTr = Number(data.Countries[79].TotalRecovered).toLocaleString();
    iqNr = Number(data.Countries[79].NewRecovered).toLocaleString();
    iqTd = Number(data.Countries[79].TotalDeaths).toLocaleString();
    iqNd = Number(data.Countries[79].NewDeaths).toLocaleString();

    $("#iqTc").html(iqTc + "+");
    $("#iqNc").html(iqNc + "+");
    $("#iqTr").html(iqTr + "+");
    $("#iqNr").html(iqNr + "+");
    $("#iqTd").html(iqTd + "+");
    $("#iqNd").html(iqNd + "+");

    // Ireland [80]
    var ieTc, ieNc, ieTr, ieNr, ieTd, ieNd;

    ieTc = Number(data.Countries[80].TotalConfirmed).toLocaleString();
    ieNc = Number(data.Countries[80].NewConfirmed).toLocaleString();
    ieTr = Number(data.Countries[80].TotalRecovered).toLocaleString();
    ieNr = Number(data.Countries[80].NewRecovered).toLocaleString();
    ieTd = Number(data.Countries[80].TotalDeaths).toLocaleString();
    ieNd = Number(data.Countries[80].NewDeaths).toLocaleString();

    $("#ieTc").html(ieTc + "+");
    $("#ieNc").html(ieNc + "+");
    $("#ieTr").html(ieTr + "+");
    $("#ieNr").html(ieNr + "+");
    $("#ieTd").html(ieTd + "+");
    $("#ieNd").html(ieNd + "+");

    // Israel [81]
    var ilTc, ilNc, ilTr, ilNr, ilTd, ilNd;

    ilTc = Number(data.Countries[81].TotalConfirmed).toLocaleString();
    ilNc = Number(data.Countries[81].NewConfirmed).toLocaleString();
    ilTr = Number(data.Countries[81].TotalRecovered).toLocaleString();
    ilNr = Number(data.Countries[81].NewRecovered).toLocaleString();
    ilTd = Number(data.Countries[81].TotalDeaths).toLocaleString();
    ilNd = Number(data.Countries[81].NewDeaths).toLocaleString();

    $("#ilTc").html(ilTc + "+");
    $("#ilNc").html(ilNc + "+");
    $("#ilTr").html(ilTr + "+");
    $("#ilNr").html(ilNr + "+");
    $("#ilTd").html(ilTd + "+");
    $("#ilNd").html(ilNd + "+");

    // Italy [82]
    var itTc, itNc, itTr, itNr, itTd, itNd;

    itTc = Number(data.Countries[82].TotalConfirmed).toLocaleString();
    itNc = Number(data.Countries[82].NewConfirmed).toLocaleString();
    itTr = Number(data.Countries[82].TotalRecovered).toLocaleString();
    itNr = Number(data.Countries[82].NewRecovered).toLocaleString();
    itTd = Number(data.Countries[82].TotalDeaths).toLocaleString();
    itNd = Number(data.Countries[82].NewDeaths).toLocaleString();

    $("#itTc").html(itTc + "+");
    $("#itNc").html(itNc + "+");
    $("#itTr").html(itTr + "+");
    $("#itNr").html(itNr + "+");
    $("#itTd").html(itTd + "+");
    $("#itNd").html(itNd + "+");

    // Jamaica [83]
    var jmTc, jmNc, jmTr, jmNr, jmTd, jmNd;

    jmTc = Number(data.Countries[83].TotalConfirmed).toLocaleString();
    jmNc = Number(data.Countries[83].NewConfirmed).toLocaleString();
    jmTr = Number(data.Countries[83].TotalRecovered).toLocaleString();
    jmNr = Number(data.Countries[83].NewRecovered).toLocaleString();
    jmTd = Number(data.Countries[83].TotalDeaths).toLocaleString();
    jmNd = Number(data.Countries[83].NewDeaths).toLocaleString();

    $("#jmTc").html(jmTc + "+");
    $("#jmNc").html(jmNc + "+");
    $("#jmTr").html(jmTr + "+");
    $("#jmNr").html(jmNr + "+");
    $("#jmTd").html(jmTd + "+");
    $("#jmNd").html(jmNd + "+");

    // Japan [84]
    var jpTc, jpNc, jpTr, jpNr, jpTd, jpNd;

    jpTc = Number(data.Countries[84].TotalConfirmed).toLocaleString();
    jpNc = Number(data.Countries[84].NewConfirmed).toLocaleString();
    jpTr = Number(data.Countries[84].TotalRecovered).toLocaleString();
    jpNr = Number(data.Countries[84].NewRecovered).toLocaleString();
    jpTd = Number(data.Countries[84].TotalDeaths).toLocaleString();
    jpNd = Number(data.Countries[84].NewDeaths).toLocaleString();

    $("#jpTc").html(jpTc + "+");
    $("#jpNc").html(jpNc + "+");
    $("#jpTr").html(jpTr + "+");
    $("#jpNr").html(jpNr + "+");
    $("#jpTd").html(jpTd + "+");
    $("#jpNd").html(jpNd + "+");

    // Jordan [85]
    var joTc, joNc, joTr, joNr, joTd, joNd;

    joTc = Number(data.Countries[85].TotalConfirmed).toLocaleString();
    joNc = Number(data.Countries[85].NewConfirmed).toLocaleString();
    joTr = Number(data.Countries[85].TotalRecovered).toLocaleString();
    joNr = Number(data.Countries[85].NewRecovered).toLocaleString();
    joTd = Number(data.Countries[85].TotalDeaths).toLocaleString();
    joNd = Number(data.Countries[85].NewDeaths).toLocaleString();

    $("#joTc").html(joTc + "+");
    $("#joNc").html(joNc + "+");
    $("#joTr").html(joTr + "+");
    $("#joNr").html(joNr + "+");
    $("#joTd").html(joTd + "+");
    $("#joNd").html(joNd + "+");

    // Kazakhstan [86]
    var kzTc, kzNc, kzTr, kzNr, kzTd, kzNd;

    kzTc = Number(data.Countries[86].TotalConfirmed).toLocaleString();
    kzNc = Number(data.Countries[86].NewConfirmed).toLocaleString();
    kzTr = Number(data.Countries[86].TotalRecovered).toLocaleString();
    kzNr = Number(data.Countries[86].NewRecovered).toLocaleString();
    kzTd = Number(data.Countries[86].TotalDeaths).toLocaleString();
    kzNd = Number(data.Countries[86].NewDeaths).toLocaleString();

    $("#kzTc").html(kzTc + "+");
    $("#kzNc").html(kzNc + "+");
    $("#kzTr").html(kzTr + "+");
    $("#kzNr").html(kzNr + "+");
    $("#kzTd").html(kzTd + "+");
    $("#kzNd").html(kzNd + "+");

    // Kenya [87]
    var keTc, keNc, keTr, keNr, keTd, keNd;

    keTc = Number(data.Countries[87].TotalConfirmed).toLocaleString();
    keNc = Number(data.Countries[87].NewConfirmed).toLocaleString();
    keTr = Number(data.Countries[87].TotalRecovered).toLocaleString();
    keNr = Number(data.Countries[87].NewRecovered).toLocaleString();
    keTd = Number(data.Countries[87].TotalDeaths).toLocaleString();
    keNd = Number(data.Countries[87].NewDeaths).toLocaleString();

    $("#keTc").html(keTc + "+");
    $("#keNc").html(keNc + "+");
    $("#keTr").html(keTr + "+");
    $("#keNr").html(keNr + "+");
    $("#keTd").html(keTd + "+");
    $("#keNd").html(keNd + "+");

    // Korea (South) [88]
    var krTc, krNc, krTr, krNr, krTd, krNd;

    krTc = Number(data.Countries[88].TotalConfirmed).toLocaleString();
    krNc = Number(data.Countries[88].NewConfirmed).toLocaleString();
    krTr = Number(data.Countries[88].TotalRecovered).toLocaleString();
    krNr = Number(data.Countries[88].NewRecovered).toLocaleString();
    krTd = Number(data.Countries[88].TotalDeaths).toLocaleString();
    krNd = Number(data.Countries[88].NewDeaths).toLocaleString();

    $("#krTc").html(krTc + "+");
    $("#krNc").html(krNc + "+");
    $("#krTr").html(krTr + "+");
    $("#krNr").html(krNr + "+");
    $("#krTd").html(krTd + "+");
    $("#krNd").html(krNd + "+");

    // Kuwait [89]
    var kwTc, kwNc, kwTr, kwNr, kwTd, kwNd;

    kwTc = Number(data.Countries[89].TotalConfirmed).toLocaleString();
    kwNc = Number(data.Countries[89].NewConfirmed).toLocaleString();
    kwTr = Number(data.Countries[89].TotalRecovered).toLocaleString();
    kwNr = Number(data.Countries[89].NewRecovered).toLocaleString();
    kwTd = Number(data.Countries[89].TotalDeaths).toLocaleString();
    kwNd = Number(data.Countries[89].NewDeaths).toLocaleString();

    $("#kwTc").html(kwTc + "+");
    $("#kwNc").html(kwNc + "+");
    $("#kwTr").html(kwTr + "+");
    $("#kwNr").html(kwNr + "+");
    $("#kwTd").html(kwTd + "+");
    $("#kwNd").html(kwNd + "+");

    // Kyrgyzstan [90]
    var kgTc, kgNc, kgTr, kgNr, kgTd, kgNd;

    kgTc = Number(data.Countries[90].TotalConfirmed).toLocaleString();
    kgNc = Number(data.Countries[90].NewConfirmed).toLocaleString();
    kgTr = Number(data.Countries[90].TotalRecovered).toLocaleString();
    kgNr = Number(data.Countries[90].NewRecovered).toLocaleString();
    kgTd = Number(data.Countries[90].TotalDeaths).toLocaleString();
    kgNd = Number(data.Countries[90].NewDeaths).toLocaleString();

    $("#kgTc").html(kgTc + "+");
    $("#kgNc").html(kgNc + "+");
    $("#kgTr").html(kgTr + "+");
    $("#kgNr").html(kgNr + "+");
    $("#kgTd").html(kgTd + "+");
    $("#kgNd").html(kgNd + "+");

    // Lao PDR [91]
    var laTc, laNc, laTr, laNr, laTd, laNd;

    laTc = Number(data.Countries[91].TotalConfirmed).toLocaleString();
    laNc = Number(data.Countries[91].NewConfirmed).toLocaleString();
    laTr = Number(data.Countries[91].TotalRecovered).toLocaleString();
    laNr = Number(data.Countries[91].NewRecovered).toLocaleString();
    laTd = Number(data.Countries[91].TotalDeaths).toLocaleString();
    laNd = Number(data.Countries[91].NewDeaths).toLocaleString();

    $("#laTc").html(laTc + "+");
    $("#laNc").html(laNc + "+");
    $("#laTr").html(laTr + "+");
    $("#laNr").html(laNr + "+");
    $("#laTd").html(laTd + "+");
    $("#laNd").html(laNd + "+");

    // Latvia[92]
    var lvTc, lvNc, lvTr, lvNr, lvTd, lvNd;

    lvTc = Number(data.Countries[92].TotalConfirmed).toLocaleString();
    lvNc = Number(data.Countries[92].NewConfirmed).toLocaleString();
    lvTr = Number(data.Countries[92].TotalRecovered).toLocaleString();
    lvNr = Number(data.Countries[92].NewRecovered).toLocaleString();
    lvTd = Number(data.Countries[92].TotalDeaths).toLocaleString();
    lvNd = Number(data.Countries[92].NewDeaths).toLocaleString();

    $("#lvTc").html(lvTc + "+");
    $("#lvNc").html(lvNc + "+");
    $("#lvTr").html(lvTr + "+");
    $("#lvNr").html(lvNr + "+");
    $("#lvTd").html(lvTd + "+");
    $("#lvNd").html(lvNd + "+");

    // Lebanon[93]
    var lbTc, lbNc, lbTr, lbNr, lbTd, lbNd;

    lbTc = Number(data.Countries[93].TotalConfirmed).toLocaleString();
    lbNc = Number(data.Countries[93].NewConfirmed).toLocaleString();
    lbTr = Number(data.Countries[93].TotalRecovered).toLocaleString();
    lbNr = Number(data.Countries[93].NewRecovered).toLocaleString();
    lbTd = Number(data.Countries[93].TotalDeaths).toLocaleString();
    lbNd = Number(data.Countries[93].NewDeaths).toLocaleString();

    $("#lbTc").html(lbTc + "+");
    $("#lbNc").html(lbNc + "+");
    $("#lbTr").html(lbTr + "+");
    $("#lbNr").html(lbNr + "+");
    $("#lbTd").html(lbTd + "+");
    $("#lbNd").html(lbNd + "+");

    // Lesotho[94]
    var lsTc, lsNc, lsTr, lsNr, lsTd, lsNd;

    lsTc = Number(data.Countries[94].TotalConfirmed).toLocaleString();
    lsNc = Number(data.Countries[94].NewConfirmed).toLocaleString();
    lsTr = Number(data.Countries[94].TotalRecovered).toLocaleString();
    lsNr = Number(data.Countries[94].NewRecovered).toLocaleString();
    lsTd = Number(data.Countries[94].TotalDeaths).toLocaleString();
    lsNd = Number(data.Countries[94].NewDeaths).toLocaleString();

    $("#lsTc").html(lsTc + "+");
    $("#lsNc").html(lsNc + "+");
    $("#lsTr").html(lsTr + "+");
    $("#lsNr").html(lsNr + "+");
    $("#lsTd").html(lsTd + "+");
    $("#lsNd").html(lsNd + "+");

    // Liberia[95]
    var lrTc, lrNc, lrTr, lrNr, lrTd, lrNd;

    lrTc = Number(data.Countries[95].TotalConfirmed).toLocaleString();
    lrNc = Number(data.Countries[95].NewConfirmed).toLocaleString();
    lrTr = Number(data.Countries[95].TotalRecovered).toLocaleString();
    lrNr = Number(data.Countries[95].NewRecovered).toLocaleString();
    lrTd = Number(data.Countries[95].TotalDeaths).toLocaleString();
    lrNd = Number(data.Countries[95].NewDeaths).toLocaleString();

    $("#lrTc").html(lrTc + "+");
    $("#lrNc").html(lrNc + "+");
    $("#lrTr").html(lrTr + "+");
    $("#lrNr").html(lrNr + "+");
    $("#lrTd").html(lrTd + "+");
    $("#lrNd").html(lrNd + "+");

    // Libya[96]
    var lyTc, lyNc, lyTr, lyNr, lyTd, lyNd;

    lyTc = Number(data.Countries[96].TotalConfirmed).toLocaleString();
    lyNc = Number(data.Countries[96].NewConfirmed).toLocaleString();
    lyTr = Number(data.Countries[96].TotalRecovered).toLocaleString();
    lyNr = Number(data.Countries[96].NewRecovered).toLocaleString();
    lyTd = Number(data.Countries[96].TotalDeaths).toLocaleString();
    lyNd = Number(data.Countries[96].NewDeaths).toLocaleString();

    $("#lyTc").html(lyTc + "+");
    $("#lyNc").html(lyNc + "+");
    $("#lyTr").html(lyTr + "+");
    $("#lyNr").html(lyNr + "+");
    $("#lyTd").html(lyTd + "+");
    $("#lyNd").html(lyNd + "+");

    // Liechtenstein[97]
    var liTc, liNc, liTr, liNr, liTd, liNd;

    liTc = Number(data.Countries[97].TotalConfirmed).toLocaleString();
    liNc = Number(data.Countries[97].NewConfirmed).toLocaleString();
    liTr = Number(data.Countries[97].TotalRecovered).toLocaleString();
    liNr = Number(data.Countries[97].NewRecovered).toLocaleString();
    liTd = Number(data.Countries[97].TotalDeaths).toLocaleString();
    liNd = Number(data.Countries[97].NewDeaths).toLocaleString();

    $("#liTc").html(liTc + "+");
    $("#liNc").html(liNc + "+");
    $("#liTr").html(liTr + "+");
    $("#liNr").html(liNr + "+");
    $("#liTd").html(liTd + "+");
    $("#liNd").html(liNd + "+");

    // Lithuania[98]
    var ltTc, ltNc, ltTr, ltNr, ltTd, ltNd;

    ltTc = Number(data.Countries[98].TotalConfirmed).toLocaleString();
    ltNc = Number(data.Countries[98].NewConfirmed).toLocaleString();
    ltTr = Number(data.Countries[98].TotalRecovered).toLocaleString();
    ltNr = Number(data.Countries[98].NewRecovered).toLocaleString();
    ltTd = Number(data.Countries[98].TotalDeaths).toLocaleString();
    ltNd = Number(data.Countries[98].NewDeaths).toLocaleString();

    $("#ltTc").html(ltTc + "+");
    $("#ltNc").html(ltNc + "+");
    $("#ltTr").html(ltTr + "+");
    $("#ltNr").html(ltNr + "+");
    $("#ltTd").html(ltTd + "+");
    $("#ltNd").html(ltNd + "+");

    // Luxembourg[99]
    var luTc, luNc, luTr, luNr, luTd, luNd;

    luTc = Number(data.Countries[99].TotalConfirmed).toLocaleString();
    luNc = Number(data.Countries[99].NewConfirmed).toLocaleString();
    luTr = Number(data.Countries[99].TotalRecovered).toLocaleString();
    luNr = Number(data.Countries[99].NewRecovered).toLocaleString();
    luTd = Number(data.Countries[99].TotalDeaths).toLocaleString();
    luNd = Number(data.Countries[99].NewDeaths).toLocaleString();

    $("#luTc").html(luTc + "+");
    $("#luNc").html(luNc + "+");
    $("#luTr").html(luTr + "+");
    $("#luNr").html(luNr + "+");
    $("#luTd").html(luTd + "+");
    $("#luNd").html(luNd + "+");

    // Macedonia[100]
    var mkTc, mkNc, mkTr, mkNr, mkTd, mkNd;

    mkTc = Number(data.Countries[100].TotalConfirmed).toLocaleString();
    mkNc = Number(data.Countries[100].NewConfirmed).toLocaleString();
    mkTr = Number(data.Countries[100].TotalRecovered).toLocaleString();
    mkNr = Number(data.Countries[100].NewRecovered).toLocaleString();
    mkTd = Number(data.Countries[100].TotalDeaths).toLocaleString();
    mkNd = Number(data.Countries[100].NewDeaths).toLocaleString();

    $("#mkTc").html(mkTc + "+");
    $("#mkNc").html(mkNc + "+");
    $("#mkTr").html(mkTr + "+");
    $("#mkNr").html(mkNr + "+");
    $("#mkTd").html(mkTd + "+");
    $("#mkNd").html(mkNd + "+");

    // Madagascar[101]
    var mgTc, mgNc, mgTr, mgNr, mgTd, mgNd;

    mgTc = Number(data.Countries[101].TotalConfirmed).toLocaleString();
    mgNc = Number(data.Countries[101].NewConfirmed).toLocaleString();
    mgTr = Number(data.Countries[101].TotalRecovered).toLocaleString();
    mgNr = Number(data.Countries[101].NewRecovered).toLocaleString();
    mgTd = Number(data.Countries[101].TotalDeaths).toLocaleString();
    mgNd = Number(data.Countries[101].NewDeaths).toLocaleString();

    $("#mgTc").html(mgTc + "+");
    $("#mgNc").html(mgNc + "+");
    $("#mgTr").html(mgTr + "+");
    $("#mgNr").html(mgNr + "+");
    $("#mgTd").html(mgTd + "+");
    $("#mgNd").html(mgNd + "+");

    // Malawi[102]
    var mwTc, mwNc, mwTr, mwNr, mwTd, mwNd;

    mwTc = Number(data.Countries[102].TotalConfirmed).toLocaleString();
    mwNc = Number(data.Countries[102].NewConfirmed).toLocaleString();
    mwTr = Number(data.Countries[102].TotalRecovered).toLocaleString();
    mwNr = Number(data.Countries[102].NewRecovered).toLocaleString();
    mwTd = Number(data.Countries[102].TotalDeaths).toLocaleString();
    mwNd = Number(data.Countries[102].NewDeaths).toLocaleString();

    $("#mwTc").html(mwTc + "+");
    $("#mwNc").html(mwNc + "+");
    $("#mwTr").html(mwTr + "+");
    $("#mwNr").html(mwNr + "+");
    $("#mwTd").html(mwTd + "+");
    $("#mwNd").html(mwNd + "+");

    // Malaysia[103]
    var myTc, myNc, myTr, myNr, myTd, myNd;

    myTc = Number(data.Countries[103].TotalConfirmed).toLocaleString();
    myNc = Number(data.Countries[103].NewConfirmed).toLocaleString();
    myTr = Number(data.Countries[103].TotalRecovered).toLocaleString();
    myNr = Number(data.Countries[103].NewRecovered).toLocaleString();
    myTd = Number(data.Countries[103].TotalDeaths).toLocaleString();
    myNd = Number(data.Countries[103].NewDeaths).toLocaleString();

    $("#myTc").html(myTc + "+");
    $("#myNc").html(myNc + "+");
    $("#myTr").html(myTr + "+");
    $("#myNr").html(myNr + "+");
    $("#myTd").html(myTd + "+");
    $("#myNd").html(myNd + "+");

    // Maldives[104]
    var mvTc, mvNc, mvTr, mvNr, mvTd, mvNd;

    mvTc = Number(data.Countries[104].TotalConfirmed).toLocaleString();
    mvNc = Number(data.Countries[104].NewConfirmed).toLocaleString();
    mvTr = Number(data.Countries[104].TotalRecovered).toLocaleString();
    mvNr = Number(data.Countries[104].NewRecovered).toLocaleString();
    mvTd = Number(data.Countries[104].TotalDeaths).toLocaleString();
    mvNd = Number(data.Countries[104].NewDeaths).toLocaleString();

    $("#mvTc").html(mvTc + "+");
    $("#mvNc").html(mvNc + "+");
    $("#mvTr").html(mvTr + "+");
    $("#mvNr").html(mvNr + "+");
    $("#mvTd").html(mvTd + "+");
    $("#mvNd").html(mvNd + "+");

    // Mali[105]
    var mlTc, mlNc, mlTr, mlNr, mlTd, mlNd;

    mlTc = Number(data.Countries[105].TotalConfirmed).toLocaleString();
    mlNc = Number(data.Countries[105].NewConfirmed).toLocaleString();
    mlTr = Number(data.Countries[105].TotalRecovered).toLocaleString();
    mlNr = Number(data.Countries[105].NewRecovered).toLocaleString();
    mlTd = Number(data.Countries[105].TotalDeaths).toLocaleString();
    mlNd = Number(data.Countries[105].NewDeaths).toLocaleString();

    $("#mlTc").html(mlTc + "+");
    $("#mlNc").html(mlNc + "+");
    $("#mlTr").html(mlTr + "+");
    $("#mlNr").html(mlNr + "+");
    $("#mlTd").html(mlTd + "+");
    $("#mlNd").html(mlNd + "+");

    // Malta[106]
    var mtTc, mtNc, mtTr, mtNr, mtTd, mtNd;

    mtTc = Number(data.Countries[106].TotalConfirmed).toLocaleString();
    mtNc = Number(data.Countries[106].NewConfirmed).toLocaleString();
    mtTr = Number(data.Countries[106].TotalRecovered).toLocaleString();
    mtNr = Number(data.Countries[106].NewRecovered).toLocaleString();
    mtTd = Number(data.Countries[106].TotalDeaths).toLocaleString();
    mtNd = Number(data.Countries[106].NewDeaths).toLocaleString();

    $("#mtTc").html(mtTc + "+");
    $("#mtNc").html(mtNc + "+");
    $("#mtTr").html(mtTr + "+");
    $("#mtNr").html(mtNr + "+");
    $("#mtTd").html(mtTd + "+");
    $("#mtNd").html(mtNd + "+");

    // Mauritania[107]
    var mrTc, mrNc, mrTr, mrNr, mrTd, mrNd;

    mrTc = Number(data.Countries[107].TotalConfirmed).toLocaleString();
    mrNc = Number(data.Countries[107].NewConfirmed).toLocaleString();
    mrTr = Number(data.Countries[107].TotalRecovered).toLocaleString();
    mrNr = Number(data.Countries[107].NewRecovered).toLocaleString();
    mrTd = Number(data.Countries[107].TotalDeaths).toLocaleString();
    mrNd = Number(data.Countries[107].NewDeaths).toLocaleString();

    $("#mrTc").html(mrTc + "+");
    $("#mrNc").html(mrNc + "+");
    $("#mrTr").html(mrTr + "+");
    $("#mrNr").html(mrNr + "+");
    $("#mrTd").html(mrTd + "+");
    $("#mrNd").html(mrNd + "+");

    // Mauritius[108]
    var muTc, muNc, muTr, muNr, muTd, muNd;

    muTc = Number(data.Countries[108].TotalConfirmed).toLocaleString();
    muNc = Number(data.Countries[108].NewConfirmed).toLocaleString();
    muTr = Number(data.Countries[108].TotalRecovered).toLocaleString();
    muNr = Number(data.Countries[108].NewRecovered).toLocaleString();
    muTd = Number(data.Countries[108].TotalDeaths).toLocaleString();
    muNd = Number(data.Countries[108].NewDeaths).toLocaleString();

    $("#muTc").html(muTc + "+");
    $("#muNc").html(muNc + "+");
    $("#muTr").html(muTr + "+");
    $("#muNr").html(muNr + "+");
    $("#muTd").html(muTd + "+");
    $("#muNd").html(muNd + "+");

    // Mexico[109]
    var mxTc, mxNc, mxTr, mxNr, mxTd, mxNd;

    mxTc = Number(data.Countries[109].TotalConfirmed).toLocaleString();
    mxNc = Number(data.Countries[109].NewConfirmed).toLocaleString();
    mxTr = Number(data.Countries[109].TotalRecovered).toLocaleString();
    mxNr = Number(data.Countries[109].NewRecovered).toLocaleString();
    mxTd = Number(data.Countries[109].TotalDeaths).toLocaleString();
    mxNd = Number(data.Countries[109].NewDeaths).toLocaleString();

    $("#mxTc").html(mxTc + "+");
    $("#mxNc").html(mxNc + "+");
    $("#mxTr").html(mxTr + "+");
    $("#mxNr").html(mxNr + "+");
    $("#mxTd").html(mxTd + "+");
    $("#mxNd").html(mxNd + "+");

    // Moldova[110]
    var mxTc, mxNc, mxTr, mxNr, mxTd, mxNd;

    mxTc = Number(data.Countries[110].TotalConfirmed).toLocaleString();
    mxNc = Number(data.Countries[110].NewConfirmed).toLocaleString();
    mxTr = Number(data.Countries[110].TotalRecovered).toLocaleString();
    mxNr = Number(data.Countries[110].NewRecovered).toLocaleString();
    mxTd = Number(data.Countries[110].TotalDeaths).toLocaleString();
    mxNd = Number(data.Countries[110].NewDeaths).toLocaleString();

    $("#mxTc").html(mxTc + "+");
    $("#mxNc").html(mxNc + "+");
    $("#mxTr").html(mxTr + "+");
    $("#mxNr").html(mxNr + "+");
    $("#mxTd").html(mxTd + "+");
    $("#mxNd").html(mxNd + "+");

    // Monaco[111]
    var mcTc, mcNc, mcTr, mcNr, mcTd, mcNd;

    mcTc = Number(data.Countries[111].TotalConfirmed).toLocaleString();
    mcNc = Number(data.Countries[111].NewConfirmed).toLocaleString();
    mcTr = Number(data.Countries[111].TotalRecovered).toLocaleString();
    mcNr = Number(data.Countries[111].NewRecovered).toLocaleString();
    mcTd = Number(data.Countries[111].TotalDeaths).toLocaleString();
    mcNd = Number(data.Countries[111].NewDeaths).toLocaleString();

    $("#mcTc").html(mcTc + "+");
    $("#mcNc").html(mcNc + "+");
    $("#mcTr").html(mcTr + "+");
    $("#mcNr").html(mcNr + "+");
    $("#mcTd").html(mcTd + "+");
    $("#mcNd").html(mcNd + "+");

    // Mongolia[112]
    var mnTc, mnNc, mnTr, mnNr, mnTd, mnNd;

    mnTc = Number(data.Countries[112].TotalConfirmed).toLocaleString();
    mnNc = Number(data.Countries[112].NewConfirmed).toLocaleString();
    mnTr = Number(data.Countries[112].TotalRecovered).toLocaleString();
    mnNr = Number(data.Countries[112].NewRecovered).toLocaleString();
    mnTd = Number(data.Countries[112].TotalDeaths).toLocaleString();
    mnNd = Number(data.Countries[112].NewDeaths).toLocaleString();

    $("#mnTc").html(mnTc + "+");
    $("#mnNc").html(mnNc + "+");
    $("#mnTr").html(mnTr + "+");
    $("#mnNr").html(mnNr + "+");
    $("#mnTd").html(mnTd + "+");
    $("#mnNd").html(mnNd + "+");

    // Montenegro[113]
    var meTc, meNc, meTr, meNr, meTd, meNd;

    meTc = Number(data.Countries[113].TotalConfirmed).toLocaleString();
    meNc = Number(data.Countries[113].NewConfirmed).toLocaleString();
    meTr = Number(data.Countries[113].TotalRecovered).toLocaleString();
    meNr = Number(data.Countries[113].NewRecovered).toLocaleString();
    meTd = Number(data.Countries[113].TotalDeaths).toLocaleString();
    meNd = Number(data.Countries[113].NewDeaths).toLocaleString();

    $("#meTc").html(meTc + "+");
    $("#meNc").html(meNc + "+");
    $("#meTr").html(meTr + "+");
    $("#meNr").html(meNr + "+");
    $("#meTd").html(meTd + "+");
    $("#meNd").html(meNd + "+");

    // Morocco[114]
    var maTc, maNc, maTr, maNr, maTd, maNd;

    maTc = Number(data.Countries[114].TotalConfirmed).toLocaleString();
    maNc = Number(data.Countries[114].NewConfirmed).toLocaleString();
    maTr = Number(data.Countries[114].TotalRecovered).toLocaleString();
    maNr = Number(data.Countries[114].NewRecovered).toLocaleString();
    maTd = Number(data.Countries[114].TotalDeaths).toLocaleString();
    maNd = Number(data.Countries[114].NewDeaths).toLocaleString();

    $("#maTc").html(maTc + "+");
    $("#maNc").html(maNc + "+");
    $("#maTr").html(maTr + "+");
    $("#maNr").html(maNr + "+");
    $("#maTd").html(maTd + "+");
    $("#maNd").html(maNd + "+");

    // Mozambique[115]
    var mzTc, mzNc, mzTr, mzNr, mzTd, mzNd;

    mzTc = Number(data.Countries[115].TotalConfirmed).toLocaleString();
    mzNc = Number(data.Countries[115].NewConfirmed).toLocaleString();
    mzTr = Number(data.Countries[115].TotalRecovered).toLocaleString();
    mzNr = Number(data.Countries[115].NewRecovered).toLocaleString();
    mzTd = Number(data.Countries[115].TotalDeaths).toLocaleString();
    mzNd = Number(data.Countries[115].NewDeaths).toLocaleString();

    $("#mzTc").html(mzTc + "+");
    $("#mzNc").html(mzNc + "+");
    $("#mzTr").html(mzTr + "+");
    $("#mzNr").html(mzNr + "+");
    $("#mzTd").html(mzTd + "+");
    $("#mzNd").html(mzNd + "+");

    // Myanmar[116]
    var mmTc, mmNc, mmTr, mmNr, mmTd, mmNd;

    mmTc = Number(data.Countries[116].TotalConfirmed).toLocaleString();
    mmNc = Number(data.Countries[116].NewConfirmed).toLocaleString();
    mmTr = Number(data.Countries[116].TotalRecovered).toLocaleString();
    mmNr = Number(data.Countries[116].NewRecovered).toLocaleString();
    mmTd = Number(data.Countries[116].TotalDeaths).toLocaleString();
    mmNd = Number(data.Countries[116].NewDeaths).toLocaleString();

    $("#mmTc").html(mmTc + "+");
    $("#mmNc").html(mmNc + "+");
    $("#mmTr").html(mmTr + "+");
    $("#mmNr").html(mmNr + "+");
    $("#mmTd").html(mmTd + "+");
    $("#mmNd").html(mmNd + "+");

    // Namibia[117]
    var naTc, naNc, naTr, naNr, naTd, naNd;

    naTc = Number(data.Countries[117].TotalConfirmed).toLocaleString();
    naNc = Number(data.Countries[117].NewConfirmed).toLocaleString();
    naTr = Number(data.Countries[117].TotalRecovered).toLocaleString();
    naNr = Number(data.Countries[117].NewRecovered).toLocaleString();
    naTd = Number(data.Countries[117].TotalDeaths).toLocaleString();
    naNd = Number(data.Countries[117].NewDeaths).toLocaleString();

    $("#naTc").html(naTc + "+");
    $("#naNc").html(naNc + "+");
    $("#naTr").html(naTr + "+");
    $("#naNr").html(naNr + "+");
    $("#naTd").html(naTd + "+");
    $("#naNd").html(naNd + "+");

    // Nepal[118]
    var npTc, npNc, npTr, npNr, npTd, npNd;

    npTc = Number(data.Countries[118].TotalConfirmed).toLocaleString();
    npNc = Number(data.Countries[118].NewConfirmed).toLocaleString();
    npTr = Number(data.Countries[118].TotalRecovered).toLocaleString();
    npNr = Number(data.Countries[118].NewRecovered).toLocaleString();
    npTd = Number(data.Countries[118].TotalDeaths).toLocaleString();
    npNd = Number(data.Countries[118].NewDeaths).toLocaleString();

    $("#npTc").html(npTc + "+");
    $("#npNc").html(npNc + "+");
    $("#npTr").html(npTr + "+");
    $("#npNr").html(npNr + "+");
    $("#npTd").html(npTd + "+");
    $("#npNd").html(npNd + "+");

    // Netherlands[119]
    var nlTc, nlNc, nlTr, nlNr, nlTd, nlNd;

    nlTc = Number(data.Countries[119].TotalConfirmed).toLocaleString();
    nlNc = Number(data.Countries[119].NewConfirmed).toLocaleString();
    nlTr = Number(data.Countries[119].TotalRecovered).toLocaleString();
    nlNr = Number(data.Countries[119].NewRecovered).toLocaleString();
    nlTd = Number(data.Countries[119].TotalDeaths).toLocaleString();
    nlNd = Number(data.Countries[119].NewDeaths).toLocaleString();

    $("#nlTc").html(nlTc + "+");
    $("#nlNc").html(nlNc + "+");
    $("#nlTr").html(nlTr + "+");
    $("#nlNr").html(nlNr + "+");
    $("#nlTd").html(nlTd + "+");
    $("#nlNd").html(nlNd + "+");

    // New Zealand[120]
    var nzTc, nzNc, nzTr, nzNr, nzTd, nzNd;

    nzTc = Number(data.Countries[120].TotalConfirmed).toLocaleString();
    nzNc = Number(data.Countries[120].NewConfirmed).toLocaleString();
    nzTr = Number(data.Countries[120].TotalRecovered).toLocaleString();
    nzNr = Number(data.Countries[120].NewRecovered).toLocaleString();
    nzTd = Number(data.Countries[120].TotalDeaths).toLocaleString();
    nzNd = Number(data.Countries[120].NewDeaths).toLocaleString();

    $("#nzTc").html(nzTc + "+");
    $("#nzNc").html(nzNc + "+");
    $("#nzTr").html(nzTr + "+");
    $("#nzNr").html(nzNr + "+");
    $("#nzTd").html(nzTd + "+");
    $("#nzNd").html(nzNd + "+");

    // Nicaragua[121]
    var niTc, niNc, niTr, niNr, niTd, niNd;

    niTc = Number(data.Countries[121].TotalConfirmed).toLocaleString();
    niNc = Number(data.Countries[121].NewConfirmed).toLocaleString();
    niTr = Number(data.Countries[121].TotalRecovered).toLocaleString();
    niNr = Number(data.Countries[121].NewRecovered).toLocaleString();
    niTd = Number(data.Countries[121].TotalDeaths).toLocaleString();
    niNd = Number(data.Countries[121].NewDeaths).toLocaleString();

    $("#niTc").html(niTc + "+");
    $("#niNc").html(niNc + "+");
    $("#niTr").html(niTr + "+");
    $("#niNr").html(niNr + "+");
    $("#niTd").html(niTd + "+");
    $("#niNd").html(niNd + "+");

    // Niger[122]
    var neTc, neNc, neTr, neNr, neTd, neNd;

    neTc = Number(data.Countries[122].TotalConfirmed).toLocaleString();
    neNc = Number(data.Countries[122].NewConfirmed).toLocaleString();
    neTr = Number(data.Countries[122].TotalRecovered).toLocaleString();
    neNr = Number(data.Countries[122].NewRecovered).toLocaleString();
    neTd = Number(data.Countries[122].TotalDeaths).toLocaleString();
    neNd = Number(data.Countries[122].NewDeaths).toLocaleString();

    $("#neTc").html(neTc + "+");
    $("#neNc").html(neNc + "+");
    $("#neTr").html(neTr + "+");
    $("#neNr").html(neNr + "+");
    $("#neTd").html(neTd + "+");
    $("#neNd").html(neNd + "+");

    // Nigeria[123]
    var ngTc, ngNc, ngTr, ngNr, ngTd, ngNd;

    ngTc = Number(data.Countries[123].TotalConfirmed).toLocaleString();
    ngNc = Number(data.Countries[123].NewConfirmed).toLocaleString();
    ngTr = Number(data.Countries[123].TotalRecovered).toLocaleString();
    ngNr = Number(data.Countries[123].NewRecovered).toLocaleString();
    ngTd = Number(data.Countries[123].TotalDeaths).toLocaleString();
    ngNd = Number(data.Countries[123].NewDeaths).toLocaleString();

    $("#ngTc").html(ngTc + "+");
    $("#ngNc").html(ngNc + "+");
    $("#ngTr").html(ngTr + "+");
    $("#ngNr").html(ngNr + "+");
    $("#ngTd").html(ngTd + "+");
    $("#ngNd").html(ngNd + "+");

    // Norway[124]
    var noTc, noNc, noTr, noNr, noTd, noNd;

    noTc = Number(data.Countries[124].TotalConfirmed).toLocaleString();
    noNc = Number(data.Countries[124].NewConfirmed).toLocaleString();
    noTr = Number(data.Countries[124].TotalRecovered).toLocaleString();
    noNr = Number(data.Countries[124].NewRecovered).toLocaleString();
    noTd = Number(data.Countries[124].TotalDeaths).toLocaleString();
    noNd = Number(data.Countries[124].NewDeaths).toLocaleString();

    $("#noTc").html(noTc + "+");
    $("#noNc").html(noNc + "+");
    $("#noTr").html(noTr + "+");
    $("#noNr").html(noNr + "+");
    $("#noTd").html(noTd + "+");
    $("#noNd").html(noNd + "+");

    // Oman[125]
    var omTc, omNc, omTr, omNr, omTd, omNd;

    omTc = Number(data.Countries[125].TotalConfirmed).toLocaleString();
    omNc = Number(data.Countries[125].NewConfirmed).toLocaleString();
    omTr = Number(data.Countries[125].TotalRecovered).toLocaleString();
    omNr = Number(data.Countries[125].NewRecovered).toLocaleString();
    omTd = Number(data.Countries[125].TotalDeaths).toLocaleString();
    omNd = Number(data.Countries[125].NewDeaths).toLocaleString();

    $("#omTc").html(omTc + "+");
    $("#omNc").html(omNc + "+");
    $("#omTr").html(omTr + "+");
    $("#omNr").html(omNr + "+");
    $("#omTd").html(omTd + "+");
    $("#omNd").html(omNd + "+");

    // Pakistan[126]
    var pkTc, pkNc, pkTr, pkNr, pkTd, pkNd;

    pkTc = Number(data.Countries[126].TotalConfirmed).toLocaleString();
    pkNc = Number(data.Countries[126].NewConfirmed).toLocaleString();
    pkTr = Number(data.Countries[126].TotalRecovered).toLocaleString();
    pkNr = Number(data.Countries[126].NewRecovered).toLocaleString();
    pkTd = Number(data.Countries[126].TotalDeaths).toLocaleString();
    pkNd = Number(data.Countries[126].NewDeaths).toLocaleString();

    $("#pkTc").html(pkTc + "+");
    $("#pkNc").html(pkNc + "+");
    $("#pkTr").html(pkTr + "+");
    $("#pkNr").html(pkNr + "+");
    $("#pkTd").html(pkTd + "+");
    $("#pkNd").html(pkNd + "+");

    // Palestinian Territory[127]
    var psTc, psNc, psTr, psNr, psTd, psNd;

    psTc = Number(data.Countries[127].TotalConfirmed).toLocaleString();
    psNc = Number(data.Countries[127].NewConfirmed).toLocaleString();
    psTr = Number(data.Countries[127].TotalRecovered).toLocaleString();
    psNr = Number(data.Countries[127].NewRecovered).toLocaleString();
    psTd = Number(data.Countries[127].TotalDeaths).toLocaleString();
    psNd = Number(data.Countries[127].NewDeaths).toLocaleString();

    $("#psTc").html(psTc + "+");
    $("#psNc").html(psNc + "+");
    $("#psTr").html(psTr + "+");
    $("#psNr").html(psNr + "+");
    $("#psTd").html(psTd + "+");
    $("#psNd").html(psNd + "+");

    // Panama[128]
    var paTc, paNc, paTr, paNr, paTd, paNd;

    paTc = Number(data.Countries[128].TotalConfirmed).toLocaleString();
    paNc = Number(data.Countries[128].NewConfirmed).toLocaleString();
    paTr = Number(data.Countries[128].TotalRecovered).toLocaleString();
    paNr = Number(data.Countries[128].NewRecovered).toLocaleString();
    paTd = Number(data.Countries[128].TotalDeaths).toLocaleString();
    paNd = Number(data.Countries[128].NewDeaths).toLocaleString();

    $("#paTc").html(paTc + "+");
    $("#paNc").html(paNc + "+");
    $("#paTr").html(paTr + "+");
    $("#paNr").html(paNr + "+");
    $("#paTd").html(paTd + "+");
    $("#paNd").html(paNd + "+");

    // Papua New Guinea[129]
    var pgTc, pgNc, pgTr, pgNr, pgTd, pgNd;

    pgTc = Number(data.Countries[129].TotalConfirmed).toLocaleString();
    pgNc = Number(data.Countries[129].NewConfirmed).toLocaleString();
    pgTr = Number(data.Countries[129].TotalRecovered).toLocaleString();
    pgNr = Number(data.Countries[129].NewRecovered).toLocaleString();
    pgTd = Number(data.Countries[129].TotalDeaths).toLocaleString();
    pgNd = Number(data.Countries[129].NewDeaths).toLocaleString();

    $("#pgTc").html(pgTc + "+");
    $("#pgNc").html(pgNc + "+");
    $("#pgTr").html(pgTr + "+");
    $("#pgNr").html(pgNr + "+");
    $("#pgTd").html(pgTd + "+");
    $("#pgNd").html(pgNd + "+");

    // Paraguay[130]
    var pyTc, pyNc, pyTr, pyNr, pyTd, pyNd;

    pyTc = Number(data.Countries[130].TotalConfirmed).toLocaleString();
    pyNc = Number(data.Countries[130].NewConfirmed).toLocaleString();
    pyTr = Number(data.Countries[130].TotalRecovered).toLocaleString();
    pyNr = Number(data.Countries[130].NewRecovered).toLocaleString();
    pyTd = Number(data.Countries[130].TotalDeaths).toLocaleString();
    pyNd = Number(data.Countries[130].NewDeaths).toLocaleString();

    $("#pyTc").html(pyTc + "+");
    $("#pyNc").html(pyNc + "+");
    $("#pyTr").html(pyTr + "+");
    $("#pyNr").html(pyNr + "+");
    $("#pyTd").html(pyTd + "+");
    $("#pyNd").html(pyNd + "+");

    // Peru[131]
    var peTc, peNc, peTr, peNr, peTd, peNd;

    peTc = Number(data.Countries[131].TotalConfirmed).toLocaleString();
    peNc = Number(data.Countries[131].NewConfirmed).toLocaleString();
    peTr = Number(data.Countries[131].TotalRecovered).toLocaleString();
    peNr = Number(data.Countries[131].NewRecovered).toLocaleString();
    peTd = Number(data.Countries[131].TotalDeaths).toLocaleString();
    peNd = Number(data.Countries[131].NewDeaths).toLocaleString();

    $("#peTc").html(peTc + "+");
    $("#peNc").html(peNc + "+");
    $("#peTr").html(peTr + "+");
    $("#peNr").html(peNr + "+");
    $("#peTd").html(peTd + "+");
    $("#peNd").html(peNd + "+");

    // Philippines[132]
    var phTc, phNc, phTr, phNr, phTd, phNd;

    phTc = Number(data.Countries[132].TotalConfirmed).toLocaleString();
    phNc = Number(data.Countries[132].NewConfirmed).toLocaleString();
    phTr = Number(data.Countries[132].TotalRecovered).toLocaleString();
    phNr = Number(data.Countries[132].NewRecovered).toLocaleString();
    phTd = Number(data.Countries[132].TotalDeaths).toLocaleString();
    phNd = Number(data.Countries[132].NewDeaths).toLocaleString();

    $("#phTc").html(phTc + "+");
    $("#phNc").html(phNc + "+");
    $("#phTr").html(phTr + "+");
    $("#phNr").html(phNr + "+");
    $("#phTd").html(phTd + "+");
    $("#phNd").html(phNd + "+");

    // Poland[133]
    var plTc, plNc, plTr, plNr, plTd, plNd;

    plTc = Number(data.Countries[133].TotalConfirmed).toLocaleString();
    plNc = Number(data.Countries[133].NewConfirmed).toLocaleString();
    plTr = Number(data.Countries[133].TotalRecovered).toLocaleString();
    plNr = Number(data.Countries[133].NewRecovered).toLocaleString();
    plTd = Number(data.Countries[133].TotalDeaths).toLocaleString();
    plNd = Number(data.Countries[133].NewDeaths).toLocaleString();

    $("#plTc").html(plTc + "+");
    $("#plNc").html(plNc + "+");
    $("#plTr").html(plTr + "+");
    $("#plNr").html(plNr + "+");
    $("#plTd").html(plTd + "+");
    $("#plNd").html(plNd + "+");

    // Portugal[134]
    var ptTc, ptNc, ptTr, ptNr, ptTd, ptNd;

    ptTc = Number(data.Countries[134].TotalConfirmed).toLocaleString();
    ptNc = Number(data.Countries[134].NewConfirmed).toLocaleString();
    ptTr = Number(data.Countries[134].TotalRecovered).toLocaleString();
    ptNr = Number(data.Countries[134].NewRecovered).toLocaleString();
    ptTd = Number(data.Countries[134].TotalDeaths).toLocaleString();
    ptNd = Number(data.Countries[134].NewDeaths).toLocaleString();

    $("#ptTc").html(ptTc + "+");
    $("#ptNc").html(ptNc + "+");
    $("#ptTr").html(ptTr + "+");
    $("#ptNr").html(ptNr + "+");
    $("#ptTd").html(ptTd + "+");
    $("#ptNd").html(ptNd + "+");

    // Qatar[135]
    var qaTc, qaNc, qaTr, qaNr, qaTd, qaNd;

    qaTc = Number(data.Countries[135].TotalConfirmed).toLocaleString();
    qaNc = Number(data.Countries[135].NewConfirmed).toLocaleString();
    qaTr = Number(data.Countries[135].TotalRecovered).toLocaleString();
    qaNr = Number(data.Countries[135].NewRecovered).toLocaleString();
    qaTd = Number(data.Countries[135].TotalDeaths).toLocaleString();
    qaNd = Number(data.Countries[135].NewDeaths).toLocaleString();

    $("#qaTc").html(qaTc + "+");
    $("#qaNc").html(qaNc + "+");
    $("#qaTr").html(qaTr + "+");
    $("#qaNr").html(qaNr + "+");
    $("#qaTd").html(qaTd + "+");
    $("#qaNd").html(qaNd + "+");

    // Republic of Kosovo[136]
    var xkTc, xkNc, xkTr, xkNr, xkTd, xkNd;

    xkTc = Number(data.Countries[136].TotalConfirmed).toLocaleString();
    xkNc = Number(data.Countries[136].NewConfirmed).toLocaleString();
    xkTr = Number(data.Countries[136].TotalRecovered).toLocaleString();
    xkNr = Number(data.Countries[136].NewRecovered).toLocaleString();
    xkTd = Number(data.Countries[136].TotalDeaths).toLocaleString();
    xkNd = Number(data.Countries[136].NewDeaths).toLocaleString();

    $("#xkTc").html(xkTc + "+");
    $("#xkNc").html(xkNc + "+");
    $("#xkTr").html(xkTr + "+");
    $("#xkNr").html(xkNr + "+");
    $("#xkTd").html(xkTd + "+");
    $("#xkNd").html(xkNd + "+");

    // Romania[137]
    var roTc, roNc, roTr, roNr, roTd, roNd;

    roTc = Number(data.Countries[137].TotalConfirmed).toLocaleString();
    roNc = Number(data.Countries[137].NewConfirmed).toLocaleString();
    roTr = Number(data.Countries[137].TotalRecovered).toLocaleString();
    roNr = Number(data.Countries[137].NewRecovered).toLocaleString();
    roTd = Number(data.Countries[137].TotalDeaths).toLocaleString();
    roNd = Number(data.Countries[137].NewDeaths).toLocaleString();

    $("#roTc").html(roTc + "+");
    $("#roNc").html(roNc + "+");
    $("#roTr").html(roTr + "+");
    $("#roNr").html(roNr + "+");
    $("#roTd").html(roTd + "+");
    $("#roNd").html(roNd + "+");

    // Russian Federation[138]
    var ruTc, ruNc, ruTr, ruNr, ruTd, ruNd;

    ruTc = Number(data.Countries[138].TotalConfirmed).toLocaleString();
    ruNc = Number(data.Countries[138].NewConfirmed).toLocaleString();
    ruTr = Number(data.Countries[138].TotalRecovered).toLocaleString();
    ruNr = Number(data.Countries[138].NewRecovered).toLocaleString();
    ruTd = Number(data.Countries[138].TotalDeaths).toLocaleString();
    ruNd = Number(data.Countries[138].NewDeaths).toLocaleString();

    $("#ruTc").html(ruTc + "+");
    $("#ruNc").html(ruNc + "+");
    $("#ruTr").html(ruTr + "+");
    $("#ruNr").html(ruNr + "+");
    $("#ruTd").html(ruTd + "+");
    $("#ruNd").html(ruNd + "+");

    // Rwanda[139]
    var rwTc, rwNc, rwTr, rwNr, rwTd, rwNd;

    rwTc = Number(data.Countries[139].TotalConfirmed).toLocaleString();
    rwNc = Number(data.Countries[139].NewConfirmed).toLocaleString();
    rwTr = Number(data.Countries[139].TotalRecovered).toLocaleString();
    rwNr = Number(data.Countries[139].NewRecovered).toLocaleString();
    rwTd = Number(data.Countries[139].TotalDeaths).toLocaleString();
    rwNd = Number(data.Countries[139].NewDeaths).toLocaleString();

    $("#rwTc").html(rwTc + "+");
    $("#rwNc").html(rwNc + "+");
    $("#rwTr").html(rwTr + "+");
    $("#rwNr").html(rwNr + "+");
    $("#rwTd").html(rwTd + "+");
    $("#rwNd").html(rwNd + "+");

    // Saint Kitts and Nevis[140]
    var knTc, knNc, knTr, knNr, knTd, knNd;

    knTc = Number(data.Countries[140].TotalConfirmed).toLocaleString();
    knNc = Number(data.Countries[140].NewConfirmed).toLocaleString();
    knTr = Number(data.Countries[140].TotalRecovered).toLocaleString();
    knNr = Number(data.Countries[140].NewRecovered).toLocaleString();
    knTd = Number(data.Countries[140].TotalDeaths).toLocaleString();
    knNd = Number(data.Countries[140].NewDeaths).toLocaleString();

    $("#knTc").html(knTc + "+");
    $("#knNc").html(knNc + "+");
    $("#knTr").html(knTr + "+");
    $("#knNr").html(knNr + "+");
    $("#knTd").html(knTd + "+");
    $("#knNd").html(knNd + "+");

    // Saint Lucia[141]
    var lcTc, lcNc, lcTr, lcNr, lcTd, lcNd;

    lcTc = Number(data.Countries[141].TotalConfirmed).toLocaleString();
    lcNc = Number(data.Countries[141].NewConfirmed).toLocaleString();
    lcTr = Number(data.Countries[141].TotalRecovered).toLocaleString();
    lcNr = Number(data.Countries[141].NewRecovered).toLocaleString();
    lcTd = Number(data.Countries[141].TotalDeaths).toLocaleString();
    lcNd = Number(data.Countries[141].NewDeaths).toLocaleString();

    $("#lcTc").html(lcTc + "+");
    $("#lcNc").html(lcNc + "+");
    $("#lcTr").html(lcTr + "+");
    $("#lcNr").html(lcNr + "+");
    $("#lcTd").html(lcTd + "+");
    $("#lcNd").html(lcNd + "+");

    // Saint Vincent and Grenadines[142]
    var vcTc, vcNc, vcTr, vcNr, vcTd, vcNd;

    vcTc = Number(data.Countries[142].TotalConfirmed).toLocaleString();
    vcNc = Number(data.Countries[142].NewConfirmed).toLocaleString();
    vcTr = Number(data.Countries[142].TotalRecovered).toLocaleString();
    vcNr = Number(data.Countries[142].NewRecovered).toLocaleString();
    vcTd = Number(data.Countries[142].TotalDeaths).toLocaleString();
    vcNd = Number(data.Countries[142].NewDeaths).toLocaleString();

    $("#vcTc").html(vcTc + "+");
    $("#vcNc").html(vcNc + "+");
    $("#vcTr").html(vcTr + "+");
    $("#vcNr").html(vcNr + "+");
    $("#vcTd").html(vcTd + "+");
    $("#vcNd").html(vcNd + "+");

    // San Marino[143]
    var smTc, smNc, smTr, smNr, smTd, smNd;

    smTc = Number(data.Countries[143].TotalConfirmed).toLocaleString();
    smNc = Number(data.Countries[143].NewConfirmed).toLocaleString();
    smTr = Number(data.Countries[143].TotalRecovered).toLocaleString();
    smNr = Number(data.Countries[143].NewRecovered).toLocaleString();
    smTd = Number(data.Countries[143].TotalDeaths).toLocaleString();
    smNd = Number(data.Countries[143].NewDeaths).toLocaleString();

    $("#smTc").html(smTc + "+");
    $("#smNc").html(smNc + "+");
    $("#smTr").html(smTr + "+");
    $("#smNr").html(smNr + "+");
    $("#smTd").html(smTd + "+");
    $("#smNd").html(smNd + "+");

    // Sao Tome and Principe[144]
    var stTc, stNc, stTr, stNr, stTd, stNd;

    stTc = Number(data.Countries[144].TotalConfirmed).toLocaleString();
    stNc = Number(data.Countries[144].NewConfirmed).toLocaleString();
    stTr = Number(data.Countries[144].TotalRecovered).toLocaleString();
    stNr = Number(data.Countries[144].NewRecovered).toLocaleString();
    stTd = Number(data.Countries[144].TotalDeaths).toLocaleString();
    stNd = Number(data.Countries[144].NewDeaths).toLocaleString();

    $("#stTc").html(stTc + "+");
    $("#stNc").html(stNc + "+");
    $("#stTr").html(stTr + "+");
    $("#stNr").html(stNr + "+");
    $("#stTd").html(stTd + "+");
    $("#stNd").html(stNd + "+");

    // Saudi Arabia[145]
    var saTc, saNc, saTr, saNr, saTd, saNd;

    saTc = Number(data.Countries[145].TotalConfirmed).toLocaleString();
    saNc = Number(data.Countries[145].NewConfirmed).toLocaleString();
    saTr = Number(data.Countries[145].TotalRecovered).toLocaleString();
    saNr = Number(data.Countries[145].NewRecovered).toLocaleString();
    saTd = Number(data.Countries[145].TotalDeaths).toLocaleString();
    saNd = Number(data.Countries[145].NewDeaths).toLocaleString();

    $("#saTc").html(saTc + "+");
    $("#saNc").html(saNc + "+");
    $("#saTr").html(saTr + "+");
    $("#saNr").html(saNr + "+");
    $("#saTd").html(saTd + "+");
    $("#saNd").html(saNd + "+");

    // Senegal[146]
    var snTc, snNc, snTr, snNr, snTd, snNd;

    snTc = Number(data.Countries[146].TotalConfirmed).toLocaleString();
    snNc = Number(data.Countries[146].NewConfirmed).toLocaleString();
    snTr = Number(data.Countries[146].TotalRecovered).toLocaleString();
    snNr = Number(data.Countries[146].NewRecovered).toLocaleString();
    snTd = Number(data.Countries[146].TotalDeaths).toLocaleString();
    snNd = Number(data.Countries[146].NewDeaths).toLocaleString();

    $("#snTc").html(snTc + "+");
    $("#snNc").html(snNc + "+");
    $("#snTr").html(snTr + "+");
    $("#snNr").html(snNr + "+");
    $("#snTd").html(snTd + "+");
    $("#snNd").html(snNd + "+");

    // Serbia[147]
    var rsTc, rsNc, rsTr, rsNr, rsTd, rsNd;

    rsTc = Number(data.Countries[147].TotalConfirmed).toLocaleString();
    rsNc = Number(data.Countries[147].NewConfirmed).toLocaleString();
    rsTr = Number(data.Countries[147].TotalRecovered).toLocaleString();
    rsNr = Number(data.Countries[147].NewRecovered).toLocaleString();
    rsTd = Number(data.Countries[147].TotalDeaths).toLocaleString();
    rsNd = Number(data.Countries[147].NewDeaths).toLocaleString();

    $("#rsTc").html(rsTc + "+");
    $("#rsNc").html(rsNc + "+");
    $("#rsTr").html(rsTr + "+");
    $("#rsNr").html(rsNr + "+");
    $("#rsTd").html(rsTd + "+");
    $("#rsNd").html(rsNd + "+");

    // Seychelles[148]
    var scTc, scNc, scTr, scNr, scTd, scNd;

    scTc = Number(data.Countries[148].TotalConfirmed).toLocaleString();
    scNc = Number(data.Countries[148].NewConfirmed).toLocaleString();
    scTr = Number(data.Countries[148].TotalRecovered).toLocaleString();
    scNr = Number(data.Countries[148].NewRecovered).toLocaleString();
    scTd = Number(data.Countries[148].TotalDeaths).toLocaleString();
    scNd = Number(data.Countries[148].NewDeaths).toLocaleString();

    $("#scTc").html(scTc + "+");
    $("#scNc").html(scNc + "+");
    $("#scTr").html(scTr + "+");
    $("#scNr").html(scNr + "+");
    $("#scTd").html(scTd + "+");
    $("#scNd").html(scNd + "+");

    // Sierra Leone[149]
    var slTc, slNc, slTr, slNr, slTd, slNd;

    slTc = Number(data.Countries[149].TotalConfirmed).toLocaleString();
    slNc = Number(data.Countries[149].NewConfirmed).toLocaleString();
    slTr = Number(data.Countries[149].TotalRecovered).toLocaleString();
    slNr = Number(data.Countries[149].NewRecovered).toLocaleString();
    slTd = Number(data.Countries[149].TotalDeaths).toLocaleString();
    slNd = Number(data.Countries[149].NewDeaths).toLocaleString();

    $("#slTc").html(slTc + "+");
    $("#slNc").html(slNc + "+");
    $("#slTr").html(slTr + "+");
    $("#slNr").html(slNr + "+");
    $("#slTd").html(slTd + "+");
    $("#slNd").html(slNd + "+");

    // Singapore[150]
    var sgTc, sgNc, sgTr, sgNr, sgTd, sgNd;

    sgTc = Number(data.Countries[150].TotalConfirmed).toLocaleString();
    sgNc = Number(data.Countries[150].NewConfirmed).toLocaleString();
    sgTr = Number(data.Countries[150].TotalRecovered).toLocaleString();
    sgNr = Number(data.Countries[150].NewRecovered).toLocaleString();
    sgTd = Number(data.Countries[150].TotalDeaths).toLocaleString();
    sgNd = Number(data.Countries[150].NewDeaths).toLocaleString();

    $("#sgTc").html(sgTc + "+");
    $("#sgNc").html(sgNc + "+");
    $("#sgTr").html(sgTr + "+");
    $("#sgNr").html(sgNr + "+");
    $("#sgTd").html(sgTd + "+");
    $("#sgNd").html(sgNd + "+");

    // Slovakia[151]
    var skTc, skNc, skTr, skNr, skTd, skNd;

    skTc = Number(data.Countries[151].TotalConfirmed).toLocaleString();
    skNc = Number(data.Countries[151].NewConfirmed).toLocaleString();
    skTr = Number(data.Countries[151].TotalRecovered).toLocaleString();
    skNr = Number(data.Countries[151].NewRecovered).toLocaleString();
    skTd = Number(data.Countries[151].TotalDeaths).toLocaleString();
    skNd = Number(data.Countries[151].NewDeaths).toLocaleString();

    $("#skTc").html(skTc + "+");
    $("#skNc").html(skNc + "+");
    $("#skTr").html(skTr + "+");
    $("#skNr").html(skNr + "+");
    $("#skTd").html(skTd + "+");
    $("#skNd").html(skNd + "+");

    // Slovenia[152]
    var siTc, siNc, siTr, siNr, siTd, siNd;

    siTc = Number(data.Countries[152].TotalConfirmed).toLocaleString();
    siNc = Number(data.Countries[152].NewConfirmed).toLocaleString();
    siTr = Number(data.Countries[152].TotalRecovered).toLocaleString();
    siNr = Number(data.Countries[152].NewRecovered).toLocaleString();
    siTd = Number(data.Countries[152].TotalDeaths).toLocaleString();
    siNd = Number(data.Countries[152].NewDeaths).toLocaleString();

    $("#siTc").html(siTc + "+");
    $("#siNc").html(siNc + "+");
    $("#siTr").html(siTr + "+");
    $("#siNr").html(siNr + "+");
    $("#siTd").html(siTd + "+");
    $("#siNd").html(siNd + "+");

    // Somalia[153]
    var soTc, soNc, soTr, soNr, soTd, soNd;

    soTc = Number(data.Countries[153].TotalConfirmed).toLocaleString();
    soNc = Number(data.Countries[153].NewConfirmed).toLocaleString();
    soTr = Number(data.Countries[153].TotalRecovered).toLocaleString();
    soNr = Number(data.Countries[153].NewRecovered).toLocaleString();
    soTd = Number(data.Countries[153].TotalDeaths).toLocaleString();
    soNd = Number(data.Countries[153].NewDeaths).toLocaleString();

    $("#soTc").html(soTc + "+");
    $("#soNc").html(soNc + "+");
    $("#soTr").html(soTr + "+");
    $("#soNr").html(soNr + "+");
    $("#soTd").html(soTd + "+");
    $("#soNd").html(soNd + "+");

    // South Africa[154]
    var zaTc, zaNc, zaTr, zaNr, zaTd, zaNd;

    zaTc = Number(data.Countries[154].TotalConfirmed).toLocaleString();
    zaNc = Number(data.Countries[154].NewConfirmed).toLocaleString();
    zaTr = Number(data.Countries[154].TotalRecovered).toLocaleString();
    zaNr = Number(data.Countries[154].NewRecovered).toLocaleString();
    zaTd = Number(data.Countries[154].TotalDeaths).toLocaleString();
    zaNd = Number(data.Countries[154].NewDeaths).toLocaleString();

    $("#zaTc").html(zaTc + "+");
    $("#zaNc").html(zaNc + "+");
    $("#zaTr").html(zaTr + "+");
    $("#zaNr").html(zaNr + "+");
    $("#zaTd").html(zaTd + "+");
    $("#zaNd").html(zaNd + "+");

    // South Sudan[155]
    var ssTc, ssNc, ssTr, ssNr, ssTd, ssNd;

    ssTc = Number(data.Countries[155].TotalConfirmed).toLocaleString();
    ssNc = Number(data.Countries[155].NewConfirmed).toLocaleString();
    ssTr = Number(data.Countries[155].TotalRecovered).toLocaleString();
    ssNr = Number(data.Countries[155].NewRecovered).toLocaleString();
    ssTd = Number(data.Countries[155].TotalDeaths).toLocaleString();
    ssNd = Number(data.Countries[155].NewDeaths).toLocaleString();

    $("#ssTc").html(ssTc + "+");
    $("#ssNc").html(ssNc + "+");
    $("#ssTr").html(ssTr + "+");
    $("#ssNr").html(ssNr + "+");
    $("#ssTd").html(ssTd + "+");
    $("#ssNd").html(ssNd + "+");

    // Spain[156]
    var esTc, esNc, esTr, esNr, esTd, esNd;

    esTc = Number(data.Countries[156].TotalConfirmed).toLocaleString();
    esNc = Number(data.Countries[156].NewConfirmed).toLocaleString();
    esTr = Number(data.Countries[156].TotalRecovered).toLocaleString();
    esNr = Number(data.Countries[156].NewRecovered).toLocaleString();
    esTd = Number(data.Countries[156].TotalDeaths).toLocaleString();
    esNd = Number(data.Countries[156].NewDeaths).toLocaleString();

    $("#esTc").html(esTc + "+");
    $("#esNc").html(esNc + "+");
    $("#esTr").html(esTr + "+");
    $("#esNr").html(esNr + "+");
    $("#esTd").html(esTd + "+");
    $("#esNd").html(esNd + "+");

    // Sri Lanka[157]
    var lkTc, lkNc, lkTr, lkNr, lkTd, lkNd;

    lkTc = Number(data.Countries[157].TotalConfirmed).toLocaleString();
    lkNc = Number(data.Countries[157].NewConfirmed).toLocaleString();
    lkTr = Number(data.Countries[157].TotalRecovered).toLocaleString();
    lkNr = Number(data.Countries[157].NewRecovered).toLocaleString();
    lkTd = Number(data.Countries[157].TotalDeaths).toLocaleString();
    lkNd = Number(data.Countries[157].NewDeaths).toLocaleString();

    $("#lkTc").html(lkTc + "+");
    $("#lkNc").html(lkNc + "+");
    $("#lkTr").html(lkTr + "+");
    $("#lkNr").html(lkNr + "+");
    $("#lkTd").html(lkTd + "+");
    $("#lkNd").html(lkNd + "+");

    // Sudan[158]
    var sdTc, sdNc, sdTr, sdNr, sdTd, sdNd;

    sdTc = Number(data.Countries[158].TotalConfirmed).toLocaleString();
    sdNc = Number(data.Countries[158].NewConfirmed).toLocaleString();
    sdTr = Number(data.Countries[158].TotalRecovered).toLocaleString();
    sdNr = Number(data.Countries[158].NewRecovered).toLocaleString();
    sdTd = Number(data.Countries[158].TotalDeaths).toLocaleString();
    sdNd = Number(data.Countries[158].NewDeaths).toLocaleString();

    $("#sdTc").html(sdTc + "+");
    $("#sdNc").html(sdNc + "+");
    $("#sdTr").html(sdTr + "+");
    $("#sdNr").html(sdNr + "+");
    $("#sdTd").html(sdTd + "+");
    $("#sdNd").html(sdNd + "+");

    // Suriname[159]
    var srTc, srNc, srTr, srNr, srTd, srNd;

    srTc = Number(data.Countries[159].TotalConfirmed).toLocaleString();
    srNc = Number(data.Countries[159].NewConfirmed).toLocaleString();
    srTr = Number(data.Countries[159].TotalRecovered).toLocaleString();
    srNr = Number(data.Countries[159].NewRecovered).toLocaleString();
    srTd = Number(data.Countries[159].TotalDeaths).toLocaleString();
    srNd = Number(data.Countries[159].NewDeaths).toLocaleString();

    $("#srTc").html(srTc + "+");
    $("#srNc").html(srNc + "+");
    $("#srTr").html(srTr + "+");
    $("#srNr").html(srNr + "+");
    $("#srTd").html(srTd + "+");
    $("#srNd").html(srNd + "+");

    // Swaziland[160]
    var szTc, szNc, szTr, szNr, szTd, szNd;

    szTc = Number(data.Countries[160].TotalConfirmed).toLocaleString();
    szNc = Number(data.Countries[160].NewConfirmed).toLocaleString();
    szTr = Number(data.Countries[160].TotalRecovered).toLocaleString();
    szNr = Number(data.Countries[160].NewRecovered).toLocaleString();
    szTd = Number(data.Countries[160].TotalDeaths).toLocaleString();
    szNd = Number(data.Countries[160].NewDeaths).toLocaleString();

    $("#szTc").html(szTc + "+");
    $("#szNc").html(szNc + "+");
    $("#szTr").html(szTr + "+");
    $("#szNr").html(szNr + "+");
    $("#szTd").html(szTd + "+");
    $("#szNd").html(szNd + "+");

    // Sweden[161]
    var seTc, seNc, seTr, seNr, seTd, seNd;

    seTc = Number(data.Countries[161].TotalConfirmed).toLocaleString();
    seNc = Number(data.Countries[161].NewConfirmed).toLocaleString();
    seTr = Number(data.Countries[161].TotalRecovered).toLocaleString();
    seNr = Number(data.Countries[161].NewRecovered).toLocaleString();
    seTd = Number(data.Countries[161].TotalDeaths).toLocaleString();
    seNd = Number(data.Countries[161].NewDeaths).toLocaleString();

    $("#seTc").html(seTc + "+");
    $("#seNc").html(seNc + "+");
    $("#seTr").html(seTr + "+");
    $("#seNr").html(seNr + "+");
    $("#seTd").html(seTd + "+");
    $("#seNd").html(seNd + "+");

    // Switzerland[162]
    var chTc, chNc, chTr, chNr, chTd, chNd;

    chTc = Number(data.Countries[162].TotalConfirmed).toLocaleString();
    chNc = Number(data.Countries[162].NewConfirmed).toLocaleString();
    chTr = Number(data.Countries[162].TotalRecovered).toLocaleString();
    chNr = Number(data.Countries[162].NewRecovered).toLocaleString();
    chTd = Number(data.Countries[162].TotalDeaths).toLocaleString();
    chNd = Number(data.Countries[162].NewDeaths).toLocaleString();

    $("#chTc").html(chTc + "+");
    $("#chNc").html(chNc + "+");
    $("#chTr").html(chTr + "+");
    $("#chNr").html(chNr + "+");
    $("#chTd").html(chTd + "+");
    $("#chNd").html(chNd + "+");

    // Syrian Arab Republic (Syria)[163]
    var syTc, syNc, syTr, syNr, syTd, syNd;

    syTc = Number(data.Countries[163].TotalConfirmed).toLocaleString();
    syNc = Number(data.Countries[163].NewConfirmed).toLocaleString();
    syTr = Number(data.Countries[163].TotalRecovered).toLocaleString();
    syNr = Number(data.Countries[163].NewRecovered).toLocaleString();
    syTd = Number(data.Countries[163].TotalDeaths).toLocaleString();
    syNd = Number(data.Countries[163].NewDeaths).toLocaleString();

    $("#syTc").html(syTc + "+");
    $("#syNc").html(syNc + "+");
    $("#syTr").html(syTr + "+");
    $("#syNr").html(syNr + "+");
    $("#syTd").html(syTd + "+");
    $("#syNd").html(syNd + "+");

    // Taiwan[164]
    var twTc, twNc, twTr, twNr, twTd, twNd;

    twTc = Number(data.Countries[164].TotalConfirmed).toLocaleString();
    twNc = Number(data.Countries[164].NewConfirmed).toLocaleString();
    twTr = Number(data.Countries[164].TotalRecovered).toLocaleString();
    twNr = Number(data.Countries[164].NewRecovered).toLocaleString();
    twTd = Number(data.Countries[164].TotalDeaths).toLocaleString();
    twNd = Number(data.Countries[164].NewDeaths).toLocaleString();

    $("#twTc").html(twTc + "+");
    $("#twNc").html(twNc + "+");
    $("#twTr").html(twTr + "+");
    $("#twNr").html(twNr + "+");
    $("#twTd").html(twTd + "+");
    $("#twNd").html(twNd + "+");

    // Tajikistan[165]
    var tjTc, tjNc, tjTr, tjNr, tjTd, tjNd;

    tjTc = Number(data.Countries[165].TotalConfirmed).toLocaleString();
    tjNc = Number(data.Countries[165].NewConfirmed).toLocaleString();
    tjTr = Number(data.Countries[165].TotalRecovered).toLocaleString();
    tjNr = Number(data.Countries[165].NewRecovered).toLocaleString();
    tjTd = Number(data.Countries[165].TotalDeaths).toLocaleString();
    tjNd = Number(data.Countries[165].NewDeaths).toLocaleString();

    $("#tjTc").html(tjTc + "+");
    $("#tjNc").html(tjNc + "+");
    $("#tjTr").html(tjTr + "+");
    $("#tjNr").html(tjNr + "+");
    $("#tjTd").html(tjTd + "+");
    $("#tjNd").html(tjNd + "+");

    // Tanzania[166]
    var tzTc, tzNc, tzTr, tzNr, tzTd, tzNd;

    tzTc = Number(data.Countries[166].TotalConfirmed).toLocaleString();
    tzNc = Number(data.Countries[166].NewConfirmed).toLocaleString();
    tzTr = Number(data.Countries[166].TotalRecovered).toLocaleString();
    tzNr = Number(data.Countries[166].NewRecovered).toLocaleString();
    tzTd = Number(data.Countries[166].TotalDeaths).toLocaleString();
    tzNd = Number(data.Countries[166].NewDeaths).toLocaleString();

    $("#tzTc").html(tzTc + "+");
    $("#tzNc").html(tzNc + "+");
    $("#tzTr").html(tzTr + "+");
    $("#tzNr").html(tzNr + "+");
    $("#tzTd").html(tzTd + "+");
    $("#tzNd").html(tzNd + "+");

    // Thailand[167]
    var thTc, thNc, thTr, thNr, thTd, thNd;

    thTc = Number(data.Countries[167].TotalConfirmed).toLocaleString();
    thNc = Number(data.Countries[167].NewConfirmed).toLocaleString();
    thTr = Number(data.Countries[167].TotalRecovered).toLocaleString();
    thNr = Number(data.Countries[167].NewRecovered).toLocaleString();
    thTd = Number(data.Countries[167].TotalDeaths).toLocaleString();
    thNd = Number(data.Countries[167].NewDeaths).toLocaleString();

    $("#thTc").html(thTc + "+");
    $("#thNc").html(thNc + "+");
    $("#thTr").html(thTr + "+");
    $("#thNr").html(thNr + "+");
    $("#thTd").html(thTd + "+");
    $("#thNd").html(thNd + "+");

    // Timor-Leste[168]
    var tlTc, tlNc, tlTr, tlNr, tlTd, tlNd;

    tlTc = Number(data.Countries[168].TotalConfirmed).toLocaleString();
    tlNc = Number(data.Countries[168].NewConfirmed).toLocaleString();
    tlTr = Number(data.Countries[168].TotalRecovered).toLocaleString();
    tlNr = Number(data.Countries[168].NewRecovered).toLocaleString();
    tlTd = Number(data.Countries[168].TotalDeaths).toLocaleString();
    tlNd = Number(data.Countries[168].NewDeaths).toLocaleString();

    $("#tlTc").html(tlTc + "+");
    $("#tlNc").html(tlNc + "+");
    $("#tlTr").html(tlTr + "+");
    $("#tlNr").html(tlNr + "+");
    $("#tlTd").html(tlTd + "+");
    $("#tlNd").html(tlNd + "+");

    // Togo[169]
    var tgTc, tgNc, tgTr, tgNr, tgTd, tgNd;

    tgTc = Number(data.Countries[169].TotalConfirmed).toLocaleString();
    tgNc = Number(data.Countries[169].NewConfirmed).toLocaleString();
    tgTr = Number(data.Countries[169].TotalRecovered).toLocaleString();
    tgNr = Number(data.Countries[169].NewRecovered).toLocaleString();
    tgTd = Number(data.Countries[169].TotalDeaths).toLocaleString();
    tgNd = Number(data.Countries[169].NewDeaths).toLocaleString();

    $("#tgTc").html(tgTc + "+");
    $("#tgNc").html(tgNc + "+");
    $("#tgTr").html(tgTr + "+");
    $("#tgNr").html(tgNr + "+");
    $("#tgTd").html(tgTd + "+");
    $("#tgNd").html(tgNd + "+");

    // Ndinidad and Tobago[170]
    var ttTc, ttNc, ttTr, ttNr, ttTd, ttNd;

    ttTc = Number(data.Countries[170].TotalConfirmed).toLocaleString();
    ttNc = Number(data.Countries[170].NewConfirmed).toLocaleString();
    ttTr = Number(data.Countries[170].TotalRecovered).toLocaleString();
    ttNr = Number(data.Countries[170].NewRecovered).toLocaleString();
    ttTd = Number(data.Countries[170].TotalDeaths).toLocaleString();
    ttNd = Number(data.Countries[170].NewDeaths).toLocaleString();

    $("#ttTc").html(ttTc + "+");
    $("#ttNc").html(ttNc + "+");
    $("#ttTr").html(ttTr + "+");
    $("#ttNr").html(ttNr + "+");
    $("#ttTd").html(ttTd + "+");
    $("#ttNd").html(ttNd + "+");

    // Tunisia[171]
    var tnTc, tnNc, tnTr, tnNr, tnTd, tnNd;

    tnTc = Number(data.Countries[171].TotalConfirmed).toLocaleString();
    tnNc = Number(data.Countries[171].NewConfirmed).toLocaleString();
    tnTr = Number(data.Countries[171].TotalRecovered).toLocaleString();
    tnNr = Number(data.Countries[171].NewRecovered).toLocaleString();
    tnTd = Number(data.Countries[171].TotalDeaths).toLocaleString();
    tnNd = Number(data.Countries[171].NewDeaths).toLocaleString();

    $("#tnTc").html(tnTc + "+");
    $("#tnNc").html(tnNc + "+");
    $("#tnTr").html(tnTr + "+");
    $("#tnNr").html(tnNr + "+");
    $("#tnTd").html(tnTd + "+");
    $("#tnNd").html(tnNd + "+");

    // Turkey[172]
    var trTc, trNc, trTr, trNr, trTd, trNd;

    trTc = Number(data.Countries[172].TotalConfirmed).toLocaleString();
    trNc = Number(data.Countries[172].NewConfirmed).toLocaleString();
    trTr = Number(data.Countries[172].TotalRecovered).toLocaleString();
    trNr = Number(data.Countries[172].NewRecovered).toLocaleString();
    trTd = Number(data.Countries[172].TotalDeaths).toLocaleString();
    trNd = Number(data.Countries[172].NewDeaths).toLocaleString();

    $("#trTc").html(trTc + "+");
    $("#trNc").html(trNc + "+");
    $("#trTr").html(trTr + "+");
    $("#trNr").html(trNr + "+");
    $("#trTd").html(trTd + "+");
    $("#trNd").html(trNd + "+");

    // Uganda[173]
    var ugTc, ugNc, ugTr, ugNr, ugTd, ugNd;

    ugTc = Number(data.Countries[173].TotalConfirmed).toLocaleString();
    ugNc = Number(data.Countries[173].NewConfirmed).toLocaleString();
    ugTr = Number(data.Countries[173].TotalRecovered).toLocaleString();
    ugNr = Number(data.Countries[173].NewRecovered).toLocaleString();
    ugTd = Number(data.Countries[173].TotalDeaths).toLocaleString();
    ugNd = Number(data.Countries[173].NewDeaths).toLocaleString();

    $("#ugTc").html(ugTc + "+");
    $("#ugNc").html(ugNc + "+");
    $("#ugTr").html(ugTr + "+");
    $("#ugNr").html(ugNr + "+");
    $("#ugTd").html(ugTd + "+");
    $("#ugNd").html(ugNd + "+");

    // Ukraine[174]
    var uaTc, uaNc, uaTr, uaNr, uaTd, uaNd;

    uaTc = Number(data.Countries[174].TotalConfirmed).toLocaleString();
    uaNc = Number(data.Countries[174].NewConfirmed).toLocaleString();
    uaTr = Number(data.Countries[174].TotalRecovered).toLocaleString();
    uaNr = Number(data.Countries[174].NewRecovered).toLocaleString();
    uaTd = Number(data.Countries[174].TotalDeaths).toLocaleString();
    uaNd = Number(data.Countries[174].NewDeaths).toLocaleString();

    $("#uaTc").html(uaTc + "+");
    $("#uaNc").html(uaNc + "+");
    $("#uaTr").html(uaTr + "+");
    $("#uaNr").html(uaNr + "+");
    $("#uaTd").html(uaTd + "+");
    $("#uaNd").html(uaNd + "+");

    // United Arab Emirates[175]
    var aeTc, aeNc, aeTr, aeNr, aeTd, aeNd;

    aeTc = Number(data.Countries[175].TotalConfirmed).toLocaleString();
    aeNc = Number(data.Countries[175].NewConfirmed).toLocaleString();
    aeTr = Number(data.Countries[175].TotalRecovered).toLocaleString();
    aeNr = Number(data.Countries[175].NewRecovered).toLocaleString();
    aeTd = Number(data.Countries[175].TotalDeaths).toLocaleString();
    aeNd = Number(data.Countries[175].NewDeaths).toLocaleString();

    $("#aeTc").html(aeTc + "+");
    $("#aeNc").html(aeNc + "+");
    $("#aeTr").html(aeTr + "+");
    $("#aeNr").html(aeNr + "+");
    $("#aeTd").html(aeTd + "+");
    $("#aeNd").html(aeNd + "+");

    // United Kingdom[176]
    var gbTc, gbNc, gbTr, gbNr, gbTd, gbNd;

    gbTc = Number(data.Countries[176].TotalConfirmed).toLocaleString();
    gbNc = Number(data.Countries[176].NewConfirmed).toLocaleString();
    gbTr = Number(data.Countries[176].TotalRecovered).toLocaleString();
    gbNr = Number(data.Countries[176].NewRecovered).toLocaleString();
    gbTd = Number(data.Countries[176].TotalDeaths).toLocaleString();
    gbNd = Number(data.Countries[176].NewDeaths).toLocaleString();

    $("#gbTc").html(gbTc + "+");
    $("#gbNc").html(gbNc + "+");
    $("#gbTr").html(gbTr + "+");
    $("#gbNr").html(gbNr + "+");
    $("#gbTd").html(gbTd + "+");
    $("#gbNd").html(gbNd + "+");

    // United States of America[177]
    var usTc, usNc, usTr, usNr, usTd, usNd;

    usTc = Number(data.Countries[177].TotalConfirmed).toLocaleString();
    usNc = Number(data.Countries[177].NewConfirmed).toLocaleString();
    usTr = Number(data.Countries[177].TotalRecovered).toLocaleString();
    usNr = Number(data.Countries[177].NewRecovered).toLocaleString();
    usTd = Number(data.Countries[177].TotalDeaths).toLocaleString();
    usNd = Number(data.Countries[177].NewDeaths).toLocaleString();

    $("#usTc").html(usTc + "+");
    $("#usNc").html(usNc + "+");
    $("#usTr").html(usTr + "+");
    $("#usNr").html(usNr + "+");
    $("#usTd").html(usTd + "+");
    $("#usNd").html(usNd + "+");

    // Uruguay[178]
    var uyTc, uyNc, uyTr, uyNr, uyTd, uyNd;

    uyTc = Number(data.Countries[178].TotalConfirmed).toLocaleString();
    uyNc = Number(data.Countries[178].NewConfirmed).toLocaleString();
    uyTr = Number(data.Countries[178].TotalRecovered).toLocaleString();
    uyNr = Number(data.Countries[178].NewRecovered).toLocaleString();
    uyTd = Number(data.Countries[178].TotalDeaths).toLocaleString();
    uyNd = Number(data.Countries[178].NewDeaths).toLocaleString();

    $("#uyTc").html(uyTc + "+");
    $("#uyNc").html(uyNc + "+");
    $("#uyTr").html(uyTr + "+");
    $("#uyNr").html(uyNr + "+");
    $("#uyTd").html(uyTd + "+");
    $("#uyNd").html(uyNd + "+");

    // Uzbekistan[179]
    var uzTc, uzNc, uzTr, uzNr, uzTd, uzNd;

    uzTc = Number(data.Countries[179].TotalConfirmed).toLocaleString();
    uzNc = Number(data.Countries[179].NewConfirmed).toLocaleString();
    uzTr = Number(data.Countries[179].TotalRecovered).toLocaleString();
    uzNr = Number(data.Countries[179].NewRecovered).toLocaleString();
    uzTd = Number(data.Countries[179].TotalDeaths).toLocaleString();
    uzNd = Number(data.Countries[179].NewDeaths).toLocaleString();

    $("#uzTc").html(uzTc + "+");
    $("#uzNc").html(uzNc + "+");
    $("#uzTr").html(uzTr + "+");
    $("#uzNr").html(uzNr + "+");
    $("#uzTd").html(uzTd + "+");
    $("#uzNd").html(uzNd + "+");

    // Venezuela (Bolivarian Republic)[180]
    var veTc, veNc, veTr, veNr, veTd, veNd;

    veTc = Number(data.Countries[180].TotalConfirmed).toLocaleString();
    veNc = Number(data.Countries[180].NewConfirmed).toLocaleString();
    veTr = Number(data.Countries[180].TotalRecovered).toLocaleString();
    veNr = Number(data.Countries[180].NewRecovered).toLocaleString();
    veTd = Number(data.Countries[180].TotalDeaths).toLocaleString();
    veNd = Number(data.Countries[180].NewDeaths).toLocaleString();

    $("#veTc").html(veTc + "+");
    $("#veNc").html(veNc + "+");
    $("#veTr").html(veTr + "+");
    $("#veNr").html(veNr + "+");
    $("#veTd").html(veTd + "+");
    $("#veNd").html(veNd + "+");

    // Viet Nam[181]
    var vnTc, vnNc, vnTr, vnNr, vnTd, vnNd;

    vnTc = Number(data.Countries[181].TotalConfirmed).toLocaleString();
    vnNc = Number(data.Countries[181].NewConfirmed).toLocaleString();
    vnTr = Number(data.Countries[181].TotalRecovered).toLocaleString();
    vnNr = Number(data.Countries[181].NewRecovered).toLocaleString();
    vnTd = Number(data.Countries[181].TotalDeaths).toLocaleString();
    vnNd = Number(data.Countries[181].NewDeaths).toLocaleString();

    $("#vnTc").html(vnTc + "+");
    $("#vnNc").html(vnNc + "+");
    $("#vnTr").html(vnTr + "+");
    $("#vnNr").html(vnNr + "+");
    $("#vnTd").html(vnTd + "+");
    $("#vnNd").html(vnNd + "+");

    // Western Sahara[182]
    var ehTc, ehNc, ehTr, ehNr, ehTd, ehNd;

    ehTc = Number(data.Countries[182].TotalConfirmed).toLocaleString();
    ehNc = Number(data.Countries[182].NewConfirmed).toLocaleString();
    ehTr = Number(data.Countries[182].TotalRecovered).toLocaleString();
    ehNr = Number(data.Countries[182].NewRecovered).toLocaleString();
    ehTd = Number(data.Countries[182].TotalDeaths).toLocaleString();
    ehNd = Number(data.Countries[182].NewDeaths).toLocaleString();

    $("#ehTc").html(ehTc + "+");
    $("#ehNc").html(ehNc + "+");
    $("#ehTr").html(ehTr + "+");
    $("#ehNr").html(ehNr + "+");
    $("#ehTd").html(ehTd + "+");
    $("#ehNd").html(ehNd + "+");

    // Yemen[183]
    var yeTc, yeNc, yeTr, yeNr, yeTd, yeNd;

    yeTc = Number(data.Countries[183].TotalConfirmed).toLocaleString();
    yeNc = Number(data.Countries[183].NewConfirmed).toLocaleString();
    yeTr = Number(data.Countries[183].TotalRecovered).toLocaleString();
    yeNr = Number(data.Countries[183].NewRecovered).toLocaleString();
    yeTd = Number(data.Countries[183].TotalDeaths).toLocaleString();
    yeNd = Number(data.Countries[183].NewDeaths).toLocaleString();

    $("#yeTc").html(yeTc + "+");
    $("#yeNc").html(yeNc + "+");
    $("#yeTr").html(yeTr + "+");
    $("#yeNr").html(yeNr + "+");
    $("#yeTd").html(yeTd + "+");
    $("#yeNd").html(yeNd + "+");

    // Zambia[184]
    var zmTc, zmNc, zmTr, zmNr, zmTd, zmNd;

    zmTc = Number(data.Countries[184].TotalConfirmed).toLocaleString();
    zmNc = Number(data.Countries[184].NewConfirmed).toLocaleString();
    zmTr = Number(data.Countries[184].TotalRecovered).toLocaleString();
    zmNr = Number(data.Countries[184].NewRecovered).toLocaleString();
    zmTd = Number(data.Countries[184].TotalDeaths).toLocaleString();
    zmNd = Number(data.Countries[184].NewDeaths).toLocaleString();

    $("#zmTc").html(zmTc + "+");
    $("#zmNc").html(zmNc + "+");
    $("#zmTr").html(zmTr + "+");
    $("#zmNr").html(zmNr + "+");
    $("#zmTd").html(zmTd + "+");
    $("#zmNd").html(zmNd + "+");

    // Zimbabwe[185]
    var zwTc, zwNc, zwTr, zwNr, zwTd, zwNd;

    zwTc = Number(data.Countries[185].TotalConfirmed).toLocaleString();
    zwNc = Number(data.Countries[185].NewConfirmed).toLocaleString();
    zwTr = Number(data.Countries[185].TotalRecovered).toLocaleString();
    zwNr = Number(data.Countries[185].NewRecovered).toLocaleString();
    zwTd = Number(data.Countries[185].TotalDeaths).toLocaleString();
    zwNd = Number(data.Countries[185].NewDeaths).toLocaleString();

    $("#zwTc").html(zwTc + "+");
    $("#zwNc").html(zwNc + "+");
    $("#zwTr").html(zwTr + "+");
    $("#zwNr").html(zwNr + "+");
    $("#zwTd").html(zwTd + "+");
    $("#zwNd").html(zwNd + "+");

    // Last Update Time Function
    var lastUpdate = data.Date;
    $("#lastUpdate").html("Last Update: " + lastUpdate);

    // Main Chart Functions

    // Variables for chart data from API
    var NewConfirmed = data.Global.NewConfirmed;
    var NewDeaths = data.Global.NewDeaths;
    var NewRecovered = data.Global.NewRecovered;
    var TotalConfirmed = data.Global.TotalConfirmed;
    var TotalDeaths = data.Global.TotalDeaths;
    var TotalRecovered = data.Global.TotalRecovered;

    var ctx = document.getElementById("mainChart").getContext("2d");
    var chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "New Confirmed",
          "New Deaths",
          "New Recovered",
          "Total Confirmed",
          "Total Deaths",
          "Total Recovered",
        ],
        datasets: [{
          label: "Cases",
          data: [
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 2,
        }, ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }, ],
        },
        maintainAspectRatio: false,
      },
      options: {
        title: {
          display: true,
          text: "Latest Update (Worldwide)",
          fontSize: 25,
        },
      },
    });
  });
});
