funct
function addTask() {
    
    cons
const taskInput = document.getElementById('taskInput');
    
   
const taskList = document.getElementById('taskList');

    

// Verifica se o campo de entrada não está vazio
    
    
if (taskInput.value.trim() !== '') {
        
    
// Cria um novo elemento de lista (li)
        
        c
const newTask = document.createElement('li');

        

  
// Adiciona o texto da tarefa ao elemento de lista
        newTask.
        newTa

    
textContent = taskInput.value;

        

    
// Adiciona um botão de exclusão à tarefa
        
    
const deleteButton = document.createElement('button');
        deleteButton.
        deleteButton

        deleteBut

       
textContent = 'Excluir';
        deleteButton.
        deleteButto

        de

 
onclick = function () {
            taskList.
            taskList

           

 
removeChild(newTask);
        };

        
        };

      

       
// Adiciona o botão de exclusão à tarefa
        newTask.
        newTask.

       
appendChild(deleteButton);

        

// Adiciona a tarefa à lista
        taskList.
        task

   
appendChild(newTask);

        

        /
// Limpa o campo de entrada
        taskInput.
        taskInput.

        t

 
value = '';
    }
}

    }
