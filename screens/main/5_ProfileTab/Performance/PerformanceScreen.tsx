import React, { useContext, useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Text,
  Image,
  Dimensions,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setProgress } from "../../../../store/actions/progressbar/progressbar";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import ChooseChartDataButton from "../../../../components/screen_specific/ProfileScreen/Performance/ChooseChartDataButton";
import { questionnaireData } from "../../../../data/questionnaireData";
import { camelize } from "../../../../helper/camelize";
import { getSTD } from "../../../../helper/getSTD";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";

export const { width: SIZE } = Dimensions.get("window");

const PerformanceScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState(
    questionnaireData.map((questionnaire, index) => {
      const pureData = (({ id, label, ...o }) => o)(questionnaire);
      return {
        x: index,
        y:
          Object.values(pureData).reduce((a, b) => a + b) /
          Object.values(pureData).length,
      };
    })
  );
  const [chartLabel, setChartLabel] = useState("Overall");
  const [chartValue, setChartValue] = useState(
    questionnaireData
      .map((questionnaire) => {
        const pureData = (({ id, label, ...o }) => o)(questionnaire);
        return (
          Object.values(pureData).reduce((a, b) => a + b) /
          Object.values(pureData).length
        );
      })[0]
      .toFixed(2)
  );
  const [chartLineColor, setChartLineColor] = useState("#434aa8");
  const [chartGradient, setChartGradient] = useState("#A86EFF");

  const [currentSurvey, setCurrentSurvey] = useState(0);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [navigation]);

  const Tooltip = ({ position, value }) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: chartLineColor,
          left: position.x - 5,
          top: position.y - 5,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ marginTop: 20, flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      <ScrollView>
        <Text
          style={{
            marginHorizontal: "5%",
            marginBottom: 10,
            fontSize: 12,
            fontWeight: "400",
            color: "grey",
          }}
        >
          {chartLabel}
        </Text>
        <View style={{ marginHorizontal: "5%" }}>
          <Text style={{ fontSize: 22, fontWeight: "500" }}>
            {questionnaireData[currentSurvey].label}
          </Text>
        </View>
        <Text
          style={{
            marginHorizontal: "5%",
            fontSize: 32,
            fontWeight: "500",
            marginBottom: 20,
          }}
        >
          {`${chartValue}%`}
        </Text>
        <Chart
          style={{ height: SIZE / 1.5, width: SIZE }}
          data={data}
          xDomain={{
            min: 0,
            max: questionnaireData.length - 1,
          }}
          yDomain={{ min: 0, max: 100 }}
        >
          <Area
            theme={{
              gradient: {
                from: { color: chartGradient },
                to: { color: "#FFFFFF", opacity: 0 },
              },
            }}
          />
          <Line
            onTooltipSelect={(value) => {
              setCurrentSurvey(value.x);
              setChartValue(value.y.toFixed(2));
            }}
            tooltipComponent={<Tooltip />}
            theme={{
              stroke: { color: chartLineColor, width: 1 },
            }}
          />
        </Chart>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "600" }}>Qualities</Text>
        </View>
        <ScrollView
          style={{
            paddingLeft: 10,
          }}
          horizontal={true}
        >
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => {
              const pureData = (({ id, label, ...o }) => o)(questionnaire);
              return {
                x: index,
                y:
                  Object.values(pureData).reduce((a, b) => a + b) /
                  Object.values(pureData).length,
              };
            })}
            initialChartValue={questionnaireData
              .map((questionnaire) => {
                const pureData = (({ id, label, ...o }) => o)(questionnaire);
                return (
                  Object.values(pureData).reduce((a, b) => a + b) /
                  Object.values(pureData).length
                );
              })[0]
              .toFixed(2)}
            chartLineColor={"#4365AB"}
            chartGradient={"#A86EFF"}
            dotColor={"#434aa8"}
            label={"Overall"}
            chosen={chartLabel === "Overall"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.enjoyment,
            }))}
            initialChartValue={
              questionnaireData.map(
                (questionnaire) => questionnaire.enjoyment
              )[0]
            }
            chartLineColor={"#E09900"}
            chartGradient={"#FFAE00"}
            dotColor={"orange"}
            label={"Enjoyment"}
            chosen={chartLabel === "Enjoyment"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.compatibility,
            }))}
            initialChartValue={
              questionnaireData.map(
                (questionnaire) => questionnaire.compatibility
              )[0]
            }
            chartLineColor={"#0077FF"}
            chartGradient={"#0080FF"}
            dotColor={"blue"}
            label={"Compatibility"}
            chosen={chartLabel === "Compatibility"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.communication,
            }))}
            initialChartValue={
              questionnaireData.map(
                (questionnaire) => questionnaire.communication
              )[0]
            }
            chartLineColor={"#00B2FF"}
            chartGradient={"#00E5FF"}
            dotColor={"cyan"}
            label={"Communication"}
            chosen={chartLabel === "Communication"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.loyalty,
            }))}
            initialChartValue={
              questionnaireData.map((questionnaire) => questionnaire.loyalty)[0]
            }
            chartLineColor={"#9000FF"}
            chartGradient={"#D04FFF"}
            dotColor={"purple"}
            label={"Loyalty"}
            chosen={chartLabel === "Loyalty"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.fun,
            }))}
            initialChartValue={
              questionnaireData.map((questionnaire) => questionnaire.fun)[0]
            }
            chartLineColor={"#C3C900"}
            chartGradient={"#E3EB00"}
            dotColor={"yellow"}
            label={"Fun"}
            chosen={chartLabel === "Fun"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.physicalAttraction,
            }))}
            initialChartValue={
              questionnaireData.map(
                (questionnaire) => questionnaire.physicalAttraction
              )[0]
            }
            chartLineColor={"#D40000"}
            chartGradient={"#FF0000"}
            dotColor={"red"}
            label={"Physical attraction"}
            chosen={chartLabel === "Physical attraction"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.mentalAttraction,
            }))}
            initialChartValue={
              questionnaireData.map(
                (questionnaire) => questionnaire.mentalAttraction
              )[0]
            }
            chartLineColor={"#696969"}
            chartGradient={"#000000"}
            dotColor={"black"}
            label={"Mental attraction"}
            chosen={chartLabel === "Mental attraction"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.instinctualAttraction,
            }))}
            initialChartValue={
              questionnaireData.map(
                (questionnaire) => questionnaire.instinctualAttraction
              )[0]
            }
            chartLineColor={"#008002"}
            chartGradient={"#00D103"}
            dotColor={"green"}
            label={"Instinctual attraction"}
            chosen={chartLabel === "Instinctual attraction"}
          />
          <ChooseChartDataButton
            setData={setData}
            setChartLabel={setChartLabel}
            setChartValue={setChartValue}
            setChartLineColor={setChartLineColor}
            setChartGradient={setChartGradient}
            data={questionnaireData.map((questionnaire, index) => ({
              x: index,
              y: questionnaire.emotionAttraction,
            }))}
            initialChartValue={
              questionnaireData.map(
                (questionnaire) => questionnaire.emotionAttraction
              )[0]
            }
            chartLineColor={"#CC0077"}
            chartGradient={"#FF0095"}
            dotColor={"pink"}
            label={"Emotion attraction"}
            chosen={chartLabel === "Emotion attraction"}
          />
        </ScrollView>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "600" }}>
            Featured Metrics
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <MaskedView
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                maskElement={
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Progress.Circle
                      progress={
                        chartLabel === "Overall"
                          ? Math.max(
                              ...questionnaireData.map((questionnaire) => {
                                const pureData = (({ id, label, ...o }) => o)(
                                  questionnaire
                                );
                                return (
                                  Object.values(pureData).reduce(
                                    (a, b) => a + b
                                  ) / Object.values(pureData).length
                                );
                              })
                            ) / 100
                          : Math.max(
                              ...questionnaireData.map(
                                (questionnaire) =>
                                  questionnaire[camelize(chartLabel)]
                              )
                            ) / 100
                      }
                      size={50}
                      color={"#434aa8"}
                      borderWidth={0}
                      showsText={false}
                      strokeCap={"square"}
                      thickness={3}
                      style={{
                        transform: [{ rotate: "180deg" }],
                      }}
                    />
                  </View>
                }
              >
                <LinearGradient
                  colors={[chartGradient, chartLineColor]}
                  style={{
                    position: "absolute",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </MaskedView>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{ color: "grey", fontSize: 18, fontWeight: "300" }}
                >
                  Most
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    width: 80,
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 22, fontWeight: "500" }}
                  >
                    {chartLabel === "Overall"
                      ? Math.max(
                          ...questionnaireData.map((questionnaire) => {
                            const pureData = (({ id, label, ...o }) => o)(
                              questionnaire
                            );
                            return (
                              Object.values(pureData).reduce((a, b) => a + b) /
                              Object.values(pureData).length
                            );
                          })
                        ).toFixed(2)
                      : Math.max(
                          ...questionnaireData.map(
                            (questionnaire) =>
                              questionnaire[camelize(chartLabel)]
                          )
                        )}
                    %
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 80,
              }}
            >
              <MaskedView
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                maskElement={
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Progress.Circle
                      progress={
                        chartLabel === "Overall"
                          ? Math.min(
                              ...questionnaireData.map((questionnaire) => {
                                const pureData = (({ id, label, ...o }) => o)(
                                  questionnaire
                                );
                                return (
                                  Object.values(pureData).reduce(
                                    (a, b) => a + b
                                  ) / Object.values(pureData).length
                                );
                              })
                            ) / 100
                          : Math.min(
                              ...questionnaireData.map(
                                (questionnaire) =>
                                  questionnaire[camelize(chartLabel)]
                              )
                            ) / 100
                      }
                      size={50}
                      color={"#434aa8"}
                      borderWidth={0}
                      showsText={false}
                      strokeCap={"square"}
                      thickness={3}
                      style={{
                        transform: [{ rotate: "180deg" }],
                      }}
                    />
                  </View>
                }
              >
                <LinearGradient
                  colors={[chartGradient, chartLineColor]}
                  style={{
                    position: "absolute",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </MaskedView>
              <View style={{ marginLeft: 10 }}>
                <View>
                  <Text
                    style={{ color: "grey", fontSize: 18, fontWeight: "300" }}
                  >
                    Least
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: 80,
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 22, fontWeight: "500" }}
                  >
                    {chartLabel === "Overall"
                      ? Math.min(
                          ...questionnaireData.map((questionnaire) => {
                            const pureData = (({ id, label, ...o }) => o)(
                              questionnaire
                            );
                            return (
                              Object.values(pureData).reduce((a, b) => a + b) /
                              Object.values(pureData).length
                            );
                          })
                        ).toFixed(2)
                      : Math.min(
                          ...questionnaireData.map(
                            (questionnaire) =>
                              questionnaire[camelize(chartLabel)]
                          )
                        )}
                    %
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginLeft: 80 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <MaskedView
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                maskElement={
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Progress.Circle
                      progress={
                        chartLabel === "Overall"
                          ? questionnaireData
                              .map((questionnaire) => {
                                const pureData = (({ id, label, ...o }) => o)(
                                  questionnaire
                                );
                                return (
                                  Object.values(pureData).reduce(
                                    (a, b) => a + b
                                  ) / Object.values(pureData).length
                                );
                              })
                              .reduce((a, b) => a + b) /
                            questionnaireData.length /
                            100
                          : questionnaireData
                              .map(
                                (questionnaire) =>
                                  questionnaire[camelize(chartLabel)]
                              )
                              .reduce((a, b) => a + b) /
                            questionnaireData.length /
                            100
                      }
                      size={50}
                      color={"#434aa8"}
                      borderWidth={0}
                      showsText={false}
                      strokeCap={"square"}
                      thickness={3}
                      style={{
                        transform: [{ rotate: "180deg" }],
                      }}
                    />
                  </View>
                }
              >
                <LinearGradient
                  colors={[chartGradient, chartLineColor]}
                  style={{
                    position: "absolute",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </MaskedView>
              <View style={{ marginLeft: 10 }}>
                <View>
                  <Text
                    style={{ color: "grey", fontSize: 18, fontWeight: "300" }}
                  >
                    Average
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: 80,
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 22, fontWeight: "500" }}
                  >
                    {chartLabel === "Overall"
                      ? (
                          questionnaireData
                            .map((questionnaire) => {
                              const pureData = (({ id, label, ...o }) => o)(
                                questionnaire
                              );
                              return (
                                Object.values(pureData).reduce(
                                  (a, b) => a + b
                                ) / Object.values(pureData).length
                              );
                            })
                            .reduce((a, b) => a + b) / questionnaireData.length
                        ).toFixed(2)
                      : (
                          questionnaireData
                            .map(
                              (questionnaire) =>
                                questionnaire[camelize(chartLabel)]
                            )
                            .reduce((a, b) => a + b) / questionnaireData.length
                        ).toFixed(2)}
                    %
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 80,
              }}
            >
              <MaskedView
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                maskElement={
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Progress.Circle
                      progress={
                        chartLabel === "Overall"
                          ? getSTD(
                              questionnaireData.map((questionnaire) => {
                                const pureData = (({ id, label, ...o }) => o)(
                                  questionnaire
                                );
                                return (
                                  Object.values(pureData).reduce(
                                    (a, b) => a + b
                                  ) / Object.values(pureData).length
                                );
                              })
                            ) / 100
                          : getSTD(
                              questionnaireData.map(
                                (questionnaire) =>
                                  questionnaire[camelize(chartLabel)]
                              )
                            ) / 100
                      }
                      size={50}
                      color={"#434aa8"}
                      borderWidth={0}
                      showsText={false}
                      strokeCap={"square"}
                      thickness={3}
                      style={{
                        transform: [{ rotate: "180deg" }],
                      }}
                    />
                  </View>
                }
              >
                <LinearGradient
                  colors={[chartGradient, chartLineColor]}
                  style={{
                    position: "absolute",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </MaskedView>
              <View style={{ marginLeft: 10 }}>
                <View>
                  <Text
                    style={{ color: "grey", fontSize: 11, fontWeight: "300" }}
                  >
                    Standard
                  </Text>
                  <Text
                    style={{ color: "grey", fontSize: 11, fontWeight: "300" }}
                  >
                    Deviation
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: 80,
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 22, fontWeight: "500" }}
                  >
                    {chartLabel === "Overall"
                      ? getSTD(
                          questionnaireData.map((questionnaire) => {
                            const pureData = (({ id, label, ...o }) => o)(
                              questionnaire
                            );
                            return (
                              Object.values(pureData).reduce((a, b) => a + b) /
                              Object.values(pureData).length
                            );
                          })
                        ).toFixed(2)
                      : getSTD(
                          questionnaireData.map(
                            (questionnaire) =>
                              questionnaire[camelize(chartLabel)]
                          )
                        ).toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
  },

  yourCode: {
    marginLeft: "10%",
    color: "black",
    fontSize: 29,
    fontWeight: "500",
  },

  authContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default PerformanceScreen;
