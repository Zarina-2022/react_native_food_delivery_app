import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const homeStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  imageWrapper: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  streetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  streetWrapper: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  basketWrapper: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
  image2: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius,
  },
  restaurant: {
    marginTop: SIZES.padding,
    flexDirection: 'row',
  },
  container1: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  categoryDirection: {
    flexDirection: 'row',
  },
  image1: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary,
    marginRight: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
