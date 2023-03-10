const express = require("express")

const router = express.Router()

const {createTodo ,home,createTask, deleteTodo, updateTodo, getAllTodos} = require("../controllers/controller.js")


router.post("/createTodo",createTodo)

router.get("/",home)

router.post("/createtask/:id",createTask)

router.delete("/deleteTodo/:id",deleteTodo)

router.get("/getAllTodos",getAllTodos)

// router.put("/updatetodo/:id",updateTodo)

module.exports = router
