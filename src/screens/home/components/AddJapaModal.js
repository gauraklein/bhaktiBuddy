import React from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { homeStyles } from "../homeStylesheet";
import { useSelector, useDispatch} from "react-redux"
import { globalStyles } from "../../../globalStylesheet";

const AddJapaModal = () => {
    
    const { roundCount, japaModalVisible, japaModalValue } = useSelector(state => state.japa)
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
                    value={japaModalValue}
                    style={homeStyles.numericInput}  
                    keyboardType={'numeric'}
                    id="japaModalValue"
                    onChange={(e) => {
                        dispatch({ type: "UPDATE_JAPA_MODAL_VALUE", payload: japaModalValue })
                    }}
                />  
                </View>

                <View style={homeStyles.japaModalButtons}>                    
                    <TouchableOpacity style={globalStyles.buttonStyle}
                    onPress={() => dispatch({ type: "ADD_ROUND_MANUALLY", payload: 2})}>
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