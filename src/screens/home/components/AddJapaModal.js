import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { homeStyles } from "../homeStylesheet";
import { useSelector, useDispatch} from "react-redux"
import { globalStyles } from "../../../globalStylesheet";
import NumericInput from 'react-native-numeric-input'

const AddJapaModal = () => {
    
    const { japaModalVisible } = useSelector(state => state.home)
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

                <View style={homeStyles.numericInput}>
                    {/* <NumericInput /> */}
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