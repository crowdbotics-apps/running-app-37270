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
      <View style={styles.View_1_1153} />
      <View style={styles.View_1_1154}>
        <Text style={styles.Text_1_1154}>Already have an account? Sign In</Text>
      </View>
      <View style={styles.View_1_1155}>
        <View style={styles.View_1_1156} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d088625c-07e2-4ae2-b35c-cc284deb84f9"
        }}
        style={styles.ImageBackground_1_1157}
      />
      <View style={styles.View_1_1158}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fe88072-2ae8-4f4d-9380-874b90f6df3b"
          }}
          style={styles.ImageBackground_1_1159}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0316ad4b-ad2d-4c2c-9eab-e3d5b3ab7b38"
          }}
          style={styles.ImageBackground_1_1162}
        />
      </View>
      <View style={styles.View_1_1180}>
        <Text style={styles.Text_1_1180}>Skip</Text>
      </View>
      <View style={styles.View_1_1181}>
        <View style={styles.View_1_1182}>
          <View style={styles.View_1_1183}>
            <View style={styles.View_1_1184}>
              <Text style={styles.Text_1_1184}>Run</Text>
            </View>
            <View style={styles.View_1_1185}>
              <Text style={styles.Text_1_1185}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s
              </Text>
            </View>
          </View>
          <View style={styles.View_1_1186}>
            <View style={styles.View_1_1187}>
              <View style={styles.View_1_1188} />
              <View style={styles.View_1_1189} />
              <View style={styles.View_1_1190} />
            </View>
            <View style={styles.View_1_1191}>
              <View style={styles.View_I1_1191_262_36617}>
                <View style={styles.View_I1_1191_262_36631}>
                  <View style={styles.View_I1_1191_262_36441}>
                    <Text style={styles.Text_I1_1191_262_36441}>Next</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6dcc4204-02b5-4452-8b21-fcce3f7e5fd6"
                    }}
                    style={styles.ImageBackground_I1_1191_262_36442}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1192}>
        <View style={styles.View_I1_1192_6734_8816} />
        <View style={styles.View_I1_1192_6734_8817}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43019547-1f8c-4779-b5c7-905400ab8eb6"
            }}
            style={styles.ImageBackground_I1_1192_6734_8818}
          />
          <View style={styles.View_I1_1192_6734_8821}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d14efe68-b109-45e7-92fd-19f5dc989e11"
              }}
              style={styles.ImageBackground_I1_1192_6734_8822}
            />
            <View style={styles.View_I1_1192_6734_8823} />
          </View>
          <View style={styles.View_I1_1192_6734_8824} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c353d387-2c51-4045-96aa-a6fd6084d019"
          }}
          style={styles.ImageBackground_I1_1192_6734_8825}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5e92cbd-9091-40d8-9ba2-b5b4b91b7124"
          }}
          style={styles.ImageBackground_I1_1192_6734_8829}
        />
        <View style={styles.View_I1_1192_6734_8834}>
          <View style={styles.View_I1_1192_6734_8835}>
            <Text style={styles.Text_I1_1192_6734_8835}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(40, 51, 63, 1)" },
  View_2: { height: hp("111%") },
  View_1_1153: {
    width: wp("59%"),
    height: hp("34%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    backgroundColor: "rgba(47, 60, 80, 1)"
  },
  View_1_1154: {
    width: wp("66%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_1154: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1155: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1156: {
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
  ImageBackground_1_1157: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_1158: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1159: {
    width: wp("85%"),
    height: hp("44%"),
    top: hp("-4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1162: {
    width: wp("25%"),
    height: hp("30%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_1_1180: {
    width: wp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    justifyContent: "center"
  },
  Text_1_1180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1181: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("57%"),
    backgroundColor: "rgba(47, 60, 80, 1)"
  },
  View_1_1182: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1183: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1184: {
    width: wp("66%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_1184: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1185: {
    width: wp("66%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_1185: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1186: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1187: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1188: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(241, 73, 133, 1)"
  },
  View_1_1189: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(241, 73, 133, 1)"
  },
  View_1_1190: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(241, 73, 133, 1)"
  },
  View_1_1191: {
    width: wp("40%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(123, 97, 255, 1)",
    overflow: "hidden"
  },
  View_I1_1191_262_36617: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%")
  },
  View_I1_1191_262_36631: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_1191_262_36441: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I1_1191_262_36441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1_1191_262_36442: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_1_1192: {
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
  View_I1_1192_6734_8816: {
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
  View_I1_1192_6734_8817: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  ImageBackground_I1_1192_6734_8818: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1192_6734_8821: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I1_1192_6734_8822: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%")
  },
  View_I1_1192_6734_8823: {
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
  View_I1_1192_6734_8824: {
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
  ImageBackground_I1_1192_6734_8825: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I1_1192_6734_8829: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I1_1192_6734_8834: {
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
  View_I1_1192_6734_8835: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1192_6734_8835: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
