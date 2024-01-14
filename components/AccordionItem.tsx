import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
  Button,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// type AccordionItemPros = PropsWithChildren<{
//   title: string;
// }>;
interface AccordionItemProps extends React.JSX.IntrinsicAttributes, React.JSX.IntrinsicClassAttributes<View>, Readonly<ViewProps> {
  headerTitle: string;
  headerStyles?: StyleProp<ViewStyle>;
  headerTitleStyles?: StyleProp<TextStyle>;
  headerIconStyles?: StyleProp<TextStyle>;
  headerIcon1?: React.ReactNode | string;
  headerIcon2?: React.ReactNode | string;
  contentStyles?: StyleProp<TextStyle>;
}


function AccordionItem({ headerTitle, children, style, headerStyles, headerTitleStyles, headerIconStyles, headerIcon1, headerIcon2, contentStyles, ...containerProps }: AccordionItemProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  return (
    <View style={[styles.accordContainer, style]} {...containerProps}>
      <TouchableOpacity style={[styles.accordHeader, headerStyles]} onPress={toggleItem}>
        <Text style={[styles.accordTitle, headerTitleStyles]}>{headerTitle}</Text>
        {/* <Icon name={ expanded ? 'chevron-up' : 'chevron-down' }
              size={20} color="#bbb" /> */}
        <Text style={[{ fontSize: 20 }, headerIconStyles]}>{expanded ? (headerIcon1 || '▲') : (headerIcon2 || '▼')}</Text>
      </TouchableOpacity>
      {expanded && <View style={[styles.accordBody, contentStyles]}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  accordBody: {
    paddingHorizontal: 12
  },
  accordContainer: {
    paddingBottom: 4
  },
  accordHeader: {
    paddingHorizontal: 12,
    // backgroundColor: '#666',
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  accordTitle: {
    fontSize: 20
  }
})

export default AccordionItem;