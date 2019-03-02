const router = require('express').Router();
const colors = require('../colors.json');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'You are Connected!' });
});

router.get('/all', (req, res) => {
  res.status(200).json(colors);
});

router.get('/:color', (req, res) => {
  
   const userColor = req.params.color.toLowerCase();
   console.log(userColor);
   const availableColors = {
     'black': 0,
     'white': 1,
     'red': 2,
     'blue': 3,
     'yellow': 4,
     'green': 5
   }

   if (availableColors[userColor] || userColor === 'black') {
     const target = availableColors[userColor]
     res.status(200).json(colors.colors[target]);
   } else {
     res.status(404).json({message: "Not found"});
   }
});


module.exports = router;
