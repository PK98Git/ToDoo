import express  from 'express';

const app = express();
const port = 3000;


app.get("/",(req,res)=>{
	res.send("Hi Todo");
});
app.get("/today", (req, res) => {
  res.send("Today Tasks");
});

app.listen(port,()=>{
	console.log(`server running on ${port}`)
})