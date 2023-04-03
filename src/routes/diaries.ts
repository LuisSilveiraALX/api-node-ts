import express, {Request, Response} from 'express';
import diaryService from '../services/DiaryService'

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diaryService.getNonSensitiveEntries());
  });

router.post('/', ( _req: Request, res: Response) => {
    res.send('Saving a diary!');
})

export default router;