const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // INSERIR DADOS
    proffyValue = {
        name: "Márcio Rela",
        avatar: "https://avatars2.githubusercontent.com/u/51027164?s=460&u=932818ed05c05f79a0c339d9f76e4fa65be28f58&v=4",
        whatsapp: "1199999999",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1120
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // CONSULTAR OS DADOS INSERIDOS

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON
          classes.proffy_id = proffys.id
        WHERE
          proffys.id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE
          class_schedule.class_id = "1"
          AND class_schedule.weekday = "0"
          AND class_schedule.time_from <= "420"
          AND class_schedule.time_to > "420"
    `)
    console.log(selectClassesSchedules)

})
