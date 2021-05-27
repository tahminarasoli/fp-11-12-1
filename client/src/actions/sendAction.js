import * as api from "../api";



export const toSend = (receiverEmail, messageContent, messageTitle, senderEmail) => async (dispatch) => {
  try {
    const { data } = await api.sendMail(receiverEmail, messageContent, messageTitle, senderEmail);
    
   console.log(data)
  } catch (error) {
    console.log(error);
  }
};

export const toSendContact = (receiverEmail, messageContent, messageTitle, senderEmail) => async (dispatch) => {
  try {
    const { data } = await api.sendMailContact(receiverEmail, messageContent, messageTitle, senderEmail);
    
   console.log(data)
  } catch (error) {
    console.log(error);
  }
};

