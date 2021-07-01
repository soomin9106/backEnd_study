app.use(express.json()); //REST API -> Body parsing 
app.use(express.urlencoded({extended: false})); //HTML Form -> Body 
app.use(express.static('public')); 