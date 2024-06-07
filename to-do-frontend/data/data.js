const taskDetails = [];

export async function fetchData() {
  try{
    const response = await fetch("http://localhost:3000/api/v1/tasks");
    const data = await response.json();
    data.forEach((item)=>{
      taskDetails.push(item);
    })
  }catch(error){
    console.log("Error fetching data", error);
  } 
}

export function getTaskDetails(){
  return taskDetails;
}
