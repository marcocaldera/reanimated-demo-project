```

adb install apk/reanimated.apk
flashlight test --bundleId com.performancebenchmark --resultsFilePath reanimated.json --duration 15000 --iterationCount 10 --testCommand "adb shell monkey -p com.performancebenchmark 1"

adb install apk/reanimated-json.apk
flashlight test --bundleId com.performancebenchmark --resultsFilePath reanimated-json.json --duration 15000 --iterationCount 10 --testCommand "adb shell monkey -p com.performancebenchmark 1"

adb install apk/skia.apk
flashlight test --bundleId com.performancebenchmark --resultsFilePath skia.json --duration 15000 --iterationCount 10 --testCommand "adb shell monkey -p com.performancebenchmark 1"

# Move the .json results indei a folder called results and:
flashlight report results
```

## apk/skia.apk

Use skia v0.1.196

## apk/reanimated-json.apk

Use Reanimated and convert the array to string (JSON.stringify)
and convert it back to array when needed (JSON.parse)

## apk/reanimated.apk

Use Reanimated and shared value is a classic array
