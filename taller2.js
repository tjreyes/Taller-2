import React from "react";
import { Image, View, Text, StyleSheet} from "react-native";

const Animals = () => {
    
    const data = {
        name: "Fennec Fox",
        latin_name: "Vulpes zerda",
        animal_type: "Mammal",
        active_time: "Nocturnal",
        length_min: "9.5",
        length_max: "16",
        weight_min: "2.3",
        weight_max: "3.3",
        lifespan: "11",
        habitat: "Desert",
        diet: "Fruit, seeds, eggs, termites, and lizards",
        geo_range: "Northern Africa and western Asia",
        image_link: "http://placeimg.com/640/480/people",
        id: 70,

};  

return (
    <View >
        <Text style={styles.baseText}> Name: {data.name}</Text>
        <Text style={styles.baseText}> Latin Name: {data.latin_name}</Text>
        <Text style={styles.baseText}> Tiempo Activo: {data.active_time}</Text>
        <Text style={styles.baseText}> Longitud Min: {data.length_min}</Text>
        <Text style={styles.baseText}> Longitud Max: {data.length_max}</Text>
        <Text style={styles.baseText}> Altura Max: {data.weight_max}</Text>
        <Text style={styles.baseText}> Altura Min: {data.weight_min}</Text>
        <Text style={styles.baseText}> Ciclo de Vida: {data.lifespan}</Text>
        <Text style={styles.baseText}> Habitat: {data.habitat}</Text>
        <Text style={styles.baseText}> Dieta: {data.diet}</Text>
        <Text style={styles.baseText}> Region: {data.geo_range}</Text>
        <Image source={{ uri:data.image_link}} style = {{width: 400, height: 400}}/>
    

    </View>
)
};

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
    },
    innerText: {
      color: 'peru'
    }
  });
 
export default Animals;