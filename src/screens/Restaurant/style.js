import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const restaurantStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },

  // Render Header
  header: {
    flexDirection: 'row',
  },
  headerSubCont: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  headerImage: {
    width: 30,
    height: 30,
  },

  //  Restaurant Name Section

  nameSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subNameSection: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 3,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray3,
  },
  listImage: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
  list: {
    width: 30,
    height: 30,
  },

  // Render Food Info
  itemPhoto: {
    width: SIZES.width,
    height: '100%',
  },

  // Quantity
  quantityCont: {
    position: 'absolute',
    bottom: -20,
    width: SIZES.width,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  subQuantityCont: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  textCont1: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCont2: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },

  // Name & Description
  descCont: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: SIZES.padding * 2,
  },

  // Calories
  caloriesCont: {
    flexDirection: 'row',
    marginTop: 10,
  },
  caloryIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  // Render Dots
  dotsCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.padding,
  },

  // Render Order
  orderCont: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  subOrderCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 1,
  },
  orderImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
  },
  imagePin: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
  },
  masterCard: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
  },

  // Order Butoon

  btnCont: {
    padding: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subBtnCont: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
  iphoneX: {
    position: 'absolute',
    bottom: -34,
    left: 0,
    right: 0,
    height: 34,
    backgroundColor: COLORS.white,
  },
});
