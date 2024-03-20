import React from 'react';
import {SafeAreaView, ScrollView, Button} from 'react-native';
import Khipu from 'react-native-khenshin';

function App(this: any): JSX.Element {
  const onStartPayment = () => {
    Khipu.startPaymentById('mboyd2tem42r')
      .then(({status, result}) => {
        if (status === 'CONCILIATING') {
          // khipu is conciliating the payment
        } else if (status === 'USER_CANCELED') {
          // The user cancelled the transaction
        } else {
          // Error!, see `result` for details
          console.log(result);
        }
      })
      .catch((err: any) => console.log({ err }));
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Button title={'pagar'} onPress={onStartPayment} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
