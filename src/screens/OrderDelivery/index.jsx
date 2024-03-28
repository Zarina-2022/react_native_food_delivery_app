import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

import {COLORS, FONTS, icons} from '../../constants';
import {orderStyles} from './style';

const OrderDelivery = ({route, navigation}) => {
  const [restaurant, setRestaurant] = useState(null);
  const [streetName, setStreetName] = useState('');
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let {restaurant, currentLocation} = route.params;

    let street = currentLocation.streetName;

    setRestaurant(restaurant);
    setStreetName(street);
  }, [route.params]);

  function renderMap() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{
          html: `
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin:0;padding:0;">
            <div id="map" style="height: 100%; margin-top: 100px;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79103.73113822304!2d5.2357779395891075!3d51.71489624483923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee37ad3edd37%3A0x400de5a8d1e7c50!2s&#39;s-Hertogenbosch!5e0!3m2!1str!2snl!4v1711576816384!5m2!1str!2snl" width="${
                  Dimensions.get('window').width
                }" height="${
            Dimensions.get('window').height * 0.6
          }" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </body>
          </html>
          `,
        }}
        style={{flex: 1, width: Dimensions.get('window').width}}
      />
    );
  }

  function renderDestinationHeader() {
    return (
      <View style={orderStyles.mapCont1}>
        <View style={orderStyles.mapSubCont1}>
          <Image source={icons.red_pin} style={orderStyles.pinIcon} />
          <View style={{flex: 1}}>
            <Text style={{...FONTS.body3}}>{streetName}</Text>
          </View>
          <Text style={{...FONTS.body3}}>{Math.ceil(duration)} mins</Text>
        </View>
      </View>
    );
  }

  function renderDeliveryInfo() {
    return (
      <View style={orderStyles.infoContainer}>
        <View style={orderStyles.subCont}>
          <View style={orderStyles.avatarContainer}>
            {/* Avatar */}
            <Image
              source={restaurant?.courier.avatar}
              style={orderStyles.image1}
            />

            <View style={orderStyles.nameRatingContainer}>
              {/* Name & Rating */}
              <View style={orderStyles.imageContainer}>
                <Text style={{...FONTS.h4}}>{restaurant?.courier.name}</Text>
                <View style={orderStyles.imageWrapper}>
                  <Image source={icons.star} style={orderStyles.image} />
                  <Text style={{...FONTS.body3}}>{restaurant?.rating}</Text>
                </View>
              </View>

              {/* Restaurant */}
              <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>
                {restaurant?.name}
              </Text>
            </View>
          </View>

          {/* Buttons */}
          <View>
            <TouchableOpacity
              style={orderStyles.homeBtn}
              onPress={() => navigation.navigate('Home')}>
              <Text style={{...FONTS.h4, color: COLORS.white}}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={orderStyles.goBack}
              onPress={() => navigation.goBack()}>
              <Text style={{...FONTS.h4, color: COLORS.white}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={orderStyles.container}>
      {renderMap()}
      {renderDestinationHeader()}
      {renderDeliveryInfo()}
    </View>
  );
};

export default OrderDelivery;
