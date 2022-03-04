import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Ionicons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import PromptWithMessage from './FullProfile_components/Prompt/PromptWithMessage';
import ImageWithMessage from './FullProfile_components/Image/ImageWithMessage';

const FullProfileCard = (props) => {
  return (
    <View style={{backgroundColor: '#FAFAFA'}}>
      <ImageWithMessage
        image={props.image1}
        onOpen={props.onOpen}
        setPicture={props.setPicture}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
      <View
        style={{
          marginVertical: 30,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: '200',
            marginLeft: 20,
          }}>
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            color: '#434aa8',
            marginLeft: 20,
            marginTop: 10,
          }}>
          {`${props.predictionValue}% chance of a better date`}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 10,
            marginHorizontal: 18,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.7,
              paddingHorizontal: 15,
              height: 30,
              borderColor: 'black',
              borderRadius: 50,
              margin: 2,
            }}>
            <Ionicons name="ios-hourglass" size={16} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginHorizontal: 5,
              }}>
              {props.age}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.7,
              height: 30,
              borderColor: 'black',
              borderRadius: 50,
              margin: 2,
              paddingHorizontal: 15,
            }}>
            <Entypo name="ruler" size={16} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginLeft: 10,
              }}>
              {props.height}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.7,
              paddingHorizontal: 15,
              height: 30,
              borderColor: 'black',
              borderRadius: 50,
              margin: 2,
            }}>
            <MaterialCommunityIcons name="dumbbell" size={16} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginHorizontal: 5,
              }}>
              {props.worksOut}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.7,
              height: 30,
              borderColor: 'black',
              borderRadius: 50,
              paddingHorizontal: 15,
              margin: 2,
            }}>
            <MaterialCommunityIcons name="smoking" size={16} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginHorizontal: 5,
              }}>
              {props.smokesTobacco}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.7,
              height: 30,
              borderColor: 'black',
              borderRadius: 50,
              paddingHorizontal: 15,
              margin: 2,
            }}>
            <Entypo name="leaf" size={16} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginHorizontal: 5,
              }}>
              {props.smokesWeed}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.7,
              height: 30,
              borderColor: 'black',
              borderRadius: 50,
              paddingHorizontal: 15,
              margin: 2,
            }}>
            <MaterialCommunityIcons
              name="glass-cocktail"
              size={16}
              color="black"
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginHorizontal: 5,
              }}>
              {props.drinks}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.7,
              height: 30,
              borderColor: 'black',
              borderRadius: 50,
              paddingHorizontal: 15,
              margin: 2,
            }}>
            <MaterialCommunityIcons name="pill" size={16} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginHorizontal: 5,
              }}>
              {props.drugs}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.7,
              height: 30,
              borderColor: 'black',
              borderRadius: 50,
              paddingHorizontal: 15,
              margin: 2,
            }}>
            <Entypo name="graduation-cap" size={16} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginHorizontal: 5,
              }}>
              {props.education}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <Ionicons name="ios-pin" size={22} color="black" />
          <Text style={{fontSize: 18, fontWeight: '300', margin: 10}}>
            {props.city}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <FontAwesome5 name="school" size={18} color="black" />
          <Text style={{fontSize: 18, fontWeight: '300', margin: 10}}>
            {props.school}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
          <Feather name="briefcase" size={22} color="black" />
          <Text style={{fontSize: 18, fontWeight: '300', margin: 10}}>
            {props.jobTitle}
          </Text>
        </View>
      </View>
      <ImageWithMessage
        image={props.image2}
        onOpen={props.onOpen}
        setPicture={props.setPicture}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
      <PromptWithMessage
        prompt={props.prompt1}
        answer={props.answer1}
        onOpen={props.onOpen}
        setPrompt={props.setPrompt}
        getPromptHeight={props.getPromptHeight}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
      <ImageWithMessage
        image={props.image3}
        onOpen={props.onOpen}
        setPicture={props.setPicture}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
      <PromptWithMessage
        prompt={props.prompt2}
        answer={props.answer2}
        onOpen={props.onOpen}
        setPrompt={props.setPrompt}
        getPromptHeight={props.getPromptHeight}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
      <ImageWithMessage
        image={props.image4}
        onOpen={props.onOpen}
        setPicture={props.setPicture}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
      <PromptWithMessage
        prompt={props.prompt3}
        answer={props.answer3}
        onOpen={props.onOpen}
        setPrompt={props.setPrompt}
        getPromptHeight={props.getPromptHeight}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
      <ImageWithMessage
        image={props.image5}
        onOpen={props.onOpen}
        setPicture={props.setPicture}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
      <ImageWithMessage
        image={props.image6}
        onOpen={props.onOpen}
        setPicture={props.setPicture}
        showMessage={props.showMessage}
        navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FullProfileCard;
