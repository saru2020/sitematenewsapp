/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import type {PropsWithChildren} from 'react';
 import {
   StyleSheet,
   useColorScheme,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 import {  NewsList } from "./src/components/NewsList";
 import { NewsDetail } from "./src/components/NewsDetail";
 import { NavigationContainer } from "@react-navigation/native";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 
 const Stack = createNativeStackNavigator()
 
 type SectionProps = PropsWithChildren<{
   title: string;
 }>;
 
 function Section({children, title}: SectionProps): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <NavigationContainer>
       <NewsList />
     </NavigationContainer>
     
   );
 }
 
 function App(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <NavigationContainer>
       <Stack.Navigator 
         screenOptions={{
           headerShown: true
         }}>
         <Stack.Screen
           name="NewsList"
           component={NewsList}
           options={{title: 'NewsList', headerShown: true}}
         />
         <Stack.Screen
           name="NewsDetail"
           component={NewsDetail}
           options={{title: 'NewsDetail', headerShown: true}}
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
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
 