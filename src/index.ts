import  express, {Request, Response}  from "express";
import diaryRouter from './routes/diaries'
const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/ping', (_req: Request, res: Response) => {
    console.log('someone pinged here');
    res.send('pong');
})

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})