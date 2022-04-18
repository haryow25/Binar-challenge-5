const datas = require("../db/data.json");

const getData = (req, res) => {
  res.status(200).json(datas);
};

const lookData = (req, res) => {
  const { id } = req.params;
  const data = datas.find((item) => item.id === parseInt(id));
  if (!data) {
    return res.status(404).json({
      status: "error",
      message: "data not found",
    });
  }
  return res.status(200).json({
    status: "success",
    data,
  });
};

module.exports = { getData, lookData };
