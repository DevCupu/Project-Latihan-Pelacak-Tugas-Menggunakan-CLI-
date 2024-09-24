const { create } = require('domain');
const fs = require('fs')
const path = require('path');

// Path untuk file JSON
const filePath =  path.join(__dirname, 'tasks.json');

// Memastikan file JSON ada
if (!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, JSON.stringify([]));
}

//Membaca tugas dari file JSON
function readTasks() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Menambahkan tugas baru ke file JSON
function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Menambahkan Tugas baru 
function addTask(description){
    const tasks =  readTasks();
    const newTask = {
        id: tasks.length + 1,
        description,
        status: 'todo',
        createAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
}

// Memperbaharui tugas

function updateTask(id, newDescription){
    const tasks = readTasks();
    const task =  tasks.find(t => t.id == id);
    if (task) {
        task.description =  newDescription;
        task.updateAt = newDescription;
        saveTasks(tasks);
        console.log(`Task Updated Successfully (ID: ${id})`);
    } else {
        console.log(`Task Not found (ID ${id})`);
    }
}

// Menghapus Tugas
function deleteTask(id) {
    let tasks = readTasks();
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id != id);
    saveTasks(tasks);
    if (tasks.length < initialLength) {
        console.log(`Task deleted successfully (ID: ${id})`);
    } else {
        console.log(`Task not founf (ID: ${id})`);
    }
}

// Menandai Tugas
function markTask(id, status) {
    const tasks = readTasks();
    const task =  tasks.find(t => t.id == id);
    if (task) {
        task.status = status;
        task.updateAt = new Date().toISOString();
        saveTasks(tasks);
        console.log(`Task marked as ${status} (ID: ${id})`);
    } else {
        console.log(`Task not found (ID: ${id})`);
    }
}

// Menampilkan semua tugas 
function listTasks() {
    const tasks = readTasks();
    if (tasks.length === 0) {
        console.log('No tasks available')
    } else {
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Description: ${task.description}`)
        });
    }
}

//  Menangani argumen baris perintah 
const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        addTask(args.join(''));
        break
    case 'update': 
        updateTask(Number(args[0]), args.slice(1).join(''));
        break;
    case 'delete':
        deleteTask(Number(args[0]), 'in-progress');
        break;
    case 'mark-done':
        markTask(Number(args[0]), 'done');
        break;
    case 'list':
        if (args[0]) {
            const tasks = readTasks();
            const filteredTasks = tasks.filter(t => t.status === args[0]);
            if ( filteredTasks.length === 0) {
                console.log(`No Task with status "${args[0]}" found.`)
            } else {
                filteredTasks.forEach(task => {
                console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}, Created At: ${task.createAt}, Updated At: ${task.updateAt}`);
            });

        }

        } else {
            listTasks();
        }
        break;
    default:
        console.log(`Unknown command. Use add, update, delete, mark-in-progress, mark-done, or list.`);
        break;
}