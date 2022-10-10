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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eda08a57-0a8b-48cb-873e-a18c78ad33c7"
        }}
        style={styles.ImageBackground_1_1636}
      />
      <View style={styles.View_1_1637}>
        <View style={styles.View_1_1638} />
        <View style={styles.View_1_1639}>
          <View style={styles.View_1_1640}>
            <View style={styles.View_1_1641} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31a0862a-667a-4986-b4f2-ca7ea7a2d665"
              }}
              style={styles.ImageBackground_1_1642}
            />
            <View style={styles.View_1_1643} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c49dd5ef-e935-4add-a485-a108d89ace99"
            }}
            style={styles.ImageBackground_1_1644}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5485aa12-bbdd-461f-b907-0d5aa7fb13b5"
            }}
            style={styles.ImageBackground_1_1648}
          />
        </View>
        <View style={styles.View_1_1653}>
          <View style={styles.View_1_1654}>
            <Text style={styles.Text_1_1654}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1655}>
        <View style={styles.View_1_1656} />
      </View>
      <View style={styles.View_1_1657}>
        <View style={styles.View_1_1658}>
          <View style={styles.View_1_1659}>
            <Text style={styles.Text_1_1659}>Verify your email</Text>
          </View>
          <View style={styles.View_1_1660}>
            <Text style={styles.Text_1_1660}>
              Enter the email associated with your account we’ll send email with
              password to verify
            </Text>
          </View>
        </View>
        <View style={styles.View_1_1661}>
          <View style={styles.View_1_1662}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4eca7d7-507e-40aa-ad3f-6eb5be0c1ebe"
              }}
              style={styles.ImageBackground_1_1663}
            />
          </View>
          <View style={styles.View_1_1668}>
            <View style={styles.View_1_1669}>
              <View style={styles.View_1_1670}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b6b182b-e766-4a47-b462-0301453bb12b"
                  }}
                  style={styles.ImageBackground_1_1671}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ab7f7f0-5e9a-401a-8ddb-64753c223b80"
                  }}
                  style={styles.ImageBackground_1_1679}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93ccbb2c-111e-48a1-86f3-96da5496f90e"
                  }}
                  style={styles.ImageBackground_1_1680}
                />
              </View>
              <View style={styles.View_1_1681}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb2889ed-7d05-4806-89c0-a6953814fccc"
                  }}
                  style={styles.ImageBackground_1_1682}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2ad02f4-04a0-476d-898c-56ca3f2fcc1a"
                  }}
                  style={styles.ImageBackground_1_1685}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15e6b625-88a2-4859-9046-2beac4e86f18"
                  }}
                  style={styles.ImageBackground_1_1686}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7fc7ed4-fdd0-4e01-8dd7-51c41d4b2cca"
                  }}
                  style={styles.ImageBackground_1_1687}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67b1fabb-7962-482f-8e69-75d71f82fbc6"
                  }}
                  style={styles.ImageBackground_1_1689}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56218cae-4ae5-4c26-8bab-36d1d395f0bc"
                  }}
                  style={styles.ImageBackground_1_1692}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1a8830f-a819-4491-80ea-558fc756d3e3"
                  }}
                  style={styles.ImageBackground_1_1693}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/863a95ef-337c-4ed3-aaf5-378123110ca2"
                  }}
                  style={styles.ImageBackground_1_1694}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a2d5b2e-aefc-4861-93f7-43790b2093d3"
                  }}
                  style={styles.ImageBackground_1_1697}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1_1698}>
            <View style={styles.View_1_1699}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6599780c-b5ec-40a1-99ef-2d16f59f638b"
                }}
                style={styles.ImageBackground_1_1700}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46efc132-dd37-4edb-bff5-1298266912b0"
                }}
                style={styles.ImageBackground_1_1701}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22cb2cda-168f-49b8-884c-a04f1ff51697"
                }}
                style={styles.ImageBackground_1_1702}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0b93f95-ebe0-49c8-a003-61b25dd24e25"
                }}
                style={styles.ImageBackground_1_1703}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f044587f-9a3b-4c87-9af0-d1ec88bd13e4"
                }}
                style={styles.ImageBackground_1_1704}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/254ce06f-c044-41eb-84d3-d440cc7bc6cd"
                }}
                style={styles.ImageBackground_1_1705}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c313d70-b376-427d-a398-fcadc98e5c27"
                }}
                style={styles.ImageBackground_1_1706}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ddde482-1e0a-489d-8bf8-52b40ded1c29"
                }}
                style={styles.ImageBackground_1_1707}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/423cd3d5-adf8-410a-9fe9-5dde589a7509"
                }}
                style={styles.ImageBackground_1_1710}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8694d829-d42f-4a08-b3e5-eb7b4334afd7"
                }}
                style={styles.ImageBackground_1_1711}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_1712}>
          <View style={styles.View_1_1713}>
            <View style={styles.View_1_1715}>
              <Text style={styles.Text_1_1715}>3</Text>
            </View>
          </View>
          <View style={styles.View_1_1716} />
          <View style={styles.View_1_1717} />
          <View style={styles.View_1_1718} />
        </View>
      </View>
      <View style={styles.View_1_1719}>
        <View style={styles.View_1_1720}>
          <View style={styles.View_I1_1720_6543_3441}>
            <Text style={styles.Text_I1_1720_6543_3441}>Verify Email</Text>
          </View>
        </View>
        <View style={styles.View_1_1721}>
          <View style={styles.View_I1_1721_6543_3451}>
            <Text style={styles.Text_I1_1721_6543_3451}>Open mail app</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(40, 51, 63, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_1_1636: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_1637: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1638: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1639: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_1_1640: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_1_1641: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_1_1642: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_1_1643: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_1644: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1648: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1653: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1654: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1654: {
    color: "rgba(47, 42, 50, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_1_1655: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1656: {
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
  View_1_1657: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("20%")
  },
  View_1_1658: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1659: {
    width: wp("66%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_1_1659: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_1660: {
    width: wp("77%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_1660: {
    color: "rgba(205, 205, 205, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1661: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_1_1662: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_1_1663: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1668: {
    width: wp("35%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1669: {
    width: wp("35%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1670: {
    width: wp("29%"),
    height: hp("19%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1671: {
    width: wp("29%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1679: {
    width: wp("27%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_1680: {
    width: wp("27%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_1681: {
    width: wp("29%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_1682: {
    width: wp("29%"),
    height: hp("21%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1685: {
    width: wp("25%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_1686: {
    width: wp("2%"),
    height: hp("11%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1687: {
    width: wp("2%"),
    height: hp("11%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1689: {
    width: wp("27%"),
    height: hp("18%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_1692: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1_1693: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_1694: {
    width: wp("27%"),
    height: hp("11%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_1697: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_1698: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_1_1699: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1700: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1701: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1702: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1703: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_1704: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_1705: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_1706: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1707: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1710: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1711: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_1712: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1713: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 60, 80, 1)",
    overflow: "hidden"
  },
  View_1_1715: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_1715: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1716: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 60, 80, 1)",
    overflow: "hidden"
  },
  View_1_1717: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 60, 80, 1)",
    overflow: "hidden"
  },
  View_1_1718: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 60, 80, 1)",
    overflow: "hidden"
  },
  View_1_1719: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1720: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(123, 97, 255, 1)",
    overflow: "hidden"
  },
  View_I1_1720_6543_3441: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1_1720_6543_3441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1721: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_1721_6543_3451: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1_1721_6543_3451: {
    color: "rgba(123, 97, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
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
