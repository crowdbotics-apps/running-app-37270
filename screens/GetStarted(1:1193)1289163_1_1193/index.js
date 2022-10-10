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
      <View style={styles.View_1_1194}>
        <View style={styles.View_1_1195} />
      </View>
      <View style={styles.View_1_1196}>
        <View style={styles.View_1_1197}>
          <View style={styles.View_1_1198}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4fffc79-af9f-41ff-9824-26a33c453dd5"
              }}
              style={styles.ImageBackground_1_1199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8bdf653-1790-4142-b9ff-27f793ebcaa9"
              }}
              style={styles.ImageBackground_1_1200}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30cffaff-48b6-4215-9e30-4c2b1581339d"
              }}
              style={styles.ImageBackground_1_1201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ab5da26-df23-4976-8144-ba62b2fcb3d9"
              }}
              style={styles.ImageBackground_1_1202}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60c13123-3fd8-42b3-be47-71b790725303"
              }}
              style={styles.ImageBackground_1_1203}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ea50e60-7dbc-40df-9e25-127895d59084"
              }}
              style={styles.ImageBackground_1_1204}
            />
          </View>
          <View style={styles.View_1_1208}>
            <View style={styles.View_1_1209}>
              <View style={styles.View_1_1210}>
                <View style={styles.View_1_1211}>
                  <View style={styles.View_1_1212}>
                    <View style={styles.View_1_1213}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4661820-9ec5-4339-b584-00addc3bf784"
                        }}
                        style={styles.ImageBackground_1_1214}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb6a6d1f-18e4-4687-80fb-bebc3fdf5442"
                        }}
                        style={styles.ImageBackground_1_1217}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24db7034-9741-468b-ab68-543108f2d7b5"
                        }}
                        style={styles.ImageBackground_1_1218}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a715a998-2bd4-4c92-9769-af8396b3ccf2"
                        }}
                        style={styles.ImageBackground_1_1219}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d3723c2-30e4-4b5e-ba96-55f870c7cf2b"
                        }}
                        style={styles.ImageBackground_1_1222}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b41c5dab-367f-4803-ac60-0bf540450fd3"
                        }}
                        style={styles.ImageBackground_1_1223}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ed8824f-f1b2-41ee-b348-c4bfaee0243c"
                        }}
                        style={styles.ImageBackground_1_1224}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe2f2074-976c-4bdc-a7eb-49aac1a54c09"
                        }}
                        style={styles.ImageBackground_1_1228}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/853ae47f-cafa-4998-b6f2-26fbcb3e4203"
                        }}
                        style={styles.ImageBackground_1_1229}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b323983e-a25c-4b51-a5ec-8e3a37d6acab"
                        }}
                        style={styles.ImageBackground_1_1230}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd71cc01-7688-49f4-b4d5-a16b48e75c9b"
                        }}
                        style={styles.ImageBackground_1_1234}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84dddb41-5ba6-4d52-aead-e9ebd7579454"
                      }}
                      style={styles.ImageBackground_1_1238}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7882992-eddf-418d-97da-f8c8b638be49"
                      }}
                      style={styles.ImageBackground_1_1239}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62c2a37b-9ff5-4c99-aa9e-4a748779ead1"
                    }}
                    style={styles.ImageBackground_1_1240}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da17855e-3b09-4daa-a215-4dc40c70b5a4"
                    }}
                    style={styles.ImageBackground_1_1241}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45450b0a-cb61-4f7e-9d4e-73da40be2001"
                  }}
                  style={styles.ImageBackground_1_1242}
                />
              </View>
              <View style={styles.View_1_1245}>
                <View style={styles.View_1_1246}>
                  <View style={styles.View_1_1247}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98273ff9-93cf-4dd5-8118-4d874491d248"
                      }}
                      style={styles.ImageBackground_1_1248}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb4720a3-df3c-4407-981f-3e3126ddd8d8"
                      }}
                      style={styles.ImageBackground_1_1253}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b63636db-7156-489b-9f09-127002b98aaf"
                    }}
                    style={styles.ImageBackground_1_1254}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b8cf619-eb4e-47fd-8d65-7136508064d1"
                    }}
                    style={styles.ImageBackground_1_1255}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4fd31a9-f755-4f8f-be73-536916cb7c94"
                    }}
                    style={styles.ImageBackground_1_1256}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4427782f-fe3a-4193-94ec-bd9e89627faf"
                    }}
                    style={styles.ImageBackground_1_1257}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/158a8731-79ed-45d6-a210-8cbba5f7738d"
                    }}
                    style={styles.ImageBackground_1_1258}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a9b301c-1002-478c-8a7e-1c58f6bc09cd"
                    }}
                    style={styles.ImageBackground_1_1259}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d1ec615-bca7-49da-a13e-ebfd6d0bf960"
                    }}
                    style={styles.ImageBackground_1_1260}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a00a6f9f-1c7e-4e93-9009-0e44c5606897"
                    }}
                    style={styles.ImageBackground_1_1261}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43caf684-f57e-46e4-9b16-c63bc673d92f"
                    }}
                    style={styles.ImageBackground_1_1262}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed6352b3-3aa0-43f4-b3da-e1543af882c8"
                    }}
                    style={styles.ImageBackground_1_1266}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2780bac8-a340-48d1-ba7f-beb47c798253"
                  }}
                  style={styles.ImageBackground_1_1269}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e4b06e5-c787-4988-aa1d-1f78e436b298"
                  }}
                  style={styles.ImageBackground_1_1273}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1fbf27b-53dd-4fa3-a86f-a48730605910"
                  }}
                  style={styles.ImageBackground_1_1274}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27df2351-81f4-4488-b6fe-bff205578c70"
                  }}
                  style={styles.ImageBackground_1_1275}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29333476-07fc-41ba-b7e3-ce19fe2623af"
                  }}
                  style={styles.ImageBackground_1_1276}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31e6b9a6-17e3-4181-8a93-7142c2112d79"
                  }}
                  style={styles.ImageBackground_1_1277}
                />
              </View>
              <View style={styles.View_1_1278}>
                <View style={styles.View_1_1279}>
                  <View style={styles.View_1_1280}>
                    <View style={styles.View_1_1281}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b9756ec-7e8c-48dd-890b-3e0d9d945ed7"
                        }}
                        style={styles.ImageBackground_1_1282}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dc5bc5d-be23-4a7e-89f4-f69131afd366"
                        }}
                        style={styles.ImageBackground_1_1286}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3a10eee-06bf-4a3a-a1c9-439398e09612"
                      }}
                      style={styles.ImageBackground_1_1287}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/355986dc-9932-4369-9719-6a805b4954f2"
                      }}
                      style={styles.ImageBackground_1_1291}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c488e61-7515-475f-8024-dd70b99f6eb4"
                      }}
                      style={styles.ImageBackground_1_1292}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3beec04c-aa1b-44df-8c9a-8b3f3754897c"
                      }}
                      style={styles.ImageBackground_1_1296}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48c3ab48-fc9c-4ccd-9db3-95cb03cf09a2"
                      }}
                      style={styles.ImageBackground_1_1297}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b585776b-1bbf-4952-8c9f-6053b9b2de51"
                      }}
                      style={styles.ImageBackground_1_1298}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e97f4a87-2001-4011-b3af-6b1793cfe429"
                      }}
                      style={styles.ImageBackground_1_1299}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ce41456-efb1-4772-a7df-b27132f4e5d9"
                      }}
                      style={styles.ImageBackground_1_1304}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b639b64-f19a-4d64-a9f6-9e0cead92cdc"
                      }}
                      style={styles.ImageBackground_1_1308}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f461593-864c-481a-960d-42eb1ba63fbf"
                      }}
                      style={styles.ImageBackground_1_1309}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a36c075-f5b1-45ef-be1b-ddf0062f8eda"
                    }}
                    style={styles.ImageBackground_1_1310}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_1_1311}>
              <View style={styles.View_1_1312}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4009bfe-22eb-4c6c-a980-155cfd0a29bb"
                  }}
                  style={styles.ImageBackground_1_1313}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/455f950d-50be-44d3-bd32-f63374443b14"
                  }}
                  style={styles.ImageBackground_1_1314}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d11abcad-e284-4204-8611-a1750f86d717"
                  }}
                  style={styles.ImageBackground_1_1317}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbc5dd54-c8f9-4eef-8b45-bb89821dba99"
                  }}
                  style={styles.ImageBackground_1_1318}
                />
                <View style={styles.View_1_1319}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b47f650-9209-4113-9c81-56fa2678ffbe"
                    }}
                    style={styles.ImageBackground_1_1320}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/219fa8ad-2b9d-496e-8086-9e0e6e7da210"
                    }}
                    style={styles.ImageBackground_1_1321}
                  />
                </View>
              </View>
              <View style={styles.View_1_1326}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12b8ec24-5b38-4e0c-ba8c-e25e19243273"
                  }}
                  style={styles.ImageBackground_1_1327}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0376336e-a64a-45c1-bbe3-114e3ef31664"
                  }}
                  style={styles.ImageBackground_1_1328}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0d393b1-9a27-4911-b9ee-e598b2ba4f12"
                  }}
                  style={styles.ImageBackground_1_1331}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cff467d2-0be8-42b3-ab46-6e264a26ecec"
                  }}
                  style={styles.ImageBackground_1_1332}
                />
                <View style={styles.View_1_1333}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/884a9d68-7614-45e3-88e1-1b81f10ae649"
                    }}
                    style={styles.ImageBackground_1_1334}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e8a078b-68cd-4d12-967f-56f6301a2d85"
                    }}
                    style={styles.ImageBackground_1_1335}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1340}>
        <View style={styles.View_1_1341}>
          <Text style={styles.Text_1_1341}>Running App</Text>
        </View>
        <View style={styles.View_1_1342}>
          <Text style={styles.Text_1_1342}>
            Run and earn with our app. Some text Example will be her
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1343}>
        <View style={styles.View_I1_1343_6543_3441}>
          <Text style={styles.Text_I1_1343_6543_3441}>Get Started</Text>
        </View>
      </View>
      <View style={styles.View_1_1344}>
        <View style={styles.View_I1_1344_6734_8816} />
        <View style={styles.View_I1_1344_6734_8817}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ab44239-90ec-496c-a3f5-e8f7d8d24ade"
            }}
            style={styles.ImageBackground_I1_1344_6734_8818}
          />
          <View style={styles.View_I1_1344_6734_8821}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a52cf52-1a73-4040-a29f-4155be4d25ad"
              }}
              style={styles.ImageBackground_I1_1344_6734_8822}
            />
            <View style={styles.View_I1_1344_6734_8823} />
          </View>
          <View style={styles.View_I1_1344_6734_8824} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fbcc424-a3a8-4764-ab24-1e506d36ad94"
          }}
          style={styles.ImageBackground_I1_1344_6734_8825}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4af43fc-440e-4df8-b1fa-ba28e07909ed"
          }}
          style={styles.ImageBackground_I1_1344_6734_8829}
        />
        <View style={styles.View_I1_1344_6734_8834}>
          <View style={styles.View_I1_1344_6734_8835}>
            <Text style={styles.Text_I1_1344_6734_8835}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(40, 51, 63, 1)" },
  View_2: { height: hp("111%") },
  View_1_1194: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1195: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(75, 87, 107, 1)"
  },
  View_1_1196: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1197: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1198: {
    width: wp("144%"),
    height: hp("96%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16%")
  },
  ImageBackground_1_1199: {
    width: wp("144%"),
    height: hp("49%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1200: {
    width: wp("44%"),
    height: hp("9%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_1_1201: {
    width: wp("44%"),
    height: hp("9%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_1202: {
    width: wp("101%"),
    height: hp("56%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_1203: {
    width: wp("95%"),
    height: hp("1%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1_1204: {
    width: wp("76%"),
    height: hp("11%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_1_1208: {
    width: wp("117%"),
    height: hp("35%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%")
  },
  View_1_1209: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  View_1_1210: {
    width: wp("25%"),
    height: hp("18%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1211: {
    width: wp("25%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1212: {
    width: wp("25%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1213: {
    width: wp("25%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1214: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_1_1217: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1218: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1219: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1222: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_1_1223: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_1_1224: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_1_1228: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_1229: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_1230: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_1234: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_1238: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_1_1239: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_1240: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_1241: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1_1242: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_1_1245: {
    width: wp("29%"),
    height: hp("18%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  View_1_1246: {
    width: wp("29%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1247: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_1248: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1253: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_1254: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_1_1255: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_1_1256: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_1257: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1258: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1259: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_1260: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_1261: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_1_1262: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1_1266: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_1_1269: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_1_1273: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_1274: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_1275: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_1276: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_1_1277: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_1_1278: {
    width: wp("33%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_1_1279: {
    width: wp("33%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1280: {
    width: wp("33%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1281: {
    width: wp("20%"),
    height: hp("14%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_1_1282: {
    width: wp("20%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1286: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1287: {
    width: wp("19%"),
    height: hp("14%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1291: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1292: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_1_1296: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_1_1297: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_1298: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_1299: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_1_1304: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_1308: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_1_1309: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_1310: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_1_1311: {
    width: wp("117%"),
    height: hp("15%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1312: {
    width: wp("31%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1313: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_1314: {
    width: wp("12%"),
    height: hp("9%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1317: {
    width: wp("11%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_1_1318: {
    width: wp("19%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1_1319: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1320: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1321: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_1326: {
    width: wp("29%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_1_1327: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_1328: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_1_1331: {
    width: wp("10%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_1332: {
    width: wp("18%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_1333: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_1334: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1335: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_1340: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1341: {
    width: wp("66%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1_1341: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1342: {
    width: wp("62%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_1_1342: {
    color: "rgba(174, 168, 178, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1343: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("97%"),
    backgroundColor: "rgba(123, 97, 255, 1)",
    overflow: "hidden"
  },
  View_I1_1343_6543_3441: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1_1343_6543_3441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1344: {
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
  View_I1_1344_6734_8816: {
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
  View_I1_1344_6734_8817: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  ImageBackground_I1_1344_6734_8818: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_1344_6734_8821: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I1_1344_6734_8822: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%")
  },
  View_I1_1344_6734_8823: {
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
  View_I1_1344_6734_8824: {
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
  ImageBackground_I1_1344_6734_8825: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I1_1344_6734_8829: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I1_1344_6734_8834: {
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
  View_I1_1344_6734_8835: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_1344_6734_8835: {
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
