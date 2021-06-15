const express = require('express')
const teamretroapp = express()
const port = 3434
// database connection settings
var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3333,
    password: 'root',
    database: 'casestudy'
})
connection.connect()

    

//app.METHOD(PATH, HANDLER)
teamretroapp.get('/', (req, res) => {
    console.log("Team Retro Service Called")
  res.send('Retrospective Information Application')
})

teamretroapp.get('/retro/retrodescription/:sectionno',(req,res)=>{
     var selectSQL = 'Select sectionid,sectionname from SECTION'

     connection.query(selectSQL, function (err, rows, fields) {
        if (err) throw err

       console.log('Retros Fetched ', rows.length)
         res.send(rows)
    })
  connection.end()

})

// teamretroapp.post('retro/newsection',(req,res)=>{
//   var SectionId = req.body.SectionId
//   var Section_Description = req.body.Section_Description
 
//   var insertSQL = "insert into section_details (SectionId,Section_Description) values(?,?)"

//   connection.query(insertSQL,[SectionId,Section_Description],
//     function (err, rows, fields) {
//       if (err) throw err

//         console.log(SectionId+" Registered for "+Section_Description)

//         res.send({"SectionId":SectionId,"Section_Description":Section_Description})
//     })
// })

teamretroapp.listen(port, () => {
  console.log(`Retro app started and listening at http://localhost:${port}`)
})