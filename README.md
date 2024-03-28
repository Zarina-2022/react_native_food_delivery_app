It is a mobile application developed using React Native for food delivery. Here's a general overview:

1. **Features**:

   - The application likely allows users to browse nearby restaurants, view their menus, and place orders for delivery.
   - Users may be able to create accounts, sign in, and manage their profiles, including saving delivery addresses and payment methods.
   - It may include features such as order tracking, real-time updates on order status, and notifications.

2. **Components**:

   - The project contains several components such as `Home`, `OrderDelivery`, and `Restaurant`, suggesting that it encompasses different screens or views within the app.
   - Each component likely corresponds to a specific part of the user interface, such as the home screen, order details screen, and restaurant details screen.

3. **Navigation**:

   - React Navigation is used for navigation between different screens/components within the application.
   - Navigation logic is implemented in `App.jsx`, which serves as the entry point of the application.

4. **Styling**:

   - The project includes style sheets (`style.js`) for defining the visual appearance of various components.
   - Styles are likely applied using inline styles or by referencing style objects defined in these style sheets.

5. **Assets**:

   - Image assets are provided in the `assets` directory, which likely includes icons, restaurant images, and other graphical elements used throughout the app.
   - Constants such as colors, fonts, and other design-related variables are defined in `constants.js`.

6. **Configuration**:

   - Configuration files such as `babel.config.js` and `metro.config.js` are present to configure the development environment and build process.
   - The `package.json` file lists all dependencies required for the project, including React Native, React Navigation, and any other third-party libraries.

7. **Platform-specific code**:
   - The project includes directories for Android and iOS, containing platform-specific configuration files and native code.
   - Native code written in Java/Kotlin (for Android) and Objective-C/Swift (for iOS) is used to integrate React Native with the respective platforms and access native device features.

8. **Dependencies**:

- @react-navigation/bottom-tabs: Version ^6.5.20
- @react-navigation/native: Version ^6.1.17
- @react-navigation/stack: Version ^6.3.29
- react: Version 18.2.0
- react-native: Version 0.73.6
- react-native-gesture-handler: Version ^2.15.0
- react-native-iphone-x-helper: Version ^1.3.1
- react-native-maps: Version ^1.11.3
- react-native-maps-directions: Version ^1.9.0
- react-native-reanimated: Version ^3.8.1
- react-native-safe-area-context: Version ^4.9.0
- react-native-screens: Version ^3.30.1
- react-native-svg: Version ^15.1.0

Overall, the project is structured to develop a cross-platform mobile application for food delivery, leveraging React Native to provide a native-like user experience on both Android and iOS devices.

# Screen gif:

![]()
