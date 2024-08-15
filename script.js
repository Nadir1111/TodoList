let form = document.querySelector('.form');
let input = document.querySelector('.input');
let todoList = document.querySelector('.to_do_list');

form.addEventListener('submit', function(event) {
    event.preventDefault();  
    
    // Create new to-do item elements
    let todoItem = document.createElement("div");
    let todoText = document.createElement("div");
    let todoBtn = document.createElement("div");
    let todoDelBtn = document.createElement("a");
    let todoImg = document.createElement('img');

    // Set properties and content
    todoImg.src = 'https://cdn-icons-png.flaticon.com/512/1400/1400390.png';
    todoText.textContent = input.value;
    
    // Add classes to new elements
    todoItem.classList.add('to_do_item');
    todoText.classList.add('to_do_text');
    todoBtn.classList.add('to_do_btn');
    todoDelBtn.classList.add('del_btn');
    todoImg.classList.add('del_img');
    
    // Assemble elements
    todoDelBtn.appendChild(todoImg);
    todoBtn.appendChild(todoDelBtn);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoBtn);
    
    // Append new item to the list
    todoList.appendChild(todoItem);
    
    // Clear input field
    input.value = '';
    
    // Add event listener for the delete button
    todoDelBtn.addEventListener('click', function(e) {
        e.currentTarget.closest('.to_do_item').remove();
    });
});
























