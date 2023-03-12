const express = require("express")

const router = express.Router()

const {createTodo ,home,createTask, deleteTodo, updateTasks, getAllTodos, deleteTasks} = require("../controllers/controller.js")


router.post("/createTodo",createTodo)

router.get("/",home)

router.post("/createtask/:id",createTask)

router.delete("/deletetask/:id",deleteTasks)

router.get("/getAllTodos",getAllTodos)

router.put("/updatetodo/:id",updateTasks)

router.delete("/deletetodo/:id",deleteTodo)

module.exports = router
