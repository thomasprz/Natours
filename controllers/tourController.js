const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`) //Ce fichier est seulement lu lorsque le serveur démarre. Une fois qu'on sauvegarde une modification dans tours-simple.json, cela va redémarrer le serveur
);

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`); //Une fois la requête GET sur un tour réalisé , il va afficher dans le terminal VSC l'information Tour id is: 2
  if (req.params.id * 1 > tours.length) {
    // On convertit req.params.id en nombre (* 1 est un raccourci pour forcer le type).
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  //:id est un paramètre de route
  console.log(req.params);
  const id = req.params.id * 1; // * 1 car il va automatiquement convertir l'id en nombre tricks
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
