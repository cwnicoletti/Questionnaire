import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
  Image,
  FlatList,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {LinearGradient} from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
import {setProgress} from '../../../store/actions/progressbar/progressbar';
import MaskedView from '@react-native-masked-view/masked-view';
import {messageData} from '../../../data/messageData';

const MessagingMainScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [listColumnData, setListColumnData] = useState(messageData);

  const layoutAnimConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 50,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const TopRowItem = ({image1, topPrediction, newMatch, notify, online}) => (
    <View
      style={{
        paddingBottom: 40,
      }}>
      {notify || online ? (
        <TouchableCmp
          onPress={() => {
            if (topPrediction && notify) {
              setListColumnData(() =>
                messageData.filter(
                  (match) => match.topPrediction && match.notify,
                ),
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (topPrediction && online) {
              setListColumnData(() =>
                messageData.filter(
                  (match) => match.topPrediction && match.online,
                ),
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (newMatch && notify) {
              setListColumnData(() =>
                messageData.filter((match) => match.newMatch && match.notify),
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (newMatch && online) {
              setListColumnData(() =>
                messageData.filter((match) => match.newMatch && match.online),
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (notify && !newMatch && !topPrediction) {
              setListColumnData(() =>
                messageData.filter(
                  (match) =>
                    match.notify && !match.newMatch && !match.topPrediction,
                ),
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
            if (online && !notify && !newMatch && !topPrediction) {
              setListColumnData(() =>
                messageData.filter(
                  (match) =>
                    match.online &&
                    !match.notify &&
                    !match.newMatch &&
                    !match.topPrediction,
                ),
              );
              LayoutAnimation.configureNext(layoutAnimConfig);
            }
          }}>
          <MaskedView
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}
            maskElement={
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Progress.Circle
                  progress={online ? (newMatch || topPrediction ? 0.83 : 1) : 0}
                  size={90}
                  color={
                    newMatch ? '#00D6DE' : topPrediction ? '#FF0000' : '#434aa8'
                  }
                  borderWidth={0}
                  showsText={false}
                  strokeCap={'round'}
                  thickness={2}
                  style={{
                    position: 'absolute',
                    transform: [{rotate: '211deg'}],
                  }}
                />
              </View>
            }>
            <LinearGradient
              colors={
                newMatch
                  ? ['#45F9FF', '#00C8D6', '#00D6DE']
                  : topPrediction
                  ? ['#FF0000', '#D10081', '#D100C3']
                  : ['#A700D1', '#602C91', '#434aa8']
              }
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
              }}
            />
          </MaskedView>
          {notify ? (
            <View
              style={{
                left: 5,
                zIndex: 99999,
              }}>
              <LinearGradient
                colors={
                  newMatch
                    ? ['#00D6DE', '#00C8D6', '#45F9FF']
                    : topPrediction
                    ? ['#FF0000', '#D10081', '#D100C3']
                    : ['#A700D1', '#602C91', '#434aa8']
                }
                style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  height: 13,
                  width: 13,
                  borderRadius: 13 / 2,
                  backgroundColor: '#434aa8',
                }}
              />
            </View>
          ) : null}
          <View
            style={{
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              source={{uri: image1}}
              style={{
                height: 75,
                width: 75,
                marginHorizontal: 15,
                borderRadius: 75 / 2,
              }}
            />
            {newMatch ? (
              <LinearGradient
                colors={['#45F9FF', '#00C8D6', '#00D6DE']}
                style={{
                  position: 'absolute',
                  bottom: -16,
                  backgroundColor: '#434aa8',
                  borderRadius: 15 / 2,
                  height: 15,
                  width: 40,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  New
                </Text>
              </LinearGradient>
            ) : null}
            {topPrediction ? (
              <LinearGradient
                colors={['#FF0000', '#D10081', '#D100C3']}
                style={{
                  position: 'absolute',
                  bottom: -16,
                  backgroundColor: '#434aa8',
                  borderRadius: 15 / 2,
                  height: 15,
                  width: 40,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Top
                </Text>
              </LinearGradient>
            ) : null}
          </View>
        </TouchableCmp>
      ) : null}
    </View>
  );

  const Item = ({
    name,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    prompt1,
    answer1,
    prompt2,
    answer2,
    prompt3,
    answer3,
    age,
    height,
    worksOut,
    city,
    smokesTobacco,
    smokesWeed,
    drinks,
    drugs,
    education,
    school,
    jobTitle,
    predictionValue,
    topPrediction,
    newMatch,
    notify,
    online,
    text,
    chat,
  }) => (
    <TouchableCmp
      onPress={() => {
        navigation.navigate('ChatScreen', {
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          prompt1,
          answer1,
          prompt2,
          answer2,
          prompt3,
          answer3,
          age,
          height,
          worksOut,
          city,
          smokesTobacco,
          smokesWeed,
          drinks,
          drugs,
          education,
          school,
          jobTitle,
          predictionValue,
          name,
          chat,
        });
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 5,
        }}>
        <View>
          <MaskedView
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
            }}
            maskElement={
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Progress.Circle
                  progress={online ? 0.81 : 0}
                  size={90}
                  color={
                    newMatch ? '#00D6DE' : topPrediction ? '#FF0000' : '#434aa8'
                  }
                  borderWidth={0}
                  showsText={false}
                  strokeCap={'round'}
                  thickness={2}
                  style={{
                    position: 'absolute',
                    transform: [{rotate: '215deg'}],
                  }}
                />
              </View>
            }>
            <LinearGradient
              colors={
                newMatch
                  ? ['#45F9FF', '#00C8D6', '#00D6DE']
                  : topPrediction
                  ? ['#FF0000', '#D10081', '#D100C3']
                  : ['#A700D1', '#602C91', '#434aa8']
              }
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
              }}
            />
          </MaskedView>
          <View
            style={{
              zIndex: 3,
            }}>
            {notify ? (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 99999,
                  left: 5,
                }}>
                <LinearGradient
                  colors={
                    newMatch
                      ? ['#45F9FF', '#00C8D6', '#00D6DE']
                      : topPrediction
                      ? ['#FF0000', '#D10081', '#D100C3']
                      : ['#A700D1', '#602C91', '#434aa8']
                  }
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 7,
                    height: 15,
                    width: 15,
                    borderRadius: 15 / 2,
                    backgroundColor: '#434aa8',
                  }}
                />
              </View>
            ) : null}
            <View
              style={{
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                source={{uri: image1}}
                style={{
                  height: 75,
                  width: 75,
                  marginHorizontal: 15,
                  borderRadius: 75 / 2,
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  position: 'absolute',
                  bottom: -16,
                  fontWeight: '300',
                  color: newMatch
                    ? '#00D6DE'
                    : topPrediction
                    ? '#FF0000'
                    : '#434aa8',
                }}>{`${predictionValue}%`}</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: notify ? '600' : '200',
            }}>
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
            }}>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 18,
                fontWeight: notify ? '500' : '300',
                color: 'grey',
                flex: 1,
                flexWrap: 'wrap',
              }}>
              {text}
            </Text>
          </View>
        </View>
      </View>
    </TouchableCmp>
  );

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      image1={item.image1}
      image2={item.image2}
      image3={item.image3}
      image4={item.image4}
      image5={item.image5}
      image6={item.image6}
      prompt1={item.prompt1}
      answer1={item.answer1}
      prompt2={item.prompt2}
      answer2={item.answer2}
      prompt3={item.prompt3}
      answer3={item.answer3}
      age={item.age}
      height={item.height}
      worksOut={item.worksOut}
      city={item.city}
      smokesTobacco={item.smokesTobacco}
      smokesWeed={item.smokesWeed}
      drinks={item.drinks}
      drugs={item.drugs}
      education={item.education}
      school={item.school}
      jobTitle={item.jobTitle}
      predictionValue={item.predictionValue}
      topPrediction={item.topPrediction}
      newMatch={item.newMatch}
      text={item.text}
      notify={item.notify}
      online={item.online}
      chat={item.chat}
    />
  );

  const headerTopComponent = () => (
    <TouchableCmp
      onPress={() => {
        setListColumnData(messageData);
        LayoutAnimation.configureNext(layoutAnimConfig);
      }}>
      <View
        style={{
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <MaskedView
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          maskElement={
            <View
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Progress.Circle
                progress={1}
                size={70}
                color={'#434aa8'}
                borderWidth={0}
                showsText={false}
                strokeCap={'round'}
                thickness={2}
                style={{
                  position: 'absolute',
                  transform: [{rotate: '211deg'}],
                }}
              />
            </View>
          }>
          <LinearGradient
            colors={['#A700D1', '#602C91', '#434aa8']}
            style={{
              position: 'absolute',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          />
        </MaskedView>
        <MaskedView
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          maskElement={
            <View
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Progress.Circle
                progress={1}
                size={80}
                color={'#434aa8'}
                borderWidth={0}
                showsText={false}
                strokeCap={'round'}
                thickness={2}
                style={{
                  position: 'absolute',
                  transform: [{rotate: '211deg'}],
                }}
              />
            </View>
          }>
          <LinearGradient
            colors={['#FF0000', '#D10081', '#D100C3']}
            style={{
              position: 'absolute',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          />
        </MaskedView>
        <MaskedView
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          maskElement={
            <View
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Progress.Circle
                progress={1}
                size={90}
                color={'#434aa8'}
                borderWidth={0}
                showsText={false}
                strokeCap={'round'}
                thickness={2}
                style={{
                  position: 'absolute',
                  transform: [{rotate: '211deg'}],
                }}
              />
            </View>
          }>
          <LinearGradient
            colors={['#45F9FF', '#00C8D6', '#00D6DE']}
            style={{
              position: 'absolute',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          />
        </MaskedView>
        <View
          style={{
            zIndex: 3,
          }}>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <View
              style={{
                height: 75,
                width: 75,
                marginHorizontal: 15,
                borderRadius: 75 / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: '600', fontSize: 18, color: '#434aa8'}}>
                ALL
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableCmp>
  );

  const renderTopRowItem = ({item}) => (
    <TopRowItem
      image1={item.image1}
      topPrediction={item.topPrediction}
      newMatch={item.newMatch}
      notify={item.notify}
      online={item.online}
    />
  );

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setProgress(0));
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <View style={{height: 120}}>
        <FlatList
          data={messageData}
          horizontal={true}
          inverted={true}
          renderItem={renderTopRowItem}
          ListHeaderComponent={headerTopComponent}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: 10,
          }}
        />
      </View>
      <View
        style={{
          width: '80%',
          borderColor: '#EDEDED',
          borderBottomWidth: 1,
          alignSelf: 'center',
          marginVertical: 5,
        }}
      />
      <FlatList
        data={listColumnData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={listColumnData.length <= 1 ? false : true}
        ItemSeparatorComponent={(e) => (
          <View
            style={{
              marginVertical: 5,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  yourCode: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 29,
    fontWeight: '500',
  },

  authContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default MessagingMainScreen;
