import express from 'express';
import { JobRouter } from "./router/Job.Routes.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(JobRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
