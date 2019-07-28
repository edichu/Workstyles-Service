require('./model/Model');
const port = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(port, () => console.log(`Express server is listening on port ${port}`));

require('./api/MapSvc')(app);
require('./api/ReservationSvc')(app);
require('./api/SeatSvc')(app);
require('./api/UserSvc')(app);



