/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, ScrollView} from 'react-native';

import {Text, Portal, Modal, RadioButton, Checkbox} from 'react-native-paper';

import {colors} from '../asset/color';

const SelectModal = props => {
  //   const [visible, setVisible] = React.useState(false);

  //   const showModal = () => setVisible(true);
  //   const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'normal',
    height: '40%',
    margin: 20,
  };
  // const [checked, setChecked] = React.useState('first');
  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.hideModal}
        contentContainerStyle={containerStyle}>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 15,
            fontFamily: 'Montserrat-Bold',
            fontWeight: 'normal',
          }}>
          {props?.title}
        </Text>
        <ScrollView>
          {props.listItem &&
            props.listItem.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <View>
                  <Text>{item.name}</Text>
                </View>

                <RadioButton
                  value={item.id}
                  status={
                    props?.model[props.idField] === item?.id
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() => {
                    console.log(props.idField);
                    props.setModel({
                      ...props?.model,
                      [props.idField]: item?.id,
                      [props.nameField]: item?.name,
                    });
                  }}
                  color={colors.primary_color}
                />
              </View>
            ))}

          {/* // <View
          //   style={{
          //     flexDirection: 'row',
          //     justifyContent: 'space-between',
          //     alignItems: 'center',
          //     marginBottom: 10,
          //   }}>
          //   <View>
          //     <Text>Subject 2</Text>
          //   </View>

          //   <RadioButton
          //     value="first"
          //     status={checked === 'first' ? 'checked' : 'unchecked'}
          //     onPress={() => setChecked('first')}
          //     color={colors.primary_color}
          //   />
          // </View>

          {/* <List.Icon color={colors.primary_color} icon="equal" />
          <List.Icon color={colors.primary_color} icon="calendar" /> */}
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default SelectModal;
