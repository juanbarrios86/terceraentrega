import twilio from 'twilio';
import logger from './winston.js';

const accountSid = 'AC3617253dc5def7d07bc364d760f737ec';
const authToken = '3c46b2f60c2e81ff8d9bf7c0a93e6595';

const client = twilio(accountSid, authToken, {
  lazyLoading:true
});

export async function checkOutSms(userPhone) {
  try {
    const message = await client.messages.create({
      body: 'Tu pedido ha sido recibido y se encuentra en proceso!',
      from: '+13257398310',
      to: '+59899110835',
    });
    logger.log(message);
  } catch (error) {
    logger.log(error);
  }
}
export async function checkOutWhatsapp(order){
  try {
    const message = await client.messages.create({
      body: `nuevo pedido de ${order.userName}, ${order.userEmail}`,
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+59899110835',
    });
    logger.log(message);
  } catch (error) {
    logger.log(`error al enviar whatsapp: ${error}`);
  }
}