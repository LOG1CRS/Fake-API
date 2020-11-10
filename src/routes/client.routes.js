import { Router } from 'express';
import path from 'path';
const router = Router();

router.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.sendFile('index.html', {
      root: path.join(__dirname, '../../', 'client', 'build'),
    });
  } else if (process.env.NODE_ENV === 'production') {
    res.sendFile('index.html', {
      root: path.join(__dirname, 'client'),
    });
  }
});

module.exports = router;
