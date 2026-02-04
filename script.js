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
        let industryGender
        data.forEach((i) => {
            let industry = i.company.industry
            let gender = i.gender
            if (industryGender[industry] === undefined){
                industryGender[industry] = {};
            }
            if (industryGender[industry][gender] === undefined){
                industryGender[industry][gender] = 1;}
            else{
                industryCount[industry][gender] += 1;}
            })
            console.log(industryGender)
        })
};
f()

function g(){
    getArray().then((data) => {


    });
}
