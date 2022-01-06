import React, { useCallback, useReducer, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import { useAppDispatch } from "../../../hooks";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import VerifyCodeInput from "../../../components/VerifyCodeInput";
import { Picker } from "react-native-wheel-datepicker";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === "FORM_INPUT_UPDATE") {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      if (updatedValidities.hasOwnProperty(key)) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updateValues,
    };
  }
  return state;
};

const SignupScreen1 = (props) => {
  const dispatch = useAppDispatch();
  const [isPickingContryCode, setIsPickingCountryCode] = useState(false);
  const [countryCode, setCountryCode] = useState("US +1");

  const book = [
    { "United States of America +1": "US +1" },
    { "Afghanistan +93": "AF +93" },
    { "Albania +355": "AL +355" },
    { "Algeria +213": "DZ +213" },
    { "American Samoa +684": "AS +684" },
    { "Andorra +376": "AD +376" },
    { "Angola +244": "AO +244" },
    { "Anguilla +809": "AI +809" },
    { "Antigua +268": "AG +268" },
    { "Argentina +54": "AR +54" },
    { "Armenia +374": "AM +374" },
    { "Aruba +297": "AW +297" },
    { "Ascension Island +247": "AC +247" },
    { "Australia +61": "AU +61" },
    { "Australian External Territories +672": "AU +672" },
    { "Austria +43": "AT +43" },
    { "Azerbaijan +994": "AZ +994" },
    { "Bahamas +242": "BS +242" },
    { "Barbados +246": "BB +246" },
    { "Bahrain +973": "BH +973" },
    { "Bangladesh +880": "BD +880" },
    { "Belarus +375": "BY +375" },
    { "Belgium +32": "BE +32" },
    { "Belize +501": "BZ +501" },
    { "Benin +229": "BJ +229" },
    { "Bermuda +809": "BM +809" },
    { "Bhutan +975": "BT +975" },
    { "British Virgin Islands +284": "VG +284" },
    { "Bolivia +591": "BO +591" },
    { "Bosnia and Hercegovina +387": "BA +387" },
    { "Botswana +267": "BW +267" },
    { "Brazil +55": "BR +55" },
    { "Brunei Darussalm +673": "BN +673" },
    { "Bulgaria +359": "BG +359" },
    { "Burkina Faso +226": "BF +226" },
    { "Burundi +257": "BI +257" },
    { "Cambodia +855": "KH +855" },
    { "Cameroon +237": "CM +237" },
    { "Canada +1": "CA +1" },
    { "Cape Verde Islands +238": "CV +238" },
    { "Caribbean Nations +599": "BQ +599" },
    { "Cayman Islands +345": "KY +345" },
    { "Central African Republic +236": "CF +236" },
    { "Chad +235": "TD +235" },
    { "Chile +56": "CL +56" },
    { "China (People's Republic) +86": "CN +86" },
    { "Taiwan +886": "TW +886" },
    { "Colombia +57": "CO +57" },
    { "Comoros and Mayotte +269": "KM +269" },
    { "Congo +242": "CD +242" },
    { "Cook Islands +682": "CK +682" },
    { "Costa Rica +506": "CR +506" },
    { "Croatia +385": "HR +385" },
    { "Cuba +53": "CU +53" },
    { "Cyprus +357": "CY +357" },
    { "Czech Republic +420": "CZ +420" },
    { "Denmark +45": "DK +45" },
    { "Diego Garcia +246": "IO +246" },
    { "Dominca +767": "DM +767" },
    { "Dominican Republic +809": "DO +809" },
    { "Djibouti +253": "DJ +253" },
    { "Ecuador +593": "EC +593" },
    { "Egypt +20": "EG +20" },
    { "El Salvador +503": "SV +503" },
    { "Equatorial Guinea +240": "GQ +240" },
    { "Eritrea +291": "ER +291" },
    { "Estonia +372": "EE +372" },
    { "Ethiopia +251": "ET +251" },
    { "Falkland Islands +500": "FK +500" },
    { "Faroe (Faeroe) Islands (Denmark) +298": "FO +298" },
    { "Fiji +679": "FJ +679" },
    { "Finland +358": "FI +358" },
    { "France +33": "FR +33" },
    { "French Antilles +596": "TF +596" },
    { "French Guiana +594": "GF +594" },
    { "Gabon (Gabonese Republic) +241": "GA +241" },
    { "Gambia +220": "GM +220" },
    { "Georgia +995": "GE +995" },
    { "Germany +49": "DE +49" },
    { "Ghana +233": "GH +233" },
    { "Gibraltar +350": "GI +350" },
    { "Greece +30": "GR +30" },
    { "Greenland +299": "GL +299" },
    { "Grenada/Carricou +473": "GD +473" },
    { "Guam +671": "GU +671" },
    { "Guatemala +502": "GT +502" },
    { "Guinea +224": "GN +224" },
    { "Guinea-Bissau +245": "GW +245" },
    { "Guyana +592": "GY +592" },
    { "Haiti +509": "HT +509" },
    { "Honduras +504": "HN +504" },
    { "Hong Kong +852": "HK +852" },
    { "Hungary +36": "HU +36" },
    { "Iceland +354": "IS +354" },
    { "India +91": "IN +91" },
    { "Indonesia +62": "ID +62" },
    { "Iran +98": "IR +98" },
    { "Iraq +964": "IQ +964" },
    { "Ireland (Irish Republic; Eire) +353": "IE +353" },
    { "Israel +972": "IL +972" },
    { "Italy +39": "IT +39" },
    { "Ivory Coast (La Cote d'Ivoire) +225": "CI +225" },
    { "Jamaica +876": "JM +876" },
    { "Japan +81": "JP +81" },
    { "Jordan +962": "JO +962" },
    { "Kazakhstan +7": "KZ +7" },
    { "Kenya +254": "KE +254" },
    { "Kiribati +686 Republic (Gilbert Islands)": "KI +686" },
    { "Korea, Republic of (South Korea) +82": "KR +82" },
    { "Korea +850, People's Republic of (North Korea)": "KP +850" },
    { "Kuwait +965": "KW +965" },
    { "Kyrgyz Republic +996": "KG +996" },
    { "Latvia +371": "LV +371" },
    { "Laos +856": "LA +856" },
    { "Lebanon +961": "LB +961" },
    { "Lesotho +266": "LS +266" },
    { "Liberia +231": "LR +231" },
    { "Lithuania +370": "LT +370" },
    { "Libya +218": "LY +218" },
    { "Liechtenstein +423": "LI +423" },
    { "Luxembourg +352": "LU +352" },
    { "Macao +853": "MO +853" },
    { "Macedonia +389": "MK +389" },
    { "Madagascar +261": "MG +261" },
    { "Malawi +265": "MW +265" },
    { "Malaysia +60": "MY +60" },
    { "Maldives +960": "MV +960" },
    { "Mali +223": "ML +223" },
    { "Malta +356": "MT +356" },
    { "Marshall Islands +692": "MH +692" },
    { "Martinique (French Antilles) +596": "MQ +596" },
    { "Mauritania +222": "MR +222" },
    { "Mauritius +230": "MU +230" },
    { "Mayolte +269": "YT +269" },
    { "Mexico +52": "MX +52" },
    { "Micronesia (F.S. of Polynesia) +691": "FM +691" },
    { "Moldova +373": "MD +373" },
    { "Monaco +33": "MC +33" },
    { "Mongolia +976": "MN +976" },
    { "Montserrat +473": "MS +473" },
    { "Morocco +212": "MA +212" },
    { "Mozambique +258": "MZ +258" },
    { "Myanmar (former Burma) +95": "MM +95" },
    { "Namibia (former South-West Africa) +264": "NA +264" },
    { "Nauru +674": "NR +674" },
    { "Nepal +977": "NP +977" },
    { "Netherlands +31": "NL +31" },
    { "Netherlands Antilles +599": "AN +599" },
    { "Nevis +869": "KN +869" },
    { "New Caledonia +687": "NC +687" },
    { "New Zealand +64": "NZ +64" },
    { "Nicaragua +505": "NI +505" },
    { "Niger +227": "NE +227" },
    { "Nigeria +234": "NG +234" },
    { "Niue +683": "NU +683" },
    { "North Korea +850": "KP +850" },
    { "North Mariana Islands (Saipan) +1670": "MP +1670" },
    { "Norway +47": "NO +47" },
    { "Oman +968": "OM +968" },
    { "Pakistan +92": "PK +92" },
    { "Palau +680": "PW +680" },
    { "Panama +507": "PA +507" },
    { "Papua New Guinea +675": "PG +675" },
    { "Paraguay +595": "PY +595" },
    { "Peru +51": "PE +51" },
    { "Philippines +63": "PH +63" },
    { "Poland +48": "PL +48" },
    { "Portugal (includes Azores) +351": "PT +351" },
    { "Puerto Rico +1787": "PR +1787" },
    { "Qatar +974": "QA +974" },
    { "Reunion (France) +262": "RE +262" },
    { "Romania +40": "RO +40" },
    { "Russia +7": "RU +7" },
    { "Rwanda (Rwandese Republic) +250": "RW +250" },
    { "San Marino +378": "SM +378" },
    { "Sao Tome and Principe +239": "ST +239" },
    { "Saudi Arabia +966": "SA +966" },
    { "Senegal +221": "SN +221" },
    { "Serbia and Montenegro +381": "RS +381" },
    { "Seychelles +248": "SC +248" },
    { "Sierra Leone +232": "SL +232" },
    { "Singapore +65": "SG +65" },
    { "Slovakia +421": "SK +421" },
    { "Slovenia +386": "SI +386" },
    { "Solomon Islands +677": "SB +677" },
    { "Somalia +252": "SO +252" },
    { "South Africa +27": "ZA +27" },
    { "Spain +34": "ES +34" },
    { "Sri Lanka +94": "LK +94" },
    { "St. Helena +290": "SH +290" },
    { "St. Kitts/Nevis +869": "KN +869" },
    { "St. Pierre (et) Miquelon (France) +508": "PM +508" },
    { "Sudan +249": "SD +249" },
    { "Suriname +597": "SR +597" },
    { "Swaziland +268": "SZ +268" },
    { "Sweden +46": "SE +46" },
    { "Switzerland +41": "CH +41" },
    { "Syrian Arab Republic (Syria) +963": "SY +963" },
    { "Tahiti (French Polynesia) +689": "PF +689" },
    { "Taiwan +886": "TW +886" },
    { "Tajikistan +7": "TJ +7" },
    { "Tanzania (includes Zanzibar) +255": "TZ +255" },
    { "Thailand +66": "TH +66" },
    { "Togo (Togolese Republic) +228": "TG +228" },
    { "Tokelau +690": "TK +690" },
    { "Tonga +676": "TO +676" },
    { "Trinidad and Tobago +1868": "TT +1868" },
    { "Tunisia +216": "TN +216" },
    { "Turkey +90": "TR +90" },
    { "Turkmenistan +993": "TM +993" },
    { "Tuvalu (Ellice Islands) +688": "TV +688" },
    { "Uganda +256": "UG +256" },
    { "Ukraine +380": "UA +380" },
    { "United Arab Emirates +971": "AE +971" },
    { "United Kingdom +44": "GB +44" },
    { "Uruguay +598": "UY +598" },
    { "USA +1": "US +1" },
    { "Uzbekistan +7": "UZ +7" },
    { "Vanuatu (New Hebrides) +678": "VU +678" },
    { "Vatican City +39": "VA +39" },
    { "Venezuela +58": "VE +58" },
    { "Viet Nam +84": "VN +84" },
    { "Virgin Islands +1340": "VG +1" },
    { "Wallis and Futuna +681": "WF +681" },
    { "Western Samoa +685": "WS +685" },
    { "Yemen (People's Democratic Republic of) +381": "YE +381" },
    { "Yemen Arab Republic (North Yemen) +967": "YE +967" },
    { "Zambia +260": "ZM +260" },
    { "Zimbabwe +263": "ZW +263" },
  ];

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      numbers: "",
    },
    inputValidities: {
      numbers: false,
    },
    formIsValid: false,
  });

  const authHandler = async () => {
    await setIsLoading(true);
    // await dispatch(setEmail(formState.inputValues.numbers));
    await setIsLoading(false);
    await props.navigation.navigate("SignupPhoneScreen2");
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <TouchableCmp
            onPress={() => {
              props.navigation.goBack("");
            }}
          >
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color="black"
              style={{ margin: 20 }}
            />
          </TouchableCmp>
          <View style={{ flex: 1, marginTop: 80 }}>
            <Text style={styles.yourNumber}>Your phone number is</Text>
            <View style={styles.authContainer}>
              <View style={{ flex: 1 }}>
                <TouchableCmp
                  onPress={() => {
                    setIsPickingCountryCode(true);
                    Keyboard.dismiss();
                  }}
                >
                  <View
                    style={{
                      height: 63,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      borderBottomWidth: 1,
                      borderColor: "black",
                    }}
                  >
                    <Text adjustsFontSizeToFit style={{ fontSize: 20 }}>
                      {countryCode}
                    </Text>
                    <Entypo name="chevron-small-down" size={24} color="black" />
                  </View>
                </TouchableCmp>
              </View>
              <View style={{ flex: 3 }}>
                <VerifyCodeInput
                  id="numbers"
                  label="Numbers"
                  keyboardType="number-pad"
                  blurOnSubmit={true}
                  autoFocus={true}
                  onSubmitEditing={() => {
                    if (formState.formIsValid === true) {
                      authHandler();
                    }
                  }}
                  onFocus={() => setIsPickingCountryCode(false)}
                  onInputChange={inputChangeHandler}
                  initialValue=""
                  styleInput={{
                    fontSize: 28,
                    fontWeight: "300",
                    backgroundColor: "#ffffff",
                  }}
                />
              </View>
            </View>
            <View style={{ marginHorizontal: "5%", marginVertical: 20 }}>
              <Text style={{ color: "grey", textAlign: "center" }}>
                Naire will send you a verification code by text message. Message
                and data rates may apply.
              </Text>
            </View>
          </View>
        </View>
        {!isPickingContryCode ? (
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <TouchableCmp
              onPress={() => {
                props.navigation.navigate("SignupPhoneScreen2");
              }}
              disabled={formState.formIsValid === false}
            >
              <View
                style={{
                  borderColor: "#A1A1A1",
                  borderWidth: 1,
                  marginRight: 20,
                  height: 70,
                  width: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 35,
                  backgroundColor: "#ffffff",
                  shadowOffset: {
                    width: -2,
                    height: 2,
                  },
                  shadowColor: "black",
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                }}
              >
                <Feather name="arrow-right" size={28} color={"#616161"} />
              </View>
            </TouchableCmp>
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}
              >
                Select Country Code
              </Text>
              <FontAwesome
                name="level-down"
                size={16}
                color="black"
                style={{ marginHorizontal: 5 }}
              />
            </View>
            <Picker
              style={{
                backgroundColor: "rgba(0,0,0,0)",
              }}
              selectedValue={"+1 US"}
              pickerData={[
                "United States of America +1",
                "Afghanistan +93",
                "Albania +355",
                "Algeria +213",
                "American Samoa +684",
                "Andorra +376",
                "Angola +244",
                "Anguilla +809",
                "Antigua +268",
                "Argentina +54",
                "Armenia +374",
                "Aruba +297",
                "Ascension Island +247",
                "Australia +61",
                "Australian External Territories +672",
                "Austria +43",
                "Azerbaijan +994",
                "Bahamas +242",
                "Barbados +246",
                "Bahrain +973",
                "Bangladesh +880",
                "Belarus +375",
                "Belgium +32",
                "Belize +501",
                "Benin +229",
                "Bermuda +809",
                "Bhutan +975",
                "British Virgin Islands +284",
                "Bolivia +591",
                "Bosnia and Hercegovina +387",
                "Botswana +267",
                "Brazil +55",
                "Brunei Darussalm +673",
                "Bulgaria +359",
                "Burkina +226 Faso",
                "Burundi +257",
                "Cambodia +855",
                "Cameroon +237",
                "Canada +1",
                "Cape Verde Islands +238",
                "Caribbean Nations +599",
                "Cayman Islands +345",
                "Central African Republic +236",
                "Chad +235",
                "Chile +56",
                "China (People's Republic) +86",
                "Taiwan +886",
                "Colombia +57",
                "Comoros and Mayotte +269",
                "Congo +242",
                "Cook Islands +682",
                "Costa Rica +506",
                "Croatia +385",
                "Cuba +53",
                "Cyprus +357",
                "Czech Republic +420",
                "Denmark +45",
                "Diego Garcia +246",
                "Dominca +767",
                "Dominican Republic +809",
                "Djibouti +253",
                "Ecuador +593",
                "Egypt +20",
                "El Salvador +503",
                "Equatorial Guinea +240",
                "Eritrea +291",
                "Estonia +372",
                "Ethiopia +251",
                "Falkland Islands +500",
                "Faroe (Faeroe) Islands (Denmark) +298",
                "Fiji +679",
                "Finland +358",
                "France +33",
                "French Antilles +596",
                "French Guiana +594",
                "Gabon (Gabonese Republic) +241",
                "Gambia +220",
                "Georgia +995",
                "Germany +49",
                "Ghana +233",
                "Gibraltar +350",
                "Greece +30",
                "Greenland +299",
                "Grenada/Carricou +473",
                "Guam +671",
                "Guatemala +502",
                "Guinea +224",
                "Guinea-Bissau +245",
                "Guyana +592",
                "Haiti +509",
                "Honduras +504",
                "Hong Kong +852",
                "Hungary +36",
                "Iceland +354",
                "India +91",
                "Indonesia +62",
                "Iran +98",
                "Iraq +964",
                "Ireland (Irish Republic; Eire) +353",
                "Israel +972",
                "Italy +39",
                "Ivory Coast (La Cote d'Ivoire) +225",
                "Jamaica +876",
                "Japan +81",
                "Jordan +962",
                "Kazakhstan +7",
                "Kenya +254",
                "Kiribati Republic (Gilbert Islands) +686",
                "Korea, Republic of (South Korea) +82",
                "Korea, People's Republic of (North Korea) +850",
                "Kuwait +965",
                "Kyrgyz Republic +996",
                "Latvia +371",
                "Laos +856",
                "Lebanon +961",
                "Lesotho +266",
                "Liberia +231",
                "Lithuania +370",
                "Libya +218",
                "Liechtenstein +423",
                "Luxembourg +352",
                "Macao +853",
                "Macedonia +389",
                "Madagascar +261",
                "Malawi +265",
                "Malaysia +60",
                "Maldives +960",
                "Mali +223",
                "Malta +356",
                "Marshall Islands +692",
                "Martinique (French Antilles) +596",
                "Mauritania +222",
                "Mauritius +230",
                "Mayolte +269",
                "Mexico +52",
                "Micronesia (F.S. of Polynesia) +691",
                "Moldova +373",
                "Monaco +33",
                "Mongolia +976",
                "Montserrat +473",
                "Morocco +212",
                "Mozambique +258",
                "Myanmar (former Burma) +95",
                "Namibia (former South-West Africa) +264",
                "Nauru +674",
                "Nepal +977",
                "Netherlands +31",
                "Netherlands Antilles +599",
                "Nevis +869",
                "New Caledonia +687",
                "New Zealand +64",
                "Nicaragua +505",
                "Niger +227",
                "Nigeria +234",
                "Niue +683",
                "North Korea +850",
                "North Mariana Islands (Saipan) +1670",
                "Norway +47",
                "Oman +968",
                "Pakistan +92",
                "Palau +680",
                "Panama +507",
                "Papua New Guinea +675",
                "Paraguay +595",
                "Peru +51",
                "Philippines +63",
                "Poland +48",
                "Portugal (includes Azores) +351",
                "Puerto Rico +1787",
                "Qatar +974",
                "Reunion +262 (France)",
                "Romania +40",
                "Russia +7",
                "Rwanda (Rwandese Republic) +250",
                "San Marino +378",
                "Sao Tome and Principe +239",
                "Saudi Arabia +966",
                "Senegal +221",
                "Serbia and Montenegro +381",
                "Seychelles +248",
                "Sierra Leone +232",
                "Singapore +65",
                "Slovakia +421",
                "Slovenia +386",
                "Solomon Islands +677",
                "Somalia +252",
                "South Africa +27",
                "Spain +34",
                "Sri Lanka +94",
                "St. Helena +290",
                "St. Kitts/Nevis +869",
                "St. Pierre (et) Miquelon (France) +508",
                "Sudan +249",
                "Suriname +597",
                "Swaziland +268",
                "Sweden +46",
                "Switzerland +41",
                "Syrian Arab Republic (Syria) +963",
                "Tahiti (French Polynesia) +689",
                "Taiwan +886",
                "Tajikistan +7",
                "Tanzania (includes Zanzibar) +255",
                "Thailand +66",
                "Togo (Togolese Republic) +228",
                "Tokelau +690",
                "Tonga +676",
                "Trinidad and Tobago +1868",
                "Tunisia +216",
                "Turkey +90",
                "Turkmenistan +993",
                "Tuvalu (Ellice Islands) +688",
                "Uganda +256",
                "Ukraine +380",
                "United Arab Emirates +971",
                "United Kingdom +44",
                "Uruguay +598",
                "USA +1",
                "Uzbekistan +7",
                "Vanuatu (New Hebrides) +678",
                "Vatican City +39",
                "Venezuela +58",
                "Viet Nam +84",
                "Virgin Islands +1340",
                "Wallis and Futuna +681",
                "Western Samoa +685",
                "Yemen (People's Democratic Republic of) +381",
                "Yemen Arab Republic (North Yemen) +967",
                "Zambia +260",
                "Zimbabwe +263",
              ]}
              onValueChange={(value) => {
                const found = book.find(
                  (country) => Object.keys(country)[0] === value
                );
                setCountryCode(Object.values(found));
              }}
            />
          </View>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  yourNumber: {
    color: "black",
    marginLeft: "10%",
    fontSize: 29,
    fontWeight: "500",
  },

  authContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "10%",
    marginVertical: 10,
  },
});

export default SignupScreen1;
