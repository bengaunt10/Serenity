import React from 'react';
import { ScrollView, Text, StyleSheet, Linking } from 'react-native';

const TipsArticle = () => {
  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>8 tips for healthy eating</Text>
      <Text style={styles.paragraph}>These 8 practical tips cover the basics of healthy eating and can help you make healthier choices.</Text>
      
      {/* Repeated structure for each paragraph or section */}
      {/* Each <p> becomes <Text style={styles.paragraph}> */}
      {/* Each <h1>, <h2>, <h3> etc. becomes <Text style={styles.header}> or <Text style={styles.subheader}> depending on the level */}
      {/* Each <a href="url"> becomes <Text style={styles.link} onPress={() => openURL('url')}> */}
      {/* Each <ul><li> becomes multiple <Text style={styles.listItem}> */}
      
      <Text style={styles.paragraph}>
        The key to a healthy diet is to eat the right amount of calories for how active you are so you balance the energy you consume with the energy you use.
      </Text>
      {/* Example for a link */}
      <Text style={styles.link} onPress={() => openURL('https://www.nhs.uk/live-well/eat-well/food-types/starchy-foods-and-carbohydrates/')}>
        Starchy carbohydrates
      </Text>
      {/* Example for a list */}
      <Text style={styles.listItem}>Choose higher fibre or wholegrain varieties, such as wholewheat pasta, brown rice or potatoes with their skins on.</Text>
      {/* Continue converting the article content */}
      
      {/* Closing part of the article */}
      <Text style={styles.subheader}>Sugar</Text>
      <Text style={styles.paragraph}>
        Regularly consuming foods and drinks high in sugar increases your risk of obesity and tooth decay.
      </Text>
      {/* Closing link example */}
      <Text style={styles.link} onPress={() => openURL('https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/how-to-cut-down-on-sugar-in-your-diet/')}>
        Find out how to cut down on sugar in your diet
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 8,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 8,
  }
});

export default TipsArticle;