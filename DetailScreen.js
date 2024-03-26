import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const DetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const [itemDetails, setItemDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItemDetails();
  }, []);

  const fetchItemDetails = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
      setItemDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching item details:', error);
      setError('Error fetching item details');
      setLoading(false);
    }
  };

  const getBackgroundColor = () => {
    
    const hue = (parseInt(itemId) * 137) % 360;
    return `hsl(${hue}, 70%, 90%)`; 
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <View>
          <Text style={styles.detailText}>ID: {itemDetails.id}</Text>
          <Text style={styles.detailText}>Title: {itemDetails.title}</Text>
          <Text style={styles.detailText}>Body: {itemDetails.body}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetailScreen;
