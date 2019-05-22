//  Created by react-native-create-bridge

import { NativeModules, NativeEventEmitter } from 'react-native'

const { Bulb } = NativeModules

const BulbEmitter = new NativeEventEmitter(Bulb);

export default {
  exampleMethod () {
    return Bulb.exampleMethod()
  },

  emitter: BulbEmitter,
  
  EXAMPLE_CONSTANT: Bulb.EXAMPLE_CONSTANT
}
