import React, {useEffect, useState } from 'react';

import { View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar, SafeAreaView, ScrollView} from 'react-native';
  import { useColorScheme } from 'react-native-appearance';
import AppStyleHousin from '../../../../../AppStyleHousin';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonContinue from '../../../../components/Button';
import Slider from '@react-native-community/slider';
import style from './style';
import api from '../../../../services/api';
import Spinner from 'react-native-loading-spinner-overlay';
import LoadingComponent from '../../../../components/LoadingComponent';

const FourthPage = ({navigation, route}) =>{
    const colorScheme = useColorScheme();
    const styles = style(colorScheme);

    let imageLocal = require('../../../../assets/images/home-colorful.jpg');
    const [organized, setOrganized] = useState(0.5);
    const [smoke, setSmoke] = useState(0.5);
    const [drink, setDrink] = useState(0.5);
    const [responsable, setResponsable] = useState(0.5);
    const [animals, setAnimals] = useState(0.5);

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    const [loading, setLoading] = useState(false);

    const [changedValue1, setChangedValue1] = useState(false);
    const [changedValue2, setChangedValue2] = useState(false);
    const [changedValue3, setChangedValue3] = useState(false);
    const [changedValue4, setChangedValue4] = useState(false);
    const [changedValue5, setChangedValue5] = useState(false);

    useEffect(()=> {
      if(route.params){
        setTitle(route.params.title);
        setAddress(route.params.address);
        setDescription(route.params.description);
      }
    },[route.params])

    const createProperty = async () => {
      try{
        setLoading(true);
        const response = await api.post('/properties',{
          title: title,
          address: address,
          description:description,
          qualities:{
            organized,
            smoke,
            drink,
            responsable,
            animals
          }
        })
        if(response){
          setLoading(false);
          navigation.replace('TabNavigator');
        }
      }catch(err){
        console.warn(err);
      }
  };
    return (
      <SafeAreaView style={{flex:1}}>
        <LoadingComponent visible={loading} textTitle={'Criando...'} descriptionLoading={'Criamos seu anúncio'} />
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
              <Text style={[styles.h1TextGray,{alignSelf:'flex-start', paddingHorizontal:'5%', paddingRight:'25%', textAlign:'left'}]}>Como é a pessoa que você procura??</Text>
              <View style={styles.contentContainer}>
                <ScrollView>
                  <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.9, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subTitleThemeText}>Limpo e organizado?</Text>
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

                    <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.9, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subTitleThemeText}>Fumante?</Text>
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

                    <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.9, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subTitleThemeText}>Que beba?</Text>
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

                    <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.9, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subTitleThemeText}>Responsável com contas?</Text>
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

                    <View style={{width:AppStyleHousin.WINDOW_WIDTH*0.9, height:100, backgroundColor:'#E6E6F2', borderRadius:15, margin:'1%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'40%', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={styles.subTitleThemeText}>Que tenha animais de estimação?</Text>
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
                    <View style={{width:'100%', alignItems:'center', marginBottom:'10%', marginTop:'5%'}}>
                      <ButtonContinue text={'Próximo'} onPress={()=>createProperty()}/>
                    </View>
                </ScrollView>
              </View>
          </View>
          {/* /WhiteView 67% */}
          <TouchableOpacity style={styles.goBackAbsoluteContainer} onPress={()=>navigation.goBack()}>
            <View style={styles.iconContainer}>
            <MaterialIcons
                          name={'arrow-back-ios'}
                          color={
                            AppStyleHousin.colorSet[colorScheme]
                              .textDarkGray
                          }
                          size={AppStyleHousin.WINDOW_HEIGHT * 0.02}
                        />
            </View>
          </TouchableOpacity>
      </SafeAreaView>
    );
}
export default FourthPage;
