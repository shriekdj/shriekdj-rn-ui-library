import { Text, SafeAreaView, View, useColorScheme } from 'react-native';

// or any files within the Snack
import TextInputBox from './components/TextInputBox';
import Card from './components/Card';
import Button from './components/Button';
import AccordionItem from './components/AccordionItem';
import Chip, { ChipsView } from './components/Chip';
import ProgressBar from './components/ProgressBar';

export default function App() {
  const colorScheme = useColorScheme()
  const textColor = colorScheme === 'dark' ? 'white' : 'black';
  return (
    <SafeAreaView style={{
      width: '100%'
    }}>
      <View style={{
        // width: '100%',
        margin: 5,
        padding: 2
      }}>
        {/* <Switch value={isEnabled == 'light'} onValueChange={toggleSwitch} /> */}
        <TextInputBox placeholder='TextTextInputBox' />
        <Card style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 24, margin: 5, color: textColor }}>React Native Card Example</Text>
          <Text style={{ margin: 5, color: textColor }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, ad illum rerum repellat sed recusandae labore dolorum. Dolorem, laboriosam ducimus quaerat quasi obcaecati vitae ad ab nulla temporibus suscipit excepturi?</Text>

        </Card>
        <Button style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </Button>

        <Card style={{ marginVertical: 5 }}>
          <AccordionItem headerTitle="AcccordionItem Under Card">
            <Text style={{ fontSize: 16 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, eveniet distinctio nulla, hic vel atque natus itaque ex earum esse, laboriosam neque eaque alias vitae totam aperiam? Perspiciatis, accusantium dolores?
            </Text>
          </AccordionItem>
        </Card>
        <ChipsView>
          <Chip>Tag 1</Chip>
          <Chip>Tag 2</Chip>
          <Chip>Tag 3</Chip>
        </ChipsView>

        <ProgressBar barColor='blue' percentage={32} />
      </View>
    </SafeAreaView>
  );
}
