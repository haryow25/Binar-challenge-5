const error = (req, res, next) => {
  //   console.log(err.toString()); // hanya bisa dipanggil di objek error
  return res.status(500).json({
    message: "Internal Server Error",
  });
};

module.exports = { error };
