let two2dObject;
const setMorningValue = document.querySelector(".setMorning");
const valueMorningValue = document.querySelector(".valueMorning");
const resultMorningValue = document.querySelector(".resultMorning");
const timeValue = document.querySelector(".time");

const url="https://script.googleusercontent.com/macros/echo?user_content_key=0ySTRqS60y5wdhfNos3vwIDPL_Y8gLDaVAVnfefwnEogCYyeA90lMYRaBCRKzAVaB8tHfg2dVQkj8A3UVkyj-b1yCmRMYmrgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBhMKdr3mjZlOgpWGgftRlCZZJ-qd3lNGu_IBuGnyapFnqJ7rg5NvOFWn12Fp1Dxq7d8MAdYOYtX&lib=MYSvdm741KiQvKD1gOuNd9lc8OvjxXfAZ";

const waittingData = async ()=>{
    const response = await fetch(url);
    two2dObject = await response.json();
    buildingUi();
}



const buildingUi =()=>{
    const getting = two2dObject.twoD;
    const setResult = getting[1].Set;
    
    console.log(setResult);
    
    const valueResult = getting[1].Value;
    const NoResult = getting[1]["No."];
    const dateResult = getting[1].Date;

    setMorningValue.textContent="Set"+"-"+setResult;
    valueMorningValue.textContent="Value"+"-"+valueResult;
    resultMorningValue.textContent="2D"+"-"+NoResult;
    timeValue.textContent=dateResult;
}
waittingData();