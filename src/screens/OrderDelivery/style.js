import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const orderStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Render Destination Header
  mapCont1: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapSubCont1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  pinIcon: {
    width: 30,
    height: 30,
    marginRight: SIZES.padding,
  },
  // Render Delivery Info
  btn: {
    position: 'absolute',
    bottom: SIZES.height * 0.35,
    right: SIZES.padding * 2,
    width: 60,
    height: 130,
    justifyContent: 'space-between',
  },
  goBack: {
    flex: 1,
    height: 40,
    backgroundColor: COLORS.darkgray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  homeBtn: {
    flex: 1,
    height: 40,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  btnWrapper: {
    flexDirection: 'row',
    marginTop: SIZES.padding * 2,
    justifyContent: 'space-between',
  },
  image: {
    width: 18,
    height: 18,
    tintColor: COLORS.primary,
    marginRight: SIZES.padding,
  },
  imageWrapper: {
    flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameRatingContainer: {
    flex: 1,
    marginLeft: SIZES.padding,
  },
  image1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCont: {
    width: SIZES.width * 1,
    paddingVertical: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 1,
    borderRadius: SIZES.radius,
  },
});
