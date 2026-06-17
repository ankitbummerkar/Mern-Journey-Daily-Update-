import mesgModel from "../model/mesg.model.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await mesgModel.find().toSorted({
      createdAt: 1,
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
