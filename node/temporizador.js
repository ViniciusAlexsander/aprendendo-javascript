const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob("*/5 * 15 * * 2", function() {
    console.log("BORAAA trabalhar meu compatriota", new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log("Cancelando a tarefa 1")
}, 2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log("BORA DORMIR", new Date().getSeconds())
})

