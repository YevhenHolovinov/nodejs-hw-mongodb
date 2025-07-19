export function errorHendler(error, req, res, next) {
  console.log('HERE ERROR');
  console.error(error);
  res.status(500).json({ status: 500, message: 'Something went wrong' });
}
