import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {useAppDispatch} from '../../../hooks';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import SwipeableItem, {
  useSwipeableItemParams,
} from 'react-native-swipeable-item';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {setProgress} from '../../../store/actions/progressbar/progressbar';
import {LinearGradient} from 'expo-linear-gradient';
import {questionnaireData} from '../../../data/questionnaireData';

const QuestionnaireMainScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState(questionnaireData);
  const itemRefs = useRef(new Map());

  const OVERSWIPE_DIST = 80;

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

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

  const renderItem = useCallback((params) => {
    return (
      <Item
        {...params}
        itemRefs={itemRefs}
        label={params.item.label}
        enjoyment={params.item.enjoyment}
        compatibility={params.item.compatibility}
        communication={params.item.communication}
        loyalty={params.item.loyalty}
        fun={params.item.fun}
        physicalAttraction={params.item.physicalAttraction}
        mentalAttraction={params.item.mentalAttraction}
        instinctualAttraction={params.item.instinctualAttraction}
        emotionAttraction={params.item.emotionAttraction}
      />
    );
  }, []);

  const Item = ({
    item,
    drag,
    itemRefs,
    data,
    label,
    enjoyment,
    compatibility,
    communication,
    loyalty,
    fun,
    physicalAttraction,
    mentalAttraction,
    instinctualAttraction,
    emotionAttraction,
  }) => (
    <View>
      <ScaleDecorator>
        <SwipeableItem
          key={item.id}
          item={item}
          ref={(ref) => {
            if (ref && !itemRefs.current.get(item.id)) {
              itemRefs.current.set(item.id, ref);
            }
          }}
          onChange={({open}) => {
            if (open) {
              // Close all other open items
              [...itemRefs.current.entries()].forEach(([key, ref]) => {
                if (key !== item.id && ref) {
                  ref.close();
                }
              });
            }
          }}
          overSwipe={OVERSWIPE_DIST}
          renderUnderlayLeft={() => (
            <UnderlayLeft drag={drag} itemRefs={itemRefs} />
          )}
          snapPointsLeft={[70]}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
              marginBottom: 1,
              borderWidth: 1,
              borderColor: '#BDBDBD',
            }}>
            <Ionicons
              name="ios-menu"
              size={32}
              color="#BDBDBD"
              style={{
                position: 'absolute',
                zIndex: 99999,
                left: 10,
                alignSelf: 'center',
              }}
            />
            <TouchableCmp
              onLongPress={drag}
              onPress={() => {
                navigation.navigate('CurrentSurvey1', {
                  label,
                  enjoyment,
                  compatibility,
                  communication,
                  loyalty,
                  fun,
                  physicalAttraction,
                  mentalAttraction,
                  instinctualAttraction,
                  emotionAttraction,
                });
              }}>
              <View
                style={{
                  flex: 1,
                  height: 75,
                  marginLeft: 65,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: '200'}}>
                  {item.label}
                </Text>
              </View>
            </TouchableCmp>
          </View>
        </SwipeableItem>
      </ScaleDecorator>
    </View>
  );

  const UnderlayLeft = ({drag, itemRefs}: {drag: () => void}) => {
    const {item, percentOpen} = useSwipeableItemParams<typeof Item>();
    const animStyle = useAnimatedStyle(
      () => ({
        opacity: percentOpen.value,
      }),
      [percentOpen],
    );

    return (
      <Animated.View
        style={[styles.row, styles.underlayLeft, animStyle]} // Fade in on open
      >
        <TouchableOpacity
          onLongPress={drag}
          onPress={() => {
            itemRefs.current.get(item.id).close();
            LayoutAnimation.configureNext(layoutAnimConfig);
            setData((prevState) =>
              prevState.filter((obj) => obj.id !== item.id),
            );
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons
              name="delete-forever"
              size={24}
              color="red"
              style={{padding: 20}}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="ios-lock-closed-outline" size={18} color="grey" />
          <Text style={{fontSize: 16, margin: 5, color: 'grey'}}>
            Every questionnaire is private
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginBottom: 10,
          alignSelf: 'center',
        }}>
        <TouchableCmp
          onPress={() => {
            navigation.navigate('Priorities');
          }}>
          <LinearGradient
            colors={['#A700D1', '#434aa8']}
            style={{
              height: 50,
              justifyContent: 'center',
              width: 175,
              borderRadius: 25,
              alignItems: 'center',
              shadowOffset: {
                width: -2,
                height: 2,
              },
              shadowColor: 'black',
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name="account-heart"
                size={24}
                color="white"
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '200',
                  color: 'white',
                  margin: 5,
                }}>
                Priorities
              </Text>
            </View>
          </LinearGradient>
        </TouchableCmp>
      </View>
      <View
        style={{
          flex: 10,
        }}>
        <DraggableFlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem}
          initialNumToRender={9}
          onDragEnd={({data}) => setData(data)}
          activationDistance={10}
          dragItemOverflow={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  underlayLeft: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default QuestionnaireMainScreen;
