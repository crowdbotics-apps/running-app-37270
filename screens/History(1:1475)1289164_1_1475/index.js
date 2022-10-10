import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b92432a-b40e-4bcf-937d-c2834f2fd8d1"
        }}
        style={styles.ImageBackground_1_1476}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8253d42-f662-4519-999f-5c8c18ce91d7"
        }}
        style={styles.ImageBackground_1_1477}
      />
      <View style={styles.View_1_1491}>
        <View style={styles.View_1_1492} />
      </View>
      <View style={styles.View_1_1493}>
        <View style={styles.View_1_1494} />
      </View>
      <View style={styles.View_1_1495}>
        <View style={styles.View_1_1496}>
          <View style={styles.View_1_1497}>
            <View style={styles.View_1_1498}>
              <View style={styles.View_I1_1498_342_16234}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c41511f-63f8-4a8d-ba1d-477864f92958"
                  }}
                  style={styles.ImageBackground_I1_1498_342_16235}
                />
              </View>
            </View>
            <View style={styles.View_1_1499}>
              <Text style={styles.Text_1_1499}>18,3 h</Text>
            </View>
            <View style={styles.View_1_1500}>
              <Text style={styles.Text_1_1500}>Time</Text>
            </View>
          </View>
          <View style={styles.View_1_1501}>
            <View style={styles.View_1_1502}>
              <View style={styles.View_I1_1502_342_14580}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0757bca-db57-44f8-b26c-8246c02342ba"
                  }}
                  style={styles.ImageBackground_I1_1502_342_14581}
                />
              </View>
            </View>
            <View style={styles.View_1_1503}>
              <View style={styles.View_1_1504}>
                <Text style={styles.Text_1_1504}>48,7 km</Text>
              </View>
              <View style={styles.View_1_1505}>
                <Text style={styles.Text_1_1505}>Distance</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1506}>
            <View style={styles.View_1_1507}>
              <View style={styles.View_1_1508}>
                <Text style={styles.Text_1_1508}>123 bpm</Text>
              </View>
              <View style={styles.View_1_1509}>
                <Text style={styles.Text_1_1509}>Heart Beat</Text>
              </View>
            </View>
            <View style={styles.View_1_1510}>
              <View style={styles.View_I1_1510_342_16071}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fb331b2-df13-4649-a06d-4baf1ff73446"
                  }}
                  style={styles.ImageBackground_I1_1510_342_16072}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fb57210-4ab5-4676-8815-2c1d826bb5ea"
          }}
          style={styles.ImageBackground_1_1511}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f93b6a28-a897-482e-9257-83b088695f97"
          }}
          style={styles.ImageBackground_1_1512}
        />
      </View>
      <View style={styles.View_1_1513}>
        <View style={styles.View_1_1514}>
          <View style={styles.View_I1_1514_6734_66564}>
            <View style={styles.View_I1_1514_6734_66565}>
              <Text style={styles.Text_I1_1514_6734_66565}>27 May</Text>
            </View>
            <View style={styles.View_I1_1514_6734_66566}>
              <View style={styles.View_I1_1514_6734_66569}>
                <Text style={styles.Text_I1_1514_6734_66569}>12,4 km</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b048c7a-8800-4769-ac0d-97a2576aa12a"
                }}
                style={styles.ImageBackground_I1_1514_6734_66570}
              />
              <View style={styles.View_I1_1514_6734_66571}>
                <Text style={styles.Text_I1_1514_6734_66571}>1222 kcal</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1_1514_6734_66572}>
            <Text style={styles.Text_I1_1514_6734_66572}>11,120 Steps</Text>
          </View>
        </View>
        <View style={styles.View_1_1515}>
          <View style={styles.View_I1_1515_6734_66564}>
            <View style={styles.View_I1_1515_6734_66565}>
              <Text style={styles.Text_I1_1515_6734_66565}>26 May</Text>
            </View>
            <View style={styles.View_I1_1515_6734_66566}>
              <View style={styles.View_I1_1515_6734_66569}>
                <Text style={styles.Text_I1_1515_6734_66569}>12,4 km</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d02c09af-ca3d-4be6-b497-df49620ba150"
                }}
                style={styles.ImageBackground_I1_1515_6734_66570}
              />
              <View style={styles.View_I1_1515_6734_66571}>
                <Text style={styles.Text_I1_1515_6734_66571}>1222 kcal</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1_1515_6734_66572}>
            <Text style={styles.Text_I1_1515_6734_66572}>11,120 Steps</Text>
          </View>
        </View>
        <View style={styles.View_1_1516}>
          <View style={styles.View_I1_1516_6570_4373}>
            <View style={styles.View_I1_1516_6570_4374}>
              <Text style={styles.Text_I1_1516_6570_4374}>25 May</Text>
            </View>
            <View style={styles.View_I1_1516_6570_4375}>
              <View style={styles.View_I1_1516_6570_4376}>
                <Text style={styles.Text_I1_1516_6570_4376}>100 pt</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fc84ff1-392c-420d-9c4d-dacce30bccee"
                }}
                style={styles.ImageBackground_I1_1516_6570_4377}
              />
              <View style={styles.View_I1_1516_6570_4378}>
                <Text style={styles.Text_I1_1516_6570_4378}>12,4 km</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/661288e0-622d-4e1c-bbbd-a86a2aace6df"
                }}
                style={styles.ImageBackground_I1_1516_6570_4379}
              />
              <View style={styles.View_I1_1516_6570_4380}>
                <Text style={styles.Text_I1_1516_6570_4380}>1222 kcal</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1_1516_6570_4381}>
            <Text style={styles.Text_I1_1516_6570_4381}>10,120 Steps</Text>
          </View>
        </View>
        <View style={styles.View_1_1517}>
          <View style={styles.View_I1_1517_6734_66564}>
            <View style={styles.View_I1_1517_6734_66565}>
              <Text style={styles.Text_I1_1517_6734_66565}>24 May</Text>
            </View>
            <View style={styles.View_I1_1517_6734_66566}>
              <View style={styles.View_I1_1517_6734_66569}>
                <Text style={styles.Text_I1_1517_6734_66569}>12,4 km</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc823d49-de8e-4456-894e-d6ecd91f3f1b"
                }}
                style={styles.ImageBackground_I1_1517_6734_66570}
              />
              <View style={styles.View_I1_1517_6734_66571}>
                <Text style={styles.Text_I1_1517_6734_66571}>1222 kcal</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1_1517_6734_66572}>
            <Text style={styles.Text_I1_1517_6734_66572}>11,120 Steps</Text>
          </View>
        </View>
        <View style={styles.View_1_1518}>
          <View style={styles.View_I1_1518_6570_4373}>
            <View style={styles.View_I1_1518_6570_4374}>
              <Text style={styles.Text_I1_1518_6570_4374}>23 May</Text>
            </View>
            <View style={styles.View_I1_1518_6570_4375}>
              <View style={styles.View_I1_1518_6570_4376}>
                <Text style={styles.Text_I1_1518_6570_4376}>100 pt</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8698e6a7-2bce-4b7f-ae44-935a28285e54"
                }}
                style={styles.ImageBackground_I1_1518_6570_4377}
              />
              <View style={styles.View_I1_1518_6570_4378}>
                <Text style={styles.Text_I1_1518_6570_4378}>12,4 km</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc4178c3-4c1a-4a5e-a98f-efa08ee0e618"
                }}
                style={styles.ImageBackground_I1_1518_6570_4379}
              />
              <View style={styles.View_I1_1518_6570_4380}>
                <Text style={styles.Text_I1_1518_6570_4380}>1222 kcal</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1_1518_6570_4381}>
            <Text style={styles.Text_I1_1518_6570_4381}>10,120 Steps</Text>
          </View>
        </View>
        <View style={styles.View_1_1519}>
          <View style={styles.View_I1_1519_6734_66564}>
            <View style={styles.View_I1_1519_6734_66565}>
              <Text style={styles.Text_I1_1519_6734_66565}>22 May</Text>
            </View>
            <View style={styles.View_I1_1519_6734_66566}>
              <View style={styles.View_I1_1519_6734_66569}>
                <Text style={styles.Text_I1_1519_6734_66569}>12,4 km</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abe51eb5-5a6d-4c49-98e6-0c3ade303702"
                }}
                style={styles.ImageBackground_I1_1519_6734_66570}
              />
              <View style={styles.View_I1_1519_6734_66571}>
                <Text style={styles.Text_I1_1519_6734_66571}>1222 kcal</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1_1519_6734_66572}>
            <Text style={styles.Text_I1_1519_6734_66572}>11,120 Steps</Text>
          </View>
        </View>
        <View style={styles.View_1_1520}>
          <View style={styles.View_I1_1520_6570_4373}>
            <View style={styles.View_I1_1520_6570_4374}>
              <Text style={styles.Text_I1_1520_6570_4374}>21 May</Text>
            </View>
            <View style={styles.View_I1_1520_6570_4375}>
              <View style={styles.View_I1_1520_6570_4376}>
                <Text style={styles.Text_I1_1520_6570_4376}>100 pt</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eecb83e8-2ba6-47d8-85ce-f52f0e82e690"
                }}
                style={styles.ImageBackground_I1_1520_6570_4377}
              />
              <View style={styles.View_I1_1520_6570_4378}>
                <Text style={styles.Text_I1_1520_6570_4378}>12,4 km</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37dd70b4-a373-4221-9d17-6f97cd34b4f0"
                }}
                style={styles.ImageBackground_I1_1520_6570_4379}
              />
              <View style={styles.View_I1_1520_6570_4380}>
                <Text style={styles.Text_I1_1520_6570_4380}>1222 kcal</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1_1520_6570_4381}>
            <Text style={styles.Text_I1_1520_6570_4381}>10,120 Steps</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1521}>
        <View style={styles.View_I1_1521_6734_8816} />
        <View style={styles.View_I1_1521_6734_8817}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dc30bc2-37ea-4362-8cfd-c96eb11c6453"
            }}
            style={styles.ImageBackground_I1_1521_6734_8818}
          />
          <View style={styles.View_I1_1521_6734_8821}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6c4a48b-7a2d-487c-a1a7-fb6426b0d603"
              }}
              style={styles.ImageBackground_I1_1521_6734_8822}
            />
            <View style={styles.View_I1_1521_6734_8823} />
          </View>
          <View style={styles.View_I1_1521_6734_8824} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea87abf9-a912-4c5b-bc46-591c24c36aec"
          }}
          style={styles.ImageBackground_I1_1521_6734_8825}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d9fff9a-b2de-451f-93f9-11d4271df22a"
          }}
          style={styles.ImageBackground_I1_1521_6734_8829}
        />
        <View style={styles.View_I1_1521_6734_8834}>
          <View style={styles.View_I1_1521_6734_8835}>
            <Text style={styles.Text_I1_1521_6734_8835}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1522}>
        <View style={styles.View_I1_1522_6738_9628}>
          <View style={styles.View_I1_1522_6738_9627}>
            <View style={styles.View_I1_1522_6601_5269}>
              <Text style={styles.Text_I1_1522_6601_5269}>History</Text>
            </View>
            <View style={styles.View_I1_1522_6601_5270}>
              <View style={styles.View_I1_1522_6601_5270_342_12997}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93a85ec7-9b2b-4b45-8dd5-b9aa9b636c31"
                  }}
                  style={styles.ImageBackground_I1_1522_6601_5270_342_12998}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I1_1522_6738_9609}>
            <View style={styles.View_I1_1522_6738_9610}>
              <View style={styles.View_I1_1522_6738_9610_342_13718}>
                <View style={styles.View_I1_1522_6738_9610_342_13718_342_4947}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd333631-80ec-4777-9b50-a7b0870a26fb"
                    }}
                    style={
                      styles.ImageBackground_I1_1522_6738_9610_342_13718_342_4948
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I1_1522_6738_9611}>
              <View style={styles.View_I1_1522_6738_9611_342_13674}>
                <View style={styles.View_I1_1522_6738_9611_342_13674_342_4773}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/343759ab-5005-4fbe-a329-1fb8feecca2a"
                    }}
                    style={
                      styles.ImageBackground_I1_1522_6738_9611_342_13674_342_4774
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(40, 51, 63, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_1_1476: {
    width: wp("109%"),
    minWidth: wp("109%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20%"),
    top: hp("1%")
  },
  ImageBackground_1_1477: {
    width: wp("109%"),
    minWidth: wp("109%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("63%")
  },
  View_1_1491: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1492: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(174, 168, 178, 1)",
    opacity: 0.20000000298023224
  },
  View_1_1493: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1494: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(174, 168, 178, 1)",
    opacity: 0.20000000298023224
  },
  View_1_1495: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 0.10000000149011612)"
  },
  View_1_1496: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1497: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1498: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1498_342_16234: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1498_342_16235: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1499: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1499: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1500: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_1500: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1501: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  View_1_1502: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1502_342_14580: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1502_342_14581: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1503: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_1_1504: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1505: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1505: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1506: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%")
  },
  View_1_1507: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_1_1508: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1509: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1509: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1510: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1510_342_16071: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1510_342_16072: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1511: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("5%")
  },
  ImageBackground_1_1512: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("5%")
  },
  View_1_1513: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1514: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 60, 80, 0.4000000059604645)"
  },
  View_I1_1514_6734_66564: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1_1514_6734_66565: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1514_6734_66565: {
    color: "rgba(123, 97, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1514_6734_66566: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1514_6734_66569: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1514_6734_66569: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1514_6734_66570: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_I1_1514_6734_66571: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1514_6734_66571: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1514_6734_66572: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_1514_6734_66572: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_1_1515: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(47, 60, 80, 0.4000000059604645)"
  },
  View_I1_1515_6734_66564: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1_1515_6734_66565: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1515_6734_66565: {
    color: "rgba(123, 97, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1515_6734_66566: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1515_6734_66569: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1515_6734_66569: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1515_6734_66570: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_I1_1515_6734_66571: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1515_6734_66571: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1515_6734_66572: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_1515_6734_66572: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_1_1516: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(47, 60, 80, 0.4000000059604645)"
  },
  View_I1_1516_6570_4373: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1_1516_6570_4374: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1516_6570_4374: {
    color: "rgba(123, 97, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1516_6570_4375: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1516_6570_4376: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1516_6570_4376: {
    color: "rgba(241, 73, 133, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1516_6570_4377: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%")
  },
  View_I1_1516_6570_4378: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1516_6570_4378: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1516_6570_4379: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%")
  },
  View_I1_1516_6570_4380: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1516_6570_4380: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1516_6570_4381: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_1516_6570_4381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_1_1517: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(47, 60, 80, 0.4000000059604645)"
  },
  View_I1_1517_6734_66564: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1_1517_6734_66565: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1517_6734_66565: {
    color: "rgba(123, 97, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1517_6734_66566: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1517_6734_66569: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1517_6734_66569: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1517_6734_66570: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_I1_1517_6734_66571: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1517_6734_66571: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1517_6734_66572: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_1517_6734_66572: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_1_1518: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46%"),
    backgroundColor: "rgba(47, 60, 80, 0.4000000059604645)"
  },
  View_I1_1518_6570_4373: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1_1518_6570_4374: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1518_6570_4374: {
    color: "rgba(123, 97, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1518_6570_4375: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1518_6570_4376: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1518_6570_4376: {
    color: "rgba(241, 73, 133, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1518_6570_4377: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%")
  },
  View_I1_1518_6570_4378: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1518_6570_4378: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1518_6570_4379: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%")
  },
  View_I1_1518_6570_4380: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1518_6570_4380: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1518_6570_4381: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_1518_6570_4381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_1_1519: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(47, 60, 80, 0.4000000059604645)"
  },
  View_I1_1519_6734_66564: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1_1519_6734_66565: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1519_6734_66565: {
    color: "rgba(123, 97, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1519_6734_66566: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1519_6734_66569: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1519_6734_66569: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1519_6734_66570: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_I1_1519_6734_66571: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1519_6734_66571: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1519_6734_66572: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_1519_6734_66572: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_1_1520: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%"),
    backgroundColor: "rgba(47, 60, 80, 0.4000000059604645)"
  },
  View_I1_1520_6570_4373: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I1_1520_6570_4374: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1520_6570_4374: {
    color: "rgba(123, 97, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1520_6570_4375: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1520_6570_4376: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1520_6570_4376: {
    color: "rgba(241, 73, 133, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1520_6570_4377: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%")
  },
  View_I1_1520_6570_4378: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1520_6570_4378: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1520_6570_4379: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%")
  },
  View_I1_1520_6570_4380: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1520_6570_4380: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1520_6570_4381: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_1520_6570_4381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_1_1521: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_1521_6734_8816: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_I1_1521_6734_8817: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  ImageBackground_I1_1521_6734_8818: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1521_6734_8821: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I1_1521_6734_8822: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%")
  },
  View_I1_1521_6734_8823: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I1_1521_6734_8824: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1_1521_6734_8825: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I1_1521_6734_8829: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I1_1521_6734_8834: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_1521_6734_8835: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1521_6734_8835: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_1_1522: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1522_6738_9628: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1522_6738_9627: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_I1_1522_6601_5269: {
    width: wp("63%"),
    minWidth: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1522_6601_5269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_1522_6601_5270: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1522_6601_5270_342_12997: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1522_6601_5270_342_12998: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1522_6738_9609: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1522_6738_9610: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1522_6738_9610_342_13718: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1522_6738_9610_342_13718_342_4947: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1522_6738_9610_342_13718_342_4948: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_1522_6738_9611: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1522_6738_9611_342_13674: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1522_6738_9611_342_13674_342_4773: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_1522_6738_9611_342_13674_342_4774: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
