import { fetchData, getTaskDetails } from "./data/data.js";

function renderTasks(){
  let completeList = document.querySelector('.js-complete-list');
  fetchData().then(()=>{
    const taskDetails = getTaskDetails();
    let bodyHtml='';
    taskDetails.forEach((item)=>{
      bodyHtml += `      
      <div class="list-container">
        <div class="left-side sides">
          <p>hi</p>
          <p>${item.name}</p>
        </div>
        <div class="right-side sides">
          <p>hi</p>
          <p>hello</p>
        </div>
      </div>`;
    });
    completeList.innerHTML = bodyHtml;
    document.querySelector('.js-submit-button').addEventListener('click', async()=>{
      const inputT = document.querySelector('.js-text-input');
      const inputText = inputT.value;
      await fetch("http://localhost:3000/api/v1/tasks", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          "name": `${inputText}`
        })
      });
      inputT.value = ' ';
      completeList.innerHTML = ' ';
      renderTasks();
    })
  })
}
renderTasks();


