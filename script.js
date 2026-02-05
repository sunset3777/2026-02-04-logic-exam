function getArray() {
  return fetch('https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json')
    .then((response) => response.json())
    .then((data => {
        console.log(data[2])
        return data;
      }));
      }

function a(){
    getArray().then((data) => {
        let EducationCount ={}
        data.forEach((i) => {
        const edu = i.education
        if (EducationCount[edu] === undefined){
            EducationCount[edu] = 1;
        }
        else{
            EducationCount[edu] += 1;
        }
    });
    console.log(EducationCount)
})}
a();

function b(){
    return getArray().then((data) => {
        let areaCount ={}
        const total = data.length;
        data.forEach((i) => {
        const area =  i.company.area;
        if (areaCount[area] === undefined){
            areaCount[area] = 1;
        }
        else{
            areaCount[area] += 1;
        }
    });
    const result = Object.keys(areaCount).map((area) => {
    const percent = Math.round((areaCount[area] / total) * 100);
    return { [area]: `${percent}%` };
    });
    console.log(result)
    return result;
})}
b();

function c(){
    return getArray().then((data) => {
        let score = 0
        let count = 0
        data.forEach((i) => {
            if (i.age === '26~30 歲') {
                count +=1
                score += Number(i.salary_score)
            }
        })
        avg =score/count
        console.log(`平均薪資滿意度=${avg}`)
    });
}
c()

function d(){
    return getArray().then((data) => {
        let industry_message = {
            '有寫': 0,
            '沒寫': 0
        };
        data.forEach((i) => { 
            const msg = i.industry_message
            if (i.company.industry_message === ''){
                industry_message['沒寫'] += 1
            }
            else {
                industry_message['有寫'] += 1
            }
        })
        console.log(industry_message)
    });
}
d()

function e(){
    getArray().then((data) => {
        let industryCount= {}
        data.forEach((i) =>{
            let industry = i.company.industry
            let workplace = i.company.work
        if (industryCount[industry] === undefined){
           industryCount[industry] = {};
        }
        if (industryCount[industry][workplace] === undefined){
            industryCount[industry][workplace] = 1;}
        else{
            industryCount[industry][workplace] += 1;
        }}
    );
    console.log(industryCount)
})}
e()
function f(){
    getArray().then((data) => {
        let industryCount= {}
        data.forEach((i) =>{
            let industry = i.company.industry
            let score = Number(i.company.score)
            let maleCount = 0
            let femaleCount = 0
            let maleScore = 0
            let avgMaleScore = 0
            let femaleScore = 0
            let avgFemaleScore =0
        if (industryCount[industry] === undefined){
           industryCount[industry] = {
            '男性人數:' : 0, 
            '女性人數:' : 0,
            '男性產業滿意度': 0,
            '女性產業滿意度': 0
           };
        }
        if(i.gender === '男性' ){
            industryCount[industry]['男性人數:'] += 1
            maleCount += 1
        }
        else {
            industryCount[industry]['女性人數:'] += 1
            femaleCount += 1
        }
        if (industryCount[industry][score] !== 0 ){
            if (i.gender === '男性' ){
                maleScore += score
                avgMaleScore = maleScore/maleCount 
                industryCount[industry]['男性產業滿意度'] = avgMaleScore
            }
            else {
                femaleScore += score
                avgFemaleScore =femaleScore/femaleCount
                industryCount[industry]['女性產業滿意度'] = avgFemaleScore
            }
        }
        })
        console.log(industryCount)
    })}
f()

function g() {
  getArray().then((data) => {
    let jobTenure = {};

    data.forEach((i) => {
      let tenure = i.company.job_tenure;
      let workPlace = i.company.work;
      let salaryScore = Number(i.company.salary_score);
      if (jobTenure[tenure] === undefined) {
        jobTenure[tenure] = {
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
        jobTenure[tenure]["遠端工作人數"] += 1;
        jobTenure[tenure]["遠端工作的總和薪水滿意度"] += salaryScore;
        jobTenure[tenure]["遠端工作的平均薪水滿意度"] =
          jobTenure[tenure]["遠端工作的總和薪水滿意度"] / jobTenure[tenure]["遠端工作人數"];
      } else if (workPlace === "實體辦公室") {
        jobTenure[tenure]["實體辦公室人數"] += 1;
        jobTenure[tenure]["實體辦公室的總和薪水滿意度"] += salaryScore;
        jobTenure[tenure]["實體辦公室的平均薪水滿意度"] =
          jobTenure[tenure]["實體辦公室的總和薪水滿意度"] / jobTenure[tenure]["實體辦公室人數"];
      } else {
        jobTenure[tenure]["混合制人數"] += 1;
        jobTenure[tenure]["混合制的總和薪水滿意度"] += salaryScore;
        jobTenure[tenure]["混合制的平均薪水滿意度"] =
          jobTenure[tenure]["混合制的總和薪水滿意度"] / jobTenure[tenure]["混合制人數"];
      }
    });
    console.log(jobTenure);
  });
}
g();
