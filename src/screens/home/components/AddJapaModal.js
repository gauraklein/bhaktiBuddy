import React from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { homeStyles } from "../homeStylesheet";
import { useSelector, useDispatch} from "react-redux"
import { globalStyles } from "../../../globalStylesheet";

const AddJapaModal = () => {
    
    const { roundCount, japaModalVisible } = useSelector(state => state.japa)
    const dispatch = useDispatch()

    return (
        <View style={homeStyles.japaModalContainer}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={japaModalVisible}
            style={homeStyles.japaModalContainer}
            >

            <View style={homeStyles.japaModal}>
                <Text style={homeStyles.modalText}>
                    How many rounds have you completed today?
                </Text>

                <View style={homeStyles.numericInputContainer}>
                <TextInput  
                    placeholder="16.."  
                    style={homeStyles.numericInput}  
                    keyboardType={'numeric'}
                />  
                </View>

                <View style={homeStyles.japaModalButtons}>                    
                    <TouchableOpacity style={globalStyles.buttonStyle}>
                        <Text style={globalStyles.buttonText}>
                            Submit
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={globalStyles.buttonStyle}
                    onPress={() => dispatch({type: "HIDE_JAPA_MODAL"})}
                    >
                        <Text style={globalStyles.buttonText}>
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Modal>
      </View>
    )
}

export default AddJapaModal;