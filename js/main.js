'use strict';

let start = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudget = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    btnInTag = document.getElementsByTagName('button'),
    expensesBtn = btnInTag[0],
    optionalExpensesBtn = btnInTag[1],
    countBtn = btnInTag[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSaving = document.querySelector('#savings'),
    sumlabel = document.querySelector('.choose-sum'),
    percentlabel = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    money,
    time;

    function deActiveBtn(arr){
       for(let key of arr){
          key.setAttribute('disabled',true);
          key.style.opacity = 0.5;
          key.style.cursor = 'no-drop';
       }
    }
    deActiveBtn(btnInTag);
    
    start.removeAttribute('disabled');
    start.style.opacity = 1;
    start.style.cursor = 'pointer';
   

    start.addEventListener('click', function(){
      function ActiveBtn(arr){
         for(let key of arr){
            key.removeAttribute('disabled');
            key.style.opacity = 1;
            key.style.cursor = 'pointer';
         }
      }

      ActiveBtn(btnInTag);
      

      time = prompt("Введите дату в формате YYYY-MM-DD");
      money = +prompt("Ваш бюджет на месяц?");
   
      while(isNaN(money) || money == "" || money ==null ) {
         money = +prompt("Ваш бюджет на месяц?");
      }
      appData.butget = money;
      appData.timeData = time;
      budgetValue.textContent = money.toFixed();
      yearValue.value = new Date (Date.parse(time)).getFullYear();
      monthValue.value = new Date (Date.parse(time)).getMonth()+1;
      dayValue.value = new Date (Date.parse(time)).getDate();
  
    });


    expensesBtn.addEventListener('click', function(){
       let summ  = 0;
       for (let i = 0; i < inputExpensesItem.length; i++){
         let a = inputExpensesItem[i].value,
             b = inputExpensesItem[++i].value;

            if(typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
               appData.expenses[a] = b;
               summ += +b;
               appData.butget = appData.butget - summ;
               }  
            }
            expensesValue.textContent = summ;
            budgetValue.textContent = appData.butget;
    });
    

    optionalExpensesBtn.addEventListener('click', function(){
   
         for (let i = 0; i < optionalExpensesItem.length; i++){
            let askOptExpenses = optionalExpensesItem[i].value ;
            appData.optionalExpenses[i] = askOptExpenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + '  ';
         }
    });

    countBtn.addEventListener('click', function(){

      if(appData.butget != undefined){
       
      appData.moneyForDay = +(appData.butget/30).toFixed();
      dayBudget.textContent = +appData.moneyForDay;

      if(appData.moneyForDay < 200){
         levelValue.textContent = "Пора что-то менять ";
      } else if(appData.moneyForDay>200 && appData.moneyForDay <500){
         levelValue.textContent = "Уже не плохо";
      }else if (appData.moneyForDay>500 && appData.moneyForDay <1000){
         levelValue.textContent = "Красавчик";
      } else if (appData.moneyForDay >1000){
         levelValue.textContent = "а ты мажор";
      }else{
         levelValue.textContent ="Что-то пошло не так, ошибка!!!";
      }
    }else {
      dayBudget.textContent = "Ошибка,запустите программу и укажите бюджет";
    }

    });


    chooseIncome.addEventListener('input', function(){
       let val = chooseIncome.value;
       appData.income = val;
       incomeValue.textContent = appData.income;

    });


    checkSaving.addEventListener('click',function(){
       if(appData.savings == true){
          appData.savings = false;
       } else{
          appData.savings = true;
       }
    });


    sumlabel.addEventListener('input',function(){
       if(appData.savings == true){
       let sum = +sumlabel.value,
           percent = +percentlabel.value;

       appData.monthIncome = sum/100/12*percent.toFixed(1);
       appData.yearhIncome = sum/100*percent.toFixed(1);

       monthSavingsValue.textContent = appData.monthIncome;
       yearSavingsValue.textContent = appData.yearhIncome;
       }

    });


    percentlabel.addEventListener('input',function(){
      if(appData.savings == true){
         let sum = +sumlabel.value,
         percent = +percentlabel.value;

       appData.monthIncome = sum/100/12*percent.toFixed(1);
       appData.yearhIncome = sum/100*percent.toFixed(1);
       monthSavingsValue.textContent = appData.monthIncome;
       yearSavingsValue.textContent = appData.yearhIncome;

      }
    });
   

    let appData = {
    
        butget:money,
        timeData:time,
        expenses: {},
        optionalExpenses:{},
        income:[],
        savings:false
       };

   