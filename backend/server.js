const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/upload');

const app = express();

const { trackView, getViews } = require('./analytics/tracker');

app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use('/api/upload', uploadRoute);
app.use(trackView);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

app.get('/api/views', (req, res) => {
  res.json({ today: getViews() });
});
