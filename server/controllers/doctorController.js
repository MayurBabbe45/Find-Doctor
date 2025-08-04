import Doctor from '../models/Doctor.js';

export const getDoctors = async (req, res) => {
  const { search } = req.query;
  const query = {
    $or: [
      { name: { $regex: search, $options: 'i' } },
      { specialization: { $regex: search, $options: 'i' } },
      { location: { $regex: search, $options: 'i' } }
    ]
  };
  const doctors = await Doctor.find(search ? query : {});
  res.json(doctors);
};
