/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import useAuth from './hooks/useAuth';
import {createDrawerNavigator} from '@react-navigation/drawer';
import History from './pages/History';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Chatbot from './pages/Chatbot';
import CustomDrawer from './components/CustomDrawer';
import Settings from './pages/Settings';
import About from './pages/About';
import Svg, {Path} from 'react-native-svg';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const {user} = useAuth();

  if (user) {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{headerShown: false}}
            initialRouteName="Chatbot">
            <Drawer.Screen
              name="Profile"
              component={Profile}
              options={{
                drawerIcon: () => (
                  <Svg width={40} height={40} viewBox="0 0 24 24">
                    <Path
                      d="M18.3333 17.0481C18.3333 17.7052 18.1524 18.2688 17.7907 18.739C17.4291 19.2092 16.9936 19.4443 16.4843 19.4443H9.07113C8.56187 19.4443 8.12639 19.2092 7.7647 18.739C7.40301 18.2688 7.22217 17.7052 7.22217 17.0481C7.22217 16.5357 7.24676 16.052 7.29595 15.5968C7.34514 15.1417 7.43629 14.6836 7.56939 14.2224C7.70249 13.7613 7.87176 13.3664 8.0772 13.0379C8.28264 12.7093 8.55463 12.4411 8.89317 12.2331C9.23172 12.0251 9.62089 11.9212 10.0607 11.9212C10.8188 12.6928 11.7245 13.0786 12.7777 13.0786C13.831 13.0786 14.7366 12.6928 15.4947 11.9212C15.9346 11.9212 16.3237 12.0251 16.6623 12.2331C17.0008 12.4411 17.2728 12.7093 17.4782 13.0379C17.6837 13.3664 17.853 13.7613 17.9861 14.2224C18.1192 14.6836 18.2103 15.1417 18.2595 15.5968C18.3087 16.052 18.3333 16.5357 18.3333 17.0481ZM16.1111 9.02764C16.1111 9.98612 15.7855 10.8044 15.1345 11.4826C14.4835 12.1608 13.6979 12.4999 12.7777 12.4999C11.8576 12.4999 11.072 12.1608 10.421 11.4826C9.76991 10.8044 9.44439 9.98612 9.44439 9.02764C9.44439 8.06916 9.76991 7.25084 10.421 6.57267C11.072 5.8945 11.8576 5.55542 12.7777 5.55542C13.6979 5.55542 14.4835 5.8945 15.1345 6.57267C15.7855 7.25084 16.1111 8.06916 16.1111 9.02764Z"
                      fill="black"
                    />
                  </Svg>
                ),
              }}
            />
            <Drawer.Screen
              name="Chatbot"
              component={Chatbot}
              options={{
                drawerIcon: () => (
                  <Svg width={40} height={40} viewBox="0 0 24 24">
                    <Path
                      d="M21.4267 19.8702L20.8433 19.2769L20.5017 19.6102L20.6183 20.0719L21.4267 19.8719V19.8702ZM22.5 24.167L22.2983 24.9753C22.4378 25.01 22.584 25.0081 22.7225 24.9697C22.861 24.9312 22.9873 24.8576 23.0889 24.7559C23.1906 24.6543 23.2642 24.528 23.3027 24.3895C23.3411 24.2509 23.3431 24.1048 23.3083 23.9653L22.5 24.1653V24.167ZM15.8333 22.5003L15.2433 21.9103L14.2033 22.9519L15.6317 23.3086L15.8333 22.5003ZM15.875 22.4586L16.4633 23.0486C16.5849 22.9275 16.6662 22.7717 16.6959 22.6027C16.7257 22.4336 16.7025 22.2595 16.6295 22.1041C16.5566 21.9487 16.4374 21.8196 16.2883 21.7345C16.1393 21.6494 15.9676 21.6124 15.7967 21.6286L15.875 22.4586ZM11.6667 0V4.16672H13.3333V0H11.6667ZM15 3.33337H10V5.00006H15V3.33337ZM25 13.3335C25 10.6813 23.9464 8.13773 22.0711 6.26234C20.1957 4.38696 17.6522 3.33337 15 3.33337V5.00006C16.0943 5.00006 17.178 5.21561 18.189 5.63441C19.2001 6.0532 20.1187 6.66704 20.8925 7.44087C21.6664 8.2147 22.2802 9.13337 22.699 10.1444C23.1178 11.1555 23.3333 12.2391 23.3333 13.3335H25ZM22.01 20.4653C22.9583 19.5353 23.7113 18.4252 24.2248 17.2003C24.7382 15.9753 25.0018 14.6617 25 13.3335H23.3333C23.3352 14.4405 23.1157 15.535 22.6878 16.556C22.2599 17.5769 21.6339 18.502 20.8433 19.2769L22.01 20.4653ZM23.31 23.9653L22.2333 19.6669L20.6167 20.0702L21.69 24.367L23.3067 23.9636L23.31 23.9653ZM15.6317 23.3086L22.2983 24.9753L22.7017 23.3586L16.035 21.6919L15.6317 23.3086ZM15.285 21.8703L15.2433 21.9103L16.4233 23.0886L16.4633 23.0486L15.285 21.8703ZM15 23.3336C15.3217 23.3336 15.64 23.317 15.9533 23.2886L15.7967 21.6286C15.5319 21.6539 15.266 21.6667 15 21.6669V23.3336ZM10 23.3336H15V21.6669H10V23.3336ZM0 13.3335C0 15.9857 1.05357 18.5293 2.92893 20.4047C4.80429 22.28 7.34783 23.3336 10 23.3336V21.6669C8.90565 21.6669 7.82201 21.4514 6.81097 21.0326C5.79992 20.6138 4.88126 20 4.10744 19.2261C2.54464 17.6633 1.66667 15.5437 1.66667 13.3335H0ZM10 3.33337C7.34783 3.33337 4.80429 4.38696 2.92893 6.26234C1.05357 8.13773 0 10.6813 0 13.3335H1.66667C1.66667 11.1233 2.54464 9.00369 4.10744 7.44087C5.67024 5.87805 7.78986 5.00006 10 5.00006V3.33337ZM12.5 13.3335C11.837 13.3335 11.2011 13.0701 10.7322 12.6013C10.2634 12.1324 10 11.4965 10 10.8335H8.33333C8.33333 11.9385 8.77232 12.9984 9.55372 13.7798C10.3351 14.5612 11.3949 15.0002 12.5 15.0002V13.3335ZM15 10.8335C15 11.4965 14.7366 12.1324 14.2678 12.6013C13.7989 13.0701 13.163 13.3335 12.5 13.3335V15.0002C13.6051 15.0002 14.6649 14.5612 15.4463 13.7798C16.2277 12.9984 16.6667 11.9385 16.6667 10.8335H15ZM12.5 8.33344C13.163 8.33344 13.7989 8.59683 14.2678 9.06568C14.7366 9.53452 15 10.1704 15 10.8335H16.6667C16.6667 9.72838 16.2277 8.66856 15.4463 7.88715C14.6649 7.10574 13.6051 6.66675 12.5 6.66675V8.33344ZM12.5 6.66675C11.3949 6.66675 10.3351 7.10574 9.55372 7.88715C8.77232 8.66856 8.33333 9.72838 8.33333 10.8335H10C10 10.1704 10.2634 9.53452 10.7322 9.06568C11.2011 8.59683 11.837 8.33344 12.5 8.33344V6.66675ZM12.5 20.0002C14.2733 20.0002 15.9033 19.3836 17.1883 18.3552L16.145 17.0552C15.145 17.8552 13.88 18.3336 12.5 18.3336V20.0002ZM7.81166 18.3552C9.095 19.3836 10.7283 20.0002 12.5 20.0002V18.3336C11.1747 18.336 9.88845 17.8849 8.855 17.0552L7.81166 18.3552Z"
                      fill="black"
                    />
                  </Svg>
                ),
              }}
            />

            <Drawer.Screen
              name="History"
              component={History}
              options={{
                drawerIcon: () => (
                  <Svg width={40} height={40} viewBox="0 0 24 24">
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.62714 3.61417C8.49244 -1.24486 16.4025 -1.19358 21.2973 3.70263C26.1947 8.60013 26.246 16.5143 21.3794 21.3798C16.5141 26.2452 8.60013 26.1952 3.70278 21.2977C2.32524 19.9258 1.28442 18.2533 0.662037 16.4114C0.0396495 14.5696 -0.147367 12.6085 0.115669 10.6822C0.15018 10.4294 0.283703 10.2006 0.486864 10.0463C0.690024 9.89193 0.946181 9.8246 1.19898 9.85911C1.45178 9.89363 1.68052 10.0272 1.83487 10.2303C1.98923 10.4335 2.05656 10.6897 2.02204 10.9425C1.79877 12.5749 1.95706 14.2369 2.48448 15.7979C3.0119 17.3589 3.89409 18.7763 5.06173 19.9387C9.22191 24.0977 15.9179 24.1221 20.0204 20.0208C24.1216 15.9182 24.0973 9.22193 19.9384 5.06162C15.7808 0.905166 9.08858 0.878243 4.98609 4.97444L5.94505 4.97829C6.07132 4.97888 6.19623 5.00433 6.31267 5.0532C6.4291 5.10207 6.53476 5.17339 6.62363 5.26309C6.7125 5.3528 6.78283 5.45913 6.83061 5.57602C6.87839 5.6929 6.90267 5.81805 6.90208 5.94433C6.90149 6.0706 6.87604 6.19552 6.82717 6.31195C6.77831 6.42839 6.70699 6.53406 6.61729 6.62293C6.52758 6.7118 6.42126 6.78213 6.30437 6.82991C6.18749 6.87769 6.06234 6.90198 5.93607 6.90139L2.67203 6.886C2.41858 6.88465 2.1759 6.78328 1.9968 6.60393C1.8177 6.42458 1.71665 6.18177 1.71564 5.9283L1.69897 2.66672C1.6983 2.54045 1.7225 2.41528 1.7702 2.29837C1.8179 2.18145 1.88816 2.07507 1.97697 1.9853C2.06578 1.89554 2.1714 1.82415 2.2878 1.7752C2.4042 1.72626 2.5291 1.70072 2.65537 1.70005C2.78163 1.69937 2.9068 1.72358 3.02371 1.77128C3.14063 1.81898 3.247 1.88924 3.33677 1.97805C3.42653 2.06686 3.49792 2.17249 3.54686 2.28889C3.5958 2.40529 3.62134 2.5302 3.62201 2.65647L3.62714 3.61545V3.61417ZM12.4988 6.40908C12.7538 6.40908 12.9984 6.51038 13.1787 6.69071C13.359 6.87103 13.4603 7.11561 13.4603 7.37062V12.1014L16.3846 15.0246C16.4765 15.1132 16.5498 15.2193 16.6002 15.3366C16.6507 15.4539 16.6773 15.58 16.6784 15.7077C16.6796 15.8354 16.6553 15.962 16.607 16.0802C16.5587 16.1984 16.4874 16.3058 16.3972 16.3961C16.3069 16.4864 16.1996 16.5579 16.0815 16.6063C15.9633 16.6547 15.8367 16.6791 15.709 16.678C15.5814 16.677 15.4552 16.6505 15.3379 16.6002C15.2205 16.5498 15.1144 16.4766 15.0257 16.3848L11.5385 12.8976V7.37191C11.5385 7.11689 11.6398 6.87231 11.8202 6.69199C12.0005 6.51166 12.245 6.41036 12.5001 6.41036L12.4988 6.40908Z"
                      fill="black"
                    />
                  </Svg>
                ),
              }}
            />
            <Drawer.Screen
              name="Settings"
              component={Settings}
              options={{
                drawerIcon: () => (
                  <Svg width={40} height={40} viewBox="0 0 24 24">
                    <Path
                      d="M9.63542 22.9166L9.21875 19.5833C8.99306 19.4964 8.78021 19.3923 8.58021 19.2708C8.38021 19.1492 8.18507 19.019 7.99479 18.8801L4.89583 20.1822L2.03125 15.2343L4.71354 13.203C4.69618 13.0815 4.6875 12.9642 4.6875 12.851V12.1489C4.6875 12.0357 4.69618 11.9183 4.71354 11.7968L2.03125 9.76554L4.89583 4.81763L7.99479 6.11971C8.18576 5.98082 8.38542 5.85061 8.59375 5.72909C8.80208 5.60756 9.01042 5.50339 9.21875 5.41659L9.63542 2.08325H15.3646L15.7812 5.41659C16.0069 5.50339 16.2198 5.60756 16.4198 5.72909C16.6198 5.85061 16.8149 5.98082 17.0052 6.11971L20.1042 4.81763L22.9687 9.76554L20.2865 11.7968C20.3038 11.9183 20.3125 12.0357 20.3125 12.1489V12.851C20.3125 12.9642 20.2951 13.0815 20.2604 13.203L22.9427 15.2343L20.0781 20.1822L17.0052 18.8801C16.8142 19.019 16.6146 19.1492 16.4062 19.2708C16.1979 19.3923 15.9896 19.4964 15.7812 19.5833L15.3646 22.9166H9.63542ZM12.5521 16.1458C13.559 16.1458 14.4184 15.7899 15.1302 15.078C15.842 14.3662 16.1979 13.5069 16.1979 12.4999C16.1979 11.493 15.842 10.6336 15.1302 9.92179C14.4184 9.20999 13.559 8.85409 12.5521 8.85409C11.5278 8.85409 10.6639 9.20999 9.96042 9.92179C9.25694 10.6336 8.90556 11.493 8.90625 12.4999C8.90625 13.5069 9.25764 14.3662 9.96042 15.078C10.6632 15.7899 11.5271 16.1458 12.5521 16.1458Z"
                      fill="black"
                    />
                  </Svg>
                ),
              }}
            />
            <Drawer.Screen
              name="About"
              component={About}
              options={{
                drawerIcon: () => (
                  <Svg width={40} height={40} viewBox="0 0 24 24">
                    <Path
                      d="M11.25 8.75H13.75V6.25H11.25M12.5 22.5C6.9875 22.5 2.5 18.0125 2.5 12.5C2.5 6.9875 6.9875 2.5 12.5 2.5C18.0125 2.5 22.5 6.9875 22.5 12.5C22.5 18.0125 18.0125 22.5 12.5 22.5ZM12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0ZM11.25 18.75H13.75V11.25H11.25V18.75Z"
                      fill="black"
                    />
                  </Svg>
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signin" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
