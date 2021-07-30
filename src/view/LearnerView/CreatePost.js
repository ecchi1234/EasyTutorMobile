/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, IconButton, TextInput} from 'react-native-paper';
// import DropDownPicker from 'react-native-dropdown-picker';
import SelectModal from '../../component/SelectModal';
import Post from '../../models/Post';
import Subject from '../../models/Subject';
import {colors} from '../../asset/color';
import {grades} from '../../data/grade';
import CreatePostLoadingModal from '../../component/CreatePostLoadingModal';

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
    subjectName: '',
    grade: 6,
    gradeName: '',
  });
  const [visibleSubject, setVisibleSubject] = useState(false);
  const [visibleGrade, setVisibleGrade] = useState(false);

  const showModalSubject = () => setVisibleSubject(true);
  const hideModalSubject = () => setVisibleSubject(false);

  const showModalGrade = () => setVisibleGrade(true);
  const hideModalGrade = () => setVisibleGrade(false);

  const [loading, setLoading] = React.useState(false);
  const hideLoadingModal = () => setLoading(false);

  // list mon hoc de gia su chon
  const [listSubjects, setListSubjects] = React.useState([]);

  React.useEffect(() => {
    Subject.get()
      .then(res => {
        console.log(res);
        setListSubjects(res);
      })
      .catch(err => console.log(err));
  }, []);

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
          Tạo bài đăng
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
          visible={visibleSubject}
          hideModal={hideModalSubject}
          listItem={listSubjects}
          model={postInformation}
          setModel={setPostInformation}
          title={'Chọn chuyên môn'}
          idField={'subjectId'}
          nameField={'subjectName'}
        />

        <SelectModal
          visible={visibleGrade}
          hideModal={hideModalGrade}
          listItem={grades}
          model={postInformation}
          setModel={setPostInformation}
          title={'Chọn khối lớp'}
          idField={'grade'}
          nameField={'gradeName'}
        />

        <CreatePostLoadingModal
          loading={loading}
          hideLoadingModal={hideLoadingModal}
        />

        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10}}>Chọn chuyên môn</Text>
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
              {postInformation?.subjectName
                ? postInformation?.subjectName
                : 'Chọn chuyên môn'}
            </Text>
            <IconButton
              icon="folder"
              onPress={() => showModalSubject()}
              color={colors.primary_color}
            />
          </View>
        </View>
        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10}}>Chọn khối lớp</Text>
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
              {postInformation?.gradeName
                ? postInformation?.gradeName
                : 'Chọn khối lớp'}
            </Text>
            <IconButton
              icon="folder"
              onPress={() => showModalGrade()}
              color={colors.primary_color}
            />
          </View>
        </View>
        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10}}>Mô tả</Text>
          <TextInput
            label="Mô tả"
            style={{height: 200}}
            multiline={true}
            onChangeText={value =>
              setPostInformation({...postInformation, description: value})
            }
          />
        </View>

        <View style={{padding: 10}}>
          <Text style={{marginBottom: 10}}>Địa chỉ</Text>
          <TextInput
            label="Địa chỉ"
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
            right={<TextInput.Affix text="VNĐ/h" />}
            onChangeText={value =>
              setPostInformation({...postInformation, offer: +value})
            }
          />
        </View>

        <Button
          mode="contained"
          onPress={() => {
            setLoading(true);
            const sendData = {
              subjectId: postInformation?.subjectId,
              description: postInformation?.description,
              address: postInformation?.address,
              offer: postInformation?.offer,
              grade: postInformation?.grade,
            };
            Post.create(sendData)
              .then(res => console.log(res))
              .catch(err => console.log(err.response.data));
            // .finally(() => setLoading(false));
          }}
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
