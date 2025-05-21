let data=[
  {name:'alice',sal:50000},
  {name:'charlie',sal:60000},
  {name:'bob',sal:40000}
]

function bonus(bns=0.1){
  return this.sal * bns;
}


let allData=data.map(val=>{
  let bonuses=bonus.call(val)
  return {...val,bonuses}
})
let highEarners=data.filter(val=>val.sal>45000)

let highEarnerWithBonus=highEarners.map(val=>{
  let bonuses=bonus.call(val)
  return {...val,bonuses}
})
highEarnerWithBonus.map(({name,sal,bonuses})=>{
  console.log(`${name} earns ₹${sal} and got a bonus of ₹${bonuses}`);
  
})
let total=allData.reduce((acc,{bonuses})=> acc+bonuses,0)
console.log(`Total Bonus Given: ₹${total}`);