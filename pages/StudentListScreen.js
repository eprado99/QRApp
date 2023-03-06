import React, {useState, useEffect} from 'react';

import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';

const students = [{'id': 1, 'name': 'Juan'}, {'id': 2, 'name': 'Roberto'}, {'id': 3, 'name': 'Andrea'}]

const StudentListScreen = ({ navigation }) => {

    const [studentList, setStudentList] = useState(null);
  
    useEffect(() => {
        const getStudentList = () => {
            setStudentList(students)
        }
        getStudentList();
    }, [])
    
    const onClickRow = (item) => {
        navigation.navigate('StudentQRCodeScreen', {
            id: item.id,
            name: item.name,
        });
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList 
                data={studentList}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={(item) => onClickRow(item)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableWithoutFeedback>
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
    },
    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    }
});

export default StudentListScreen;
  
  
  
  