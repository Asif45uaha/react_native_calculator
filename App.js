
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: 'Addition', value: 'Addition' },
    { label: 'Subtraction', value: 'Subtraction' },
    { label: 'Multiplication', value: 'Multiplication' },
    { label: 'Division', value: 'Division' }
  ]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2)
    if (value === "Addition") {
      setResult(num1 + num2);
    }
    else if (value === "Subtraction") {
      setResult(num1 - num2);
    }
    else if (value === "Multiplication") {
      setResult(num1 * num2);
    }
    else if (value === "Division") {
      setResult((num1 / num2).toFixed(2));
    }
    else {
      setResult("")
    }
  }

  const handleReset = () => {
    setResult("")
    setInput1("")
    setInput2("")

  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "500", color: "blue" }}>React Native Arithmetic Calculator App</Text>
      <View style={{ width: "100%", padding: 10 }}>
        <TextInput
          value={input1}
          onChangeText={(text) => setInput1(text)}
          placeholder='Enter ist value'
          placeholderTextColor={"gray"}
          style={{ borderWidth: 2, fontSize: 15, width: "100%", borderRadius: 15, padding: 10 }} />
      </View>
      <View style={{ width: "100%", padding: 10 }}>
        <TextInput
          value={input2}
          onChangeText={(text) => setInput2(text)}
          placeholder='Enter second value'
          placeholderTextColor={"gray"}
          style={{ borderWidth: 2, fontSize: 15, width: "100%", borderRadius: 15, padding: 10 }} />
      </View>
      <View style={{ width: "100%", padding: 10 }}>
        <DropDownPicker
          translation={{
            PLACEHOLDER: "select operation",
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>

      {
        result ? <Text style={{ fontSize: 25, fontWeight: "500" }}>{`${value} of ${input1} and ${input2} is ${result}`}</Text>
          : ""
      }

      <View style={{ width: "100%", display: "flex", flexDirection: "row", gap: 10, justifyContent: "center", paddingVertical: 20, paddingHorizontal: 10, borderRadius: 20 }}>
        <Pressable style={{ width: "50%", }}>
          <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "500", padding: 10, borderRadius: 15, color: "white", backgroundColor: "blue" }} onPress={handleCalculate}>Calculate</Text>
        </Pressable>
        <Pressable style={{ width: "50%", }}>
          <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center", padding: 10, borderRadius: 15, color: "white", backgroundColor: "blue" }} onPress={handleReset}>reset</Text>
        </Pressable>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
});
