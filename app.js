const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port =  3000;

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use( express.static( "public" ) );
app.use(express.urlencoded({extended: true}))

app.get('/',(req, res) => {
    res.render("layout.ejs");
});



app.listen(port, () => {console.log("Server is listening on PORT 3000")})
