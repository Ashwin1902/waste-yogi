import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

import RNPickerSelect from 'react-native-picker-select';

const Request = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [otherOption, setOtherOption] = useState<string>('');
  const [showOtherInput, setShowOtherInput] = useState<boolean>(false);

  // Handle image picking from the library
  const handleImagePick = async () => {
    try {
      const result: ImagePickerResponse = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1, // Allow selecting one image
      });

      if (result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri ?? null); // Set the image URI
      } else {
        Alert.alert('No image selected.');
      }
    } catch (error: any) {
      Alert.alert('Error picking image:', error.message);
    }
  };

  // Handle taking a photo using the camera
  const handleCameraLaunch = async () => {
    try {
      const result: ImagePickerResponse = await launchCamera({
        mediaType: 'photo',
      });

      if (result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri ?? null); // Set the image URI
      } else {
        Alert.alert('No photo taken.');
      }
    } catch (error: any) {
      Alert.alert('Error launching camera:', error.message);
    }
  };

  // Handle dropdown option change
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setShowOtherInput(value === 'other');
  };

  // Handle form submission
  const handleSubmit = () => {
    const chosenOption = selectedOption === 'other' ? otherOption : selectedOption;
    console.log('Selected Option:', chosenOption);

    Alert.alert('Request submitted successfully!', `Option: ${chosenOption}`);
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f3f4f6' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' }}>Submit a Request</Text>

      {/* Image Upload/Click */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#555' }}>Upload or Take a Photo</Text>
        
        <TouchableOpacity style={{ backgroundColor: '#007bff', padding: 15, borderRadius: 8, marginBottom: 10 }} onPress={handleImagePick}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Pick a Photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ backgroundColor: '#28a745', padding: 15, borderRadius: 8, marginBottom: 10 }} onPress={handleCameraLaunch}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Take a Photo</Text>
        </TouchableOpacity>
        
        {/* Display the selected or taken image */}
        {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200, borderRadius: 8 }} />}
      </View>

      {/* Dropdown with "Other" option */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#555' }}>Select an Option</Text>
        
        <RNPickerSelect
          onValueChange={handleOptionChange}
          items={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Other', value: 'other' },
          ]}
          style={{
            inputAndroid: {
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#ccc',
              color: '#333',
            },
            inputIOS: {
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#ccc',
              color: '#333',
            },
          }}
        />

        {/* Show input if "Other" is selected */}
        {showOtherInput && (
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginTop: 10 }}
            placeholder="Please specify..."
            value={otherOption}
            onChangeText={(value) => setOtherOption(value)}
          />
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={{ backgroundColor: '#007bff', padding: 15, borderRadius: 8 }} onPress={handleSubmit}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Submit Request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Request;
