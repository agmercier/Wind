import { useState, createContext } from 'react';
import * as SQLite from 'expo-sqlite';

export default function useApi() {
    const [tasks, setTasks] = useState([]);
    
    const initDatabase = async () => {
        try{
            const db = await SQLite.openDatabaseAsync('databaseName');
            await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT, completed INTEGER DEFAULT 0);
            `);
            const allRows = await db.getAllAsync('SELECT * FROM tasks');
            db.closeAsync();
            setTasks(allRows);
        }
        catch (error) {
            console.log(error);
        }
    }
    
    const getTasks = async () => {
        try {
            const db = await SQLite.openDatabaseAsync('databaseName');
            const allRows = await db.getAllAsync('SELECT * FROM tasks');
            db.closeAsync();
            // allRows.forEach(row => console.log(row.id, row.value, row.intValue));
            setTasks(allRows);
            // return allRows;
        }
        catch (error) {
            console.log('its here')
            console.log(error);
        }
    }
    
    const addTask = async (task) => {
        try {
            const db = await SQLite.openDatabaseAsync('databaseName');
            const result = await db.runAsync('INSERT INTO tasks (title, description) VALUES (?, ?)', task.title, task.description);
            const allRows = await db.getAllAsync('SELECT * FROM tasks');
            db.closeAsync();
            setTasks(allRows);
            return result;
        }
        catch (error) {
            console.log(error);
        }
        
    }
    
    const updateTask = async (task) => {
        try{
            const db = await SQLite.openDatabaseAsync('databaseName');
            const result = await db.runAsync('UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?', task.title,task.description,task.completed, task.id);
            const allRows = await db.getAllAsync('SELECT * FROM tasks');
            db.closeAsync();
            setTasks(allRows);
            return result.lastInsertRowId;
        }
        catch (error) {
            console.log(error);
        }
    }
    
    const deleteTask = async (task) => {
        try{
            const db = await SQLite.openDatabaseAsync('databaseName');
            const result = await db.runAsync('DELETE FROM tasks WHERE id = $id', { $id: task.id });
            const allRows = await db.getAllAsync('SELECT * FROM tasks');
            db.closeAsync();
            setTasks(allRows);
            return result.changes;
        }
        catch (error) {
            console.log(error);
        }
    }
    
    const deleteDatabase = () => {
        try {
            SQLite.deleteDatabaseAsync('databaseName');
        }
        catch (error) {
            console.log(error);
        }
        
    }

    return { tasks,  initDatabase, getTasks, addTask, updateTask, deleteTask, deleteDatabase };
}

