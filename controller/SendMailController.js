const mailerFunc = require("../util/mailerFunc");

const SendMailController = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    if ((!name || !email, !message)) {
      return res
        .status(500)
        .send({ msg: "no empty values allowed", type: "error" });
    }

    await mailerFunc(
      `${name} sent you this ${message}`,
      email,
      "Message from Portfolio Site"
    );
    res.send({ msg: "Message sent successfully", type: "success" });
  } catch (err) {
    return res.status(500).send({ msg: err.message, type: "error" });
  }
};

module.exports = SendMailController;
