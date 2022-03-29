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
      `Name-${name} with Email-(${email}) sent you this msg-${message}`
    );
    res.send({ msg: "Message sent successfully", type: "success" });
  } catch (err) {
    return res.status(500).send({ msg: err.message, type: "error" });
  }
};

module.exports = SendMailController;
