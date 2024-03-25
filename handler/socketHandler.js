import {handler as connectHandler} from './onconnect.js'
import {handler as disconnectHandler} from './ondisconnect.js'
import {handler as sendMessageHandler} from './sendmessage.js'

export const handler = async event => {

  const routeKey = event.requestContext.routeKey

  switch (routeKey) {
  case '$connect':
    console.log('handling connect')
    return connectHandler(event)
  case '$disconnect':
    console.log('handling disconnect')
    return disconnectHandler(event)
  case 'sendmessage':
    console.log('handling sendmessage')
    return sendMessageHandler(event)
  default:
    return {statusCode: 404}
  }

}



