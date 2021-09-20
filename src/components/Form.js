import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const initialTask = {
  name: '',
  area: '',
  priority: '',
  date: new Date().toLocaleDateString({
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }),
  time: new Date().toLocaleTimeString(),
  description: '',
};

const evaluateCompleteTask = task => {
  for (let key in task) {
    if (key !== 'date' || key !== 'time') {
      if (task[key].trim('') === '') {
        return false;
      }
    }
  }
  return true;
};

const Form = ({addTask}) => {
  // Form functions
  const [formData, setFormData] = useState(initialTask);

  const handleChangeInput = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    const taskCompleted = evaluateCompleteTask(formData);
    if (taskCompleted) {
      addTask(formData);
      setFormData(initialTask);
    } else {
      Alert.alert('', 'Please complete all fields to add task');
    }
  };

  // DataTimePicker functions
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    const options = {year: 'numeric', month: 'long', day: '2-digit'};
    const formatedDate = date.toLocaleDateString(options);
    setNewDate(formatedDate);
    setFormData({...formData, date: formatedDate});
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    const options = {hour: 'numeric', minute: '2-digit'};
    const formatedTime = time.toLocaleTimeString(options);
    setNewTime(formatedTime);
    setFormData({...formData, time: formatedTime});
    hideTimePicker();
  };

  return (
    <ScrollView style={styles.form}>
      {/* Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChangeText={value => handleChangeInput('name', value)}
        />
      </View>

      {/* Area */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Area:</Text>
        <TextInput
          style={styles.input}
          placeholder="Area"
          value={formData.area}
          onChangeText={value => handleChangeInput('area', value)}
        />
      </View>

      {/* Priority */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Priority:</Text>
        <TextInput
          style={styles.input}
          placeholder="Priority"
          value={formData.priority}
          onChangeText={value => handleChangeInput('priority', value)}
        />
      </View>

      {/* DateAndTimePicker */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date and Time:</Text>

        <Button title="Select Date" onPress={showDatePicker} />
        <View style={styles.separator}></View>
        <Button title="Select Time" onPress={showTimePicker} />

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />

        <Text>Date selected: {newDate}</Text>
        <Text>Time selected: {newTime}</Text>
      </View>

      {/* Description */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Description"
          value={formData.description}
          onChangeText={value => handleChangeInput('description', value)}
        />
      </View>

      {/* Submit Button */}
      <TouchableHighlight onPress={handleSubmit} style={styles.btnSubmit}>
        <Text style={styles.txtBtn}>SAVE TASK</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 0.2,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    color: '#000',
    backgroundColor: '#FFF',
    height: 40,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputGroup: {
    marginVertical: 10,
  },
  separator: {
    marginBottom: 5,
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#0f7bd4',
    marginVertical: 10,
  },
  txtBtn: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
