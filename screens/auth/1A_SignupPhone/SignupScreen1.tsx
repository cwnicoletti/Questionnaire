import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Keyboard,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Feather, Entypo, FontAwesome} from '@expo/vector-icons';

import {Ionicons} from '@expo/vector-icons';
import VerifyCodeInput from '../../../components/VerifyCodeInput';
import {Picker} from '@react-native-picker/picker';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === 'FORM_INPUT_UPDATE') {
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
  const [isPickingContryCode, setIsPickingCountryCode] = useState(false);
  const [countryCode, setCountryCode] = useState('US +1');
  const [enabledAvoidView, setEnabledAvoidView] = useState(true);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      numbers: '',
    },
    inputValidities: {
      numbers: false,
    },
    formIsValid: false,
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  const phoneNumberInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', async () => {
      setEnabledAvoidView(true);
    });

    return unsubscribe;
  }, [props.navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={enabledAvoidView}
      keyboardVerticalOffset={20}
      style={styles.screen}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} animated={true} />
        <View style={{flex: 1}}>
          <TouchableCmp
            onPress={() => {
              props.navigation.goBack('');
            }}>
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color="black"
              style={{margin: 20}}
            />
          </TouchableCmp>
          <View style={{flex: 1, marginTop: 80}}>
            <Text style={styles.yourNumber}>Your phone number is</Text>
            <View style={styles.authContainer}>
              <View style={{flex: 1}}>
                <TouchableCmp
                  onPress={() => {
                    setIsPickingCountryCode(true);
                    Keyboard.dismiss();
                  }}>
                  <View
                    style={{
                      height: 63,
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      borderBottomWidth: 1,
                      borderColor: 'black',
                    }}>
                    <Text adjustsFontSizeToFit style={{fontSize: 20}}>
                      {countryCode}
                    </Text>
                    <Entypo name="chevron-small-down" size={24} color="black" />
                  </View>
                </TouchableCmp>
              </View>
              <View style={{flex: 2}}>
                <VerifyCodeInput
                  id="numbers"
                  keyboardType="number-pad"
                  textContentType={'telephoneNumber'}
                  autoFocus={true}
                  inputRef={phoneNumberInputRef}
                  placeholder={'Phone number'}
                  placeholderTextColor={'grey'}
                  onKeyPress={({nativeEvent: {key: keyValue}}) => {
                    if (keyValue.length > 1 && keyValue !== 'Backspace') {
                      setEnabledAvoidView(false);
                      props.navigation.navigate('SignupPhoneScreen2');
                    }
                  }}
                  onSubmitEditing={() => {
                    setEnabledAvoidView(false);
                    props.navigation.navigate('SignupPhoneScreen2');
                  }}
                  onFocus={() => setIsPickingCountryCode(false)}
                  onInputChange={inputChangeHandler}
                  initialValue=""
                  styleInput={{
                    fontSize: 28,
                    fontWeight: '300',
                    backgroundColor: '#ffffff',
                  }}
                />
              </View>
            </View>
            <View style={{marginHorizontal: '5%', marginVertical: 20}}>
              <Text style={{color: 'grey', textAlign: 'center'}}>
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
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <TouchableCmp
              onPress={() => {
                setEnabledAvoidView(false);
                props.navigation.navigate('SignupPhoneScreen2');
              }}
              disabled={formState.formIsValid === false}>
              <View
                style={{
                  borderColor: '#A1A1A1',
                  borderWidth: 1,
                  marginRight: 20,
                  height: 70,
                  width: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  borderRadius: 35,
                  backgroundColor: '#ffffff',
                  shadowOffset: {
                    width: -2,
                    height: 2,
                  },
                  shadowColor: 'black',
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                }}>
                <Feather name="arrow-right" size={28} color={'#616161'} />
              </View>
            </TouchableCmp>
          </View>
        ) : (
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}} />
              <View
                style={{
                  flex: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '500',
                  }}>
                  Select Country Code
                </Text>
                <FontAwesome
                  name="level-down"
                  size={16}
                  color="black"
                  style={{marginHorizontal: 5}}
                />
              </View>
              <View style={{flex: 1}}>
                <TouchableCmp
                  onPress={() => {
                    phoneNumberInputRef.current.focus();
                    setIsPickingCountryCode(false);
                  }}>
                  <Text
                    style={{
                      color: '#45BDF5',
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: '300',
                    }}>
                    done
                  </Text>
                </TouchableCmp>
              </View>
            </View>
            <Picker
              style={{
                backgroundColor: 'rgba(0,0,0,0)',
              }}
              selectedValue={countryCode}
              onValueChange={(value) => {
                setCountryCode(value);
              }}>
              <Picker.Item label="Afghanistan +93" value="AF +93" />
              <Picker.Item label="Albania +355" value="AL +355" />
              <Picker.Item label="Algeria +213" value="DZ +213" />
              <Picker.Item label="American Samoa +684" value="AS +684" />
              <Picker.Item label="Andorra +376" value="AD +376" />
              <Picker.Item label="Angola +244" value="AO +244" />
              <Picker.Item label="Anguilla +809" value="AI +809" />
              <Picker.Item label="Antigua +268" value="AG +268" />
              <Picker.Item label="Argentina +54" value="AR +54" />
              <Picker.Item label="Armenia +374" value="AM +374" />
              <Picker.Item label="Aruba +297" value="AW +297" />
              <Picker.Item label="Ascension Island +247" value="AC +247" />
              <Picker.Item label="Australia +61" value="AU +61" />
              <Picker.Item
                label="Australian External Territories +672"
                value="AU +672"
              />
              <Picker.Item label="Austria +43" value="AT +43" />
              <Picker.Item label="Azerbaijan +994" value="AZ +994" />
              <Picker.Item label="Bahamas +242" value="BS +242" />
              <Picker.Item label="Barbados +246" value="BB +246" />
              <Picker.Item label="Bahrain +973" value="BH +973" />
              <Picker.Item label="Bangladesh +880" value="BD +880" />
              <Picker.Item label="Belarus +375" value="BY +375" />
              <Picker.Item label="Belgium +32" value="BE +32" />
              <Picker.Item label="Belize +501" value="BZ +501" />
              <Picker.Item label="Benin +229" value="BJ +229" />
              <Picker.Item label="Bermuda +809" value="BM +809" />
              <Picker.Item label="Bhutan +975" value="BT +975" />
              <Picker.Item
                label="British Virgin Islands +284"
                value="VG +284"
              />
              <Picker.Item label="Bolivia +591" value="BO +591" />
              <Picker.Item
                label="Bosnia and Hercegovina +387"
                value="BA +387"
              />
              <Picker.Item label="Botswana +267" value="BW +267" />
              <Picker.Item label="Brazil +55" value="BR +55" />
              <Picker.Item label="Brunei Darussalm +673" value="BN +673" />
              <Picker.Item label="Bulgaria +359" value="BG +359" />
              <Picker.Item label="Burkina +226 Faso" value="BF +226" />
              <Picker.Item label="Burundi +257" value="BI +257" />
              <Picker.Item label="Cambodia +855" value="KH +855" />
              <Picker.Item label="Cameroon +237" value="CM +237" />
              <Picker.Item label="Canada +1" value="CA +1" />
              <Picker.Item label="Cape Verde Islands +238" value="CV +238" />
              <Picker.Item label="Caribbean Nations +599" value="BQ +599" />
              <Picker.Item label="Cayman Islands +345" value="KY +345" />
              <Picker.Item
                label="Central African Republic +236"
                value="CF +236"
              />
              <Picker.Item label="Chad +235" value="TD +235" />
              <Picker.Item label="Chile +56" value="CL +56" />
              <Picker.Item
                label="China (People's Republic) +86"
                value="CN +86"
              />
              <Picker.Item label="Taiwan +886" value="TW +886" />
              <Picker.Item label="Colombia +57" value="CO +57" />
              <Picker.Item label="Comoros and Mayotte +269" value="KM +269" />
              <Picker.Item label="Congo +242" value="CD +242" />
              <Picker.Item label="Cook Islands +682" value="CK +682" />
              <Picker.Item label="Costa Rica +506" value="CR +506" />
              <Picker.Item label="Croatia +385" value="HR +385" />
              <Picker.Item label="Cuba +53" value="CU +53" />
              <Picker.Item label="Cyprus +357" value="CY +357" />
              <Picker.Item label="Czech Republic +420" value="CZ +420" />
              <Picker.Item label="Denmark +45" value="DK +45" />
              <Picker.Item label="Diego Garcia +246" value="IO +246" />
              <Picker.Item label="Dominca +767" value="DM +767" />
              <Picker.Item label="Dominican Republic +809" value="DO +809" />
              <Picker.Item label="Djibouti +253" value="DJ +253" />
              <Picker.Item label="Ecuador +593" value="EC +593" />
              <Picker.Item label="Egypt +20" value="EG +20" />
              <Picker.Item label="El Salvador +503" value="SV +503" />
              <Picker.Item label="Equatorial Guinea +240" value="GQ +240" />
              <Picker.Item label="Eritrea +291" value="ER +291" />
              <Picker.Item label="Estonia +372" value="EE +372" />
              <Picker.Item label="Ethiopia +251" value="ET +251" />
              <Picker.Item label="Falkland Islands +500" value="FK +500" />
              <Picker.Item
                label="Faroe (Faeroe) Islands (Denmark) +298"
                value="FO +298"
              />
              <Picker.Item label="Fiji +679" value="FJ +679" />
              <Picker.Item label="Finland +358" value="FI +358" />
              <Picker.Item label="France +33" value="FR +33" />
              <Picker.Item label="French Antilles +596" value="TF +596" />
              <Picker.Item label="French Guiana +594" value="GF +594" />
              <Picker.Item
                label="Gabon (Gabonese Republic) +241"
                value="GA +241"
              />
              <Picker.Item label="Gambia +220" value="GM +220" />
              <Picker.Item label="Georgia +995" value="GE +995" />
              <Picker.Item label="Germany +49" value="DE +49" />
              <Picker.Item label="Ghana +233" value="GH +233" />
              <Picker.Item label="Gibraltar +350" value="GI +350" />
              <Picker.Item label="Greece +30" value="GR +30" />
              <Picker.Item label="Greenland +299" value="GL +299" />
              <Picker.Item label="Grenada/Carricou +473" value="GD +473" />
              <Picker.Item label="Guam +671" value="GU +671" />
              <Picker.Item label="Guatemala +502" value="GT +502" />
              <Picker.Item label="Guinea +224" value="GN +224" />
              <Picker.Item label="Guinea-Bissau +245" value="GW +245" />
              <Picker.Item label="Guyana +592" value="GY +592" />
              <Picker.Item label="Haiti +509" value="HT +509" />
              <Picker.Item label="Honduras +504" value="HN +504" />
              <Picker.Item label="Hong Kong +852" value="HK +852" />
              <Picker.Item label="Hungary +36" value="HU +36" />
              <Picker.Item label="Iceland +354" value="IS +354" />
              <Picker.Item label="India +91" value="IN +91" />
              <Picker.Item label="Indonesia +62" value="ID +62" />
              <Picker.Item label="Iran +98" value="IR +98" />
              <Picker.Item label="Iraq +964" value="IQ +964" />
              <Picker.Item
                label="Ireland (Irish Republic; Eire) +353"
                value="IE +353"
              />
              <Picker.Item label="Israel +972" value="IL +972" />
              <Picker.Item label="Italy +39" value="IT +39" />
              <Picker.Item
                label="Ivory Coast (La Cote d'Ivoire) +225"
                value="CI +225"
              />
              <Picker.Item label="Jamaica +876" value="JM +876" />
              <Picker.Item label="Japan +81" value="JP +81" />
              <Picker.Item label="Jordan +962" value="JO +962" />
              <Picker.Item label="Kazakhstan +7" value="KZ +7" />
              <Picker.Item label="Kenya +254" value="KE +254" />
              <Picker.Item
                label="Kiribati Republic (Gilbert Islands) +686"
                value="KI +686"
              />
              <Picker.Item
                label="Korea, Republic of (South Korea) +82"
                value="KR +82"
              />
              <Picker.Item
                label="Korea, People's Republic of (North Korea) +850"
                value="KP +850"
              />
              <Picker.Item label="Kuwait +965" value="KW +965" />
              <Picker.Item label="Kyrgyz Republic +996" value="KG +996" />
              <Picker.Item label="Latvia +371" value="LV +371" />
              <Picker.Item label="Laos +856" value="LA +856" />
              <Picker.Item label="Lebanon +961" value="LB +961" />
              <Picker.Item label="Lesotho +266" value="LS +266" />
              <Picker.Item label="Liberia +231" value="LR +231" />
              <Picker.Item label="Lithuania +370" value="LT +370" />
              <Picker.Item label="Libya +218" value="LY +218" />
              <Picker.Item label="Liechtenstein +423" value="LI +423" />
              <Picker.Item label="Luxembourg +352" value="LU +352" />
              <Picker.Item label="Macao +853" value="MO +853" />
              <Picker.Item label="Macedonia +389" value="MK +389" />
              <Picker.Item label="Madagascar +261" value="MG +261" />
              <Picker.Item label="Malawi +265" value="MW +265" />
              <Picker.Item label="Malaysia +60" value="MY +60" />
              <Picker.Item label="Maldives +960" value="MV +960" />
              <Picker.Item label="Mali +223" value="ML +223" />
              <Picker.Item label="Malta +356" value="MT +356" />
              <Picker.Item label="Marshall Islands +692" value="MH +692" />
              <Picker.Item
                label="Martinique (French Antilles) +596"
                value="MQ +596"
              />
              <Picker.Item label="Mauritania +222" value="MR +222" />
              <Picker.Item label="Mauritius +230" value="MU +230" />
              <Picker.Item label="Mayolte +269" value="YT +269" />
              <Picker.Item label="Mexico +52" value="MX +52" />
              <Picker.Item
                label="Micronesia (F.S. of Polynesia) +691"
                value="FM +691"
              />
              <Picker.Item label="Moldova +373" value="MD +373" />
              <Picker.Item label="Monaco +33" value="MC +33" />
              <Picker.Item label="Mongolia +976" value="MN +976" />
              <Picker.Item label="Montserrat +473" value="MS +473" />
              <Picker.Item label="Morocco +212" value="MA +212" />
              <Picker.Item label="Mozambique +258" value="MZ +258" />
              <Picker.Item label="Myanmar (former Burma) +95" value="MM +95" />
              <Picker.Item
                label="Namibia (former South-West Africa) +264"
                value="NA +264"
              />
              <Picker.Item label="Nauru +674" value="NR +674" />
              <Picker.Item label="Nepal +977" value="NP +977" />
              <Picker.Item label="Netherlands +31" value="NL +31" />
              <Picker.Item label="Netherlands Antilles +599" value="AN +599" />
              <Picker.Item label="Nevis +869" value="KN +869" />
              <Picker.Item label="New Caledonia +687" value="NC +687" />
              <Picker.Item label="New Zealand +64" value="NZ +64" />
              <Picker.Item label="Nicaragua +505" value="NI +505" />
              <Picker.Item label="Niger +227" value="NE +227" />
              <Picker.Item label="Nigeria +234" value="NG +234" />
              <Picker.Item label="Niue +683" value="NU +683" />
              <Picker.Item label="North Korea +850" value="KP +850" />
              <Picker.Item
                label="North Mariana Islands (Saipan) +1670"
                value="MP +1670"
              />
              <Picker.Item label="Norway +47" value="NO +47" />
              <Picker.Item label="Oman +968" value="OM +968" />
              <Picker.Item label="Pakistan +92" value="PK +92" />
              <Picker.Item label="Palau +680" value="PW +680" />
              <Picker.Item label="Panama +507" value="PA +507" />
              <Picker.Item label="Papua New Guinea +675" value="PG +675" />
              <Picker.Item label="Paraguay +595" value="PY +595" />
              <Picker.Item label="Peru +51" value="PE +51" />
              <Picker.Item label="Philippines +63" value="PH +63" />
              <Picker.Item label="Poland +48" value="PL +48" />
              <Picker.Item
                label="Portugal (includes Azores) +351"
                value="PT +351"
              />
              <Picker.Item label="Puerto Rico +1787" value="PR +1787" />
              <Picker.Item label="Qatar +974" value="QA +974" />
              <Picker.Item label="Reunion +262 (France)" value="RE +262" />
              <Picker.Item label="Romania +40" value="RO +40" />
              <Picker.Item label="Russia +7" value="RU +7" />
              <Picker.Item
                label="Rwanda (Rwandese Republic) +250"
                value="RW +250"
              />
              <Picker.Item label="San Marino +378" value="SM +378" />
              <Picker.Item label="Sao Tome and Principe +239" value="ST +239" />
              <Picker.Item label="Saudi Arabia +966" value="SA +966" />
              <Picker.Item label="Senegal +221" value="SN +221" />
              <Picker.Item label="Serbia and Montenegro +381" value="RS +381" />
              <Picker.Item label="Seychelles +248" value="SC +248" />
              <Picker.Item label="Sierra Leone +232" value="SL +232" />
              <Picker.Item label="Singapore +65" value="SG +65" />
              <Picker.Item label="Slovakia +421" value="SK +421" />
              <Picker.Item label="Slovenia +386" value="SI +386" />
              <Picker.Item label="Solomon Islands +677" value="SB +677" />
              <Picker.Item label="Somalia +252" value="SO +252" />
              <Picker.Item label="South Africa +27" value="ZA +27" />
              <Picker.Item label="Spain +34" value="ES +34" />
              <Picker.Item label="Sri Lanka +94" value="LK +94" />
              <Picker.Item label="St. Helena +290" value="SH +290" />
              <Picker.Item label="St. Kitts/Nevis +869" value="KN +869" />
              <Picker.Item
                label="St. Pierre (et) Miquelon (France) +508"
                value="PM +508"
              />
              <Picker.Item label="Sudan +249" value="SD +249" />
              <Picker.Item label="Suriname +597" value="SR +597" />
              <Picker.Item label="Swaziland +268" value="SZ +268" />
              <Picker.Item label="Sweden +46" value="SE +46" />
              <Picker.Item label="Switzerland +41" value="CH +41" />
              <Picker.Item
                label="Syrian Arab Republic (Syria) +963"
                value="SY +963"
              />
              <Picker.Item
                label="Tahiti (French Polynesia) +689"
                value="PF +689"
              />
              <Picker.Item label="Taiwan +886" value="TW +886" />
              <Picker.Item label="Tajikistan +7" value="TJ +7" />
              <Picker.Item
                label="Tanzania (includes Zanzibar) +255"
                value="TZ +255"
              />
              <Picker.Item label="Thailand +66" value="TH +66" />
              <Picker.Item
                label="Togo (Togolese Republic) +228"
                value="TG +228"
              />
              <Picker.Item label="Tokelau +690" value="TK +690" />
              <Picker.Item label="Tonga +676" value="TO +676" />
              <Picker.Item label="Trinidad and Tobago +1868" value="TT +1868" />
              <Picker.Item label="Tunisia +216" value="TN +216" />
              <Picker.Item label="Turkey +90" value="TR +90" />
              <Picker.Item label="Turkmenistan +993" value="TM +993" />
              <Picker.Item
                label="Tuvalu (Ellice Islands) +688"
                value="TV +688"
              />
              <Picker.Item label="Uganda +256" value="UG +256" />
              <Picker.Item label="Ukraine +380" value="UA +380" />
              <Picker.Item label="United Arab Emirates +971" value="AE +971" />
              <Picker.Item label="United Kingdom +44" value="GB +44" />
              <Picker.Item label="Uruguay +598" value="UY +598" />
              <Picker.Item label="United States of America +1" value="US +1" />
              <Picker.Item label="Uzbekistan +7" value="UZ +7" />
              <Picker.Item
                label="Vanuatu (New Hebrides) +678"
                value="VU +678"
              />
              <Picker.Item label="Vatican City +39" value="VA +39" />
              <Picker.Item label="Venezuela +58" value="VE +58" />
              <Picker.Item label="Viet Nam +84" value="VN +84" />
              <Picker.Item label="Virgin Islands +1340" value="VG +1" />
              <Picker.Item label="Wallis and Futuna +681" value="WF +681" />
              <Picker.Item label="Western Samoa +685" value="WS +685" />
              <Picker.Item
                label="Yemen (People's Democratic Republic of) +381"
                value="YE +381"
              />
              <Picker.Item
                label="Yemen Arab Republic (North Yemen) +967"
                value="YE +967"
              />
              <Picker.Item label="Zambia +260" value="ZM +260" />
              <Picker.Item label="Zimbabwe +263" value="ZW +263" />
            </Picker>
          </View>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  yourNumber: {
    color: 'black',
    marginLeft: '10%',
    fontSize: 29,
    fontWeight: '500',
  },

  authContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '10%',
    marginVertical: 10,
  },
});

export default SignupScreen1;
