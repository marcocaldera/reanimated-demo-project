import React from 'react';
import { Canvas, Skia, Text } from '@shopify/react-native-skia';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { useReanimatedBufferGenerateHighLoad } from './hooks/useReanimatedBufferGenerateHighLoad';

const elementsNeeded = [...Array(20)];

export const ReanimatedBuffer = () => {
  const { bigArray } = useReanimatedBufferGenerateHighLoad();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        {elementsNeeded.map((_, index) => (
          <TextItem key={index} index={index} bigArray={bigArray} />
        ))}
      </Canvas>
    </SafeAreaView>
  );
};

const TextItem = ({
  index,
  bigArray,
}: {
  index: number;
  bigArray: SharedValue<ArrayBuffer>;
}) => {
  const text = useDerivedValue(() => {
    if (!_WORKLET) {
      return '';
    }

    const floats = new Float64Array(bigArray.value);
    return floats[index].toString();
  }, [bigArray, index]);

  return <Text x={0} y={(index + 1) * 20} font={Skia.Font()} text={text} />;
};
