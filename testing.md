flashlight test --bundleId com.performancebenchmark --resultsFilePath reanimated.json --duration 15000 --iterationCount 10 --testCommand "adb shell monkey -p com.performancebenchmark 1"

flashlight test --bundleId com.performancebenchmark --resultsFilePath reanimated-json.json --duration 15000 --iterationCount 10 --testCommand "adb shell monkey -p com.performancebenchmark 1"

flashlight test --bundleId com.performancebenchmark --resultsFilePath skia.json --duration 15000 --iterationCount 10 --testCommand "adb shell monkey -p com.performancebenchmark 1"

flashlight report results

## skia.apk

Use skia v0.1.196

## reanimated-json.apk

Use Reanimated and convert the array to string (JSON.stringify)
and convert it back to array when needed (JSON.parse)

## reanimated.apk

Use Reanimated and shared value is a classic array
