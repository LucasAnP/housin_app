import React, {useEffect, useState } from 'react';

import { View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar, SafeAreaView, ScrollView, BackHandler} from 'react-native';
  import { useColorScheme } from 'react-native-appearance';
import AppStyleHousin from '../../../../AppStyleHousin';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonContinue from '../../../components/Button';
import Slider from '@react-native-community/slider';
import style from './style';
import api from '../../../services/api';
import Spinner from 'react-native-loading-spinner-overlay';

const SignUpQualities = ({navigation, route}) =>{
    const colorScheme = useColorScheme();
    const styles = style(colorScheme);

    let imageLocal = require('../../../assets/images/house-example.png');
    const [organized, setOrganized] = useState(0.5);
    const [smoke, setSmoke] = useState(0.5);
    const [drink, setDrink] = useState(0.5);
    const [responsable, setResponsable] = useState(0.5);
    const [animals, setAnimals] = useState(0.5);

    const [loading, setLoading] = useState(false);

    const [changedValue1, setChangedValue1] = useState(false);
    const [changedValue2, setChangedValue2] = useState(false);
    const [changedValue3, setChangedValue3] = useState(false);
    const [changedValue4, setChangedValue4] = useState(false);
    const [changedValue5, setChangedValue5] = useState(false);

    const [ userId, setUserId] = useState();
    const [buttonEnabled, setButtonEnabled] = useState(false);

    useEffect(()=> {
      if(route.params.userInfo){
        setUserId(route.params.userInfo.data.id)
      }
    },[route.params])

    useEffect(()=> {
    if(changedValue1 && changedValue2 &&changedValue3&&changedValue4&&changedValue5 ){
        setButtonEnabled(true);
      }
    },[changedValue1, changedValue2, changedValue3, changedValue4, changedValue5]);

    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', () => true);
    }, []);

    const insertUserQualities = async () => {
      try{
        setLoading(true);
        const response = await api.post(`/users/${userId}/qualities`,{
          organized,
          smoke,
          drink,
          responsable,
          animals
        })
        if(response){
          setLoading(false);
          navigation.replace('SignIn');
        }
      }catch(err){
        console.warn(err);
      }
  };
    return (
      <SafeAreaView style={{flex:1}}>
              <Spinner
        visible={loading}
        textContent={'Loading...'}
        color={AppStyleHousin.colorSet[colorScheme].cardBackgroundColor}
        textStyle={styles.textSubtitleGray}
      />
          <StatusBar translucent={true} backgroundColor={'rgba(0, 0, 0, .2)'} />
          <View
            style={{
              height: '20%',
              width: AppStyleHousin.WINDOW_WIDTH * 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ImageBackground
                    resizeMode='cover'
                    source={imageLocal}
                    style={styles.imageStyleFullRadius}
                  />
          </View>

          {/* WhiteView 67% */}
          <View
            style={{
              height: '90%',
              width: '100%',
              backgroundColor: AppStyleHousin.colorSet[colorScheme].secondThemeBackgroundColor,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              justifyContent: 'center',
              alignItems:'center',
              paddingVertical:'15%',
            }}>
              <Text style={[styles.h1TextGray,{alignSelf:'flex-start', paddingHorizontal:'5%', paddingRight:'25%', textAlign:'left'}]}>Você poderia nos falar um pouco mais sobre você?</Text>
              <View style={styles.contentContainer}>
                <ScrollView>
                  <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.97, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center', marginTop:'5%'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subtitleThemeText}>Limpo e organizado?</Text>
                        {changedValue1&&(
                          <MaterialIcons
                            name={'check-circle-outline'}
                            color={'#00ff00'}
                            size={AppStyleHousin.WINDOW_HEIGHT * 0.025}
                          />
                        )}
                      </View>
                      <View style={{width:'90%', flexDirection:'row', justifyContent:"space-between"}}>
                        <Text style={styles.subTextGray}>Não</Text>
                        <Text style={styles.subTextGray}>Tanto Faz</Text>
                        <Text style={styles.subTextGray}>Sim</Text>
                      </View>
                      <Slider
                          style={{width: '95%', height: 40}}
                          onValueChange={(value) => {
                            setOrganized(value);
                            setChangedValue1(true)
                          }}
                          minimumValue={0}
                          value={0.5}
                          step={0.5}
                          maximumValue={1}
                          animateTransitions={true}
                          animationType={'spring'}
                          minimumTrackTintColor="grey"
                          maximumTrackTintColor="grey"
                          thumbTintColor={AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground}
                        />
                    </View>

                    <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.97, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subtitleThemeText}>Fumante?</Text>
                        {changedValue2&&(
                          <MaterialIcons
                            name={'check-circle-outline'}
                            color={'#00ff00'}
                            size={AppStyleHousin.WINDOW_HEIGHT * 0.025}
                          />
                        )}
                      </View>
                      <View style={{width:'90%', flexDirection:'row', justifyContent:"space-between"}}>
                        <Text style={styles.subTextGray}>Não</Text>
                        <Text style={styles.subTextGray}>Tanto Faz</Text>
                        <Text style={styles.subTextGray}>Sim</Text>
                      </View>
                      <Slider
                          style={{width: '95%', height: 40}}
                          onValueChange={(value) => {
                            setSmoke(value);
                            setChangedValue2(true)
                          }}
                          minimumValue={0}
                          value={0.5}
                          step={0.5}
                          maximumValue={1}
                          animateTransitions={true}
                          animationType={'spring'}
                          minimumTrackTintColor="grey"
                          maximumTrackTintColor="grey"
                          thumbTintColor={AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground}
                        />
                    </View>

                    <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.97, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subtitleThemeText}>Bebe?</Text>
                        { changedValue3&&(
                          <MaterialIcons
                            name={'check-circle-outline'}
                            color={'#00ff00'}
                            size={AppStyleHousin.WINDOW_HEIGHT * 0.025}
                          />
                        )}
                      </View>
                      <View style={{width:'90%', flexDirection:'row', justifyContent:"space-between"}}>
                        <Text style={styles.subTextGray}>Não</Text>
                        <Text style={styles.subTextGray}>Tanto Faz</Text>
                        <Text style={styles.subTextGray}>Sim</Text>
                      </View>
                      <Slider
                          style={{width: '95%', height: 40}}
                          onValueChange={(value) => {
                            setDrink(value);
                            setChangedValue3(true)
                          }}
                          minimumValue={0}
                          value={0.5}
                          step={0.5}
                          maximumValue={1}
                          animateTransitions={true}
                          animationType={'spring'}
                          minimumTrackTintColor="grey"
                          maximumTrackTintColor="grey"
                          thumbTintColor={AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground}
                        />
                    </View>

                    <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.97, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subtitleThemeText}>Responsável com contas?</Text>
                        {changedValue4&&(
                          <MaterialIcons
                            name={'check-circle-outline'}
                            color={'#00ff00'}
                            size={AppStyleHousin.WINDOW_HEIGHT * 0.025}
                          />
                        )}
                      </View>
                      <View style={{width:'90%', flexDirection:'row', justifyContent:"space-between"}}>
                        <Text style={styles.subTextGray}>Não</Text>
                        <Text style={styles.subTextGray}>Tanto Faz</Text>
                        <Text style={styles.subTextGray}>Sim</Text>
                      </View>
                      <Slider
                          style={{width: '95%', height: 40}}
                          onValueChange={(value) => {
                            setResponsable(value);
                            setChangedValue4(true)
                          }}
                          minimumValue={0}
                          value={0.5}
                          step={0.5}
                          maximumValue={1}
                          animateTransitions={true}
                          animationType={'spring'}
                          minimumTrackTintColor="grey"
                          maximumTrackTintColor="grey"
                          thumbTintColor={AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground}
                        />
                    </View>

                    <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.97, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subtitleThemeText}>Tem animais de estimação?</Text>
                        {changedValue5&&(
                          <MaterialIcons
                            name={'check-circle-outline'}
                            color={'#00ff00'}
                            size={AppStyleHousin.WINDOW_HEIGHT * 0.025}
                          />
                        )}
                      </View>
                      <View style={{width:'90%', flexDirection:'row', justifyContent:"space-between"}}>
                        <Text style={styles.subTextGray}>Não</Text>
                        <Text style={styles.subTextGray}>Tanto Faz</Text>
                        <Text style={styles.subTextGray}>Sim</Text>
                      </View>
                      <Slider
                          style={{width: '95%', height: 40}}
                          onValueChange={(value) => {
                            setAnimals(value);
                            setChangedValue5(true)
                          }}
                          minimumValue={0}
                          value={0.5}
                          step={0.5}
                          maximumValue={1}
                          animateTransitions={true}
                          animationType={'spring'}
                          minimumTrackTintColor="grey"
                          maximumTrackTintColor="grey"
                          thumbTintColor={AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground}
                        />
                    </View>

                    <View style={{width:'100%', alignItems:'center', marginBottom:'20%', marginTop:'5%'}}>
                      <ButtonContinue text={'Próximo'} onPress={()=>insertUserQualities()}/>
                    </View>
                </ScrollView>
              </View>
          </View>
      </SafeAreaView>
    );
}
export default SignUpQualities;
