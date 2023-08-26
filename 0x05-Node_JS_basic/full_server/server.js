import express from 'express';
import controllerRouting from './routes/index';

const port = 1245;
const app = express();

controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

export default app;
