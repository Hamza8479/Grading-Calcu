const calcu = () =>{
    let wp = document.getElementById('wp').value;
    let ds = document.getElementById('ds').value;
    let aoa = document.getElementById('aoa').value;
    let maths = document.getElementById('maths').value;
   // let res = document.getElementById('showResult').innerHTML;
    let grades ='';
    let check = '';

    let totalGrades = parseFloat(wp) + parseFloat(ds) + parseFloat(aoa) + parseFloat(maths);
    alert(totalGrades);

    let percentage = Math.round((totalGrades/400) * 100);
    alert(percentage);

    if(percentage <=100 && percentage >=80){
        grades ='A';
    }
    else if(percentage <=79 && percentage >=60){
        grades = 'B';
    }
    else if(percentage <=59 && percentage >=50){
        grades = 'C';
    }
    else{
        grades = 'F';
    }

    if(percentage >= 50){
        check = 'Pass'
    }
    else{
        check = 'Fail';
    }

    document.getElementById('showResult').innerHTML = `Out of 400 Your total is ${totalGrades} and percentage is ${percentage}% <br> your grade is ${grades}. You are ${check} `;
}
