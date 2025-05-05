const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    //requestedAt: req.requestTime,
    //results: tours.length,
    //data: {
    //  tours,
    //},
  });
};

exports.getTour = (req, res) => {
  //:id est un paramètre de route
  console.log(req.params);
  const id = req.params.id * 1; // * 1 car il va automatiquement convertir l'id en nombre tricks
  //const tour = tours.find((el) => el.id === id);

  //res.status(200).json({
  //  status: 'success',
  //  data: {
  //    tour,
  //  },
  //});
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    //data: {
    //  tour: newTour,
    //},
  });
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
