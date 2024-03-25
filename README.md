### How to run the app

```
yarn install
cd ios &&& bundle exec pod install
yarn react-native run-ios --simulator="iPhone 15 Pro"
```

For building an android release:

```
yarn react-native run-android --mode=release
```

### Performance

- Inside `test-X/report` you can find the flashlight report of the different APKs.
- The testing methodology is explained inside `test-X/testing.md`
- The already made APKs can be found inside `test-X/apk`

#### Test 1 - Flashlight Report for Samsung A51

```
"@shopify/react-native-skia": "0.1.196",
"react-native-reanimated": "3.6.1",
```

![Screenshot 2024-03-11 at 18 52 05](https://github.com/marcocaldera/reanimated-demo-project/assets/93535783/90e3d470-6604-440b-bfb7-fdc3199af01d)

##### Demo

https://github.com/marcocaldera/reanimated-demo-project/assets/93535783/dbdd1c18-46d8-4d00-8a1b-cbcbef26f911

#### Test 2 - Flashlight Report for Samsung A51

```
"@shopify/react-native-skia": "0.1.196",
"react-native-reanimated": "3.8.1",
```

<img width="1445" alt="Screenshot 2024-03-25 at 14 06 13" src="https://github.com/marcocaldera/reanimated-demo-project/assets/93535783/f932f28a-a4f9-41eb-a934-89418a3ff9f3">

##### Demo

https://github.com/marcocaldera/reanimated-demo-project/assets/93535783/63abafc1-79b6-487b-9cbc-84aa1c6667a7


