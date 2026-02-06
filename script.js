function getArray() {
return fetch(
    "https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json",
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function a() {
  getArray().then((data) => {
    //then箭頭函式
    let EducationCount = {}; //宣告學歷陣列
    data.forEach((i) => {
      // forEach 代表 data 取出的資料為 i
      const edu = i.education; //宣告 edu = data 中的 education 資料
      if (EducationCount[edu] === undefined) {
        //如果陣列中的 education 資料還沒有被賦值
        EducationCount[edu] = 1; // 新增一個新的 變數 i.education 到陣列中並設為1
      } else {
        EducationCount[edu] += 1; //如果陣列中已經有 i.education 資料就再加1
      }
    });
    console.log(EducationCount); //列印陣列
  });
}
a();

function b() {
  return getArray().then((data) => {
    //then箭頭函式
    let areaCount = {}; //宣告區域陣列
    const total = data.length; //計算data陣列長度
    data.forEach((i) => {
      // forEach 代表 data 取出的資料為 i
      const area = i.company.area; //宣告 area 從 i.company.area 取資料
      if (areaCount[area] === undefined) {
        //如果 area 還沒被賦值
        areaCount[area] = 1; //新增一個變數
      } else {
        areaCount[area] += 1; //變數已經存在 記述加1
      }
    });
    const result = Object.keys(areaCount).map((area) => {
      //宣告 result keys 為 areaCount 重新輸出一個 area 陣列
      const percent = Math.round((areaCount[area] / total) * 100); //算出比例
      return { [area]: `${percent}%` }; //加上 % 記號
    });
    console.log(result); //列印結果
    return result;
  });
}
b();

function c() {
  return getArray().then((data) => {
    let score = 0;
    let count = 0;
    let avg = 0;
    data.forEach((i) => {
      if (i.age === "26~30 歲") {
        //判斷年齡 如果為26-30歲 記數加一 加薪水滿意度分數加入score變數
        count += 1;
        score += Number(i.company.salary_score);
      }
    });
    avg = score / count; // score變數除以26-30歲人數
    console.log(`26~30 歲平均薪資滿意度=${avg}`);
  });
}
c();

function d() {
  return getArray().then((data) => {
    let industry_message = {
      //新增一個有紀錄 有寫跟沒寫的陣列
      有寫: 0,
      沒寫: 0,
    };
    data.forEach((i) => {
      const msg = i.industry_message; // 宣告 msg 從 i.industry_message取資料
      if (msg === "") {
        industry_message["沒寫"] += 1; //如果是空字串 就在沒寫的記數後面加一
      } else {
        industry_message["有寫"] += 1; //有內容 就在有寫的後面記數加一
      }
    });
    console.log(industry_message);
  });
}
d();

function e() {
  getArray().then((data) => {
    let industryCount = {}; // 宣告 industryCount 為一個陣列
    data.forEach((i) => {
      let industry = i.company.industry;
      let workplace = i.company.work;
      if (industryCount[industry] === undefined) {
        //判斷陣列中有沒有沒賦值過的陣列
        industryCount[industry] = {}; //沒有的話新增一個
      }
      if (industryCount[industry][workplace] === undefined) {
        // 判斷工作區域有沒有出現過
        industryCount[industry][workplace] = 1;
      } //沒有的話新增一個
      else {
        industryCount[industry][workplace] += 1; //已經存在的話記數加一
      }
    });
    console.log(industryCount);
  });
}
e();
function f() {
  getArray().then((data) => {
    let industryCount = {};
    data.forEach((i) => {
      let industry = i.company.industry; //宣告industry 是 data 資料中的 i.company.industry
      let score = Number(i.company.score); //宣告score 是 data 資料中的 i.company.score 轉換成數字

      if (industryCount[industry] === undefined) {
        //判端是不是沒出現過的產業別
        industryCount[industry] = {
          // 生成新產業別的模板
          "男性人數:": 0,
          "女性人數:": 0,
          男性產業滿意度: 0,
          女性產業滿意度: 0,

          男性滿意度總合: 0,
          女性滿意度總合: 0,
        };
      }
      if (i.gender === "男性") {
        //判斷是不是男性
        industryCount[industry]["男性人數:"] += 1; //是男性的話人數加1 把分數加入總和 並且將總合除以總人數
        industryCount[industry]["男性滿意度總合"] += score;
        industryCount[industry]["男性產業滿意度"] =
          industryCount[industry]["男性滿意度總合"] /
          industryCount[industry]["男性人數:"];
      } else if (i.gender === "女性") {
        //判斷是不是女性
        industryCount[industry]["女性人數:"] += 1; //是女性的話人數加1 把分數加入總和 並且將總合除以總人數
        industryCount[industry]["女性滿意度總合"] += score;
        industryCount[industry]["女性產業滿意度"] =
          industryCount[industry]["女性滿意度總合"] /
          industryCount[industry]["女性人數:"];
      }
    });
    console.log(industryCount); // 列印結果
  });
}
f();

function g() {
  getArray().then((data) => {
    let jobTenure = {};

    data.forEach((i) => {
      let tenure = i.company.job_tenure; //宣告tenure 是 data 資料中的 i.company.job_tenure
      let workPlace = i.company.work; //宣告workPlace 是 data 資料中的 i.company.work
      let salaryScore = Number(i.company.salary_score); //宣告salaryScore 是 data 資料中的 i.company.salary_score 轉換成數字
      if (jobTenure[tenure] === undefined) {
        //判端是不是沒出現過的年資
        jobTenure[tenure] = {
          //新增沒出現過的年資模板
          實體辦公室的平均薪水滿意度: 0,
          遠端工作的平均薪水滿意度: 0,
          混合制的平均薪水滿意度: 0,

          實體辦公室的總和薪水滿意度: 0,
          遠端工作的總和薪水滿意度: 0,
          混合制的總和薪水滿意度: 0,

          遠端工作人數: 0,
          實體辦公室人數: 0,
          混合制人數: 0,
        };
      }
      if (workPlace === "遠端工作") {
        //判斷工作區域
        jobTenure[tenure]["遠端工作人數"] += 1; //如果出現同樣工作區域的人數加一
        jobTenure[tenure]["遠端工作的總和薪水滿意度"] += salaryScore; //把同樣工作區域的人薪水滿意度相加
        jobTenure[tenure]["遠端工作的平均薪水滿意度"] =
          jobTenure[tenure]["遠端工作的總和薪水滿意度"] /
          jobTenure[tenure]["遠端工作人數"];
      } else if (workPlace === "實體辦公室") {
        //判斷工作區域
        jobTenure[tenure]["實體辦公室人數"] += 1; //如果出現同樣工作區域的人數加一
        jobTenure[tenure]["實體辦公室的總和薪水滿意度"] += salaryScore; //把同樣工作區域的人薪水滿意度相加
        jobTenure[tenure]["實體辦公室的平均薪水滿意度"] =
          jobTenure[tenure]["實體辦公室的總和薪水滿意度"] /
          jobTenure[tenure]["實體辦公室人數"]; //取平均
      } else {
        //判斷工作區域
        jobTenure[tenure]["混合制人數"] += 1; //如果出現同樣工作區域的人數加一
        jobTenure[tenure]["混合制的總和薪水滿意度"] += salaryScore; //把同樣工作區域的人薪水滿意度相加
        jobTenure[tenure]["混合制的平均薪水滿意度"] =
          jobTenure[tenure]["混合制的總和薪水滿意度"] /
          jobTenure[tenure]["混合制人數"]; //取平均
      }
    });
    console.log(jobTenure);
  });
}
g();

