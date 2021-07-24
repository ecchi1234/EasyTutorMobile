/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, IconButton, TextInput} from 'react-native-paper';
// import DropDownPicker from 'react-native-dropdown-picker';
import SelectModal from '../../component/SelectModal';
import Post from '../../models/Post';
import {colors} from '../../asset/color';

const CreatePost = () => {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'},
  // ]);
  const [postInformation, setPostInformation] = useState({
    subjectId: 1,
    description: '',
    address: '',
    offer: 0,
  });
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            color: colors.primary_color,
            fontWeight: 'normal',
            fontFamily: 'Montserrat-Bold',
            padding: 10,
          }}>
          Create New Post
        </Text>
        {/* <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        labelStyle={{fontFamily: 'Montserrat-Medium', fontWeight: 'normal'}}
        textStyle={{fontFamily: 'Montserrat-Medium', fontWeight: 'normal'}}
        containerStyle={{}}
      /> */}
        <SelectModal
          visible={visible}
          hideModal={hideModal}
          listItem={['subject 1', 'subject 2']}
        />
        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10}}>Select subject</Text>
          <View
            style={{
              backgroundColor: '#F3F1F1',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 10,
              borderRadius: 7,
            }}>
            <Text style={{color: colors.primary_information_text_color}}>
              Subject 1
            </Text>
            <IconButton
              icon="folder"
              onPress={() => showModal()}
              color={colors.primary_color}
            />
          </View>
        </View>
        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10}}>Description</Text>
          <TextInput
            label="Description"
            style={{height: 200}}
            multiline={true}
            onChangeText={value =>
              setPostInformation({...postInformation, description: value})
            }
          />
        </View>

        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10}}>Address</Text>
          <TextInput
            label="Address"
            style={{height: 100}}
            multiline={true}
            onChangeText={value =>
              setPostInformation({...postInformation, address: value})
            }
          />
        </View>

        <View style={{padding: 10, marginBottom: 10}}>
          <Text style={{marginBottom: 10}}>Offer</Text>
          <TextInput
            label="Offer"
            right={<TextInput.Affix text="$/h" />}
            onChangeText={value =>
              setPostInformation({...postInformation, offer: +value})
            }
          />
        </View>

        <Button
          mode="contained"
          onPress={() =>
            Post.create(postInformation)
              .then(res => console.log(res))
              .catch(err => console.log(err))
          }
          //   style={{padding: 5}}
          labelStyle={{color: '#fff'}}
          contentStyle={{padding: 5}}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};

export default CreatePost;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
});
